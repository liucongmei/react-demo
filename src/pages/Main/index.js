import React, { Component } from 'react'
import { Icon, TabBar } from 'antd-mobile'

class Main extends Component{
  constructor(props) {
    super(props)
  }
	render() {
		return (
			<div style={{position: 'fixed', height: '100%', width: '100%', top: 0 }}>
				<TabBar
          unselectedTintColor="#949494"
          barTintColor="white"
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
            
          />
          <TabBar.Item 
            key="发帖"
          />
          {/* {this.props.children} */}
        </TabBar>
			</div>
		)
	}
}
export default Main