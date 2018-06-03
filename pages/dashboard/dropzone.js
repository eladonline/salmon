import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
;
import Dropzon from '../../containers/AdvancedUI/dropzone/';

export default Page(() => (
  <div>
    <Helmet>
      <title>Dropzon</title>
    </Helmet>
    <div>
      <Dropzon />
    </div>
  </div>
));
