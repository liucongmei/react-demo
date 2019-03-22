import React, { Component } from 'react'
import { ListView } from 'antd-mobile';
import ListItem from './../ArticleItem'
const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];
const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0, array) {
  const dataBlob = {};
  for (let i = 0; i < array.length; i++) {
    const ii = (pIndex * array.length) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}

const MyBody = (props) => (
  <div>{props.children}</div>
);

class List extends React.Component {
  constructor(props) {
    super(props);
    let dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    

    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.data.result),
      isLoading: true,
      height: document.documentElement ? document.documentElement.clientHeight - 100 : document.body.clientHeight - 100,
    };
  }

  componentDidMount() {
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    // simulate initial Ajax
    // setTimeout(() => {
    //   this.rData = genData();
    //   console.log(this.rData)
    //   this.setState({
    //     dataSource: this.state.dataSource.cloneWithRows(this.rData),
    //     isLoading: false,
    //   });
    // }, 600);
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    let dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    if (nextProps.data.result !== this.props.dataSource) {
      // let data = genData(0,nextProps.data.result)
      
      this.setState({
        dataSource: dataSource.cloneWithRows(nextProps.data.result),
      });
    }
  }

  // onEndReached = (event) => {
  //   // load new data
  //   // hasMore: from backend data, indicates whether it is the last page, here is false
  //   if (this.state.isLoading && !this.state.hasMore) {
  //     return;
  //   }
  //   console.log('reach end', event);
  //   this.setState({ isLoading: true });
  //   setTimeout(() => {
  //     this.rData = { ...this.rData, ...genData(++pageIndex) };
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(this.rData),
  //       isLoading: false,
  //     });
  //   }, 1000);
  // }

  render() {
    // const { result } = this.props.data
    const { height} = this.state
    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        // renderRow={row}
        // renderSeparator={separator}
        className="am-list"
        pageSize={4}
        renderBodyComponent={() => <MyBody />}
        // useBodyScroll
        renderRow={(rowData, sIndex, rIndex) => <ListItem item={rowData} index={rIndex} length={this.state.dataSource.length}  />}
        onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
        onEndReachedThreshold={10}
        style={{
          height: `${height}px`
        }}
      />
    );
  }
}


export default List