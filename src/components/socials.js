import styled from 'styled-components';

const StyledSocialList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 1rem;
    padding: 1.5rem 1.5rem 0 1.5rem;
    list-style: none;
    line-height: 5rem;

    /* &:before {
        content: '';
        display: block;
        width: 3px;
        height: 200px;
        margin: 0 auto;
        background-color: #FFD300;
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

const StyledSocialItem = styled.div`
    font-size: 1.2rem;
    color: #fff;

    @media (max-width: 480px) {
        padding: 0 0 0 40px;
        font-size: 1.5rem;
    }
`;

const StyledResumeBtn = styled.div`
    position: absolute;
    top: 1rem;
    right: 2.2rem;
    
    .resumeLink {
        color: #FFD300;
        background-color: var(--navy);
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
            background-color: var(--yellow-tint);
        }

        &:after {
            display: none !important;
        }
    }

    @media (max-width: 480px) {
        display: none;
        /* display: relative;
        top: 3.3rem;
        right: -5.5rem;
        margin: 0 auto; */
    }

`;

const Social = ({ isHome }) => {
    return (
        <>
            <StyledSocialList>
                <StyledResumeBtn>
                    <a 
                    href="/resume.pdf" 
                    className="resumeLink" 
                    target="_blank">
                        Resume
                    </a>
                </StyledResumeBtn>

                <StyledSocialItem>
                    <a 
                    href="https://www.linkedin.com/in/isaactxw" 
                    alt="Link to linkedin.com/in/isaactxw" 
                    target="_blank"
                    title="Linkedin">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </StyledSocialItem>

                <StyledSocialItem>
                    <a 
                    href="https://github.com/isaacxw" 
                    alt="Link to github.com/isaacxw" 
                    target="_blank"
                    title="Github">
                        <i className="fa fa-github"></i>
                    </a>
                </StyledSocialItem>

                <StyledSocialItem>
                    <a 
                    href="https://www.instagram.com/isaactxw/" 
                    alt="link to Instagram profile @isaactxw" 
                    target="_blank"
                    title="Instagram">
                        <i className="fa fa-instagram"></i>
                    </a>
                </StyledSocialItem>
            </StyledSocialList>
        </>
    )
}

export default Social;