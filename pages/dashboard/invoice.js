import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
import Invoice from '../../containers/Page/invoice/invoice.js';
;

export default Page(() => (
  <div>
    <Helmet>
      <title>Invoice</title>
    </Helmet>
    <div>
      <Invoice />
    </div>
  </div>
));
