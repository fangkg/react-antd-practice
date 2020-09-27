import React from "react";
import FieldContext from "./FieldContext";
import useForm from "./useForm";

export default function Form(children, onFinish, onFinishFailed) {
    const [formInstance] = useForm
    formInstance.setCallback({
        onFinish,
        onFinishFailed
    })
    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                formInstance.submit();
            }}>
            {/* <h3>Form</h3> */}
            <FieldContext.Provider value={formInstance}>
                {children}
            </FieldContext.Provider>
        </form>
    )
}