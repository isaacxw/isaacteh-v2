import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { theme, mixins } from '../../styles/index';
import Link from 'next/link';

const StyledContentSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;

    h1 {
        margin: 0 0 20px 4px;
        color: var(--yellow);
        font-family: var(--font-mono);
        font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
        font-weight: 400;

        @media (max-width: 480px) {
            margin: 0 0 20px 2px;
        }
    }

    h2 {
        font-size: 4.5rem;
        margin: 0 0 20px 0;
    }

    h3 {
        margin-top: 10px;
        color: var(--slate);
        line-height: 0.9;
        font-size: 2.5rem;
    }

    p {
        margin: 20px 0 0;
        max-width: 500px;
        font-size: 1.125rem;
        letter-spacing: 0.5px;
    }

    .emailLink {
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

    .aboutLink {
        color: var(--dark-navy);
        background-color: var(--yellow);
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
            background-color: var(--lightest-slate);
            color: #000;
        }

        &:after {
            display: none !important;
        }

        margin-top: 50px;
    }

`;

const Hero = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 500);
        return () => clearTimeout(timeout);
    }, []);

    const one = <h1>👋 Hi there, my name is {' '}</h1>;
    const two = <h2>Isaac Teh.</h2>;
    const three = <h3>And this is my platform.</h3>;
    const four = (
        <p>
            I'm a software developer and avid designer based in the green and luscious Pacific Northwest specializing in building
            functional yet beautiful web applications with a focus on e-commerce and user experience.  
        </p>
    );
    const five = (
        <a href="mailto:isaactxw@gmail.com" className="emailLink">
            Get In Touch
        </a>
    );
    const six = (
        <Link href="/about" className="aboutLink" alt="About me">
            About me
        </Link>
    );

    const items = [one, two, three, four, five, six];

    return (
        <>
            <StyledContentSection>
                {one}
                {two}
                {three}
                {four}
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap: '20px' }}>
                    {five}
                    {six}
                </div> 
                {/* <TransitionGroup>
                    {isMounted &&
                        items.map((item, i) => (
                            <CSSTransition 
                                key={i}  
                                timeout={500}
                                classNames="animate"
                            >
                                <div style={{ transitionDelay: `${i + 5}00ms` }}>{item}</div>
                            </CSSTransition>
                        ))}
                </TransitionGroup> */}
            </StyledContentSection>
        </>
    )
}

export default Hero;