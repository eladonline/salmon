import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
;
import Contacts from '../../containers/Contacts';

export default Page(() => (
  <div>
    <Helmet>
      <title>Contacts</title>
    </Helmet>
    <div>
      <Contacts />
    </div>
  </div>
));
