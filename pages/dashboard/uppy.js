import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
;
import UppyUploader from '../../containers/AdvancedUI/uppy';

export default Page(() => (
  <div>
    <Helmet>
      <title>Uppy Uploader</title>
    </Helmet>
    <div>
      <UppyUploader />
    </div>
  </div>
));
