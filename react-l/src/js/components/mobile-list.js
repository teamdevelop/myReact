import React from 'react';
import {Row,Col} from 'antd';
import {Router,Route,Link,browserHistory} from 'react-router';

export default class MobileList extends React.Component{
    constructor(){
        super();
        this.state={
            news: ''
        }
    }
    componentWillMount(){
        let myFetchOptions = {
            method:'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+ this.props.type + "&count=" + this.props.count, myFetchOptions)
        .then(response => response.json()).then(json => this.setState({news: json}));
    }

    render(){
        const {news} = this.state;
		const newsList = news.length
			? news.map((newsItem, index) => (
				<section key={index} className="m_article list-item special_section clearfix">
					<Link to={`details/${newsItem.uniquekey}`} target="_blank">
                        <div className="m_article_img">
                            <img alt={newsItem.uniquekey} src={newsItem.thumbnail_pic_s}/>
                        </div>
                        <div className="m_article_info">
                            <div className="m_article_title">
                                <span>{newsItem.title}</span>
                            </div>
                            <div className="m_article_desc clearfix">
                                <div className="m_article_desc_l">
                                    <span className="m_article_channel">{newsItem.realtype}</span>
                                    <span className="m_article_time">{newsItem.date}</span>
                                </div>
                            </div>
                        </div>
					</Link>
				</section>
			))
			: <div>'没有加载到任何新闻'</div> ;
        return(
            <div class='topNewsList'>
            <Row>
                <Col span={24}>
                    {newsList}
                </Col>
            </Row>
            </div>
        )
    }
}