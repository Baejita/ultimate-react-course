import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.main`
  /* background-color: orange; */
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading type="h1">The Wild Oasis</Heading>
            <div>
              <Heading type="h2">Check in and out</Heading>
              <Button
                variation="primary"
                size="medium"
                onClick={() => alert("check in")}
              >
                Check in
              </Button>
              <Button
                variation="secondary"
                size="large"
                onClick={() => alert("check out")}
              >
                Check out
              </Button>
            </div>
          </Row>

          <Row type="vertical">
            <Heading type="h3">Form</Heading>
            <from>
              <Input type="number" placeholder="Number of guests"></Input>
              <Input type="number" placeholder="Number of guests"></Input>
            </from>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
