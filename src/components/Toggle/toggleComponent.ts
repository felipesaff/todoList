import styled from "styled-components";

export const SwitcTheme = styled.div`
    input {
        visibility: hidden;
    }
    label {
        width: 2.9rem;
        height: 1.6rem;
        position: relative;
        display: block;
        background-color: #ebebeb;
        border-radius: 200px;
        box-shadow: inset 0px 2px 6px;
        margin-bottom: 1rem;
        cursor: pointer;
    }
    #sun {
        position: absolute;
        right: .3rem;
        top: .2rem;
    }
    #moon {
        position: absolute;
        left: .3rem;
        top: .2rem;
    }
    label::after {
        content: "";
        width: 1.25rem;
        height: 1.25rem;
        position: absolute;
        top: .2rem;
        left: .2rem;
        background: linear-gradient(to bottom right, #ffcc89, #d8860b);
        border-radius: 50%;
        box-shadow: 0px 1px 3px;
    }
    input:checked + label {
        background-color: #393939;
    }
    input:checked + label::after {
        background: linear-gradient(to bottom right, #888, #595959);
        left: 2.7rem;
        transform: translateX(-100%);
    }
    label, label::after {
        transition: 0.2s;
    }
    label:active::after {
        width: 1.8rem;
    }
`