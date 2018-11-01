<!---add by wanghaihua 2018-10-31 多行单行文本都可以-->
<template>
 <el-popover
    placement="top-start"
    title=""
    trigger="hover"
    :content="content">
    <div class="ellipsis" slot="reference">
     <span class="txt" >{{content}}</span>
     <span class="t"></span>
    </div>
  </el-popover>

</template>
<script>
export default {
    props:["content","width","height","tooltip"],
    mounted () {
        document.querySelector(".txt").style.width=this.width+"px";
        document.querySelector(".txt").style.height=this.height+"px";
    }
}
</script>
<style  scoped>
 .txt{
  display: inline-block;
  line-height: 20px;
  overflow: hidden;
  font-size: 16px;
}
.t:after{
  display: inline;
  content: "...";
  font-size: 16px;
} 
.ellipsis{
 display: inline-block;
}
</style>


