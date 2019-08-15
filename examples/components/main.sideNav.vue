<template>
    <div class="docs-nav">
        <div>
            <ul>
                <li v-for="(item,index) in navList" :key="index" @click="$router.push({name: item.routerName})">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                navList: [
                    {name: '骨架屏', routerName: 'skeleton'},
                ]
            }
        }
    }
</script>
<style lang="scss">
    .docs-nav {
        position: absolute;
        left: 0;
        top: 50px;
        bottom: 0;
        width: 217px;
        overflow-y: scroll;

        li {
            padding-left: 24px;
            cursor: pointer;
            line-height: 30px;

            &:hover {
                color: olivedrab;
            }
        }
    }
</style>