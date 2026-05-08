import React, { useState } from "react"
import { useForm} from "react-hook-form";
import {z}  from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { data } from "framer-motion/client";

const signupSchema = z.object({
    name:z.string().min(6, "Can't be smaller than 6").max(20, "Can't be greater than 20"),
    email:z.string().email("Invalid email"),
    password: z.string().min(6, "Can't be smaller than 6").max(20, "Can't be greater than 20"),
    confirmPassword:z.string().min(6, "Can't be smaller than 6").max(20, "Can't be greater than 20")
}).refine((data)=>data.password == data.confirmPassword,{
    error: "Password do not match",
    path:["confirmPassword"]
})

type SignupForm = z.infer<typeof signupSchema>

function Signup() {
    const {register, handleSubmit, formState :{errors,isSubmitting}} = useForm<SignupForm>({
        resolver : zodResolver(signupSchema)
    })

    async function onSubmit(data: SignupForm) {
        alert("submitted");
        console.log(data);
    }

    return (
        <div className="flex flex-col ">
            <div className="text-red-600"> Signup form</div>
            <form className="flex flex-col space-y-3" onSubmit={handleSubmit(onSubmit)}>

                <input {...register("name")} type="text" placeholder="Name" />
                {errors.name && <div>{errors.name.message}</div>}

                {/* <label htmlFor={email} >Email</label> */}
                <input {...register("email")} type="email" placeholder="Email"/>
                {errors.email && <div>{errors.email.message}</div>}

                {/* <label htmlFor={password} >Password</label> */}
                <input {...register("password")} type="password" placeholder="Password" />
                {errors.password && <div>{errors.password.message}</div>}


                {/* <label htmlFor={confirmPassword} >Confirm</label> */}
                <input {...register("confirmPassword")} type="password" placeholder="Confirm" />
                {errors.confirmPassword && <div>{errors.confirmPassword.message}</div>}
                <button className="rounded-md bg-black text-white" type="submit" disabled={isSubmitting}>Submit</button>
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