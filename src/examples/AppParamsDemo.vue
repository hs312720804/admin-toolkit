<template>
    <el-form label-width="140px">
        <AppParams v-model="appParams" />
    </el-form>
</template>

<script>
export default {
    data() {
        return {
            appParams: {
                packagename: undefined,
                versioncode: undefined,
                dowhat: undefined,
                bywhat: undefined,
                byvalue: undefined,
                params: [],
                exception: {}
            }
        }
    }
}
</script>