import { compose } from 'redux';
import WithLayout from './withLayout';
import WithLang from '../withLang';
import withAuth from '../withAuth';


export default compose(withAuth, WithLayout, WithLang);
