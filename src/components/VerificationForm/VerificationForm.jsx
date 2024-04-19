import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { verify, resendVerify } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { FormWrapper, InputContainer, Input } from "../ContactForm/ContactForm.styled";
import { Text, User, Resend } from '../../pages/Profile.styled'
import  Button  from "components/Button";
import { Formik} from 'formik';
import * as Yup from 'yup';
import { FormError } from 'utils/formik';
import { useNavigate } from "react-router-dom";
import { Notify } from "notiflix";

const validationSchema = Yup.object().shape({
  code: Yup.string().min(6).required("Verification code is required"),
});

const VerificationForm = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (!user.email) {
      return;
    }

    Notify.success(`The verification code has been sent successfully to ${user.email}`, {
      position: "center-top", 
      borderRadius: "10px",
      pauseOnHover: true,
      cssAnimationDuration: 350, 
      width: "400px"
    })
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    code:'',
};

const handleSubmit = (values, actions) => {
  dispatch(
    verify({
      code: values.code,
    })
  );
  actions.resetForm();
  navigate("/login");
  };
  
  const handleResend = ()=>{
    dispatch(resendVerify({ email: user.email }));
    
    Notify.success(`The verification code has been resent successfully to ${user.email}`, {
      position: "center-top", 
      borderRadius: "10px",
      pauseOnHover: true,
      cssAnimationDuration: 350, 
      width: "400px"
    })
  }

  return (
    <>
    {user.email && <Text>Please verify your email address using the code sent to <User>{user.email}</User></Text>}
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    > 
      <FormWrapper autoComplete="off">
          <InputContainer>
            <div>
              <Input name="code" type="code" placeholder="Verification code" autoComplete='off' />
              <FormError name="code" component='span'/>
            </div>
          </InputContainer>

        <Button type={"submit"}>Verify</Button>
        </FormWrapper>
      </Formik>
      {user.email && <Text>Didn't receive the email <Resend onClick={handleResend}>Resend</Resend></Text>}
      </>
  );
};


export default VerificationForm;