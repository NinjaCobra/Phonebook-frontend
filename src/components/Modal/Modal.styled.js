import styled from "styled-components";

export const ModalBackdrop = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   min-height: 350px;
   max-width: 350px;
   width: 100%;
   padding: 12px;
   background-color: ${({theme}) => theme.nav};
   border-radius: 3px;
   box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
   0px 1px 1px 0ModalTitlepx rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const ModalTitle = styled.h3`
   color: ${({theme}) => theme.main};
   margin-bottom: 10px;
   font-size: 24px;
`;

export const Contact = styled.p`
   margin-bottom: 20px;
   font-size: 18px;
`;


