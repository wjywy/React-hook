// useImperativeHandle必须配合forwordRef使用
// 直接的ref转发的例子：
// import React, { useCallback, useRef } from 'react';
// import ReactDOM from 'react-dom';
// const FancyButton = React.forwardRef((props, ref) => (
//   <div>
//     <input ref={ref} type="text" />
//     <button>{props.children}</button>
//   </div>
// ));
// function App() {
//   const ref = useRef();
//   const handleClick = useCallback(() => ref.current.focus(), [ ref ]);
//   return (
//     <div>
//       <FancyButton ref={ref}>Click Me</FancyButton>
//       <button onClick={handleClick}>获取焦点</button>
//     </div>
//   )
// }


// useImperativeHandle与直接转发ref不同的是：直接转发Ref是将React.forword函数上的ref参数直接应用在了
// 返回元素的ref属性上，其实子父组件使用的是同一个ref的current对象。
// 而使用useImperativeHandle后，可以让子父组件拥有自己的ref，通过React.forword将父元素的ref透传过来
// 通过useImperativeHandle方法来自定义开放给父组件的current
import React, {
    useState,
    useRef,
    useImperativeHandle,
    useCallback    //性能优化，避免重复渲染不必要的组件
  } from 'react';
  
// React.forward返回一个组件，参数为函数，函数的第一个参数为父组件传递的props，第二个参数为父组件传递的ref
// 目的是希望可以在封装组件时，外层组件可以通过ref直接控制内层组件或元素的行为
  const FancyInput = React.forwardRef((props, ref) => {
    const [ fresh, setFresh ] = useState(false)
    const attRef = useRef(0);
    // useImperativeHandle的第一个参数是定义current对象的ref，第二个参数是一个函数，返回值是一个对象，
    // 即这个ref的current对象
    useImperativeHandle(ref, () => ({
      attRef,
      fresh
    }), [ fresh ]);
  
    const handleClick = useCallback(() => {
      attRef.current++;
    }, []);
  
    return (
      <div>
        {attRef.current}
        <button onClick={handleClick}>Fancy</button>
        <button onClick={() => setFresh(!fresh)}>刷新</button>
      </div>
    )
  });
  
  const App = props => {
    const fancyInputRef = useRef();
    return (
      <div>
        <FancyInput ref={fancyInputRef} />
        <button
          onClick={() => console.log(fancyInputRef.current)}
        >父组件访问子组件的实例属性</button>
      </div>
    )
  }
  export default App
  

  