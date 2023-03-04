import { useState } from "react";
import { useDispatch } from "react-redux";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdCancel } from 'react-icons/md'

import { CategoryComponent, InputTitle } from "../Header/header.styled"
import { ButtonComponent } from "../Button/button.styled";
import { EditComponent } from "./editTodo.styled";
import { useStateSelector } from "../../redux/hooks/useSelectors";
import { editTodo, turnEditModeOff } from "../../redux/reducer/todoReducer";

import { categories } from "../../data/data";

type PropsType = {
    TodoId: string;
    TodoTitle: string;
    Todocategory: string;
}

export const EditTodo = ({TodoId, TodoTitle, Todocategory}: PropsType) => {
    const theme = useStateSelector(state => state.theme.theme)
    const dispatch = useDispatch()
    const [errors, setErrors] = useState({titleError: false, categoryError: false})
    const [title, setTitle] = useState<string>(TodoTitle)
    const [category, setCategory] = useState<string>(Todocategory);

    function handleCategoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setCategory(e.target.value)
    }
    function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value);
        
    }
    function edit() {
        if(!title) return setErrors({categoryError: false, titleError: true});
        if(!category) return setErrors({titleError: false, categoryError: true});
        
        dispatch(
            editTodo({
                category,
                title,
                id: TodoId
            })
        )
    }
    return (
        <EditComponent theme={theme} >
            <InputTitle
                placeholder="Novo título da tarefa"
                error={errors.titleError}
                value={title}
                onChange={e => handleTitleChange(e)}
            />
            <span>
                <CategoryComponent
                    defaultValue={Todocategory}
                    error={errors.categoryError}
                    onChange={e => handleCategoryChange(e)}
                >
                    {
                        categories.map((categoryItem, i) => (
                            <option
                                key={i}
                            >
                                {categoryItem}
                            </option>
                        ))
                    }
                </CategoryComponent>

                <ButtonComponent
                    onClick={() => dispatch( turnEditModeOff({id: TodoId}) )}
                    ml={true}
                    theme={theme}
                    hover="danger"
                    children={<MdCancel color={theme === 'light' ? '#000' : '#fff'} />}
                    title="Cancelar alterações"
                />

                <ButtonComponent
                    onClick={edit}
                    ml={true}
                    theme={theme}
                    hover="success"
                    children={<BsFillCheckCircleFill color={theme === 'light' ? '#000' : '#fff'} />}
                    title="Salvar alterações"
                />
            </span>

        </EditComponent>
    )
}