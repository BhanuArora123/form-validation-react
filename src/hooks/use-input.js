import { useState } from "react";


const useInput = (validator,valueType) => {
    const [value , setValue] = useState("");
    const [isTouched , setTouched] = useState(false);
    const isValidValue = validator(value);
    const isInvalid = !isValidValue && isTouched;
    const removeFocus = event => {
        setTouched(true);
    }
    const changeHandler = (event) => {
        setValue(event.target.value)
    }
    const errorMsg = valueType + " is not valid";
    return {
        value,
        isTouched,
        isInvalid,
        removeFocus,
        changeHandler,
        errorMsg:isInvalid?errorMsg:undefined
    }
}
export default useInput;