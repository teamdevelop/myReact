import React from 'react';
import MobileHeader from './mobile-header';
import MobileFooter from './mobile-footer';
import {Button,Icon,Form,Modal,Tabs} from 'antd';

const TabPane = Tabs.TabPane;
export default class MobileIndex extends React.Component {
    render(){
        return (
            <div>
                <MobileHeader/>
                <Tabs type="card">
                <TabPane tab="头条" key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab="社会" key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab="国内" key="3">Content of Tab Pane 3</TabPane>
                <TabPane tab="国际" key="3">Content of Tab Pane 3</TabPane>
                <TabPane tab="娱乐" key="3">Content of Tab Pane 3</TabPane>
                <TabPane tab="体育" key="3">Content of Tab Pane 3</TabPane>
                <TabPane tab="时尚" key="3">Content of Tab Pane 3</TabPane>
                <TabPane tab="科技" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>
                <MobileFooter/>
            </div>
        )
    }
}