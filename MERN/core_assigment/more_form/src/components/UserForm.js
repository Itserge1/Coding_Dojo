import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Confirmpassword, setConfirmpassword] = useState("");

    const [firstNameError, setfirstNameError] = useState("");
    const [lastNameError, setlastNameError] = useState("");
    const [emailError, setemailError] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [ConfirmpasswordError, setConfirmpasswordError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, Confirmpassword };
        console.log("Welcome", newUser);
        
    };
    const handlefirstName = (e) => {
        setfirstName(e.target.value);
        if(e.target.value.length < 1) {
            setfirstNameError("First name is required!");
        } else if(e.target.value.length < 2) {
            setfirstNameError("First name must be 2 characters or longer!");
        }
        else{
            setfirstNameError("")
        }
    }
    const handlelastName = (e) => {
        setlastName(e.target.value);
        if(e.target.value.length < 1) {
            setlastNameError("Last name is required!");
        } else if(e.target.value.length < 2) {
            setlastNameError("Last name must be 2 characters or longer!");
        }
        else{
            setlastNameError("")
        }
    }
    const handleEmail= (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setemailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setemailError("Email must be 5 characters or longer!");
        }
        else{
            setemailError("")
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setpasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setpasswordError("Password must be 8 characters or longer!");
        }
        else{
            setpasswordError("")
        }
    }
    const handleConfirmpassword = (e) => {
        setConfirmpassword(e.target.value);
        if(e.target.value.length < 1) {
            setConfirmpasswordError("Field is required!");
        } else if(e.target.value !== password) {
            setConfirmpasswordError("Password does not match");
        }
        else{
            setConfirmpasswordError("")
        }
    }
    return (
        <div>
            <div className="App">
                <form className ="form" onSubmit={createUser}>
                    <div>
                        <label>First Name: </label>
                        <input type="text" onChange={handlefirstName} />
                        {
                            firstNameError ?
                            <p style = {{color:'red'}}>{ firstNameError }</p> :
                            ''
                        }
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input type="text" onChange={handlelastName} />
                        {
                            lastNameError ?
                            <p style = {{color:'red'}}>{ lastNameError }</p> :
                            ''
                        }
                    </div>
                    <div>
                        <label>Email Address: </label>
                        <input type="text" onChange={handleEmail} />
                        {
                            emailError ?
                            <p style = {{color:'red'}}>{ emailError }</p> :
                            ''
                        }
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" onChange={handlePassword} />
                        {
                            passwordError ?
                            <p style = {{color:'red'}}>{ passwordError }</p> :
                            ''
                        }
                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <input type="password" onChange={handleConfirmpassword} />
                        {
                            ConfirmpasswordError ?
                            <p style = {{color:'red'}}>{ ConfirmpasswordError }</p> :
                            ''
                        }
                    </div>
                    <input type="submit" value="Create User" />
                </form>
            </div>
            {/* <h3> Your Form Data</h3>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {Confirmpassword}</p> */}
        </div>
    );
}


export default UserForm;