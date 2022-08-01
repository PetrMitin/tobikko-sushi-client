import { FC, MouseEventHandler } from "react";
import { Button } from "react-bootstrap";
import { IMenuItemType } from "../../../../utils/interfaces/dbInterfaces";

const NewMenuItemType: FC<{type: IMenuItemType}> = ({type}) => {
    return (
        <div className="new-menu-item-type">
            {type.name}
        </div>
    )
}

export default NewMenuItemType