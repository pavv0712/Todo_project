import React from 'react'
import API from 'API'
import { List, Button } from 'antd';


export default function Favorite() {
    const [favo, setFavo] = React.useState([])
    React.useEffect(()=>{
        API.get("/favorite").then(res=> {
            const{data} = res;
            setFavo(data)
        }).catch((error)=>{
            console.log('오류')
        })
    })
    
    return(
      <>
        <List
            style={{width:"33%",float:"left",paddingRight:"5px"}}
            itemLayout="horizontal"
            dataSource={favo}
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
    )}