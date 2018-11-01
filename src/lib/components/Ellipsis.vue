<!---add by wanghaihua 2018-10-31 多行单行文本都可以-->
<template>
    <div class="ellipsis">
     <span class="txt">{{content}}</span>
     <span class="t"></span>
    </div>
</template>
<script>
export default {
    props:["content","width","height"],
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
</style>


