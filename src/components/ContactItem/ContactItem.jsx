import React from "react";
import {deleteContact,addToFavorite} from 'redux/contacts/operations';
import { useDispatch } from "react-redux";
import { Link, Item, Name, IconUser, Text, Button, ButtonContainer } from "./ContactItem.styled";
import {ModalTitle, Contact} from '../Modal/Modal.styled'
import {MdDelete, MdEdit, MdFavoriteBorder, MdFavorite} from 'react-icons/md';
import {useState} from "react";
import Modal from "../Modal";
import ModalForm from '../ModalForm'

const ContactItem = ({contact:{name,_id,phone,email, favorite}}) => {
    const dispatch = useDispatch();
    const [isOpenModal, setIsOpenModal] = useState(false);

    const closeModal=()=> {
      setIsOpenModal(false)
    };
  
    const openModal = () => {
      setIsOpenModal(true)
    };
    
    return (
        <>
            <Item key={_id}>
                <Text><Name><IconUser/>{name}</Name><Link href={`tel:${phone}`}>{phone}</Link><Link href={`mailto:${email}`}>{email}</Link></Text>
            <ButtonContainer>
            <Button type="button" title="Edit contact" onClick={openModal}><MdEdit/></Button>
            <Button type="button" title="Delete contact" onClick={() => dispatch(deleteContact(_id))}
            ><MdDelete /></Button>
            <Button type="button" title="Add contact to favorite " onClick={() => dispatch(addToFavorite({_id, favorite}))}
            >{favorite ? <MdFavorite/> : <MdFavoriteBorder/>}</Button>
            </ButtonContainer>
            </Item>

            {isOpenModal && <Modal onClose={closeModal}>
                <ModalTitle>Let's update the contact</ModalTitle>
                <Contact>{name}: {phone}</Contact>
            <ModalForm onClose={closeModal} contact={{name,_id,phone,email}}/>
            </Modal>}
        </>
)
};

export default ContactItem;