import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
import BlankPage from '../../containers/blankPage';
;

export default Page(() => (
  <div>
    <Helmet>
      <title>Blank Page</title>
    </Helmet>
    <div>
      <BlankPage />
    </div>
  </div>
));
