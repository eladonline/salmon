import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
;
import Card from '../../containers/Ecommerce/card';

export default Page(() => (
  <div>
    <Helmet>
      <title>Card</title>
    </Helmet>
    <div>
      <Card />
    </div>
  </div>
));
