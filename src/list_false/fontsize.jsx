/**
 * 一个将 items 往下推到正确位置的空元素
 */
 import { useState } from 'react';
//  flushSync——可以退出批处理，接受一个函数作为参数，并且允许返回值,flushsync内部会以函数为作用域，函数内部的多个setState仍然为批量更新
// function handleClick() {
//   flushSync(() => {
//     setCount(3);
//   });
//  // 会在 setCount 并 render 之后再执行 setFlag
//   setFlag(true);
// }
 import { flushSync } from 'react-dom';
 
 function FixedSizeList({ containerHeight, itemHeight, itemCount, children }) {
   // children 语义不好，赋值给 Component
   const Component = children;
 
   const contentHeight = itemHeight * itemCount; // 内容高度
   const [scrollTop, setScrollTop] = useState(0); // 滚动高度
 
   // 继续需要渲染的 item 索引有哪些
   let startIdx = Math.floor(scrollTop / itemHeight);
   let endIdx = Math.floor((scrollTop + containerHeight) / itemHeight);
 
   // 上下额外多渲染几个 item，解决滚动时来不及加载元素出现短暂的空白区域的问题
   const paddingCount = 2;
   startIdx = Math.max(startIdx - paddingCount, 0); // 处理越界情况
   endIdx = Math.min(endIdx + paddingCount, itemCount - 1);
 
   const top = itemHeight * startIdx; // 第一个渲染 item 到顶部距离
 
   // 需要渲染的 items
   const items = [];
   for (let i = startIdx; i <= endIdx; i++) {
     items.push(<Component key={i} index={i} style={{ height: itemHeight }} />);
   }
 
   return (
     <div
       style={{ height: containerHeight, overflow: 'auto' }}
       onScroll={(e) => {
         // 处理渲染异步导致的白屏现象
         // 改为同步更新，但可能会有性能问题，可以做 节流 + RAF 优化
         flushSync(() => {
           setScrollTop(e.target.scrollTop);
         });
       }}
     >
       <div style={{ height: contentHeight }}>
         {/* 一个将 items 往下推到正确位置的空元素 */}
         <div style={{ height: top }}></div>
         {items}
       </div>
     </div>
   );
 }
 
 export default FixedSizeList;
 