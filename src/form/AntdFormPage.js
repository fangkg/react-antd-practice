import React, { Component, useEffect } from "react";
import { Form, Input, Button } from "antd";

const FormItem = Form.Item;

const nameRules = { required: true, message: "请输入姓名！" };
const passwordRules = { required: true, message: "请输入密码！" };

// export default class AntdFormPage extends Component {
//     // 创建ref引用
//     formRef = React.createRef();

//     componentDidMount() {
//         console.log('formRef:', this.formRef)
//         // 设置属性值
//         this.formRef.current.setFieldsValue({ name: "default"});
//     }
//     // 重置
//     onReset = () => {
//         // 重置属性值
//         this.formRef.current.resetFields();
//     }
//     // 表单校验成功执行
//     onFinish = val => {
//         console.log("onFinish", val)
//     }
//     // 表单校验失败执行
//     onFinishFailed = val => {
//         console.log("onFinishFailed", val)
//     }

//     render() {
//         return (
//             <div>
//                 <h3>AntdFormPage</h3>
//                 <Form
//                     ref={ this.formRef }
//                     onFinish={ this.onFinish }
//                     onFinishFailed={ this.onFinishFailed }
//                     onReset={ this.onReset }>
//                     <FormItem label="姓名" name="name" rules={[nameRules]}>
//                         <Input placeholder="name input palaceholder"/>
//                     </FormItem>
//                     <FormItem label="密码" name="password" rules={[passwordRules]}>
//                         <Input placeholder="password input placeholder"/>
//                     </FormItem>
//                     <FormItem>
//                         <Button type="primary" size="large" htmlType="submit">
//                             Submit
//                         </Button>
//                     </FormItem>
//                     <FormItem>
//                         <Button type="default" size="large" htmlType="reset">
//                             Reset
//                         </Button>
//                     </FormItem>
//                 </Form>
//             </div>
//         )
//     }
// }



// 函数组件
export default function AntdFormPage(props) {
    // 使用自定义hook拿到form表单
    const [form] = Form.useForm();

    const onFinish = val => {
        console.log('onFinished:', val)
    };

    const onFinishFailed = val => {
        console.log('onFinishFailed:', val)
    };

    const onReset = () => {
        form.resetFields();
    };
    // 函数组件执行副作用
    useEffect(() => {
        form.setFieldsValue({name: "default"})
    }, []); // 依赖项为空表示没有依赖，只执行一次

    return (
        <Form
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            onReset={onReset}>
            <FormItem label="姓名" name="name" rules={[nameRules]}>
                <Input placeholder="name input placeholder"/>
            </FormItem>
            <FormItem>
                <Input placeholder="password input placeholder"/>
            </FormItem>
            <FormItem>
                <Button type="primary" size="large" htmlType="submit">
                    提交
                </Button>
            </FormItem>
        </Form>
    )
}