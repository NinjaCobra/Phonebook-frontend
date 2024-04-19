import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateAvatar, updateSubscription } from 'redux/auth/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useAuth } from '../hooks/useAuth';
import { MainTitle } from '../components/Layout/Layout.styled';
import Spinner from 'components/Spinner';
import { Image, Input, Select, Text, User, Container } from './Profile.styled';
import Button from 'components/Button/Button';
import { refreshUser } from 'redux/auth/operations';

const Profile = () => {
  const [avatar, setAvatar] = useState();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { user } = useAuth();
  let form = new FormData();

  const handleChange = e => {
    setAvatar(e.target.files[0]);
  };

  const handleSubmit = () => {
    form.append('avatar', avatar);
    dispatch(updateAvatar(form));
    setAvatar('');
  };

  const handleSubscription = e => {
    dispatch(updateSubscription({ subscription: e.target.value }));
  };

  useEffect(() => {
    dispatch(refreshUser);
  }, []);

  return (
    <>
      <MainTitle>Profile</MainTitle>
      {user.avatarURL ? (
        <Image src={user.avatarURL} alt="avatar" />
      ) : (
        <Image
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png?w=740&t=st=1687114280~exp=1687114880~hmac=631fe338e8dbbd1bf816d61c736badf4d1e064f97d21bd1ab75e604ea943d14d"
          alt="avatar"
        />
      )}
      <Container>
        <Text>Change your profile picture</Text>
        <Button type="submit" disabled={!avatar} onClick={handleSubmit}>
          Upload
        </Button>
        <Input type="file" onChange={handleChange} />
      </Container>

      <Text>Profile info</Text>
      <div>
        <Text>
          Email: <User>{user.email}</User>
        </Text>
        <Text>
          Subscription: <User>{user.subscription}</User>
        </Text>
      </div>

      <form>
        <Text>Choose your subscription</Text>
        <Select
          name="subscription"
          id="subscription"
          onChange={handleSubscription}
          value={user.subscription}
        >
          <option value="starter">starter</option>
          <option value="pro">pro</option>
          <option value="business">business</option>
        </Select>
      </form>

      {isLoading && !error && <Spinner />}
    </>
  );
};

export default Profile;
