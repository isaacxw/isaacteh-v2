import Link from 'next/link';
import styled from 'styled-components';

const NavItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1rem;
    padding: 1.5rem;
    line-height: 5rem;

    &:before {
        content: '';
        display: block;
        width: 3px;
        height: 200px;
        margin: 0 auto;
        background-color: var(--light-slate);
    }

    &:after {
        content: '';
        display: block;
        width: 3px;
        height: 200px;
        margin: 0 auto;
        background-color: var(--light-slate);
    }
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
                <NavItem>
                    <Link href="/">
                        <a>
                            <i className="fa fa-user"></i>
                        </a>
                    </Link>
                </NavItem>

                <NavItem>
                    <Link href="/">
                        <a>
                            <i className="fa fa-folder-open"></i>
                        </a>
                    </Link>
                </NavItem>

                <NavItem>
                    <Link href="/">
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