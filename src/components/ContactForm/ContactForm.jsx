import React from "react";
import PropTypes from 'prop-types';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { Notify } from "notiflix";
import { FormWrapper, InputContainer, Input } from "./ContactForm.styled";
import  Button  from "components/Button";
import {nameRegExp, phoneRegExp,emailRegExp, FormError} from 'utils/formik';

import {useDispatch } from "react-redux";
import { addContact } from "redux/contacts/operations";
import { useContacts } from "hooks";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).matches(nameRegExp, 'Enter valid name').required(),
  email: Yup.string().min(10).matches(emailRegExp,'Enter valid email').required(),
  phone: Yup.string().matches(phoneRegExp,'Enter valid number').required(),});

const ContactForm = ()=> {
  const dispatch = useDispatch();
  const contacts = useContacts();

  const initialValues = {
    name:'',
    phone: '',
    email: ''
  }
    return(
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) =>{
          const isInclude = contacts.some(contact=> contact.name.toLowerCase() === values.name.toLowerCase());
          
          if(isInclude){
            return Notify.failure(`${values.name} is already in contacts`);
          }
            dispatch(addContact(values))
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

          <Button type={"submit"}>Add contact</Button>
        </FormWrapper>
      </Formik>
    );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  contacts: PropTypes.array,
}

export default ContactForm;