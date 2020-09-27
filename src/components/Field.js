import React, { Component } from "react";
import FieldContext from "./FieldContext";

export default class Field extends Component {
    static contextType = FieldContext;
    componentDidMount() {
        const { registerEntity } = this.context;
        // 注册
        registerEntity(this);
    }
    onStoreChange = () => {
        this.forceUpdate()
    }
    getControlled = () => {
        const { name } = this.props;
        const { setFieldsValue, getFieldValue } = this.context;
        return {
            // value: 'omg',
            value: getFieldValue(name),
            onChange: (event) => {
                const newValue = event.target.value;
                setFieldsValue({
                    [name]: newValue
                })
                console.log("newValue:", newValue);
            }
        }
    }

    render() {
        const { children } = this.props;
        // return (
        //     <div>
        //         <h3>Field</h3>
        //     </div>
        // )
        const returnChildNode = React.cloneElement(children);
        return returnChildNode;
    }
}