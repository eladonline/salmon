import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
import ReactDates from '../../containers/AdvancedUI/ReactDates/reactDates';
;

export default Page(() => (
  <div>
    <Helmet>
      <title>React Dates</title>
    </Helmet>
    <div>
      <ReactDates />
    </div>
  </div>
));
