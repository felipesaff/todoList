import styled from "styled-components";

export const TodoComponent = styled.div<{isDone: boolean}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30rem;
    background-color: #fefefe;
    padding: 5px 10px;
    border-radius: 10px;

    &:hover {
        background-color: #f3f3f3;
    }

    p {
        font-weight: 400;
        margin-left: 10px;
        color: ${props => props.isDone ? '#32a840' : '#555'};
        text-decoration: ${props => props.isDone ? 'line-through': 'none'};
    }

    span {
        display: flex;
        align-items: center;
    }
`