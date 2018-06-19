import React, { Component } from 'react';
import Link from 'next/link';
import Page from '../hocs/publicPage';
import Signin from 'src/screens/auth/signin';

export default Page(() => <Signin />);
