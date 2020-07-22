# table
---

<zm-table :columns="columns" :data="data"></zm-table>
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
            ]
        
        }
    }
}
</script>