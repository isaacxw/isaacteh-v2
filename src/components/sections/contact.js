import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledContact = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
`;

const StyledContactSection = styled.section`
    max-width: 600px;
    margin: 0 auto 100px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        margin: 0 auto 50px;
    }

    .overline {
        display: block;
        margin-bottom: 20px;
        color: var(--yellow);
        font-family: var(--font-mono);
        font-size: var(--fz-md);
        font-weight: 400;

        &:before {
            content: '.03';
            color: var(--yellow);
            font-family: var(--font-mono);
            font-size: var(--fz-sm);
            margin-right: 1rem;
            bottom: 0;
        }

        &:after {
            display: none;
        }
    }

    .title {
        font-size: clamp(40px, 5vw, 60px);
    }

    .email-link {
        color: var(--yellow);
        background-color: transparent;
        border: 1px solid var(--yellow);
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

        margin-top: 50px;
    }
`;

const StyledFooterSection = styled.footer`
    text-align: center;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1.5rem;
`;


const Contact = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <StyledContact>
                <StyledContactSection>
                    <h2 className="overline">Want to reach me?</h2>

                    <h2 className="title">Hit me up!</h2>

                    <p>
                        I'm currently seeking full time opportunities to better develop my skills as an
                        engineer. Let's talk! 
                    </p>

                    <a className="email-link" href="mailto:isaactxw@gmail.com">
                        Say hello
                    </a>
                </StyledContactSection>

                <StyledFooterSection>
                    Built with love. <br /> {currentYear}.
                </StyledFooterSection>
            </StyledContact>
        </>
    )
}

export default Contact;