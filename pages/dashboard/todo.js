import Helmet from 'react-helmet';
import Page from '../../hocs/privatePage';
import Todo from '../../containers/Todo';
;

export default Page(() => (
  <div>
    <Helmet>
      <title>Todo</title>
    </Helmet>
    <div>
      <Todo />
    </div>
  </div>
));
