import Link from 'next/link';
import styled from 'styled-components';



const NavContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    
`;

const NavItems = styled.div`
  margin: 0px 10px;
  font-size: 23px;

  &:hover{

  }
`;

const Nav = () => (
  <NavContainer>
    <Link href="/">
      <NavItems>Home</NavItems>
    </Link>
    <Link href="/about">
      <NavItems>About</NavItems>
    </Link>
    <Link href="/photos">
      <NavItems>Photo's</NavItems>
    </Link>
  </NavContainer>
);

export default Nav;