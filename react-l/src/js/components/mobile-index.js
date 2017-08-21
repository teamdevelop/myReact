import React from 'react';
import MobileHeader from './mobile-header';
import MobileFooter from './mobile-footer';
import {Tabs,Carousel} from 'antd';
import MobileList from './mobile-list';

const TabPane = Tabs.TabPane;
export default class MobileIndex extends React.Component {

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
        return (
            <div>
                <MobileHeader/>
                <Tabs type="card">
                    <TabPane tab="头条" key="1">
                        <div class='carousel'>
                            <Carousel {...settings}>
                                {newsList}
                            </Carousel>
                         </div>
                        <MobileList type='top' count={20}/>
                    </TabPane>
                    <TabPane tab="社会" key="2">
                        <MobileList type='shehui' count={20}/>
                    </TabPane>
                    <TabPane tab="国内" key="3">
                        <MobileList type='guonei' count={20}/>
                    </TabPane>
                    <TabPane tab="国际" key="4">
                        <MobileList type='guoji' count={20}/>
                    </TabPane>
                    <TabPane tab="娱乐" key="5">
                        <MobileList type='yule' count={20}/>
                    </TabPane>
                    <TabPane tab="体育" key="6">
                        <MobileList type='tiyu' count={20}/>
                    </TabPane>
                    <TabPane tab="时尚" key="7">
                        <MobileList type='shishang' count={20}/>
                    </TabPane>
                    <TabPane tab="科技" key="8">
                    <MobileList type='keji' count={20}/>
                    </TabPane>
                </Tabs>
                <MobileFooter/>
            </div>
        )
    }
}