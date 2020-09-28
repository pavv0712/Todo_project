import API from 'API'
import React from 'react'
import { List, Button } from 'antd';

export default function TodoGroup() {
    const [group, setGroup] = React.useState([])
    React.useEffect(()=> {
        API.get("/todogroup").then(res=> {
            const {data} = res;
            setGroup(data);
        })
    })
    
    return(
        <>
        <List
            style={{width:"33%",float:"left",paddingRight:"5px"}}
            itemLayout="horizontal"
            dataSource={group}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                description={<>
                                <span>{item.name}</span> / <span>{item.reg_date}</span>
                                
                                </>
                            }
      />
    </List.Item> 
    )}
    />
    </>
    
    )
    
  }