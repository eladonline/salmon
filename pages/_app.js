import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import {withReduxSaga} from 'src/logic/redux/store/web/createStoreSsr'
import withLang from 'hocs/withLang';
import {appConfig} from 'src/logic';
import {setUserFromCookies} from 'src/logic/redux/auth/actions'
import {getCookie} from '../helpers/session'
import {api, envConfig} from 'src/logic'
import {config as reactParseConfig, setReactParseDispatch} from 'react-parse'
const apiConfig = { baseURL: envConfig.SERVER_URL, appId: envConfig.PARSE_ID }
api.init(apiConfig);
reactParseConfig.init(apiConfig);

class MyApp extends App {
  static async getInitialProps (context) {
    const { Component, ctx } = context
    let pageProps = {}
    let userCookie
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }
    userCookie = getCookie(appConfig.userCooliesKey, ctx.req)
    if(userCookie){
      ctx.store.dispatch(setUserFromCookies(userCookie))
    }
    return { pageProps, userCookie }
  }

  render () {
    const { Component, pageProps, store, userCookie } = this.props
    setReactParseDispatch(store.dispatch)
    console.log('userFromCookies', userCookie)
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} userCookie={userCookie} dispatch={store.dispatch} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxSaga(MyApp)