import React from 'react'
import { Route, Link,Redirect } from "react-router-dom"
import Listone from './task/Listone'
import Listtwo from './task/Listtwo'
import Listthree from './task/Listthree'
import './Task.css'

function Video() {
    return (
        <div>
            <Redirect to="/task/Listone" />
            <div className="topNav">
                <ul>
                    <li><Link to="/task/Listone">TaskOne</Link></li>
                    <li><Link to="/task/Listtwo">TaskTwo</Link></li>
                    <li><Link to="/task/Listthree">TaskThree</Link></li>
                </ul>
                <h5>Task/</h5>
            </div>
            <div className="taskContent">
                <Route path="/task/Listone/" component={Listone} />
                <Route path="/task/Listtwo/" component={Listtwo} />
                <Route path="/task/Listthree/" component={Listthree} />
            </div>
        </div>
    )
}

export default Video;