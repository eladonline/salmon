import Helmet from 'react-helmet';
import Page from '../hocs/publicPage';
import SignUp from '../containers/Page/signup.js';

export default Page(() => (
  <div>
    <Helmet>
      <title>Sign Up</title>
    </Helmet>
    <div>
      <SignUp />
    </div>
  </div>
));
