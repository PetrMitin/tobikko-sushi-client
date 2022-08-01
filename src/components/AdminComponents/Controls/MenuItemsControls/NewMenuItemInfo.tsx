import { FC, MouseEventHandler } from "react";
import { Button } from "react-bootstrap";
import { IMenuItemInfoData } from "../../../../utils/interfaces/apiInterfaces";

const NewMenuItemInfo: FC<{info: IMenuItemInfoData}> = ({info}) => {
    return (
        <div className="new-menu-item-info">
            <h5>{info.title}</h5>
            <p>{info.info}</p>
        </div>
    )
}

export default NewMenuItemInfo