import FixedSizeList from './fontsize';
// import './styles.css';

/**
 * 三种让 items 定位到正确位置的方案
 * 可自行切换，感受 style 的不同
 *
 * FixedSizeList：一个将 items 往下推到正确位置的空元素
 * FixedSizeList2：transform 方案
 * FixedSizeList3：绝对定位方案
 *
 */

function Item({ style, index }) {
  return (
    <div
      className="item"
      style={{
        ...style,
        backgroundColor: index % 2 === 0 ? 'burlywood' : 'cadetblue'
      }}
    >
      {index}
    </div>
  );
}

export default function App() {
  const list = new Array(10000).fill(0).map((item, i) => i);

  return (
    <>
      列表项高度固定 - 虚拟列表实现
      <FixedSizeList
        containerHeight={300}
        itemCount={list.length}
        itemHeight={50}
      >
        {Item}
      </FixedSizeList>
    </>
  );
}
