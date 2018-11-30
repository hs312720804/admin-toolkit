<template>
  <div id="app">
 <ul>
  <li><router-link  to="/table" >表格</router-link></li>
  <li><router-link  to="/Breadcrumb">面包屑</router-link></li>
  <li><router-link  to="/ActionList">列表</router-link></li>
  <li><router-link  to="/TagNav">tag导航</router-link></li>
</ul> 
      <router-view></router-view>
  </div>
</template>
<script>
export default {
 
}
</script>
<style>

</style>

