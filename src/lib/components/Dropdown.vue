<template>
    <el-dropdown>
        <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
                    v-for="(item, index) in droplist"
                    :key="index"
                    :to = "item.to"
                    v-on:click.native ="goto"
            ><a :href="item.to">{{ item.name }}</a></el-dropdown-item>
            <!-- <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item> -->
        </el-dropdown-menu>

    </el-dropdown>
</template>
<script>
    import {Dropdown} from 'element-ui';
    export default{
        components:{
            'el-dropdown': Dropdown
        },
        props:['droplist'],
        methods:{
            goto(){
                console.log("ssssss");
            }
        }
    }
</script>