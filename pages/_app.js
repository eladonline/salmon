import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import {withReduxSaga} from 'src/logic/redux/store/web/createStoreSsr'
import withLang from 'hocs/withLang';
import {appConfig} from 'src/logic';
import {setUserFromCookies} from 'src/logic/redux/auth/actions'
import {getCookieFromServer, getCookieFromBrowser} from '../helpers/session'
class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}
    let token
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }
    if (ctx.isServer) {
      // happens on page first load
      token = getCookieFromServer(appConfig.userCooliesKey, ctx.req)
    } else {
      // happens on client side navigation
      token = getCookieFromBrowser(appConfig.userCooliesKey)
    }

    if(token){
      ctx.store.dispatch(setUserFromCookies(token))
    }
    return { pageProps, token }
  }

  render () {
    const { Component, pageProps, store, token } = this.props
    console.log('userFromCookies', token)
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} token={token} dispatch={store.dispatch} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxSaga(MyApp)