import Helmet from 'react-helmet';
import Page from '../hocs/publicPage';
import FiveHundred from '../containers/Page/500.js';

export default Page(() => (
  <div>
    <Helmet>
      <title>500</title>
    </Helmet>
    <div>
      <FiveHundred />
    </div>
  </div>
));
