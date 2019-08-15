<template>
    <div id="app">
        <mainSkeleton v-if="!init"></mainSkeleton>
        <div v-else style="height: 100%;">
            <div class="docs-page">
                <main-header></main-header>
                <main-side-nav></main-side-nav>
                <main-content></main-content>
            </div>
        </div>
    </div>
</template>
<script>
    import mainHeader from './components/main.header'
    import mainSideNav from './components/main.sideNav'
    import mainContent from './components/main.content'
    import mainSkeleton from './main.skeleton'

    export default {
        name: 'app',
        components: {
            mainHeader,
            mainSideNav,
            mainContent,
            mainSkeleton
        },
        data() {
            return {
                init: false,
            }
        },
        mounted() {
            setTimeout(() => {
                this.init = true;
            }, 250)
        }
    }
</script>
<style lang="scss">
    #app {
        margin: 0;
        padding: 0;
        position: relative;
        height: 100%;
    }
    .docs-page {
        position: relative;
        height: 100%;
    }
</style>
