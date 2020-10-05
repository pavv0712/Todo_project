import React from 'react'
import { Menu, Button, Modal} from 'antd';
import { HeartOutlined, ScheduleOutlined, UserAddOutlined } from '@ant-design/icons';
import { BrowserRouter,Route, Link, Switch} from 'react-router-dom';

import Favorite from 'pages/Favorite';
import FavoriteGroup from 'pages/Favoritegroup';
import Todo from 'pages/Todo';
import TodoGroup from 'pages/Todogroup';

export default function TodoAntd() {
   
    const { SubMenu } = Menu;
    
    const handleClick = e => {
      console.log('click ', e);
    };

    
return(
        
        <>
<BrowserRouter>
      
    <div id='menu'>
        <Menu
        onClick={handleClick}
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
          <Menu.Item key="1" >
            <Link to = "favogroup">그룹관리</Link>
          </Menu.Item>
          <Menu.Item key="2" >
          <Link to = "favorite">즐겨찾기</Link>
            </Menu.Item>
          
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
          <Menu.Item key="3">
            <Link to="/todogroup">그룹관리</Link>
            </Menu.Item>
          <Menu.Item key="4">
            <Link to="/todo">할일</Link>
            </Menu.Item>

        </SubMenu>
      
      </Menu>
    </div>
  
    
    <div id='content'> 
       
      <Switch>
      <Route exact path="/" component={Favorite}></Route>
      <Route path="/favorite" component={Favorite}></Route>
      <Route path="/favogroup" component={FavoriteGroup}></Route>
      <Route path="/todo" component={Todo}></Route>
      <Route path="/todogroup" component={TodoGroup}></Route>
      </Switch>
    </div>
    </BrowserRouter>   
     </>
    )
}

