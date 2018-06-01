import { compose } from 'redux';
import { createStore as withReduxSaga } from 'src/logic';
import WithData from './withData';
import WithLang from '../withLang';
import WithLayout from './withLayout';

export default compose(withReduxSaga, WithData, WithLayout, WithLang);
