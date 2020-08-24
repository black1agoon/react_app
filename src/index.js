import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import Toggle from './App'
import Test1 from './test1'
import MotionView from './components/Motion'
import Test2 from './test2'
// import Test3 from './test3';
// import BlurExample from './test4';
// import E from './components/E.js';
// import F from './components/F.js';
import Demo9 from './demo/demo9'
import Demo10 from './demo/demo10'
import Test10 from './doc-test/test10'
import Deskmark from './demoproject/Deskmark'
ReactDOM.render(
  <React.StrictMode>
    {/*<Toggle />*/}
    {/*<Test1>*/}
    {/*</Test1>*/}
    {/*<Test2>*/}
    {/*</Test2>*/}
    {/*<MotionView>*/}
    {/*</MotionView>*/}
    {/*<p>demo9----------------</p>*/}
    {/*<Demo9>*/}
    {/*</Demo9>*/}
    {/*<p>demo10----------------</p>*/}
    {/*<Demo10>*/}
    {/*</Demo10>*/}
    {/*<Test2></Test2>*/}
    {/*<Test3></Test3>*/}
    {/*<BlurExample>*/}
    {/*</BlurExample>*/}
    {/*<E />*/}
    {/*<F />*/}
    {/*<p>test10---------状态提升----</p>*/}
    {/*<Test10>*/}
    {/*</Test10>*/}
    <Deskmark />
  </React.StrictMode>,
  document.getElementById('root')
)
serviceWorker.unregister()
