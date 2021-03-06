import Helmet from 'react-helmet';
import Page from '../hocs/publicPage';
import ResetPassword from '../containers/Page/resetPassword.js';

export default Page(() => (
  <div>
    <Helmet>
      <title>Reset Password</title>
    </Helmet>
    <div>
      <ResetPassword />
    </div>
  </div>
));
