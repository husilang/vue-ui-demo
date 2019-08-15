<template>
    <div class="main-skeleton">
        <zm-skeleton height="50px"></zm-skeleton>
        <div>
            <div class="skeleton-sidebar">
                <zm-skeleton height="600px"></zm-skeleton>
            </div>
            <div class="skeleton-content">
                <div class="section" style="width: 100px;margin-bottom: 20px;">
                    <zm-skeleton height="28px"></zm-skeleton>
                </div>
                <div class="section" style="width: 200px;margin-bottom: 20px;">
                    <zm-skeleton height="28px"></zm-skeleton>
                </div>
                <div class="section" style="width: 400px;margin-bottom: 20px;">
                    <zm-skeleton height="28px"></zm-skeleton>
                </div>
                <div class="section" style="width: 600px;margin-bottom: 20px;">
                    <zm-skeleton height="28px"></zm-skeleton>
                </div>
                <div class="section" style="width: 300px;margin-bottom: 20px;">
                    <zm-skeleton height="28px"></zm-skeleton>
                </div>
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
    .skeleton-sidebar{
        width: 180px;
        text-align: center;
        margin-top: 20px;
        float: left;
    }
    .skeleton-content {
        margin-top: 20px;
        width: calc(100% - 200px);
        text-align: center;
        margin-left: 20px;
        float: left;
    }
</style>