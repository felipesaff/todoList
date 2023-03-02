import styled, { css } from "styled-components";
type Props = {
    ml?: boolean;
    hover?: 'danger' | 'success' | 'warning';
    theme: 'light' | 'dark';
}
export const ButtonComponent = styled.button<Props>`
    display: flex;
    border-radius: 10px;
    margin-left: ${props => props.ml ? '10px': '0'};
    padding: 10px;
    background-color: ${props =>
        props.theme === 'light' ?
        '#fefefe' :
        '#888'
    };
    border: 1px solid #efefef;
    &:hover {
        background-color: ${props => {
            switch (props.hover) {
                case 'danger':
                    return props.theme === 'light' ?
                    '#e60b0b' :
                    '#8c0d0d';
                case 'success':
                    return props.theme === 'light' ?
                    '#32a840' :
                    '#1c6925';
                case 'warning':
                    return props.theme === 'light' ?
                    '#f59e0b' :
                    '#b0720b';
                default:
                    return props.theme === 'light' ?
                    '#d3d3d3' :
                    '#707070'
            }
        }};
    }
`