import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
        // const updatefirstName = () => {

        // }

        // const updatelastName = () => {

        // }

        // const updateEmail = () => {

        // }

        // const updatePassword= () => {

        // }
    };
    return (
        <div>
            <div className="App">
                <form class ="form" onSubmit={createUser}>
                    <div>
                        <label>First Name: </label>
                        <input type="text" onChange={(e) => setfirstName(e.target.value)} />
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input type="text" onChange={(e) => setlastName(e.target.value)} />
                    </div>
                    <div>
                        <label>Email Address: </label>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <input type="password"  />
                    </div>
                    <input type="submit" value="Create User" />
                </form>
            </div>
            <h3> Your Form Data</h3>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {password}</p>
        </div>
    );
}


export default UserForm;