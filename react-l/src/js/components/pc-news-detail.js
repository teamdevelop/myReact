import React from 'react';
import {Row,Col,BackTop} from 'antd';
import PCHeader from './pc-header';
import PCFooter from './pc-footer';
import PCNewsImageBlock from './pc-news-image-block';
import CommonComments from './common-comments';

export default class PCNewsDetail extends React.Component{
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
            <PCHeader/>
            <Row>
                <Col span={2}/>
                <Col span={14} className='container'>
                    <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                    {/*<div  class='articleContainer'>
                        {this.state.newsItem.pagecontent}
                    </div>*/}
                </Col>
                <Col span={6}>
                    <PCNewsImageBlock type='top' count={30} imageWidth='150px' cardType='相关新闻' width='100%'/>
                </Col>
                <Col span={2}/>
            </Row>
            <CommonComments uniquekey={this.props.params.uniquekey}/>
            <PCFooter/>
            <BackTop/>
            </div>
        )
    }
} 