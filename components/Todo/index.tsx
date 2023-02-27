import React from 'react'
import {BsFillCheckCircleFill, BsTrashFill} from 'react-icons/bs'
import {
    FcGraduationCap,
    FcSportsMode,
    FcBriefcase,
    FcHome,
    FcConferenceCall,
    FcSupport,
    FcShop
} from 'react-icons/fc'

import { ButtonComponent } from "../Button/button.styled"
import { TodoComponent } from "./todo.styled"

type Props = {
    id?: number;
    title: string;
    category?: string;
}

export const Todo = ({title, category, id}: Props) => {
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

    return (
        <TodoComponent>
            <span>
                {categoryIcon}
                <p> {title} </p>
            </span>
            <span>
                <ButtonComponent
                    hover='danger'
                    title='Remover item'
                    children={<BsTrashFill />}
                />
                <ButtonComponent
                    hover='success'
                    title='Marcar como feito'
                    ml={true}
                    children={<BsFillCheckCircleFill/>}
                />
            </span>

        </TodoComponent>
    )
}