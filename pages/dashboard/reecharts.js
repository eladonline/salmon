import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
import Recharts from '../../containers/Charts/recharts';
;

export default Page(() => (
  <div>
    <Helmet>
      <title>Recharts</title>
    </Helmet>
    <div>
      <Recharts />
    </div>
  </div>
));
