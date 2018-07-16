import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
import Select from '../../containers/Forms/Select';
;

export default Page(() => (
  <div>
    <Helmet>
      <title>Select</title>
    </Helmet>
    <div>
      <Select />
    </div>
  </div>
));
