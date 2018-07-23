import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
import Transfer from '../../containers/Forms/Transfer';
;

export default Page(() => (
  <div>
    <Helmet>
      <title>Transfer</title>
    </Helmet>
    <div>
      <Transfer />
    </div>
  </div>
));
