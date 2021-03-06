import React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router';

export default class PCNewBlock extends React.Component{
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
        // // styleImage = '';
        // // styleH3 = '';
        // //图片新闻模块样式
        // //图片样式
        const styleImage = {
			display: "block",
			width: this.props.imageWidth,
			height: "90px"
        };
        //标题样式
		const styleH3 = {
			width: this.props.imageWidth,
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis"
		};
        const {news} = this.state;
		const newsList = news.length
			? news.map((newsItem, index) => (
				<div key={index} class="imageblock">
                    <Link to={`detail/${newsItem.uniquekey}`} target="_blank">
                        <div class="custom-image">
                            <img alt="" style={styleImage} src={newsItem.thumbnail_pic_s}/>
                        </div>
                        <div class="custom-card">
                            <h3 style={styleH3}>{newsItem.title}</h3>
                            <p>{newsItem.author_name}</p>
                        </div>
                    </Link>
                </div>
			))
			: <div>'没有加载到任何新闻'</div> ;
        return(
            <div class='topNewsList'>
            <Card title={this.props.cartTitle} bordered={true} style={{ width: this.props.width }}>
                {newsList}
            </Card>
        </div>
        )
            
        
    }
}