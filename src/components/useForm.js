import React, { useRef } from "react";

class FormStore {
    constructor() {
        // 存储数据 username password
        this.store = {};
        this.fieldEntities = [];
    }

    registerEntity = (entity) => {
        this.fieldEntities.push(entity)
    }

    // 取数据
    getFieldValue = (name) => {
        return this.store[name];
    };

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

    getForm() {
        return {
            setFieldValue: this.setFieldValue,
            setFieldsValue: this.setFieldsValue,
            getFieldValue: this.getFieldValue,
            registerEntity: this.registerEntity
        }
    }
}

// 自定义hook 共享逻辑
export default function useForm(props) {
    // return (
    //     <div>
    //         <h3>useForm</h3>
    //     </div>
    // )
    // hook 方法
    const formRef = useRef();
    if (!formRef.current) {
        // new 一个
        const fromStroe = new FormStore();
        formRef.current = fromStroe.getForm();
    }
    return [formRef.current];
}