import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
;
import Tab from '../../containers/Forms/Tab';

export default Page(() => (
  <div>
    <Helmet>
      <title>Tab</title>
    </Helmet>
    <div>
      <Tab />
    </div>
  </div>
));
