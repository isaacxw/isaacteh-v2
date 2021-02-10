import styled from 'styled-components';

const StyledSocialList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1rem;
    padding: 1.5rem;
    list-style: none;
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

const StyledSocialItem = styled.div`
    font-size: 1.2rem;
    color: #fff;
`;

const Social = ({ isHome }) => {
    return (
        <>
            <StyledSocialList>
                <StyledSocialItem>
                    <a href="https://www.linkedin.com/in/isaactxw">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </StyledSocialItem>

                <StyledSocialItem>
                    <a href="google.com">
                        <i className="fa fa-github"></i>
                    </a>
                </StyledSocialItem>

                <StyledSocialItem>
                    <a href="google.com">
                        <i className="fa fa-twitter"></i>
                    </a>
                </StyledSocialItem>
            </StyledSocialList>
        </>
    )
}

export default Social;