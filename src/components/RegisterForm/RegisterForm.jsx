import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormWrapper, InputContainer, Input } from "../ContactForm/ContactForm.styled";
import  Button  from "components/Button";
import { Formik} from 'formik';
import * as Yup from 'yup';
import { FormError, nameRegExp,emailRegExp } from 'utils/formik';

import { useNavigate } from "react-router-dom";


const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).matches(nameRegExp,'Enter valid name').required(),
  email: Yup.string().min(10).matches(emailRegExp,'Enter valid email').required(),
  password: Yup.string().min(6).required(),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    name:'',
    email:'',
    password:'',
};

const handleSubmit = (values, actions) => {
  dispatch(
    register({
      name: values.name,
      email: values.email,
      password: values.password,
    })
  );
  actions.resetForm();
  navigate("/verify");
};

  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    > 
      <FormWrapper autoComplete="off">
          <InputContainer>
            <div>
              <Input name="name" type="text" placeholder="Your name" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" />
              <FormError name="name" component='span' />
            </div>
          </InputContainer>

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

          <Button type={"submit"}>Register</Button>
        </FormWrapper>
      </Formik>
  );
};


export default RegisterForm;