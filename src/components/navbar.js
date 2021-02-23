import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const NavItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 1rem;
    padding: 1.5rem 1.5rem 0 1.5rem;
    line-height: 5rem;

    /* &:before {
        content: '';
        display: block;
        width: 3px;
        height: 200px;
        margin: 0 auto;
        background-color: var(--yellow);
    } */

    &:after {
        content: '';
        display: block;
        width: 2px;
        height: 30%;
        margin: 0 auto;
        background-color: var(--light-slate);
    }

    @media (max-width: 375px) {
        flex-direction: row;
        justify-content: space-evenly;

        &:before,
        &:after {
            display: none;
        }
    }
`;

const StyledLogo = styled.a`
    display: none;
`;

const NavItem = styled.div`
    font-family: var(--font-mono);
    font-size: 1.2rem;
    color: #fff;
`;

const Navbar = ({ isHome }) => {
    return (
        <>
            <NavItems>
                <StyledLogo>
                    <Link href="/">
                        <Image
                            src="/images/logo.png"
                            alt="logo"
                            layout="fixed"
                            width={65}
                            height={65}
                        />
                    </Link>
                </StyledLogo>

                <NavItem>
                    <Link href="/about">
                        <a alt="About">
                            <i className="fa fa-user"></i>
                        </a>
                    </Link>
                </NavItem>

                <NavItem>
                    <Link href="/experience">
                        <a>
                            <i className="fa fa-folder-open"></i>
                        </a>
                    </Link>
                </NavItem>

                <NavItem>
                    <Link href="/contact">
                        <a>
                            <i className="fa fa-address-card"></i>
                        </a>
                    </Link>
                </NavItem>
            </NavItems>
        </>
    )
}

export default Navbar;