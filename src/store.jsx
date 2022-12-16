import { configureStore } from "@reduxjs/toolkit";
import pageReducer from './pages/slice'

export default configureStore ({
    reducer: {
        couter:pageReducer    //该死  问题竟出在这里
    }
})

// redux-toolkit配置
    // 1.需要在store.jsx里面导入configureStore，然后再导入所创建的slice文件，然后创建store,reducer函数的名称是自己配置的
   // 2.首先，在index入口处，需要导入Provider和store，并包裹起来
  // 3.然后，创建一个slice文件，并导入createSlice，需要配置三项，一是name；二是initialState;三是reducers。总的reducer需要导出，每个下面的reducer方法也需要导出
 // 4.使用：
          // 1.导出一系列reducer函数
         // 2.useSelector——获取state
        // 3.useDispatch——对相应state执行更新函数，即执行reducer函数    