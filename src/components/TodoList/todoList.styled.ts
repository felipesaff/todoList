import styled from "styled-components";

export const TodoListComponent = styled.div<{theme: 'light' | 'dark'}>`
    background-color: ${props =>
        props.theme === 'light' ?
        '#efefef' :
        '#7a7a7a'
    };
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 65vh;
    overflow-y: auto;
    padding: 10px;
    h1 {
        color: ${props =>
            props.theme === 'light' ?
            '#222' :
            '#ddd'
        };
    }
    ::-webkit-scrollbar {
        width: 6px;
        height: 0;
    }
    ::-webkit-scrollbar-thumb {
    background: #6991ff;
    border-radius: 5px;
    background-color: ${props =>
        props.theme === 'light' ?
        '#6991ff' :
        '#2f4ea3'
    };
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: ${props =>
        props.theme === 'light' ?
        '#3e62c7' :
        '#1d3985'
    };
    }
`