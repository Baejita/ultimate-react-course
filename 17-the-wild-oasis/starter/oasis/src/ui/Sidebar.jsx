import styled from "styled-components";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-bottom: 1px solic var(--color-grey-100);

  grid-row: 1 / -1;
`;
function Sidebar() {
  return <StyledSidebar>Sidbar</StyledSidebar>;
}

export default Sidebar;
