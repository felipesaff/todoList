import styled, { css } from "styled-components";
type Props = {
    ml?: boolean;
    hover?: 'danger' | 'success' | 'warning';
}
export const ButtonComponent = styled.button<Props>`
    display: flex;
    border-radius: 10px;
    margin-left: ${props => props.ml ? '10px': '0'};
    padding: 10px;
    background-color: #fefefe;
    border: 1px solid #efefef;
    &:hover {
        background-color: ${props => {
            switch (props.hover) {
                case 'danger':
                    return '#e60b0b';
                case 'success':
                    return '#32a840';
                case 'warning':
                    return '#f59e0b'
                default:
                    return '#d3d3d3'
            }
        }};
    }
`