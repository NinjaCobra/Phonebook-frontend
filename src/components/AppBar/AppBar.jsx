import  Navigation  from '../Navigation';
import  UserMenu  from '../UserMenu';
import AuthNav  from '../AuthNav';
import { useAuth } from 'hooks';
import { Header } from './AppBar.styled';
import Switch from '../Switch'

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      <Switch></Switch>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};

export default AppBar;