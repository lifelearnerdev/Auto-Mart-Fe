import React, { useState, useEffect } from 'react';
// import { Redirect } from 'react-router-dom';
import { Grid, Typography, TextField,
  Button, Container, Link, CircularProgress,
  InputLabel, FormControl, Input, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import QueryString from 'query-string';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import styles from '../../assets/styles/containers/formContainer';
import logo from '../../assets/images/automart_logo.png';
import signup from '../authentication/signup/signupAction';
import login from '../authentication/login/loginAction';

/**
 * Container, present the Login and Signup Forms
 * @param {Object} classes The css classes for styling
 * @param {String} title The title to appear under the logo
 * @param {String} subtitle The subtitle to appear right under the title
 * @param {String} name The full name on the form
 * @param {String} email The email address
 * @param {String} password The password
 * @param {String} confirmPassword The confirm password string
 * @param {String} loginLink Link to the login page
 * @param {String} forgotPassword For forgot password
 * @param {String} alreadyAccount If the user already has an account
 * @param {String} signInUp Text for the main button to Login or Create account
 * @param {String} getStarted Link to the signup page
 * @param {Func} handleSubmit Function to handle the form submition
 * @returns {Node} JSX to render the Form
 */
const Form = (
  {
    classes, title, subtitle, name, email, password, confirmPassword,
    loginLink, forgotPassword, alreadyAccount, signInUp, getStarted, location
  }) => {
  const [fullName, setName] = useState('');
  const [emailAddress, setEmail] = useState(localStorage.getItem('user_email') || '');
  const [pass, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [isNameDisabled, disableName] = useState(true);
  const [isEmailDisabled, disableEmail] = useState(true);
  const [isPasswordDisabled, disablePassword] = useState(true);
  const [isConfirmDisabled, disableConfirm] = useState(true);
  const [showPassword, hidePassword] = useState(false);
  const errorMessage = 'This field is required';
  const isValidEmail = emailAddress.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  const errorEmail = 'Email must of format john@doe.self';
  const isValidPass = pass.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/);
  const errorPass = 'Password must contain at least one uppercase, lowercase, number and special character';
  const isValidConfirm = confirm === pass;
  const isValidName = fullName.trim().includes(' ');
  const errorConfirm = 'Password must match';
  const enableBtn = getStarted || (fullName && emailAddress && pass && confirm &&
  isValidEmail && isValidPass && isValidConfirm && isValidName);
  const passwordIcon = showPassword ? <Visibility /> : <VisibilityOff />;
  const type = showPassword ? 'text' : 'password';


  const loadingS = useSelector(state => state.signup.isLoading);
  const loadingL = useSelector(state => state.login.isLoading);
  const loading = loadingS || loadingL;
  let loginError = useSelector(state => state.login?.error);
  let signupError = useSelector(state => state.signup?.error);
  const isAuthenticated = useSelector(state => state.login.isAuthenticated);
  const dispatch = useDispatch();
  const history = useHistory();

  const redirect = () => {
    const { redirectTo } = QueryString.parse(location.search);
    return isAuthenticated ? history.push(redirectTo || '/cars') : null;
  };

  useEffect(() => {
    setPassword('');
    setConfirm('');
    if (isAuthenticated) redirect();
  }, [loginError, signupError, isAuthenticated]);

  const handlePasswordVisibility = () => {
    if (showPassword) hidePassword(false);
    else hidePassword(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (getStarted) {
      dispatch(login({
        email: emailAddress,
        password: pass
      }, window.location));
    } else {
      dispatch(signup({
        firstName: fullName.trim().split(' ')[0],
        lastName: fullName.trim().split(' ')[1],
        email: emailAddress,
        password: pass
      }, window.location));
    }
  };

  return (
    <>
      <Grid container>
        <Grid item md={7} lg={7} xl={7} className={classes.photoGrid} />
        <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={classes.formGrid}>
          <Container className={classes.formContainer}>
            <Container style={{ width: '100%', textAlign: 'center' }}>
              <img src={logo} alt="logo" className={classes.logo} />
            </Container>
            <Typography className={classes.createTypog} variant="h4">
              {title}
            </Typography>
            <Typography className={classes.fillTypog}>
              {subtitle}
            </Typography>
            <form onSubmit={e => handleSubmit(e)}>
              <Grid className={classes.textFields}>
                <TextField
                  label={name}
                  fullWidth
                  type="text"
                  color="primary"
                  helperText={(!fullName && !isNameDisabled && errorMessage) ||
                  (!isValidName && !isNameDisabled && 'Name must be of format Eric Malaba')}
                  error={(!fullName && !isNameDisabled) ||
                  !isValidName && !isNameDisabled}
                  value={fullName}
                  id="name"
                  name="name"
                  onChange={e => setName(e.target.value)}
                  className={classes.textField}
                  style={{ display: !name && 'none' }}
                  onBlur={() => disableName(false)}
                />
                <TextField
                  label={email}
                  fullWidth
                  color="primary"
                  id="email"
                  name="email"
                  type="email"
                  defaultValue={emailAddress}
                  className={classes.textField}
                  style={{ display: !email && 'none' }}
                  onChange={(e) => setEmail(e.target.value)}
                  helperText={((!emailAddress && !isEmailDisabled) && errorMessage) ||
                  ((!isValidEmail && !isEmailDisabled) && errorEmail) || ''}
                  error={((!emailAddress && !isEmailDisabled) ||
                  (!isEmailDisabled && !isValidEmail))}
                  onBlur={() => disableEmail(false)}
                />
                <FormControl
                  className={classes.textField}
                  error={!getStarted ? (!isPasswordDisabled && !isValidPass) :
                    (!isPasswordDisabled && !pass)}
                  onBlur={() => disablePassword(false)}
                  fullWidth
                  style={{ display: !password && 'none' }}
                >
                  <InputLabel htmlFor="password">{password}</InputLabel>
                  <Input
                    id="password"
                    name="password"
                    value={pass}
                    required
                    color="primary"
                    type={type}
                    onChange={e => setPassword(e.target.value)}
                    endAdornment={(
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={() => handlePasswordVisibility()}
                      >
                        {passwordIcon}
                      </IconButton>
                    )}
                  />
                  <small className={classes.small}>
                    {((!pass && !isPasswordDisabled) && errorMessage) ||
                    ((!isValidPass && !getStarted && !isPasswordDisabled) && errorPass) || ''}
                  </small>
                </FormControl>
                <FormControl
                  className={classes.textField}
                  error={((!confirm && !isConfirmDisabled) ||
                  (!isConfirmDisabled && !isValidConfirm))}
                  onBlur={() => disableConfirm(false)}
                  fullWidth
                  style={{ display: !confirmPassword && 'none' }}
                >
                  <InputLabel htmlFor="confirm">{confirmPassword}</InputLabel>
                  <Input
                    id="confirm"
                    name="confirm"
                    value={confirm}
                    aria-label="Toggle password visibility"
                    color="primary"
                    type={type}
                    onChange={e => setConfirm(e.target.value)}
                    endAdornment={(
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={() => handlePasswordVisibility()}
                      >
                        {passwordIcon}
                      </IconButton>
                    )}
                  />
                  <small className={classes.small}>
                    {((!confirm && !isConfirmDisabled) && errorMessage) ||
                  ((!isValidConfirm && !isConfirmDisabled) && errorConfirm) || ''}
                  </small>
                </FormControl>
                <Link
                  className={classes.loginLink}
                  style={{ display: !loginLink && 'none' }}
                  href="/login"
                >
                  Login
                </Link>
                <Typography
                  style={{ display: !alreadyAccount && 'none' }}
                  className={classes.forgotPass}>
                  {alreadyAccount}
                </Typography>
                <Link
                  style={{ display: !forgotPassword && 'none' }}
                  className={classes.forgotPass}>
                  {forgotPassword}
                </Link>
              </Grid>
              <Container variant="span" className={classes.btnWrapper}>
                <Button
                  className={classes.createBtn}
                  type="submit"
                  disabled={!enableBtn}
                >
                  {signInUp}
                </Button>
                <Grid container>
                  <Grid item xs={7} style={{ textAlign: 'right' }}>
                    <Typography
                      style={{ display: !getStarted && 'none', float: 'none' }}
                      className={classes.forgotPass}>
                      Don't have an account?
                    </Typography>
                  </Grid>
                  <Grid item xs={5} style={{ textAlign: 'left' }}>
                    <Link
                      className={classes.loginLink}
                      style={{ display: !getStarted && 'none', float: 'none' }}
                      href="/signup"
                    >
                      Get Started
                    </Link>
                  </Grid>
                  {loading ? <CircularProgress color="secondary" style={{ margin: '0 auto' }} /> : ''}
                </Grid>
              </Container>
            </form>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

Form.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  name: PropTypes.string,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string,
  loginLink: PropTypes.string,
  forgotPassword: PropTypes.string,
  alreadyAccount: PropTypes.string,
  signInUp: PropTypes.string.isRequired,
  getStarted: PropTypes.bool
};
Form.defaultProps = {
  classes: {},
  title: '',
  subtitle: '',
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  loginLink: '',
  forgotPassword: '',
  alreadyAccount: '',
  signInUp: '',
  getStarted: false
};

export default withStyles(styles)(Form);
