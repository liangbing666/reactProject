import React from 'react'
import { Route, Link, Redirect} from "react-router-dom"
import Listone from './report/Listone'
import Listtwo from './report/Listtwo'
import Listthree from './report/Listthree'

import './Task.css'

function Report() {
    return (
        <div>
            <Redirect to="/report/Listone" />
            <div className="topNav">
                <ul>
                    <li><Link to="/report/Listone">报告处理</Link></li>
                    <li><Link to="/report/Listtwo">整整整</Link></li>
                    <li><Link to="/report/Listthree">报告列表</Link></li>
                </ul>
            </div>
            <div className="taskContent">
                <Route path="/report/Listone/" component={Listone} />
                <Route path="/report/Listtwo/" component={Listtwo} />
                <Route path="/report/Listthree/" component={Listthree} />
            </div>
        </div>
    )
}

export default Report;