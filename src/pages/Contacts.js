import { useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectError, selectIsLoading } from "redux/contacts/selectors";

import { MainTitle, Title } from "../components/Layout/Layout.styled";
import ContactList from '../components/ContactList'
import ContactForm from "../components/ContactForm";
import Filter from "../components/Filter";
import Spinner from "components/Spinner";

 

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(()=>{
    dispatch(fetchContacts())
  },[dispatch]);

    return (
        <>
          <MainTitle>Let's add a new contact to your phonebook</MainTitle>
          <ContactForm/>
          <Title>Contacts</Title>
          <Filter/>
          {isLoading && !error && <Spinner/>}
         
          <ContactList/>
        </>
    );
  };

export default Contacts; 

