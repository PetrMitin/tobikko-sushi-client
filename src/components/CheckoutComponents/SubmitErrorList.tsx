import { FC } from "react";
import { IError } from "../../utils/interfaces/UIInterfaces";
import SubmitError from "./SubmitError";

const SubmitErrorList: FC<{errors: IError[]}> = ({errors}) => {
    return (
        <div className="submit-error-list">
            <h4>ОБРАТИТЕ ВНИМАНИЕ</h4>
            {errors.map(error => <SubmitError key={error.message} error={error} />)}
        </div>
    )
} 

export default SubmitErrorList