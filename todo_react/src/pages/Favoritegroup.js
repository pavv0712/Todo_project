import API from 'Api';
import React from 'react'
import { List, Button, Modal } from 'antd';
import { DeleteOutlined, UserAddOutlined  } from '@ant-design/icons';
import { Form, Input, Select, DatePicker } from 'antd';

export default function FavoriteGroup(){
    const[favogroup, setfavoGroup] = React.useState([])
    const [form] = Form.useForm();
    
    
    React.useEffect(()=>{
        API.get("/api/favogroup/").then(res=>{
            const {data} = res;
            setfavoGroup(data)
        })
    },[])

    
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

        API.post("api/favogroup/", e).then(res => {
            return API.get("api/favogroup/")})
            .then(res => {
                const {data} = res;
                setfavoGroup(prev => data);
                form.resetFields();
                setState(prev => ({
                    visible: false
                }))
            }
        )
        };
    
    
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
                                <Button style={{float:"right"}} shape="circle" icon={<DeleteOutlined />} />
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