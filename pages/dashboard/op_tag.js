import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
;
import Tag from '../../containers/Uielements/Tag';

export default Page(() => (
  <div>
    <Helmet>
      <title>Tag</title>
    </Helmet>
    <div>
      <Tag />
    </div>
  </div>
));
