import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
;
import Checkout from '../../containers/Ecommerce/checkout';

export default Page(() => (
  <div>
    <Helmet>
      <title>Checkout</title>
    </Helmet>
    <div>
      <Checkout />
    </div>
  </div>
));
