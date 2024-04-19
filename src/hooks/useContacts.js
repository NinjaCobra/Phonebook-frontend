import { useSelector } from "react-redux";
import { selectContacts } from "redux/contacts/selectors";

export const useContacts = ()=> useSelector(selectContacts);