import { css } from 'styled-components';

const button = css`
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    padding: 1.25rem 1.75rem;
    &:hover,
    &:focus,
    &:active {
    background-color: var(--green-tint);
    outline: none;
    }
    &:after {
    display: none !important;
    }
`;

const mixins = {
    flexCenter: css`
        display: flex;
        justify-content: center;
        align-items: center;
    `,

    button,

    smallButton: css`
        color: var(--green);
        background-color: transparent;
        border: 1px solid var(--green);
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
    `,

    bigButton: css`
        color: var(--green);
        background-color: transparent;
        border: 1px solid var(--green);
        border-radius: var(--border-radius);
        padding: 1.25rem 1.75rem;
        font-size: var(--fz-sm);
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
    `,
};

export default mixins;