import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

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

    @media (max-width: 480px) {
        flex-direction: row;

        &:before,
        &:after {
            display: none;
        }
    }
`;

const StyledLogo = styled.a`
    position: absolute;
    width: 100px;
    height: 120px;
    top: 16px;
    left: 16px;
    background-color: var(--yellow);
    display: flex;
    align-items: flex-end;
    padding: 0;

    h1 {
        color: var(--navy);
        font-size: 4rem;
        margin: 0 auto;
        margin-bottom: 0;
    }
`;

const NavItem = styled.div`
    font-family: var(--font-mono);
    font-size: 1.2rem;
    color: #fff;

    @media (max-width: 480px) {
        padding: 0 0 0 40px;
        font-size: 1.5rem;
    }
`;

const Navbar = ({ isHome }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <>
            <NavItems>
                <StyledLogo>
                    <Link href="/">
                        <h1>it.</h1>
                    </Link>
                    {/* <Link href="/">
                        <Image
                            src="/images/logo.png"
                            alt="logo"
                            layout="fixed"
                            width={65}
                            height={65}
                        />
                    </Link> */}
                </StyledLogo>

                <NavItem>
                    <Link href="/about" alt="About">
                        <i className="fa fa-user"></i>
                    </Link>
                </NavItem>

                <NavItem>
                    <Link href="/experience" alt="Experience">
                        <i className="fa fa-folder-open"></i>
                    </Link>
                </NavItem>

                <NavItem>
                    <Link href="/contact" alt="Contact">
                        <i className="fa fa-address-card"></i>
                    </Link>
                </NavItem>
            </NavItems>
        </>
    )
}

export default Navbar;