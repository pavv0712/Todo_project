import React from 'react'
import { Menu } from 'antd';
import { HeartOutlined, ScheduleOutlined } from '@ant-design/icons';
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom';


export default function TodoAntd() {
   
    const { SubMenu } = Menu;
   
    return(
        
        <>
        <BrowserRouter>
   
    <div id='menu'>
        <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"                       
        >
        

        <SubMenu
          key="sub1"
          title={
            <span>
              <HeartOutlined />
              <span>즐겨찾기</span>
            </span>
          }
        >
          <Menu.Item key="1" >그룹관리</Menu.Item>
          <Menu.Item key="2" >즐겨찾기</Menu.Item>
          
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <ScheduleOutlined />
              <span>할일</span>
            </span>
          }
          >
          <Menu.Item key="3">그룹관리</Menu.Item>
          <Menu.Item key="4">할일</Menu.Item>

        </SubMenu>
      
      </Menu>
    </div>

      </BrowserRouter>
     </>
    )
}