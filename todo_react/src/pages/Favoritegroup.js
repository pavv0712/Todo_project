import React from 'react'
import API from 'API'
import { List, Button } from 'antd';

export default function FavoriteGroup(){
    const[group, setGroup] = React.useState([])
    React.useEffect(()=>{
        API.get("/favogroup").then(res=>{
            const {data} = res;
            setGroup(data)
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