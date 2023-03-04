import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { BsFillPlusCircleFill } from 'react-icons/bs'
import uuid from "react-uuid"

import { HeaderComponent, InputTitle, CategoryComponent } from "./header.styled"
import { categories } from "../../data/data"
import { ButtonComponent } from "../Button/button.styled"
import { addTodo } from "../../redux/reducer/todoReducer"
import { useStateSelector } from "../../redux/hooks/useSelectors"

export const Header = () => {
    const [category, setCategory] = useState<string>('');
    const [title, setTitle] = useState<string>('')
    const [errors, setErrors] = useState({titleError: false, categoryError: false})

    const theme = useStateSelector(state => state.theme.theme)
    const dispatch = useDispatch();

    function handleCategoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setCategory(e.target.value)
    }
    function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value);
        
    }
    function add() {
        if(!title) return setErrors({categoryError: false, titleError: true});
        if(!category) return setErrors({titleError: false, categoryError: true});

        dispatch( addTodo({
            id: uuid(),
            category,
            title,
            isDone: false,
            isEditModeOn: false
        }))
        
        return setErrors({
            categoryError: false,
            titleError: false
        })
    }
    return (
        <HeaderComponent theme={theme}>
            <InputTitle
                error={errors.titleError}
                onChange={e => handleTitleChange(e)}
                placeholder="Digite o título da nova tarefa"
            />
            <span>
                <CategoryComponent
                    error={errors.categoryError}
                    onChange={e => handleCategoryChange(e)}
                >
                    <option value={0} hidden>Categoria</option>
                    {
                        categories.map((category, i) => <option key={i} value={category}> {category} </option>)
                    }
                </CategoryComponent>
                <ButtonComponent
                    onClick={add}
                    ml={true}
                    theme={theme}
                    title="Adicionar Tarefa"
                    children={<BsFillPlusCircleFill color={theme === 'light' ? '#000' : '#fff'} />}
                />
            </span>
        </HeaderComponent>
    )
}