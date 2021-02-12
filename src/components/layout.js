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

    @media (max-width: 375px) {
        width: 130%;
        height: 100%;
        flex-direction: column;
    }
`;

const StyledNav = styled.nav`
    display: flex;
    flex: 1 1;
    margin: 0;
`;

const StyledContent = styled.main`
    display: flex;
    flex: 5 5;
    padding: 0;
`;

const StyledSocials = styled.nav`
    display: flex;
    justify-content: flex-end;
    flex: 1 1;
`;

const Layout = ({ children, title = "Isaac Teh", location }) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta lang="en" charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0" width="device-width" />
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