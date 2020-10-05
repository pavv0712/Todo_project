import API from 'Api';
import React from 'react'
import { List, Button, Modal } from 'antd';
import { DeleteOutlined, UserAddOutlined  } from '@ant-design/icons';
import { Form, Input } from 'antd';

export default function TodoGroup() {
    
    const [state, setState] = React.useState({
        visible: false,
      })
      
    const showModal = () => {
        setState({
          visible: true,
        });
      };
    
    const [todogroup, setGroup] = React.useState([])
    const [form] = Form.useForm();
   
    const [state, setState] = React.useState({
        visible: false,
      })
      
    const showModal = () => {
        setState({
          visible: true,
        });
      };
      const handleOk = () => {
        setState({visible: false})
      };
    
      const handleCancel = () => {
        setState({ visible: false });
      };
    
        
      const onFinish = e => {

        API.post("api/todogroup/", e).then(res => {
                return API.get("api/todogroup/")
            }).then(
                res=>{
                    const {data} = res;
                    setGroup(prev => data);
                    form.resetFields();
                    setState(prev => ({
                        visible: false
                    }))
                }
            )
          };
    
    React.useEffect(()=> {
        API.get("/api/todogroup/").then(res=> {
            const {data} = res;
            setGroup(data);
        })
    }, [])
    
    const deletetodo = (seq) => {
        
        API.delete("/api/todogroup/" + seq).then(res => {
            return API.get("/api/todogroup/")
        }).then(res => {
            const{data} = res;
            setGroup(prev => data);
        })
    }

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
            dataSource={todogroup}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                description={<>
                                <span>{item.name}</span> / <span>{item.reg_date}</span>
                                <Button style={{float:"right"}} shape="circle" icon={<DeleteOutlined />} 
                                onClick = {()=>{deletetodo(item.seq)}} />
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

   
    <Button type = "primary" htmlType="submit">등록</Button>
    <Button onClick={handleCancel}>취소</Button>
    </Form>
    </Modal>
    </>
    
    )
    
  }