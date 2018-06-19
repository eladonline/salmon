import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
;
import Radiobox from '../../containers/Forms/Radiobox';

export default Page(() => (
  <div>
    <Helmet>
      <title>Radiobox</title>
    </Helmet>
    <div>
      <Radiobox />
    </div>
  </div>
));
