import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs, Toast } from 'antd-mobile'
// import axios from 'axios'
import HomeTopic from '../../store/actions/home'
import List from '../../components/List'

const TabPane = Tabs.TabPane

const allTabs = [
	{title: '全部', type: 'all'},
	{title: '精华', type: 'good'},
	{title: '分享', type: 'share'},
	{title: '问答', type: 'ask'},
	{title: '招聘', type: 'job'},
]
class Dashboard extends Component {
	componentDidMount() {
		const { dispatch, topList } = this.props
		Toast.loading('Loading...')
		dispatch(HomeTopic.keepTopic({type: 'all', page: 1, limit: 10}))
		// const { data } = axios.get(`https://cnodejs.org/api/v1/topics?tab=all&page=1&limit=10`);
		// console.log(data)
		if(topList) {
			Toast.hide()
		}
	}
	
	changType = (value) => {
		console.log('数据')
		console.log(value)
		const { dispatch } = this.props
		dispatch(HomeTopic.keepTopic({type: value.type, page: 1, limit: 10}))
	}
	render() {
		const { dispatch, topList } = this.props
		
		
		return (
			<div >
				<Tabs tabs={allTabs}
					initialPage={0}
					onChange={this.changType}
				>
				{allTabs.map((item, index) => {
					return (
						<div key={index}>
							<List data={topList}/>
						</div>
					)
				})}
				</Tabs>

				{/* <Tabs defaultActiveKey="1" >
					<TabPane tab="全部" key="1"></TabPane>
					<TabPane tab="Tab 2" key="2"></TabPane>
					<TabPane tab="Tab 3" key="3"></TabPane>
					<TabPane tab="Tab 4" key="4"></TabPane>
					<TabPane tab="Tab 5" key="5"></TabPane>
				</Tabs> */}
				{/* <List />	 */}
				{/* <div style={{flex:1}}>测试</div>
				<div style={{flex:1}}>啦啦</div>
				<div style={{flex:1}}>呜呼</div> */}
				{/* 这是首页
				<Button type="primary" onClick={this.test}>Button</Button> */}

			</div>
		)
	}
}
// export default Dashboard
export default connect((state, action) => {
  return {
		topList: state.Home
	}
})(Dashboard)