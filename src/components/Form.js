import useInput from "../hooks/use-input";
import classes from "./Form.module.css";

const Form = props => {
    const {
        changeHandler:changeNameHandler,
        isInvalid : isNameInvalid,
        removeFocus:removeFocusName,
        value:name,
        errorMsg:nameError
    } = useInput(value => value !== "","Name");
    const {
        changeHandler:changeEmailHandler,
        isInvalid : isEmailInvalid,
        removeFocus:removeFocusEmail,
        value:email,
        errorMsg:emailError
    } = useInput(value => value.includes("@"),"Email");
    const formIsValid = !isEmailInvalid && !isNameInvalid;
    const submitHandler = () => {
       if(isEmailInvalid || isNameInvalid){
           return ;
       }
   }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Name</label>
                <input type="text" placeholder="Name" value={name} onChange={changeNameHandler} onBlur={removeFocusName} className={isNameInvalid?classes["invalid-input"]:""}/>
            </div>
            <div>
                <label>Name</label>
                <input type="email" placeholder="Email" value={email} onChange={changeEmailHandler} onBlur={removeFocusEmail} className={isEmailInvalid?classes["invalid-input"]:""}/>
            </div>
            { !formIsValid && <p>{nameError || emailError}</p>}
            <button className={formIsValid ? "" : classes["disable-btn"]}>Submit</button>
        </form>
    )
}
export default Form;