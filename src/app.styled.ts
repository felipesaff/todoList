import styled from "styled-components";

export const AppComponent = styled.div<{theme: 'light' | 'dark'}>`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: ${props => 
        props.theme === 'light' ?
        '#fefefe' :
        '#4a4a4a'
    };
`