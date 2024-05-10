import { Container, StyledImage, Title } from "../FirstPage/FirstPage.styled";
import example from '../../assets/example.png';

const  HomePage = () => {
    return (
      <Container>
        <Title>First Page</Title>
        <StyledImage src={example} alt="Example" />
      </Container>
    );
  };
  
  export default HomePage;