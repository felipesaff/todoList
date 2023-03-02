import styled from "styled-components";

export const HeaderComponent = styled.div<{theme: string}>`
    display: flex;
    justify-content: space-between;
    background-color: ${props =>
        props.theme === 'light' ?
        '#6991ff' :
        '#2f4ea3'
    };
    padding: 15px 10px;
    border-radius: 10px;
    margin-bottom: 1rem;

    span {
        display: flex;
        width: 50%;
        justify-content: flex-end;
    }

    @media (max-width: 500px) {
        flex-direction: column;
        align-items: center;
    }
`
export const InputTitle = styled.input<{error: boolean}>`
    border: 1px solid ${props => props.error ? '#e60b0b': '#fefefe'};
    border-radius: 5px;
    padding: 5px 10px;
    outline: none;
    color: #5f5f5f;
    width: 50%;
    max-width: 100%;

    @media (max-width: 500px) {
        width: 100%;
        margin-bottom: 1rem;
    }
`

export const CategoryComponent = styled.select<{error: boolean}>`
    border: ${props => props.error ? '1px solid #e60b0b': '1px solid #fefefe'};
    border-radius: 5px;
    padding: 5px 10px;
    outline: none;
    color: #5f5f5f;
`