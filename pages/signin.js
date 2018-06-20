import React, { Component } from 'react';
import Link from 'next/link';
import Page from '../hocs/publicPage';
import Signin from 'src/screens/auth/Login';
import "style/auth.scss"

export default Page(() => <Signin />);
