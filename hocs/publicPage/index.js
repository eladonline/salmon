import { compose } from 'redux';
import WithLayout from './withLayout';
import WithLang from '../withLang';


export default compose(WithLayout, WithLang);
