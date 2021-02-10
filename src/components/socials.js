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
        background-color: #FFD300;
    }

    &:after {
        content: '';
        display: block;
        width: 3px;
        height: 200px;
        margin: 0 auto;
        background-color: #FFD300;
    }
`;

const StyledSocialItem = styled.div`
    font-size: 1.2rem;
    color: #fff;
`;

const StyledResumeBtn = styled.div`
    position: absolute;
    top: 1rem;
    right: 2.2rem;

    .resumeLink {
        color: #FFD300;
        background-color: transparent;
        border: 1px solid #FFD300;
        border-radius: var(--border-radius);
        padding: 0.75rem 1rem;
        font-size: var(--fz-xs);
        font-family: var(--font-mono);
        line-height: 1;
        text-decoration: none;
        cursor: pointer;
        transition: var(--transition);

        &:hover,
        &:focus,
        &:active {
            background-color: var(--green-tint);
        }

        &:after {
            display: none !important;
        }
    }

    @media (max-width: 375px) {
        display: relative;
        top: 15%;
        left: 53%;
        margin: 0 auto;
    }

`;

const Social = ({ isHome }) => {
    return (
        <>
            <StyledSocialList>
                <StyledResumeBtn>
                    <a href="/" className="resumeLink">
                        Resume
                    </a>
                </StyledResumeBtn>

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