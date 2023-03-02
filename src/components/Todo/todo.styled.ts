import styled from "styled-components";

export const TodoComponent = styled.div<{isDone: boolean, theme: 'light' | 'dark'}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => 
        props.theme === 'light' ?
        '#fefefe' :
        '#6a6a6a'
    };
    padding: 5px 10px;
    border-radius: 10px;
    margin: 5px 0;
        &:hover {
            background-color: ${props =>
                props.theme === 'light' ?
                '#f7f7f7' :
                '#5a5a5a'
            };
        }
        p {
            font-weight: 400;
            margin-left: 10px;
            color: ${props =>
                props.isDone ?
                '#32a840' :
                props.theme === 'light' ?
                '#555' :
                '#eaeaea'
            };
            text-decoration: ${props => props.isDone ? 'line-through': 'none'};
        }
        span {
            display: flex;
            align-items: center;
        }
`