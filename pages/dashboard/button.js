import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
import Button from '../../containers/Forms/Button';
;

export default Page(() => (
  <div>
    <Helmet>
      <title>Button</title>
    </Helmet>
    <div>
      <Button />
    </div>
  </div>
));
