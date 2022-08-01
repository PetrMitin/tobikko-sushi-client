import { FC } from "react";
import { useAppSelector } from "../../../../store/hooks";
import NewTypeForm from "./NewTypeForm";
import UpdateTypeForm from "./UpdateTypeForm";

const TypesControls: FC = () => {
    const menuItemTypes = useAppSelector(state => state.user?.menuItemTypes) || []

    return (
        <div className="types-controls">
            <h1>Разделы меню</h1>
            <h2>Новый раздел</h2>
            <NewTypeForm />
            <h2>Редактировать существующие разделы</h2>
            {menuItemTypes.map(type => <UpdateTypeForm type={type} key={type.id} />)}
        </div>
    )
}

export default TypesControls