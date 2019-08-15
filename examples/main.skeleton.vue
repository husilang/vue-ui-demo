<template>
    <div class="main-skeleton">
        <zm-skeleton height="80px"></zm-skeleton>
        <div>
            <div class="skeleton-container">
                <div class="skeleton">
                    <zm-skeleton height="300px"></zm-skeleton>
                </div>
                <zm-skeleton height="45px"></zm-skeleton>
            </div>
            <div class="skeleton-bottom">
                <zm-skeleton height="45px"></zm-skeleton>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>
<style lang="scss">
    .skeleton-container{
        width: 960px;
        margin: 0 auto;
        text-align: center;
        padding: 100px 0;
    }
    .skeleton-bottom {
        width: 960px;
        margin: 0 auto;
        text-align: center;
    }
    .skeleton {
        margin: 0 auto;
        width: 300px;
        margin-bottom: 56px;
    }
</style>