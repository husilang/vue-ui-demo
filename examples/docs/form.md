## form
---

#### 基础用法：
<zm-form ref="form" :model="formValidate" :rules="ruleValidate">
    <zm-form-item label="用户名" prop="name">
        <zm-input type="text" v-model="formValidate.name"></zm-input>
    </zm-form-item>
    <zm-form-item label="邮箱" prop="mail">
        <zm-input type="text" v-model="formValidate.mail"></zm-input>
    </zm-form-item>
    <button @click="handleSubmit">提交</button>
                <button @click="handleReset">重置</button>
</zm-form>
<script>
    export default {
    data() {
                return {
                    formValidate: {
                        name: '',
                        mail: ''
                    },
                    ruleValidate: {
                        name: [
                            {required: true, message: '用户名不能为空',trigger: 'blur'}
                        ],
                        mail: [
                            {required: true, message: '邮箱不能为空', trigger: 'blur'},
                            {type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
                        ]
                    }
                }
            },
            methods: {
                handleSubmit() {
                    this.$refs.form.validate(valid => {
                        if (valid) {
                            alert("提交成功")
                        }else{
                            alert("表单校验失败")
                        }
                    })
                },
                handleReset() {
                    this.$refs.form.resetFields();
                }
            }
    }
</script>

::: demo
```html
<zm-form ref="form" :model="formValidate" :rules="ruleValidate">
    <zm-form-item label="用户名" prop="name">
        <zm-input type="text" v-model="formValidate.name"></zm-input>
    </zm-form-item>
    <zm-form-item label="邮箱" prop="mail">
        <zm-input type="text" v-model="formValidate.mail"></zm-input>
    </zm-form-item>
    <button @click="handleSubmit">提交</button>
                <button @click="handleReset">重置</button>
</zm-form>
<script>
    export default {
        data() {
            return {
                formValidate: {
                    name: '',
                    mail: ''
                },
                ruleValidate: {
                    name: [
                        {required: true, message: '用户名不能为空',trigger: 'blur'}
                    ],
                    mail: [
                        {required: true, message: '邮箱不能为空', trigger: 'blur'},
                        {type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            handleSubmit() {
                this.$refs.form.validate(valid => {
                    if (valid) {
                        alert("提交成功")
                    }else{
                        alert("表单校验失败")
                    }
                })
            },
            handleReset() {
                this.$refs.form.resetFields();
            }
        }
    }
</script>
```
:::