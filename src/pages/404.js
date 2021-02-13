import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CSSTransitionGroup, TransitionGroup } from 'react-transition-group';
import { Layout } from '../components';
import styled from 'styled-components';

const Styled404Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Styled404Title = styled.h1`
    color: var(--yellow);
    font-family: var(--font-mono);
    font-size: clamp(100px, 25vw, 200px);
    line-height: 1;
`;

const Styled404Subtitle = styled.h2`
    font-size: var(--fz-lg);
`;

const StyledHomeButton = styled.div`
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
`;

const NotFoundPage = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 500);
        return () => clearTimeout(timeout);
    }, []);

    return (

        <Layout>
            <TransitionGroup>
            {isMounted && (
                <CSSTransitionGroup timeout={500} classNames="fadeup">
                    <Styled404Container>
                        <Styled404Title>404</Styled404Title>
                        <Styled404Subtitle>Careful now, this page does not exist.</Styled404Subtitle>
                        <StyledHomeButton>
                            <Link href="/">
                                Back to Safety
                            </Link>
                        </StyledHomeButton>
                    </Styled404Container>
                </CSSTransitionGroup>
            )}
            </TransitionGroup>
        </Layout>

    )
}

export default NotFoundPage;