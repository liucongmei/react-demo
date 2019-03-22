import  axios  from './../../utils/request'
export default {
  keepTopic: (post) => (dispatch, getState) => {
    const { page, type, limit } = post
    axios.get(`topics?tab=${type}&page=${page}&limit=${limit}`).then(function (response) {
      console.log(response);
      return dispatch(
      (() => {
        return {
          type: 'SAVE_TOPIC',
          page,
          topicType: type,
          result: response.data.data
        }
      })()
    )
    })
    
    
  },
  recordScrollSite: scrollTop => (dispatch, getState) => {
    return dispatch(
      (() => {
        return {
          type: 'SCROLL_TOP_SITE',
          scrollTop
        }
      })()
    )
  }
}