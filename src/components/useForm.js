import React, { useRef } from "react";

class FormStore {
    constructor() {
        // 存储数据 username password
        this.store = {};
        this.fieldEntities = [];
        this.callbacks = {};
    }

    registerEntity = (entity) => {
        this.fieldEntities.push(entity)
        return () => {
            this.fieldEntities = this.fieldEntities.filter(item => item !== entity)
            delete this.store[entity.props.name];
        }
    }
    // 校验
    validate = () => {
        let err = [];
        this.fieldEntities.forEach(entity => {
            const { name, rules } = entity.props;
            let value = this.getFieldValue(name);
            let rule = rules && rules[0];
            if (rule && rule.required && (value === undefined || value === "")) {
                err.push({
                    [name]: rules.message,
                    value
                })
            }
        })
        return err;
    }
    // 提交
    submit = () => {
        console.log("this.fieldEntities:", this.fieldEntities);
        let err = this.validate();

        // 校验成功执行onFinish 失败执行onFinishFailed
        const { onFinish, onFinishFailed } = this.callbacks
        if (err.length === 0) {
            // 成功 执行onFinish
            onFinish(this.getFieldsValue());
        } else if (err.length > 0) {
            // 失败
            onFinishFailed(err);
        }
    }

    // 取数据
    getFieldValue = (name) => {
        return this.store[name];
    };

    getFieldsValue = () => {
        return this.store;
    }

    setFieldValue = () => {};

    setFieldsValue = (newStore) => {
        this.store = {
            ...this.store,
            ...newStore
        }

        // 更新对应的组件
        this.fieldEntities.forEach(entity => {
            // 只更新变化的组件
            const { name } = entity.props;
            Object.keys(newStore).forEach(key => {
                if (key === name) {
                    entity.onStoreChange()
                }
            })
            // entity.onStoreChange()
        })
    };

    setCallback = (callback) => {
        this.callbacks = {
            ...this.callbacks,
            ...callback
        }
    }

    getForm() {
        return {
            setFieldValue: this.setFieldValue,
            setFieldsValue: this.setFieldsValue,
            getFieldValue: this.getFieldValue,
            registerEntity: this.registerEntity,
            submit: this.submit,
            setCallback: this.setCallback
        }
    }
}

// 自定义hook 共享逻辑
export default function useForm(form) {
    // return (
    //     <div>
    //         <h3>useForm</h3>
    //     </div>
    // )
    // hook 方法
    const formRef = useRef();
    if (!formRef.current) {
        if (form) {
            formRef.current = form;
        } else {
            // new 一个
            const fromStroe = new FormStore();
            formRef.current = fromStroe.getForm();
        }
    }
    return [formRef.current];
}