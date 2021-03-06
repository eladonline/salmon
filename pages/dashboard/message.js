import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
import Message from '../../containers/Feedback/Message';
;

export default Page(() => (
  <div>
    <Helmet>
      <title>Message</title>
    </Helmet>
    <div>
      <Message />
    </div>
  </div>
));
