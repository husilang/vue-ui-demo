<template>
    <div class="docs-nav">
        <div style="padding-top: 10px;">
            <ul>
                <li v-for="(item,index) in navList"
                    :key="index"
                    @click="$router.push({name: item.name})"
                    :class="{'cur': $route.path === item.path}">
                    {{item.navName}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import navList from '../nav.config'
    export default {
        data() {
            return {
                navList: navList
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
            font-size: 15px;

            &:hover, &.cur {
                color: olivedrab;
            }
            &.cur {
                font-weight: bold;
            }
        }
    }
</style>