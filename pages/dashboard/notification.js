import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
import Notification from '../../containers/Feedback/Notification';
;

export default Page(() => (
  <div>
    <Helmet>
      <title>Notification</title>
    </Helmet>
    <div>
      <Notification />
    </div>
  </div>
));
