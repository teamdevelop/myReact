import React from 'react';
import {Row, Col} from 'antd';
import {
	Form,
	Input,
	Button,
	Card,
	notification
} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';

const FormItem = Form.Item;

class CommonComments extends React.Component {
	constructor() {
        super();
        this.state = {
            comments: '',
			something: '',
			myFetchOptions : {
				method: 'GET'
			}
		};
		this.handelChange = this.handelChange.bind(this);//防止this指向函数本身，而不是当前创建的对象
	};

    //获取评论
	componentDidMount() {
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, this.state.myFetchOptions)
		.then(response => response.json())
		// .then(json => json.sort(sortTime))
		.then(json => {this.setState({comments: json})});
	};
	//评论按时间倒序排序
	// sortTime(a,b){
	// 	return b[datetime].localCompare(a[datetime]);
	// }

    //提交评论
	handleSubmit(e) {
		e.preventDefault();
		var formdata = this.props.form.getFieldsValue();
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=123&uniquekey=" + this.props.uniquekey + "&commnet=" + this.state.something, this.state.myFetchOptions).then(response => response.json()).then(json => {
			this.componentDidMount();
        });
        this.state.something = '';//提交后清空输入框
	};
	//收藏
	addUserCollection(){
		var formdata = this.props.form.getFieldsValue();
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=123&uniquekey=" + this.props.uniquekey, this.state.myFetchOptions).then(response => response.json()).then(json => {
			//收藏成功以后进行一下全局的提醒
			notification['success']({message: 'ReactNews提醒', description: '收藏此文章成功'});
		});
	}
	//双向绑定输入框值和变量值
	handelChange(event){
		this.setState({something: event.target.value});
	};

	render() {
		let somethingNew = this.state.something;
		let {getFieldDecorator} = this.props.form;
		const {comments} = this.state;
		const commnetList = comments.length
			? comments.map((comment, index) => (
				<Card key={index} title={comment.UserName} extra={<a href = "#"> 发布于 {comment.datetime} </a>}>
					<p>{comment.Comments}</p>
				</Card>
			))
			: <Card>'没有加载到任何评论'</Card>;
		return (
			<div class="comment">
				<Row>
					<Col span={24}>
						<Form onSubmit ={this.handleSubmit.bind(this)}>
							<FormItem label="您的评论">
								<Input type="textarea" placeholder="随便写点什么" {...getFieldDecorator('remark',{initialValue: ''})} value={somethingNew} onChange={this.handelChange}/>
							</FormItem>
							<Button type="primary" htmlType="submit">提交评论</Button>&nbsp;&nbsp;
							<Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>收藏</Button>
							{commnetList}
						</Form>
					</Col>
				</Row>
			</div>
		);
	};
}
export default CommonComments = Form.create({})(CommonComments);
