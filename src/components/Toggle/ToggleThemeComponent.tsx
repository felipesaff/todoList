import { useState } from 'react'
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/reducer/themeReducer";
import { SwitcTheme } from "./toggleComponent"
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs'
import { useStateSelector } from '../../redux/hooks/useSelectors';

export const ToggleThemeComponent = () => {
    const theme = useStateSelector(state => state.theme.theme)
    const dispatch = useDispatch()

    function handleToggleTheme() {
        theme === 'light' ?
        dispatch( toggleTheme('dark') ) :
        dispatch( toggleTheme('light') );
    }
    return (
        <SwitcTheme>
            <input
                type="checkbox"
                id="switchTheme"
                checked={theme === 'dark'}
                onChange={handleToggleTheme} />
            <label htmlFor="switchTheme">
                <span id='sun'><BsFillSunFill /></span>
                <span id="moon"><BsMoonStarsFill color='#aaa' /></span>
            </label>
        </SwitcTheme>
    )
}