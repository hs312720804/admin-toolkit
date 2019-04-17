<template>
    <el-form :model="form" label-width="140px">
        <AppParams prop-prefix="appParams" v-model="form.appParams" />
    </el-form>
</template>

<script>
export default {
    data() {
        return {
            form: {
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
}
</script>