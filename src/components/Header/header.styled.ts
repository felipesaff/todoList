import styled from "styled-components";

export const HeaderComponent = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #6991ff;
    padding: 15px 10px;
    border-radius: 10px;

    span {
        display: flex;
    }
`
export const InputTitle = styled.input<{error: boolean}>`
    border: ${props => props.error ? ' 2px solid #e60b0b': '1px solid #fefefe'};
    border-radius: 5px;
    padding: 5px 10px;
    outline: none;
    color: #5f5f5f;
`

export const CategoryComponent = styled.select<{error: boolean}>`
    border: ${props => props.error ? ' 2px solid #e60b0b': '1px solid #fefefe'};
    border-radius: 5px;
    padding: 5px 10px;
    outline: none;
    color: #5f5f5f;
`