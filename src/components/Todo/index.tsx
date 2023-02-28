import React from 'react'
import {BsFillCheckCircleFill, BsTrashFill} from 'react-icons/bs'
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

import { removeTodo, markAsDone, markAsUndo } from '../../redux/reducer/todoReducer';
import { ButtonComponent } from "../Button/button.styled"
import { TodoComponent } from "./todo.styled"
import { TodoType } from '../../redux/reducer/types/todoType';


export const Todo = ({id, title, category, isDone}: TodoType) => {
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

    const dispatch = useDispatch();

    return (
        <TodoComponent isDone={isDone} >
            <span>
                {categoryIcon}
                <p> {title} </p>
            </span>
            <span>
                <ButtonComponent
                    onClick={() => dispatch( removeTodo({id}) )}
                    hover='danger'
                    title='Remover item'
                    children={<BsTrashFill />}
                />
                {
                    isDone ?
                    <ButtonComponent
                        onClick={() => dispatch( markAsUndo({id}) )}
                        hover="warning"
                        title='Marcar como não feito'
                        ml={true}
                        children={<AiOutlineUndo />}
                    /> :
                    <ButtonComponent
                        onClick={() => dispatch( markAsDone({id}) )}
                        hover='success'
                        title='Marcar como feito'
                        ml={true}
                        children={<BsFillCheckCircleFill/>}
                    />

                }
            </span>

        </TodoComponent>
    )
}