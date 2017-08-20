import React from 'react';
import {Row, Col, Menu, Icon} from 'antd';
import logForm from './../common/modal-for-reg.js'

export default class PCHeader extends React.Component {
    constructor(){
        super();
        this.state = {
            current : 'top',
            modalVisible: true,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid:0
        };
    } 

    setModalVisible(value){
        this.setState({modalVisible:value});
    }

    handleClick (e) {
        this.setState({current:e.key});
        if (e.key='unlog'){
            this.setModalVisible(true);
        }else{
            
        }
    }

    render(){
        const userShow = this.state.hasLogined?
        <Menu.Item key='loged' class='register'>
            <Button type='primary' htmlType='button'>{this.props.userNickName}</Button>
            <link target='_blank'>
                <Button type='dashed' htmlType='button'>个人中心</Button>
            </link>
            &nbsp;&nbsp;
            <Button type='ghost' htmlType='button'>退出</Button>
        </Menu.Item>
        :
        <Menu.Item key='unlog' class='register'>
            <Icon type='login'/>注册/登陆
        </Menu.Item>

        return (
            <div>
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href='/' class="logo">
                            <img href="./src/images/logo.png" alt="logo"/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick.bind(this)}>
                            <Menu.Item key="top">
                            <Icon type="appstore" />头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                            <Icon type="appstore" />社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                            <Icon type="appstore" />国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                            <Icon type="appstore" />国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                            <Icon type="appstore" />娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                            <Icon type="appstore" />体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                            <Icon type="appstore" />科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                            <Icon type="appstore" />时尚
                            </Menu.Item>
                            {userShow}
                        </Menu>
                        <logForm data-modalVisible={true}/>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
            </div>
        )
    }
}