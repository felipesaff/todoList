import styled from "styled-components";

export const TodoListComponent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 65vh;
    overflow-x: scroll;
    padding: 0 5px;
    ::-webkit-scrollbar {
        width: 6px;
        height: 0;
    }
    ::-webkit-scrollbar-thumb {
    background: #6991ff;
    border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover {
    background: #697fff;
    }
`