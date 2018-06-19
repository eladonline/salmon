import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
;
import Editor from '../../containers/Forms/editor';

export default Page(() => (
  <div>
    <Helmet>
      <title>Editor</title>
    </Helmet>
    <div>
      <Editor />
    </div>
  </div>
));
