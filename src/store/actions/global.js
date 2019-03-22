
import {  Route } from 'react-router-dom'

export default {
  changeTab: (post) => (dispatch, getState) => {
    const { tab } = post
   
    return dispatch(
      (() => {
        return {
          type: 'CHANGE_TAB',
          tab: tab
        }
      })()
    )
    
    
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