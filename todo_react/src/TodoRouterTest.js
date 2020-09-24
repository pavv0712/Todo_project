import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
  
export default function Test() {
    const { SubMenu } = Menu;
    
    return (
        
        <BrowserRouter>
        
        <div>
            Todo Project
        </div>
        <div>
            <Link to="/">Home</Link>
        </div>
        <Link to="/student">즐겨찾기</Link>
        <Link to="/student">할일</Link>

        <Route exact path="/" component={Home}/>
        <Route path ="/students"component={Students}/>
        </BrowserRouter>
        
    )
}


function Home() {
    return (
        <div>
            home
        </div>
    )
}

function Students() {
    return(
    <div>
        student
    </div>
    )
}