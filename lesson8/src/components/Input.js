import React, { useState } from "react";

export const Input=({startIcon, endIcon, containerClassName, label, isError, ...props})=>{

    const [isPasswordOpen, setIsPasswordOpen]=useState(false)
    return(
        <>
            {label && <label className="label">{label}</label>}
            <div className={`inputContainer ${containerClassName}`}>
                <div className="startIcon">
                    {startIcon}
                </div>
                <input className={`input ${isError ? 'error' : ''}`}
                    {...props}
                    type={props.type==='password' ? 'password':props.type}
                />
                <div className="endIcon">
                    {props.type==='password' ? <div className="eye">

                        {isPasswordOpen ?
                            <img src="" alt="openEye"/>
                            : <img src="" alt="closeEye"/>
                        }
                        
                    </div>:endIcon}
                </div>
            </div>
        </>
    )
}