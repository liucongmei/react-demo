import React from 'react'
import { Card, Badge, Flex, WhiteSpace } from 'antd-mobile'
import { Link } from 'react-router-dom'
import Avatar from './../Avatar'
import { formatime } from './../../utils'
const extra = () => (
  <Badge text="top" />
);

const title = ({ author: { loginname }, create_at }) => (
  <Flex direction="column" align="start" style={{ padding: '0 .1rem' }}>
    <Flex.Item style={{
      color: 'rgb(58, 64, 245)',
      fontSize: '17px'
    }}
    >{loginname}
    </Flex.Item>
    <Flex.Item style={{
      color: '#888',
      marginTop: '0.1rem',
      marginLeft: '0',
      fontSize: '0.24rem'
    }}
    >{create_at ? formatime(create_at) : ''}
    </Flex.Item>
  </Flex>
)

const footer = ({reply_count, visit_count}) => (
  <Flex>
    <Flex align="center">
      {visit_count !== undefined ? <div style={{
              width: '22px',
              height: '22px',
              background: 'url(./icons/browse.svg) center center /  21px 21px no-repeat' }}
            />: null}
      {visit_count}
    </Flex>
    <Flex align="center" style={{marginLeft: '10px'}}>
      {reply_count !== undefined ? <div style={{
              width: '22px',
              height: '22px',
              background: 'url(./icons/message.svg) center center /  21px 21px no-repeat' }}
            />  : null}
      {reply_count}
    </Flex>
  </Flex>
);

const footerExtra = ({last_reply_at}) => (
  <Flex align="center" justify="end" style={{height: '100%', fontSize: '0.24rem'}}>最新动态: {formatime(last_reply_at)}</Flex>
)


const ListItem = ({ item, index, length }) => {
  return (
    <div style={{}}>
      <Link to={`/detail/${item.id}`}>
        <Card full
          style={{border: 'none', boxShadow: '0px 2px 5px -3px rgba(0,0,0,0.5)'}}
        >
          <Card.Header
            title={title(item)}
            thumb={<Avatar src={item.author.avatar_url} loginname={item.author.loginname} isCircle={false} size={60} />}
            extra={item.top ? extra() : ''}
          />
          <Card.Body
            style={{
              minHeight: '55px',
              wordWrap: 'break-word',
              wordBreak: 'break-all',
              borderTop: 'none'
            }}
          >
            <Flex align="center"><h4>{item.title}</h4></Flex>
            
          </Card.Body>
          <Card.Footer content={footer(item)} extra={footerExtra(item)} />
        </Card>
      </Link>
      {Number(index) === length - 1 ? null : <WhiteSpace size="md" />}
    </div>
  )
}
export default ListItem