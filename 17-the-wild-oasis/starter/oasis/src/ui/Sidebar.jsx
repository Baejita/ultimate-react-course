import styled from "styled-components";

const StyledSidebar = styled.aside`
  background-color: blue;
  padding: 3.2rem 2.4rem;
  border-bottom: 1px solic var(--color-grey-100);
`;
function Sidebar() {
  return <StyledSidebar>Sidbar</StyledSidebar>;
}

export default Sidebar;
