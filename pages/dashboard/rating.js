import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
import Rating from '../../containers/Uielements/rating';
;

export default Page(() => (
  <div>
    <Helmet>
      <title>rating</title>
    </Helmet>
    <div>
      <Rating />
    </div>
  </div>
));
