import React, { useState } from 'react'
import {
    BsFillCheckCircleFill,
    BsTrashFill,
    BsFillPencilFill
} from 'react-icons/bs'
import { AiOutlineUndo } from 'react-icons/ai'
import {
    FcGraduationCap,
    FcSportsMode,
    FcBriefcase,
    FcHome,
    FcConferenceCall,
    FcSupport,
    FcShop
} from 'react-icons/fc'
import { useDispatch } from 'react-redux';

import { removeTodo, markAsDone, markAsUndo, turnEditModeOn } from '../../redux/reducer/todoReducer';
import { ButtonComponent } from "../Button/button.styled"
import { TodoComponent } from "./todo.styled"
import { TodoType } from '../../redux/reducer/types/todoType';
import { useStateSelector } from '../../redux/hooks/useSelectors';
import { EditTodo } from '../EditTodo';


export const Todo = ({id, title, category, isDone, isEditModeOn}: TodoType) => {
    let categoryIcon: React.ReactNode;
    switch (category) {
        case 'Estudo':
            categoryIcon = <FcGraduationCap />;
            break;
        case 'Exercício':
            categoryIcon = <FcSportsMode />;
            break;
        case 'Compras':
            categoryIcon = <FcShop />;
            break;
        case 'Casa':
            categoryIcon = <FcHome />;
            break;
        case 'Reunião':
            categoryIcon = <FcConferenceCall />;
            break;
        case 'Trabalho':
            categoryIcon = <FcBriefcase />;
            break;
        case 'Conserto':
            categoryIcon = <FcSupport />;
    }

    const theme = useStateSelector(state => state.theme.theme)
    const dispatch = useDispatch();

    function turnEditOn() {
        dispatch( turnEditModeOn({id}) )
    }

    return (
        isEditModeOn ?
        <EditTodo
            TodoTitle={title}
            TodoId={id}
            Todocategory={category}
        />
        :
        <TodoComponent isDone={isDone} theme={theme} >
            <span>
                {categoryIcon}
                <p> {title} </p>
            </span>
            <span>
                <ButtonComponent
                    onClick={() => dispatch( removeTodo({id}) )}
                    hover='danger'
                    title='Remover item'
                    theme={theme}
                    children={<BsTrashFill color={theme === 'light' ? '#000' : '#fff'} />}
                />
                <ButtonComponent
                    children={<BsFillPencilFill color={theme === 'light' ? '#000' : '#fff'} />}
                    ml={true}
                    theme={theme}
                    onClick={turnEditOn}
                    title="Editar tarefa"
                />
                {
                    isDone ?
                    <ButtonComponent
                        onClick={() => dispatch( markAsUndo({id}) )}
                        hover="warning"
                        title='Marcar como não feito'
                        theme={theme}
                        ml={true}
                        children={<AiOutlineUndo color={theme === 'light' ? '#000' : '#fff'} />}
                    /> :
                    <ButtonComponent
                        onClick={() => dispatch( markAsDone({id}) )}
                        hover='success'
                        title='Marcar como feito'
                        theme={theme}
                        ml={true}
                        children={<BsFillCheckCircleFill color={theme === 'light' ? '#000' : '#fff'} />}
                    />

                }
            </span>

        </TodoComponent>
    )
}