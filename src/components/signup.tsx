import React, { useState } from "react"

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let newErrors = {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }

        if (!name) newErrors.name = "Name is requried"
        if (!email) newErrors.email = "Email is requried"
        if (!password) newErrors.password = "Password is requried"
        if (!confirmPassword) {
            newErrors.confirmPassword = " Confirm password is requried"
        } else if (confirmPassword !== password) newErrors.confirmPassword = "Passwords do not match";

        const valid = Object.values(newErrors).every(err => err == null)
        if (!valid) {
            setErrors(newErrors);
        }
        else {
            alert("submitted");
        }
    }

    return (
        <div className="flex flex-col ">
            <div className="text-red-600"> Signup form</div>
            <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
                <label htmlFor={name} >Name</label>
                <Input value={name} onChange={setName} />
                {errors.name && <div>{errors.name}</div>}

                <label htmlFor={email} >Email</label>
                <Input value={email} onChange={setEmail} />
                {errors.email && <div>{errors.email}</div>}

                <label htmlFor={password} >Password</label>
                <Input value={password} onChange={setPassword} />
                {errors.password && <div>{errors.password}</div>}


                <label htmlFor={confirmPassword} >Confirm</label>
                <Input value={confirmPassword} onChange={setConfirmPassword} />
                {errors.confirmPassword && <div>{errors.confirmPassword}</div>}
                <button className="rounded-md bg-black text-white" type="submit">Submit</button>
            </form>
        </div>
    )
}


function Input({ value, onChange }: { value: any; onChange: any }) {
    return (
        //inline shadow 
        <input  className="border border-0.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] border-b-black" value={value} onChange={(e)=>onChange(e.target.value)} />
    )
}
export default Signup;