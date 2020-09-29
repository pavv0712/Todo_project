import API from 'Api';
import React from 'react'
import { List, Button } from 'antd';
import { RestOutlined  } from '@ant-design/icons';

export default function Todo() {
    
    const[todo, setTodo] = React.useState(
        {"pending":[],
        "inprogress":[],
        "end":[]}
        );
    
    React.useEffect(()=> {
        
        API.get("/api/todo/?status=inprogress").then(res=> {
            const{data} = res;
            setTodo(prev => ({
                ...prev, inprogress:data
            }));
        })
    }, [])
    React.useEffect(()=> {
        API.get("api/todo/?status=end").then(res => {
            const{data} = res;
            setTodo(prev => ({
                ...prev, end:data
            }));
        })
    }, [])
    React.useEffect(()=> {
        API.get("api/todo/?status=pending").then(res => {
            const{data} = res;
            setTodo(prev => ({
                ...prev, pending:data
            }))
        })
    }, [])

    return (
        <>
        <List
            header={<div>진행중</div>}
            style={{width:"33%",float:"left",paddingRight:"5px"}}
            itemLayout="horizontal"
            dataSource={todo.inprogress}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                title={<span>{item.name}</span>}
                description={<>
                                <span>{item.name}</span> / <span>{item.reg_date}</span>
                                <Button style={{float:"right"}} shape="circle" icon={<RestOutlined />} />
                            </>
                            }
                />
            </List.Item>
            )}
        />
        <List
            header={<div>완료</div>}
            style={{width:"33%",float:"left",paddingRight:"5px"}}
            itemLayout="horizontal"
            dataSource={todo.end}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                title={<span>{item.name}</span>}
                description={<>
                                <span>{item.name}</span> / <span>{item.reg_date}</span>
                                <Button style={{float:"right"}} shape="circle" icon={<RestOutlined />} />
                            </>
                            }
                />
            </List.Item>
            )}
        />
        <List
            header={<div>보류</div>}
            style={{width:"33%",float:"left",paddingRight:"5px"}}
            itemLayout="horizontal"
            dataSource={todo.pending}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                title={<span>{item.name}</span>}
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