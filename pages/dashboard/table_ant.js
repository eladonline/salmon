import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
;
import AntTables from '../../containers/Tables/antTables';

export default Page(() => (
  <div>
    <Helmet>
      <title>AntTables</title>
    </Helmet>
    <div>
      <AntTables />
    </div>
  </div>
));
