import React from 'react';
import {Row, Col} from 'antd';
import {
	Form,
	Input,
	Button,
	Card
} from 'antd';
const FormItem = Form.Item;
import {Router, Route, Link, browserHistory} from 'react-router'
class CommonComments extends React.Component {
	constructor() {
        super();
        this.state = {
            comments: '',
            something: ''
		};
		this.handelChange = this.handelChange.bind(this);//防止this指向函数本身，而不是当前创建的对象
    };
    //获取评论
	componentDidMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
			this.setState({comments: json});
		});
    };
    //提交评论
	handleSubmit(e) {
		e.preventDefault();
		var myFetchOptions = {
			method: 'GET'
		};
		var formdata = this.props.form.getFieldsValue();
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=123&uniquekey=" + this.props.uniquekey + "&commnet=" + this.state.something, myFetchOptions).then(response => response.json()).then(json => {
			this.componentDidMount();
        });
        this.state.something = '';//提交后清空输入框
	};
	handelChange(event){
		this.setState({something: event.target.value});
	};

	render() {
		let somethingNew = this.state.something;
		let {getFieldProps} = this.props.form;
		const {comments} = this.state;
		const commnetList = comments.length
			? comments.map((comment, index) => (
				<Card key={index} title={comment.UserName} extra={<a href = "#"> 发布于 {comment.datetime} </a>}>
					<p>{comment.Comments}</p>
				</Card>
			))
			: '没有加载到任何评论';
		return (
			<div class="comment">
				<Row>
					<Col span={24}>
						{commnetList}
						<Form onSubmit ={this.handleSubmit.bind(this)}>
							<FormItem label="您的评论">
								<Input type="textarea" placeholder="随便写点什么" {...getFieldProps('remark',{initialValue: ''})} value={somethingNew} onChange={this.handelChange}/>
							</FormItem>
							<Button type="primary" htmlType="submit">提交评论</Button>
						</Form>
					</Col>
				</Row>
			</div>
		);
	};
}
export default CommonComments = Form.create({})(CommonComments);
