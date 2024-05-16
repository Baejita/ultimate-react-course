import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: orange;
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solic var(--color-grey-100);
`;

function Header() {
  return <StyledHeader>HAEDER</StyledHeader>;
}

export default Header;
