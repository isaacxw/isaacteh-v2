import React, { useState, useEffect } from 'react';
import { CSSTransitionGroup, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { theme, mixins } from '../../styles/index';

const StyledContentSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;

    h1 {
        margin: 0 0 30px 4px;
        color: var(--green);
        font-family: var(--font-mono);
        font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
        font-weight: 400;

        @media (max-width: 480px) {
            margin: 0 0 20px 2px;
        }
    }

    h2 {
        font-size: 4rem;
    }

    h3 {
        margin-top: 10px;
        color: var(--slate);
        line-height: 0.9;
        font-size: 3.5rem;
    }

    p {
        margin: 20px 0 0;
        max-width: 500px;
        font-size: 1.2rem;
    }

`;

const Hero = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 500);
        return () => clearTimeout(timeout);
    }, []);

    const one = <h1>Hi there, my name is {' '}</h1>;
    const two = <h2>Isaac Teh.</h2>;
    const three = <h3>I build things for the web.</h3>;
    const four = (
        <p>
            I'm a software engineer based in Los Angeles, CA specializing in building (and occasionally 
            designing) exceptional websites, applications, and everything in between.
        </p>
    );
    const five = (
        <a href="#" className="emailLink">
            Get In Touch
        </a>
    );

    const items = [one, two, three, four, five];

    return (
        <StyledContentSection>
            <TransitionGroup>
                {isMounted &&
                    items.map((item, i) => (
                        <CSSTransitionGroup 
                            key={i}  
                            transitionAppear={true}
                            transitionAppearTimeout={500}
                            transitionName="animate" 
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={300}
                        >
                            <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                        </CSSTransitionGroup>
                    ))}
            </TransitionGroup>
        </StyledContentSection>
    )
}

export default Hero;