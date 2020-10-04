import React from 'react'
import API from 'Api'
import { List, Button, Modal } from 'antd';
import { RestOutlined, UserAddOutlined  } from '@ant-design/icons';
import { Form, Input, Select, DatePicker } from 'antd';

export default function FavoriteGroup(){
    const[favogroup, setGroup] = React.useState([])
    React.useEffect(()=>{
        API.get("/api/favogroup/").then(res=>{
            const {data} = res;
            setGroup(data)
        })
    },[])

    
    
    return(
        <>
        <div id='button'>
        <Button onClick={showModal} icon={<UserAddOutlined />}>
          추가
        </Button>
        </div>
        <List
            style={{width:"33%",float:"left",paddingRight:"5px"}}
            itemLayout="horizontal"
            dataSource={favogroup}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                description={<>
                                <span>{item.name}</span> / <span>{item.reg_date}</span>
                                <Button style={{float:"right"}} shape="circle" icon={<RestOutlined />} />
                                </>
                            }
      />
    </List.Item> 
    )}
    />
    </>
    
    )
  }