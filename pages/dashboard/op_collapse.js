import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
;
import Collapse from '../../containers/Uielements/Collapse';

export default Page(() => (
  <div>
    <Helmet>
      <title>Collapse</title>
    </Helmet>
    <div>
      <Collapse />
    </div>
  </div>
));
