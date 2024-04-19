import React from "react";
import { List } from "./ContactList.styled";
import ContactItem from "components/ContactItem/ContactItem";

import { useVisibleContacts } from "hooks";

const ContactList = () => {
    const contacts = useVisibleContacts();

    return (
        <List>
            {contacts.map(({name, _id, phone, email,favorite})=>
            <ContactItem key={_id} contact={{name, _id, phone, email, favorite}}>
            </ContactItem>
            )}
        </List>
    );
};

export default ContactList;