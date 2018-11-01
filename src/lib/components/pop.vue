<template>
    <Button type="primary" @click="showPop">{{ title }}</Button>
</template>

<script>
    import {Button, Tag, Dialog} from 'element-ui'
    export default{
        components: {
            Button,
            Dialog,
            Tag,
        },
        props: {
            title: {
                type: String,
                default() {
                    return '弹窗'
                }
            }
        },
        methods:{
            showPop() {
//
                alert("弹窗");
            },
        }
    }
</script>