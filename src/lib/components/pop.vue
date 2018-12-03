<template>
    <div>
    <Button type="primary" @click="showPop">{{ title }}</Button>
    <Dialog
            :title="title"
            :visible.sync="showDialog"
            width="50vw"
    >
        <div>woshitachuang</div>
    </Dialog>
    </div>
</template>

<script>
    import {Button, Dialog} from 'element-ui'
    export default{
        components: {
            Button,
            Dialog
        },
        props: {
            title: {
                type: String,
                default() {
                    return '弹窗'
                }
            }
        },
        data(){
            return {
                showDialog: false,
            }
        },
        methods:{
            showPop() {
                this.showDialog = true;
            },
        }
    }
</script>