import API from 'Api';
import React from 'react'
import { List, Button, Modal } from 'antd';
import { DeleteOutlined, UserAddOutlined  } from '@ant-design/icons';
import { Form, Input, Select} from 'antd';

export default function Favorite() {
    const [favo, setFavo] = React.useState([]);
    const [form] = Form.useForm();
    const [group, setGroup] = React.useState([])

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

        API.post("api/favorite/", e).then(res => {
                return API.get("api/favorite/")
            }).then(
                res=>{
                    const {data} = res;
                    setFavo(prev => data);
                    form.resetFields();
                    setState(prev => ({
                        visible: false
                    }))
                }
            )
          };
        React.useEffect(()=>{
          API.get("/api/favogroup/").then(res=>{
              const{data} = res;
              setGroup(prev => data);
          })
      },[])

      React.useEffect(()=>{
        API.get("/api/favorite/").then(res => {
            const{data} = res;
            setFavo(data);
        }).catch((error)=>{
            console.log('오류')
        })
    }, [])

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
            dataSource={favo}
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

      <Form.Item
        label="URL"
        name="url"
      >
      <Input />
      </Form.Item>
      
      <Form.Item
        label="메모"
        name="memo"

      >
         <Input />
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