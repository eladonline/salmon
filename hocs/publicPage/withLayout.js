import React from 'react';
import Layout from '../../containers/Layout';

export default ComposedComponent => props => {
  return (
    <Layout>
      <ComposedComponent {...props} />
    </Layout>
  );
};
