import React, { Component } from 'react';
// 引入的是容器组件了，它是父组件。
import Count from './containers/Count'  // 引入的Count的容器组件
// import store from './redux/store';
import Person from './containers/Person'  // 引入的Person的容器组件

class App extends Component {
  render() {
    return (
      <div>
        {/* 容器中的store需要App组件传入才能使用 */}
        {/* 给容器组件传递store */}
        {/* <Count store={store}/> */}
        <Count />
        <hr />
        <Person />
      </div>
    );
  }
}

export default App;