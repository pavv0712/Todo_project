import React from 'react'
import API from 'Api'
import { List, Button } from 'antd';
import { RestOutlined  } from '@ant-design/icons';

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