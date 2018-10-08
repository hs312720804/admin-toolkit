<template>
    <el-menu
        class="menu"
        :background-color="backgroundColor" 
        :text-color="textColor"
        :active-text-color="activeTextColor"
        :defaultActive="defaultActive"
        @select="handleSelect"
        :collapse="isCollapse"
    >
        <template v-for="(item, index) in items">
            <el-submenu 
                v-if="item.children" 
                :key="index"
                :index="index + ''"
            >
                <template slot="title">
                    <i v-if="item.icon" :class="item.icon"></i>
                    <span>{{ item.title }}</span>
                </template>
                <el-menu-item 
                    v-for="(child, idx) in item.children" 
                    :key="idx" 
                    :index="child.route">
                    <i v-if="child.icon" :class="child.icon"></i>
                    <span slot="title">{{ child.title }}</span>
                </el-menu-item>
            </el-submenu>
            <el-menu-item 
                v-else 
                :key="index"
                :index="item.route"
            >
                <i v-if="item.icon" :class="item.icon"></i>
                <span slot="title">{{ item.title }}</span>
            </el-menu-item>
        </template>
    </el-menu>
</template>

<script>
export default {
    props: ['isCollapse', 'items', 'defaultActive', 'textColor',
        'activeTextColor', 'backgroundColor'],
    methods: {
        handleSelect(name) {
            this.$router.push({name})
        }
    },
}

</script>