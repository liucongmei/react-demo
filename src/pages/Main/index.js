import React, { Component } from 'react'
import { Icon, TabBar } from 'antd-mobile'

class Main extends Component{
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'home',
    };
  }
	render() {
		return (
			<div style={{position: 'fixed', height: '100%', width: '100%', top: 0 }}>
				<TabBar
          unselectedTintColor="#949494"
          barTintColor="white"
          style={{position: 'fixed', bottom: 0}}
        >
          <TabBar.Item 
            key="主页"
            title="主页"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({selectedTab: 'home'})
              this.props.history.push('/')
            }}
          />
          <TabBar.Item 
            key="发帖"
            title="发帖"
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selected={this.state.selectedTab === 'user'}
            onPress={() => {
              this.setState({selectedTab: 'user'})
              this.props.history.push('/user')
            }}
          />
          {/* {this.props.children} */}
        </TabBar>
			</div>
		)
	}
}
export default Main