import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
import Shuffle from '../../containers/Shuffle';
;

export default Page(() => (
  <div>
    <Helmet>
      <title>Shuffle</title>
    </Helmet>
    <div>
      <Shuffle />
    </div>
  </div>
));
