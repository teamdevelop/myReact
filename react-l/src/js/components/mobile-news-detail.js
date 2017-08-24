import React from 'react';
import {Row,Col,BackTop} from 'antd';
import MobileHeader from './mobile-header';
import MobileFooter from './mobile-footer';

export default class MobileNewsDetail extends React.Component{
    constructor(){
        super();
        this.state={
            newsItem:''
        };
    };
    componentDidMount(){
        let myFetchOptions={
            method:'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions)
        .then(response => response.json()).then(json => {
			this.setState({newsItem: json});
            document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
        });
    }
    createMarkup(){
        return {__html: this.state.newsItem.pagecontent};
    }

    render(){
        return(
            <div>
            <MobileHeader/>
            <Row>
                <Col span={24} className='container'>
                    <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                    {/*<div  class='articleContainer'>
                        {this.state.newsItem.pagecontent}
                    </div>*/}
                </Col>
            </Row>
            <MobileFooter/>
            <BackTop/>
            </div>
        )
    }
} 