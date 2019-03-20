import React, { Component } from 'react'
import { Avatar, Icon } from 'antd'

class List extends Component {
  state = {
    data: [
      {
        author_id: "51f0f267f4963ade0e08f503",
        create_at: "2019-02-25T12:04:18.826Z",
        good: false,
        id: "5c73d9c2ab86b86ddf6b2b4a",
        last_reply_at: "2019-03-19T07:22:48.930Z",
        reply_count: 39,
        tab: "share",
        author: {
          avatar_url: "https://avatars2.githubusercontent.com/u/2081487?v=4&s=120",
          loginname: "lellansin"
        },
        title: "Node 地下铁第八期「上海站」线下沙龙邀约 - Let's Go Serverless!",
        top: true,
        visit_count: 3458,
      }
    ]
  }
  render() {
    const { data } = this.state
    return (
      <div>
        {data && data.map(item => {
          return (
            <div style={{border:'1px solid red'}}>
              <div>
                <Avatar shape="square" size={64} src={item.author.avatar_url} />
                <span>{item.author.loginname}</span>
              </div>
              <h3>{item.title}</h3>
              <div>
                <Icon type="eye" />{item.visit_count}
                <Icon type="message" />{item.reply_count}
                <span>最新动态:</span>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
export default List
