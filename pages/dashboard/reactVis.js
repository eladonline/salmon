import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
import ReactVis from '../../containers/Charts/reactVis';
;

export default Page(() => (
  <div>
    <Helmet>
      <title>React Vis</title>
    </Helmet>
    <div>
      <ReactVis />
    </div>
  </div>
));
