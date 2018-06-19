import Helmet from 'react-helmet';
import Page from '../hocs/publicPage';
import SignUp from 'src/screens/auth/signup';
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
