# table
---

<zm-table :columns="columns" :data="data"></zm-table>
<script>
export default {
    mounted(){
        this.data2 = [
            {name:'张三',age:18,birthday:'1993-04-06',address:'长沙'}
        ];
    },
    data() {
        return {
            editName: '', 
            editAge: '', 
            editBirthday: '',
            editAddress: '',
            editIndex: -1,
            columns: [
                {title: '姓名',key:'name',
                    render: (h, {row,index})=>{
                        let edit;
                        if (this.editIndex === index){
                            edit = [h('input', {
                                donProps: {
                                    value: row.name
                                },
                                on: {
                                    input: (event)=>{
                                        this.editName = event.target.value;
                                    }
                                }
                            })];
                        }else{
                            edit = row.name;
                        }
                        return h('div', [edit]);
                    }
                },
                {title: '年龄',key:'age'},
                {title: '出生日期',
                    render:(h, {row,column,index}) => {
                        const date = new Date(parseInt(row.birthday));
                        const year = date.getFullYear();
                        const month = date.getMonth() + 1;
                        const day = date.getDate();
                        
                        const birthday = `${year}-${month}-${day}`;
                        return h('span', birthday)
                    }
                },
                {title: '地址',key:'address'},
                {title: '操作',
                    render: (h, {row,index}) => {
                        if (this.editIndex === index) {
                            return [
                                h('button', {
                                    on: {
                                        click: () => {
                                            this.data[index].name = this.editName;
                                            this.data[index].age = this.editAge;
                                            this.data[index].birthday = this.editBirthday;
                                            this.data[index].address = this.editAddress;
                                            this.editIndex = -1;
                                        }
                                    }
                                }, '保存'),
                                h('button', {
                                    style: {
                                        marginLeft: '6px'
                                    },
                                    on: {
                                        click: () => {
                                            this.editIndex = -1;
                                        }
                                    }
                                }, '取消')
                                ];
                            }else{
                                return h('button', {
                                    on: {
                                        click: () => {
                                            this.editName = row.name;
                                            this.editAge = row.age;
                                            this.editAddress = row.address;
                                            this.editBirthday = row.birthday;
                                            this.editIndex = index;
                                        }
                                    }
                                }, '修改');
                            }
                        }
                }
            ],
            data: [
                {name:'王小明',age:18,birthday:'919526400000',address:'长沙'},
                {name:'王小明',age:18,birthday:'919526400000',address:'长沙'},
                {name:'王小明',age:18,birthday:'919526400000',address:'长沙'},
                {name:'王小明',age:18,birthday:'919526400000',address:'长沙'}
            ],
            columns2:[
                {
                    title:'姓名',
                    render:(h, {row,column,index}) => {
                        return h('div',
                            this.$refs.table.$scopedSlots.name({row,column,index})
                        )
                    }
                },
                {
                    title:'年龄',
                    render:(h,{row,column,index}) => {
                        return h('div',
                            this.$refs.table.$scopedSlots.age({row,column,index})
                        )
                    }
                },
                {
                    title: '出生日期',
                    render: (h, {row,column,index}) => {
                        return h('div',
                            this.$refs.table.$scopedSlots.birthday({row,column,index})
                        )
                    }
                },
                {
                    title: '地址',
                    render: (h, {row,column,index}) => {
                        return h('div',
                            this.$refs.table.$scopedSlots.address({row, column, index})
                        )
                    }
                },
                {
                    title: '操作',
                    render: (h, {row, column,index}) => {
                        return h('div',
                            this.$refs.table.$scopedSlots.action({row,column,index})
                        )
                    }
                }
            ],
            data2:[],
        }
    },
    methods: {
        handleEdit(row,index){
            this.editName = row.name;
            this.editAge = row.age;
            this.editAddress = row.address;
            this.editBirthday = row.birthday;
            this.editIndex = index;
        },
        handleSave(index){
            this.data2[index].name = this.editName;
            this.data2[index].age= this.editAge;
            this.data2[index].birthday = this.editBirthday;
            this.data2[index].address = this.editAddress;
            this.editIndex = -1;
        }
    }
}
</script>




<zm-table ref=table :columns="columns2" :data="data2">
    <template slot-scope="{row,index}" slot="name">
        <input type="text" v-model="editName" v-if="editIndex === index">
        <span v-else>{{row.name}}</span>
    </template>
    <template slot-scope="{row,index}" slot="age">
        <input type="text" v-model="editAge" v-if="editIndex === index">
        <span v-else>{{row.age}}</span>
    </template>
    <template slot-scope="{row,index}" slot="birthday">
            <input type="text" v-model="editBirthday" v-if="editIndex === index">
            <span v-else>{{row.birthday}}</span>
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
</zm-table>