import API from 'Api';
<<<<<<< HEAD
import React, {Component} from 'react'
import { List, Button, Modal } from 'antd';
import { DeleteOutlined, UserAddOutlined  } from '@ant-design/icons';
=======
import React from 'react'
import { List, Button, Modal } from 'antd';
import { RestOutlined, UserAddOutlined  } from '@ant-design/icons';
>>>>>>> d98fb4bd8ec58535ff8ccb70081456b8ceb00512
import { Form, Input, Select, DatePicker } from 'antd';

export default function Todo() {
    
    const[todo, setTodo] = React.useState(
        {pending:[],
        inprogress:[],
        end:[]}
        );
       
    const [form] = Form.useForm();

    const [group, setGroup] = React.useState([]);
<<<<<<< HEAD
    
    const [state, setState] = React.useState({
            visible: false,
          })
        
    const showModal = () => {
            setState({
              visible: true,
            });
          };
        
          const handleOk = () => {
            setState({ visible: true });
          };
        
          const handleCancel = () => {
            setState({ visible: false });
          };
    
          const onFinish = e => {
              e.end_date = e.end_date.format("YYYY-MM-DD")
              console.log(e);

              API.post("api/todo/", e).then(res => {
                  return API.get("api/allTodo")
              }).then(
                  res=>{
                      const {data} = res;
                      setTodo(prev => data);
                      form.resetFields();
                      setState(prev => ({
                          visible: false
                      }))
                  }
              )
            };
      

    React.useEffect(()=> {
        
        API.get("/api/allTodo").then(res=> {
            const {data} = res;
            setTodo(prev => data);
        })
    }, [])

    React.useEffect(()=>{
        API.get("/api/todogroup/").then(res=>{
            const{data} = res;
            setGroup(prev => data);
        })
    },[])
    
    const deletetodo = (seq) => {
        
        API.delete("/api/todo/" + seq).then(ares => {
            return API.get("/api/allTodo")
        }).then(res => {
            const{data} = res;
            setTodo(prev => data);
        })
    }
=======
    
    const [state, setState] = React.useState({
            visible: false,
          })
        
    const showModal = () => {
            setState({
              visible: true,
            });
          };
        
          const handleOk = () => {
            setState({ visible: true });
          };
        
          const handleCancel = () => {
            setState({ visible: false });
          };
    
          const onFinish = e => {
              e.end_date = e.end_date.format("YYYY-MM-DD")
              console.log(e);

              API.post("api/todo/", e).then(res => {
                  return API.get("api/allTodo")
              }).then(
                  res=>{
                      const {data} = res;
                      setTodo(prev => data);
                      form.resetFields();
                      setState(prev => ({
                          visible: false
                      }))
                  }
              )
            };

    React.useEffect(()=> {
        
        API.get("/api/allTodo").then(res=> {
            const {data} = res;
            setTodo(prev => data);
        })
    }, [])

    React.useEffect(()=>{
        API.get("/api/todogroup/").then(res=>{
            const{data} = res;
            setGroup(prev => data);
        })
    },[])

>>>>>>> d98fb4bd8ec58535ff8ccb70081456b8ceb00512


    return (
        <>
        <div id='button'>
        <Button onClick={showModal} icon={<UserAddOutlined />}>
          추가
        </Button>
        </div>
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
                                <span>{item.group_name}</span> / <span>{item.reg_date}</span>
                                <Button onClick = {() => {deletetodo(item.seq)}} style={{float:"right"}} shape="circle" icon={<DeleteOutlined />}
                                 />
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
                                <span>{item.group_name}</span> / <span>{item.reg_date}</span>
                                <Button style={{float:"right"}} shape="circle" icon={<DeleteOutlined />}
                                onClick = {() => {deletetodo(item.seq)}} />
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
                                <span>{item.group_name}</span> / <span>{item.reg_date}</span>
                                <Button style={{float:"right"}} shape="circle" icon={<DeleteOutlined />} 
                                onClick = {() => {deletetodo(item.seq)}} />
                            </>
                            }
                />
            </List.Item>
            )}
        />
   
        <Modal
          visible={state.visible}
          title="등록"
          footer={null}
          onOk={handleOk}
          onCancel={handleCancel}
         
        >
      <Form
      form = {form}
      name="basic"
      onFinish={onFinish}
    >
      
      <Form.Item
        label="명칭"
        name="name"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="상태"
        name="status"
      >
        <Select>
            <Select.Option value="">선택</Select.Option>
            <Select.Option value="inprogress">inprogress</Select.Option>
            <Select.Option value="pending">pending</Select.Option>
            <Select.Option value="end">end</Select.Option>
        </Select>
      </Form.Item>
      
      <Form.Item
        label="종료일"
        name="end_date"

      >
         <DatePicker/>
      </Form.Item>
      
      <Form.Item
        label="그룹"
        name="group"
      >
    <Select>
    <Select.Option value="">선택</Select.Option>
          {group.map((v)=> {
              return<Select.Option value={v.seq}>{v.name}</Select.Option>})}
  
    </Select>
      </Form.Item>
    <Button type = "primary" htmlType="submit">등록</Button>
    <Button onClick={handleCancel}>취소</Button>
    </Form>
        </Modal>
    </>
    
    
    )
}