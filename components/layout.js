import Head from 'next/head';
import styled from 'styled-components';
import { Global, theme } from '../styles';
import { Navbar, Social } from './index';

const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    background: var(--navy);
    border: 1rem solid white;
    border-radius: 1.5rem;
    display: flex;
`;

const StyledNav = styled.nav`
    display: flex;
    flex: 1 1;
    margin: 0;
`;

const StyledContent = styled.main`
    display: flex;
    flex: 5 5;
`;

const StyledSocials = styled.nav`
    display: flex;
    justify-content: flex-end;
    flex: 1 1;
`;

const Layout = ({ children, location }) => {
    // const isHome = location.pathname === '/';

    return (
        <>
            <Head>

            </Head>

            <StyledContainer>
                <StyledNav>
                    <Navbar />
                </StyledNav>

                <StyledContent>
                    {children}
                </StyledContent>

                <StyledSocials>
                    <Social />
                </StyledSocials>
            </StyledContainer>

        </>
    );
}

export default Layout;