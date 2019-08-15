<template>
    <div class="docs-content">
        <router-view></router-view>
    </div>
</template>
<style lang="scss">
    .docs-content {
        position: absolute;
        top:50px;
        left:200px;
        bottom: 0;
        right: 0;
        z-index: 2;
        background: #fff;
        border-left: 1px solid #ddd;
        padding: 10px 15px;
    }
</style>