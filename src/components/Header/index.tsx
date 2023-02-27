import { HeaderComponent, InputTitle, CategoryComponent } from "./header.styled"
import { categorys } from "../../data/datas"
import { ButtonComponent } from "../Button/button.styled"

import { BsFillPlusCircleFill } from 'react-icons/bs'

export const Header = () => {
    return (
        <HeaderComponent>
            <InputTitle placeholder="Digite o título da nova tarefa" />
            <span>
                <CategoryComponent>
                    <option value={0} hidden>Categoria</option>
                    {
                        categorys.map((category, i) => (
                            <option key={i} value={category}> {category} </option>
                        ))
                    }
                </CategoryComponent>
                <ButtonComponent
                    ml={true}
                    title="Adicionar Tarefa"
                    children={<BsFillPlusCircleFill />} />
            </span>
        </HeaderComponent>
    )
}