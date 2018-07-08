import React, { Component } from 'react';
// import Link from 'next/link'
import Page from '../hocs/publicPage';
import HomePage from './Homepage'

export default Page(() => <HomePage />, true);

/*
import React, { Component } from 'react';
import Page from '../hocs/publicPage';
import Signin from '../containers/Page/signin';
import MyTest from '../containers/MyTest';
import {setUserFromCookies} from 'src/logic/redux/auth/actions'
export default class AddCount extends Component {
  render () {
    if(this.props.initProps){
      this.props.dispatch(setUserFromCookies(this.props.initProps))
    }

    return (
      <MyTest />
    )
  }
}
*/
