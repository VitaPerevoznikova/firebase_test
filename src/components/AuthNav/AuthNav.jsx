import { Link, Wrapper } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Wrapper>
       <Link to="/login">Log In</Link><Link to="/register">Registration</Link>{' '}
    </Wrapper>
  );
};
export default AuthNav;