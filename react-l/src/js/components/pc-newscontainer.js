import React from 'react';
import {Button,Icon,Form,Modal,Tabs,Row,Col,Carousel} from 'antd';
import PCNewsBlock from './pc-news-block';
import PCNewsImageBlock from './pc-news-image-block';
import PCNewsCopy from './pc-newscopy';
const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component{
    constructor(){
        super();
        this.state={
            news: ''
        }
    }

    componentWillMount() {
        let myFetchOptions = {
            method:'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=4", myFetchOptions)
        .then(response => response.json()).then(json => this.setState({news: json}));
    }

    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        };
        const {news} = this.state
        const newsList = news.length
        ? news.map((newsItem, index) => (
            <div key={index}>
                <img src={newsItem.thumbnail_pic_s} />
            </div>
        ))
        : <div>'没有加载到任何新闻'</div> ;
        return(
            <Row>
                <Col span={2}/>
                <Col span={20} class="container">
                    <div class='leftContainer'>
                        <div class='carousel'>
                            <Carousel {...settings}>
                                {newsList}
                            </Carousel>
                        </div>
                        <PCNewsImageBlock count={6} type="yule" width="400px" cartTitle="娱乐头条" imageWidth="112px"/>
                    </div>

                    <Tabs class="tabs_news" type="editable-card">
                        <TabPane tab="头条新闻" key="1">
                            <PCNewsBlock count={22} type="top" width="100%" bordered="false" />
                        </TabPane>
                        <TabPane tab="国际" key="2">
                            <PCNewsBlock count={22} type="guoji" width="100%" bordered="false" />
                        </TabPane>
                        <TabPane tab="国内" key="3">
                        <PCNewsBlock count={22} type="guonei" width="100%" bordered="false" />
                    </TabPane>
                    </Tabs>
                    <Tabs class='tabs_product'>
                        <TabPane tab='抄袭的新闻' key='1'>
                            <PCNewsCopy/>
                        </TabPane>
                    </Tabs>
                </Col>
                <Col span={2}/>
            </Row>
        )
    }
}