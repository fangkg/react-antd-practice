import React, { Component, useEffect } from "react";
// import Form, { Field } from "rc-field-form";
// 引入自定义form field
import Form, { Field } from "../components"


const nameRules = { required: true, message: "请输入姓名！" }
const passwordRules = { required: true, message: "请输入密码！" }

export default function RcFieldForm(props) {
    const [form] = Form.useForm();

    const onFinish = val => {
        console.log("onFinished:", val)
    }

    const onFinishFailed = val => {
        console.log("onFinishFailed:", val)
    }

    useEffect(() => {
        console.log("form:", form);
        form.setFieldsValue({username: "default"});
    }, [])

    return (
        <div>
            <h3>RCFieldForm</h3>
        </div>
    )
}



// export default class RCFieldForm extends Component {
//     formRef = React.createRef();
//     componentDidMount() {
//         console.log("form:", this.form.current);
//         this.formRef.current.setFieldsValue({username: "default"});
//     }

//     onFinish = val => {
//         console.log("onFinish:", val)
//     }

//     onFinishFailed = val => {
//         console.log("onFinishFailed:", val)
//     }

//     render() {
//         return (
//             <div>
//                 <h3>RCFieldForm</h3>
//                 <Form
//                     ref={this.formRef}
//                     onFinish={this.onFinish}
//                     onFinishFailed={this.onFinishFailed}>
//                         <Filed name="userName" rules={nameRules}>
//                             <Input placeholder="userName"/>
//                         </Filed>
//                         <Field name="password" rules={[password]}>
//                             <Input placeholder="Password"/>
//                         </Field>
//                         <button>Submit</button>
//                 </Form>
//             </div>
//         )
//     }
// }