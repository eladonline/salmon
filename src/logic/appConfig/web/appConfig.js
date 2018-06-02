/*
-- useAuthO:
if false then we use parse authentication
-- userSignUpToAppFlagKey:
help us to know if to navigate user to sign in or to app inrto
-- alwaysNavigateToAppIntro:
when true user always see app intro screen
-- splashDelay:
navigate to different screen only after x ms,
 let the user see all splash animation
*/

const passwordValidator = {
  // Learn more at https://validatejs.org/#validators-password
  presence: true,
  length: {
    minimum: 5,
    message: 'must be at least 5 characters'
  }
}
const appConfig = {
  renderOnlyActiveTab: true,
  useAuthO: false,
  userStorageKey: 'USER_KEY_IN_STORAGE',
  userCooliesKey: 'USER_KEY_IN_Cookies',
  lastUserStorageKey: 'LAST_USER_KEY_IN_STORAGE',
  userSignUpToAppFlagKey: 'USER_IS_SIGN_UP_TO_APP',
  emailKeyInUserData: 'username',
  alwaysNavigateToAppIntro: false,
  splashDelay: 0,
  openAppOnlyAfterGetMember: true,
  createMemberFromClientSide: true,
  checkIfTokenValidOnLoad: true,
  persistLastUser: true,
  useReduxPersist: true,
  passwordValidator,
  navToInitUrlAfterAuthSucces: true,
  openAppAfterOnAppLoad: false // if false we return onAppLoadFinished || auth.selectors.isAuthUser()
};

export default appConfig;
