import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
;
import Badge from '../../containers/Uielements/Badge';

export default Page(() => (
  <div>
    <Helmet>
      <title>Badge</title>
    </Helmet>
    <div>
      <Badge />
    </div>
  </div>
));
