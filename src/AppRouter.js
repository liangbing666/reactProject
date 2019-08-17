import React from "react"
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom"
import Index from './Pages/Index'
import Task from './Pages/Task'
import Report from './Pages/Report'
import './index.css'
import image_1 from './images/1.jpg'


function AppRouter() {
  let routeConfig = [
    { path: '/', title: '首页', exact: true, component: Index },
    { path: '/task/', title: '任务管理', exact: false, component: Task },
    { path: '/report/', title: '报告管理', exact: false, component: Report }
  ]


  

  return (
    <Router>
      <Redirect to="/" />
      <div className="mainDiv">
        <div className="leftNav">
          <div className="leftNav_top">
            <img src={image_1} alt="" />
            <h5>标题名称</h5>
          </div>
          <ul>
            {
              routeConfig.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.path}>{item.title}</Link>
                  </li>)
              })
            }
          </ul>
        </div>

        <div className="rightMain">
          {
            routeConfig.map((item, index) => {
              return (<Route key={index} exact={item.exact} path={item.path} component={item.component} />)
            })
          }
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;