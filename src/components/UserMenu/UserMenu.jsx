import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { UserName, Wrapper, Welcome, Button, Image, Link } from './UserMenu.styled';
import {MdLogout} from'react-icons/md'

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());

  return (
    <Wrapper>
      <Link to='/profile'>
      {user.avatarURL ? (
        <Image src={user.avatarURL} alt="avatar" />
      ) : (
        <Image
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png?w=740&t=st=1687114280~exp=1687114880~hmac=631fe338e8dbbd1bf816d61c736badf4d1e064f97d21bd1ab75e604ea943d14d"
          alt="avatar"
        />
        )}
        </Link>
      <UserName><Welcome>Welcome,</Welcome>{user.email.split('@')[0]}</UserName>
      <Button type="button" onClick={handleLogOut}>Logout <MdLogout/></Button>
    </Wrapper>
  );
};

export default UserMenu;