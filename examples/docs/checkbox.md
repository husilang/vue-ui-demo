## form
---

#### 基础用法：
<zm-checkbox v-model="isAgree" true-value="1">同意协议</zm-checkbox>
<script>
    export default {
    data() {
                return {
                    isAgree: '',
                    hobbies: []
                };
            }
    }
</script>

::: demo
```html
<zm-checkbox v-model="isAgree" true-value="1">同意协议</zm-checkbox>
<script>
    export default {
    data() {
                return {
                    isAgree: ''
                };
            }
    }
</script>
```
:::

<zm-checkbox-group v-model="hobbies">
    爱好：
    <zm-checkbox label="写作">写作</zm-checkbox>
    <zm-checkbox label="看电影">看电影</zm-checkbox>
</zm-checkbox-group> 
{{hobbies}}

::: demo
```html
<zm-checkbox-group v-model="hobbies">
    爱好：
    <zm-checkbox label="写作">写作</zm-checkbox>
    <zm-checkbox label="看电影">看电影</zm-checkbox>
</zm-checkbox-group> 
{{hobbies}}
<script>
    export default {
    data() {
                return {
                    hobbies: []
                };
            }
    }
</script>
```
:::