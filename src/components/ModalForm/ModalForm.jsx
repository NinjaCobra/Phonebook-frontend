import React from "react";
import PropTypes from 'prop-types';
import { Formik} from 'formik';
import * as Yup from 'yup';
import { FormWrapper, InputContainer, Input } from "../ContactForm/ContactForm.styled";
import  Button  from "components/Button";
import {ButtonContainer} from './ModalForm.styled';
import {nameRegExp, phoneRegExp,emailRegExp, FormError} from 'utils/formik'

import {useDispatch } from "react-redux";
import { updateContactById } from "redux/contacts/operations";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).matches(nameRegExp,'Enter valid name').required(),
  phone: Yup.string().matches(phoneRegExp, 'Enter valid number').required(),
  email: Yup.string().min(10).matches(emailRegExp,'Enter valid email').required(),
});
  

const ModalForm = ({contact:{name,_id,phone, email},onClose})=> {
  const dispatch = useDispatch();

  const initialValues = {
    name:name,
    phone: phone,
    email: email,
    _id: _id
  }
    return(
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={({_id,name,phone,email}, actions) =>{
          dispatch(updateContactById({
              _id,
              name,
              phone,
              email
            }))
            onClose();
            actions.resetForm();
        }}
      > 

        <FormWrapper autoComplete="off">
          <InputContainer>
            <div>
              <Input name="name" type="text" placeholder="Full name" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" />
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
              <Input name="phone" type="tel" placeholder="Phone number"  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" />
              <FormError name="phone" component='span'/>
            </div>
          </InputContainer>

          <ButtonContainer>
          <Button type={"submit"}>Save</Button>
          <Button type={"submit"} onClick={onClose}>Cancel</Button>
          </ButtonContainer>
        </FormWrapper>
      </Formik>
    );
};

ModalForm.propTypes = {
  onSubmit: PropTypes.func,
  contacts: PropTypes.array,
}

export default ModalForm;