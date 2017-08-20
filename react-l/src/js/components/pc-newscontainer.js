import React from 'react';
import {Button,Icon,Form,Modal,Tabs,Row,Col,Carousel} from 'antd';
import PCNewsBlock from './pc-news-block';
import PCNewsImageBlock from './pc-news-image-block';
const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component{
    constructor(){
        super();
        this.state={
            news: '',
            newsList: ''
        }
    }

    componentWillMount() {
        let myFetchOptions = {
            method:'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=guoji&count=4", myFetchOptions)
        .then(response => response.json()).then(json => this.setState({news: json}));
    }



    render(){
        const leftContainer = {
            width:'400px',
            float: 'left'
        };
        const carousel = {
            width:'400px',
            float: 'left'
        };
        const carousel_img = {
            width:'400px',
            height: '260px'
        };
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
                <img src={newsItem.thumbnail_pic_s} style={carousel_img}/>
            </div>
        ))
        : <div>'没有加载到任何新闻'</div> ;
        return(
            <Row>
                <Col span={2}/>
                <Col span={20}>
                    <div style={leftContainer}>
                        <div style={carousel}>
                        <Carousel {...settings}>
                            {newsList}
                        </Carousel>
                        </div>
                        <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px"/>
                    </div>

                    <Tabs class="tabs_news" type="editable-card">
                        <TabPane tab="头条新闻" key="1">
                            <PCNewsBlock count={22} type="top" width="100%" bordered="false" />
                        </TabPane>
                        <TabPane tab="国际" key="2">
                            <PCNewsBlock count={22} type="guoji" width="100%" bordered="false" />
                        </TabPane>
                    </Tabs>
                </Col>
                <Col span={2}/>
            </Row>
        )
    }
}