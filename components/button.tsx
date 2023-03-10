import React, { ButtonHTMLAttributes, ReactNode } from "react";

//propsからchildlenをとる
export const Button =({children,...props}:ButtonHTMLAttributes<HTMLButtonElement>&{
    children: ReactNode
})=>{
    return (
        <>
        <button className="px-4 py-2 rounded-full bg-blue-500 text-white" {...props}>
            {children}
        </button>
        </>
    )
}
