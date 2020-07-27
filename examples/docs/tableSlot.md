# tableSlot
---

<zm-table-slot :columns="columns" :data="data">
    <template slot-scope="{row,index}" slot="name">
        <input type="text" v-model="editName" v-if="editIndex === index">
        <span v-else>{{row.name}}</span>
    </template>
    <template slot-scope="{row,index}" slot="age">
        <input type="text" v-model="editAge" v-if="editIndex === index">
        <span v-else>{{row.age}}</span>
    </template>
    <template slot-scope="{row,index}" slot="address">
            <input type="text" v-model="editAddress" v-if="editIndex === index">
            <span v-else>{{row.address}}</span>
        </template>
    <template slot-scope="{row,index}" slot="action">
        <div v-if="editIndex === index">
            <button @click="handleSave(index)">保存</button>
            <button @click="editIndex = -1">取消</button>
        </div>
        <div v-else>
            <button @click="handleEdit(row,index)">修改</button>
        </div>
    </template>
</zm-table-slot>
<script>
export default {
    data() {
        return {
            editName: '', 
            editAge: '', 
            editBirthday: '',
            editAddress: '',
            editIndex: -1,
            columns: [
                {title: '姓名',slot:'name'},
                {title: '年龄',slot:'age'},
                {title: '出生日期',slot:'birthday'},
                {title: '地址',slot:'address'},
                {title: '操作',slot:'action'}
            ],
            data: [
                {name:'王小明',age:18,birthday:'919526400000',address:'长沙'},
                {name:'王小明',age:18,birthday:'919526400000',address:'长沙'},
                {name:'王小明',age:18,birthday:'919526400000',address:'长沙'},
                {name:'王小明',age:18,birthday:'919526400000',address:'长沙'}
            ]
        }
    },
    methods: {
        handleSave(index) {
            this.data[index].name=this.editName;
            this.editIndex = -1;
        },
        handleEdit(row,index) {
            this.editName = row.name;
            this.editIndex = index;
        }
    }
}
</script>