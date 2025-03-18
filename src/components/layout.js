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
    border: 0.5rem solid var(--white);
    display: flex;
    overflow-x: auto;

    @media (max-width: 480px) {
        width: 130%;
        height: 100%;
        flex-direction: column;
    }
`;

const StyledNav = styled.nav`
    display: flex;
    flex: 1 1;
    margin: 0;
    overflow: none;

    @media (max-width: 480px) {
        display: flex;
        justify-content: flex-end;
    }
`;

const StyledContent = styled.main`
    display: flex;
    justify-content: center;
    flex: 5 5;
    padding: 0;
    overflow: scroll;

    -ms-overflow-style: none; /* Internet Explorer 10 */
    scrollbar-width: none; /* Firefox */

    /* Hides the scrollbar from view */
    ::-webkit-scrollbar {
        width: 0; 
    }

    @media (max-width: 480px) {
        margin-top: 2.5rem;
    }
`;

const StyledSocials = styled.nav`
    display: flex;
    justify-content: flex-end;
    flex: 1 1;
    overflow: none;

    @media (max-width: 480px) {
        
    }
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