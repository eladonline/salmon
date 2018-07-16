import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
import Dropdown from '../../containers/Uielements/Dropdown/dropdown.js';
;

export default Page(() => (
  <div>
    <Helmet>
      <title>Dropdown</title>
    </Helmet>
    <div>
      <Dropdown />
    </div>
  </div>
));
