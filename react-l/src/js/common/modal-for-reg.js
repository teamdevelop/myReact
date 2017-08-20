import React from 'react';
import {Button,Icon,Form,Modal,Tabs} from 'antd';

const FormItem = Form.Item;
const Tabpane = Tabs.TabPane;

class logForm extends React.Component {
    constructor(){
        super();
        this.state = {
            // modalVisible: false,
            // action: 'login',
            // hasLogined: false,
        };
    }
    handleSubmit(e){
        e.preventDefault();
        let myFetchOptions = {
            method:'GET'
        };
        let formData = this.props.getFieldDecorator();
        console.log(formData);
        // fetch().then(response=>response.json()).then(json=>{})
    }

    render(){
        return(
            <Modal title='用户登陆' 
            wrapClassName='vertical-center-modal'  
            visible={this.props.data-modalVisible} 
            onCancel={this.props.setModalVisible(false)}  
            onOk={this.props.setModalVisible(false)} okText='关闭'>
                <Tabs type='card'>
                    <Tabpane tab='注册' key='2'>
                        <Form horizontal onSubmit={this.props.handleSubmit()}>
                            <FormItem label="账户">
                                <input placeholder="请输入您的账号" {...getFieldDecorator('r_userName')}/>
                            </FormItem>
                            <FormItem label="密码">
                                <input type='password' placeholder="请输入您的密码" {...getFieldDecorator('r_password')}/>
                            </FormItem>
                            <FormItem label="确认密码">
                                <input type='password' placeholder="请输入您的密码" {...getFieldDecorator('r_password')}/>
                            </FormItem>
                            <Button type='primary' htmlType='submit'>注册</Button>
                        </Form>
                    </Tabpane>
                </Tabs>
            </Modal>
        )
    }
}

export default logForm = Form.create({})(logForm);