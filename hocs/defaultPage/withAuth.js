import React, { Component } from 'react'
import Router from 'next/router'
import {getCookieFromServer, getCookieFromBrowser} from '../../helpers/session'
import {appConfig} from 'src/logic'
import {getUserData} from 'src/logic/redux/auth/selectors'
import {setUserFromCookies} from 'src/logic/redux/auth/actions'
export default ChildComponent =>
  class withAuth extends Component {
    // static redirectToLogin (context) {
    //   const { isServer, req, res } = context
    //   if (isServer) {
    //     res.writeHead(302, { Location: `/login?next=${req.originalUrl}` })
    //     res.end()
    //   } else {
    //     Router.push(`/login?next=${context.asPath}`)
    //   }
    // }
  
    // static redirectTo404 (context) {
    //   const { isServer, res } = context
    //   if (isServer) {
    //     res.writeHead(302, { Location: '/notfound' })
    //     res.end()
    //   } else {
    //     Router.push('/notfound')
    //   }
    // }
  
    // static userHasPermission (user) {
    //   const userGroups = user.groups || []
    //   let userHasPerm = true
    //   // go here only if we have specific permission requirements
    //   if (permissions.length > 0) {
    //     // will deny perm if user is missing at least one permission
    //     for (let i = 0, l = permissions.length; i < l; i++) {
    //       if (userGroups.indexOf(permissions[i]) === -1) {
    //         userHasPerm = false
    //         break
    //       }
    //     }
    //   }
    //   return userHasPerm
    // }
  
    static async getInitialProps (context) {
      console.log('context', context)
      const { isServer, store, req } = context.ctx
    //   // const state = store.getState();
      let user = null
    //   // Get User From Cookies
      if (isServer) {
        // happens on page first load
        user = getCookieFromServer(appConfig.userCooliesKey, req)
      } else {
        // happens on client side navigation
        user = getCookieFromBrowser(appConfig.userCooliesKey)
      }
      if('user'){
        store.dispatch(setUserFromCookies('user'))
      }
    //   if(user){
    //     console.log('dispatch')
    //     store.dispatch(setUserFromCookies('user'))
    //   }
    //   // console.log('isServer', isServer)
    //   // console.log('store', store)
    //   // if (user) {
    //   //   // mean user is logged in so we verify permissions
    //   //   if (!isPublicPage) {
    //   //     if (!this.userHasPermission(user)) {
    //   //       this.redirectTo404(context)
    //   //     }
    //   //   }
    //   // } else {
    //   //   // anonymous user
    //   //   if (!isPublicPage) {
    //   //     this.redirectToLogin(context)
    //   //   }
    //   // }
  
      if (typeof ChildComponent.getInitialProps === 'function') {
        const initProps = await ChildComponent.getInitialProps(context)
        return initProps
      }
  
      return {}
    }
  
    render () {
      if(this.props.token){ // Workaround to help us keep client store with token from server store;
        this.props.dispatch(setUserFromCookies(this.props.token))
      }
      return <ChildComponent {...this.props} />
    }
  };