import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
import GoogleChart from '../../containers/Charts/googleChart';
;

export default Page(() => (
  <div>
    <Helmet>
      <title>Google Chart</title>
    </Helmet>
    <div>
      <GoogleChart />
    </div>
  </div>
));
