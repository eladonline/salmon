import Helmet from 'react-helmet';
import Page from '../hocs/publicPage';
import ForgotPassword from '../containers/Page/forgotPassword.js';

export default Page(() => (
  <div>
    <Helmet>
      <title>Forgot Password</title>
    </Helmet>
    <div>
      <ForgotPassword />
    </div>
  </div>
));
