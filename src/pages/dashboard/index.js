import React, { Component } from 'react'
import { Button } from 'antd-mobile'
import List from '../../components/List'



class Dashboard extends Component {
	test = () => {
		console.log('测试')
	}
	render() {
		return (
			<div >
				{/* <Tabs defaultActiveKey="1" >
					<TabPane tab="全部" key="1"></TabPane>
					<TabPane tab="Tab 2" key="2"></TabPane>
					<TabPane tab="Tab 3" key="3"></TabPane>
					<TabPane tab="Tab 4" key="4"></TabPane>
					<TabPane tab="Tab 5" key="5"></TabPane>
				</Tabs> */}
				<List />	
				{/* <div style={{flex:1}}>测试</div>
				<div style={{flex:1}}>啦啦</div>
				<div style={{flex:1}}>呜呼</div> */}
				这是首页
				<Button type="primary" onClick={this.test}>Button</Button>
			</div>
		)
	}
}
export default Dashboard