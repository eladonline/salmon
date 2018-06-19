import React, { Component } from 'react'
import Router from 'next/router'
import {getCookie} from '../helpers/session'
import redirect from '../helpers/redirect'
import {appConfig} from 'src/logic'
import {getUserData} from 'src/logic/redux/auth/selectors'
import {setUserFromCookies, setInitUrl} from 'src/logic/redux/auth/actions'
import 'isomorphic-fetch';

export default ChildComponent =>
  class withAuth extends Component {
  
    static async getInitialProps (context) {
      const {ctx} = context;
      debugger
      const req = ctx ? ctx.req : null
      let initUrl = null;
      let pageProps = {};
      let userCookie = getCookie(appConfig.userStorageKey, req)
      if(!userCookie){
        redirect(context, 'signin', true)
        initUrl = ctx.isServer ? req.originalUrl : context.asPath
      }

  
      if (typeof ChildComponent.getInitialProps === 'function') {
        pageProps = await ChildComponent.getInitialProps(context)
      }
  
      return {pageProps, initUrl}
    }
  
    render () {
      const {pageProps, userCookie, initUrl} = this.props
      if(userCookie){ // Workaround to help us keep client store with token from server store;
        this.props.dispatch(setUserFromCookies(userCookie))
      }
      if(initUrl){
        this.props.dispatch(setInitUrl(initUrl))
      }
      return <ChildComponent {...this.props} {...pageProps}/>
    }
  };