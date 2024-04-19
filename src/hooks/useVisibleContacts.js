import { useSelector } from "react-redux";
import { selectVisibleContacts } from "redux/contacts/selectors";

export const useVisibleContacts = ()=> useSelector(selectVisibleContacts);