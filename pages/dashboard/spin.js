import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
import Spin from '../../containers/Feedback/Spin';
;

export default Page(() => (
  <div>
    <Helmet>
      <title>Spin</title>
    </Helmet>
    <div>
      <Spin />
    </div>
  </div>
));
