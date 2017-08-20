import React from 'react';
import {Row, Col} from 'antd';

export default class MobileHeader extends React.Component {
    render(){
        return (
            <div id='mobileheader'>
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <a href='/'>
                            <img href="./src/images/logo.png" alt="logo"/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
            </div>
        )
    }
}