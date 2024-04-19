import { Title, StartLink,Text, Icon } from "./Home.styled";

export default function Home() {
    return (
        <>
        <Icon/>
        <Title>
          Phonebook
        </Title>
        <Text>React app that helps you store and manage your contacts</Text>
        <StartLink to="/register">Let's start!</StartLink>
       </>
    );
  }