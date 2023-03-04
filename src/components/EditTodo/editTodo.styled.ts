import styled from "styled-components";

export const EditComponent = styled.div`
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
        span {
            display: flex;
            align-items: center;
        }
`