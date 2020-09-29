import API from 'Api'
import React from 'react'
import { List, Button } from 'antd';
import { RestOutlined  } from '@ant-design/icons';

export default function TodoGroup() {
    const [todogroup, setGroup] = React.useState([])
    React.useEffect(()=> {
        API.get("/api/todogroup/").then(res=> {
            const {data} = res;
            setGroup(data);
        })
    }, [])
    
    return(
        <>
        <List
            style={{width:"33%",float:"left",paddingRight:"5px"}}
            itemLayout="horizontal"
            dataSource={todogroup}
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