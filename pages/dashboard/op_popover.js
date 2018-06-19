import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
;
import Popover from '../../containers/Uielements/Popover';

export default Page(() => (
  <div>
    <Helmet>
      <title>Popover</title>
    </Helmet>
    <div>
      <Popover />
    </div>
  </div>
));
