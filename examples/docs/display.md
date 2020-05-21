<div>
    <h3>动态渲染 .vue文件的组件——Display</h3>
    <zm-display :code="code"></zm-display>
</div>
<script >
    import defaultCode from '../assets/default-code';
    export default {
        data() {
            return {
                code: defaultCode
            };
        }
    }
</script>

::: demo
```html
<div>
    <h3>动态渲染 .vue文件的组件——Display</h3>
    <zm-display :code="code"></zm-display>
</div>
<script >
    import defaultCode from '../assets/default-code';
    export default {
        data() {
            return {
                code: defaultCode
            };
        }
    }
</script>
```
:::