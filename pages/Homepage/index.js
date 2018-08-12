import React, { Component } from 'react';
import NoSsr from 'react-no-ssr';
import dynamic from 'next/dynamic'
const HomepageNoSSr = dynamic(import('./homepage'))

export default class Homepage extends Component {
  render() {
    return (
      <NoSsr>
        <HomepageNoSSr />
      </NoSsr>
    );
  }
};
