# 树组件
---

<zm-tree :data="data" :showCheckbox="true"></zm-tree>
<script>
    export default {
        data() {
            return {
                data: [
                {title: 'parent 1',expand: true, children: [
                    {title: 'parent 1-1', expand: false,},
                    {title: 'parent 1-2', expand: false,}
                ]},
                {title: 'parent 2',expand: false}
                ],
            }
        }
    }
</script>