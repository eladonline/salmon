import { compose } from 'redux';
import WithData from './withData';
import WithLang from '../withLang';
import WithLayout from './withLayout';
import withAuth from './withAuth';

export default compose(withAuth, WithData, WithLayout, WithLang);
