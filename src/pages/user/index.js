// import React, { Component } from 'react'
// class User extends Component{
// 	render() {
// 		return (
// 			<div >
// 				{/* <div style={{flex:1}}>测试</div>
// 				<div style={{flex:1}}>啦啦</div>
// 				<div style={{flex:1}}>呜呼</div> */}
// 				这是用户中心
// 			</div>
// 		)
// 	}
// }
// export default User
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd-mobile'

class User extends Component {
	test = () => {
		console.log('测试')
	}
  componentDidMount() {
    // console.log(this.props)
  } 
  render() {
		// console.log(PayIncrease)
    return (
      <div className="App">
        这是用户中心
				{/* <h2>当月工资为{this.props.tiger}</h2>
				
        <Button onClick={PayIncrease}>升职加薪</Button>
				<div type="primary" onClick={this.test} style={{height: '30px',backgroundColor: 'red',margin: '20px 0'}}>Button</div>
        <Button onClick={PayDecrease}>迟到罚款</Button> */}
      </div>
    );
  }
}


export default User
