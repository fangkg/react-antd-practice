import React from "react";
import FieldContext from "./FieldContext";
import useForm from "./useForm";

export default function Form(children) {
    const [formInstance] = useForm
    return (
        <form
            onSubmit={event => {
                event.preventDefault();
            }}>
            {/* <h3>Form</h3> */}
            <FieldContext.Provider value={formInstance}>
                {children}
            </FieldContext.Provider>
        </form>
    )
}