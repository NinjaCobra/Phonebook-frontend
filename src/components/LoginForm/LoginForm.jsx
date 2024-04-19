import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { logIn } from 'redux/auth/operations';
import { FormWrapper, InputContainer, Input } from "../ContactForm/ContactForm.styled";
import  Button  from "components/Button";
import { ButtonText } from './LoginForm.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {MdLogin} from 'react-icons/md'
import { FormError } from 'utils/formik';
import { Notify } from "notiflix";
import { useAuth } from 'hooks';

const validationSchema = Yup.object().shape({
  email: Yup.string().min(10).required(),
  password: Yup.string().min(6).required(),
});


const LoginForm = () => {
  const dispatch = useDispatch();
  const { error } = useAuth();

  const initialValues = {
    email:'',
    password:'',
  };
  
  useEffect(() => { 
    if (error !== null) {
      Notify.failure("The email address or password is incorrect. Please retry", {
        position: "center-top",
        borderRadius: "10px",
        pauseOnHover: true,
        cssAnimationDuration: 350,
        width: "400px"
      });
    }
  }, [error]);

  const handleSubmit = (values, actions) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    > 
      <FormWrapper>
          <InputContainer>
            <div>
              <Input name="email" type="email" placeholder="Email"  title="Email must contain an “@” symbol before the domain" />
              <FormError name="email" component='span'/>
            </div>
          </InputContainer>

          <InputContainer>
            <div>
              <Input name="password" type="password" placeholder="Password" autoComplete='off' />
              <FormError name="password" component='span'/>
            </div>
          </InputContainer>

          <Button type={"submit"}><ButtonText>Log In <MdLogin/></ButtonText></Button>
        </FormWrapper>
      </Formik>
  );
};

export default LoginForm;