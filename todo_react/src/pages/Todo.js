import API from 'API';
import React from 'react'
import { List, Button } from 'antd';

export default function Todo() {
    
    const[todo, setTodo] = React.useState(
        {"진행중":[],
        "완료":[],
        "보류":[]}
        );
    
    React.useEffect(()=> {
        
        API.get("").then(res=> {
            const{data} = res;
            setTodo(prev => ({
                ...prev, 진행중:data
            }));
        })
    React.useEffect(()=> {
        API.get("").then(res => {
            const{data} = res;
            setTodo(prev => ({
                ...prev, 완료:data
            }));
        })
    React.useEffect(()=> {
        API.get("").then(res => {
            const{data} = res;
            setTodo(prev => ({
                ...prev, 보류:data
            }))
        })
    }, [])

    return (
        <>
        <List
            header={<div>할일</div>}
            style={{width:"33%",float:"left",paddingRight:"5px"}}
            itemLayout="horizontal"
            dataSource={todos.pending}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                title={<span>{item.name}</span>}
                description={<>
                                <span>{item.group_name}</span> / <span>{item.reg_date}</span>
                                <Button style={{float:"right"}} shape="circle" icon={<RestOutlined />} />
                            </>
                            }
                />
            </List.Item>
            )}
        />
        <List
            header={<div>진행중</div>}
            style={{width:"33%",float:"left",paddingRight:"5px"}}
            itemLayout="horizontal"
            dataSource={todos.inprogress}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                title={<span>{item.name}</span>}
                description={<>
                                <span>{item.group_name}</span> / <span>{item.reg_date}</span>
                                <Button style={{float:"right"}} shape="circle" icon={<RestOutlined />} />
                            </>
                            }
                />
            </List.Item>
            )}
        />
        <List
            header={<div>종료</div>}
            style={{width:"33%",float:"left",paddingRight:"5px"}}
            itemLayout="horizontal"
            dataSource={todos.end}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                title={<span>{item.name}</span>}
                description={<>
                                <span>{item.group_name}</span> / <span>{item.reg_date}</span>
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