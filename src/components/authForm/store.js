import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, register, resetPassword, logout, onAppLoad, cleanLastUser, setAuthForm } from 'src/logic/redux/auth/actions';
import { getAuthForm, getLastUser, getAuthLoading } from 'src/logic/redux/auth/selectors';

const mapStateToProps = state => ({
  form: getAuthForm(state),
  lastUser: getLastUser(state),
  isLoading: getAuthLoading(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    onAppLoad, login, register, resetPassword, logout, cleanLastUser, setAuthForm,
  }, dispatch),
});

export default comp => connect(mapStateToProps, mapDispatchToProps)(comp);
