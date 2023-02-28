import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { BsFillPlusCircleFill } from 'react-icons/bs'
import uuid from "react-uuid"

import { HeaderComponent, InputTitle, CategoryComponent } from "./header.styled"
import { categorys } from "../../data/datas"
import { ButtonComponent } from "../Button/button.styled"
import { addTodo } from "../../redux/reducer/todoReducer"

export const Header = () => {
    const [category, setCategory] = useState<string>('');
    const [title, setTitle] = useState<string>('')
    const [errors, setErrors] = useState({titleError: false, categoryError: false})
    const dispatch = useDispatch();

    function handleCategoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setCategory(e.target.value)
    }
    function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value);
        
    }
    function add() {
        if(!title) return setErrors(state => ({...state, titleError: true}));
        if(!category) return setErrors(state => ({...state, categoryError: true}));

        dispatch( addTodo({
            id: uuid(),
            category,
            title,
            isDone: false
        }))
        
        return setErrors({
            categoryError: false,
            titleError: false
        })
    }
    return (
        <HeaderComponent>
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
                        categorys.map((category, i) => <option key={i} value={category}> {category} </option>)
                    }
                </CategoryComponent>
                <ButtonComponent
                    onClick={add}
                    ml={true}
                    title="Adicionar Tarefa"
                    children={<BsFillPlusCircleFill />}
                />
            </span>
        </HeaderComponent>
    )
}