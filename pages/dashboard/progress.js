import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
import Progress from '../../containers/Forms/Progress';
;

export default Page(() => (
  <div>
    <Helmet>
      <title>Progress</title>
    </Helmet>
    <div>
      <Progress />
    </div>
  </div>
));
