<template>
    <el-row>
        <el-col :span="12">
            <div class="block">
                <span class="demonstration">默认 Hover 指示器触发</span>
                <el-carousel height="150px">
                    <el-carousel-item @click.native="xxxx" v-for="(item,index) in carouselList" :key="index">
                        <div class="carousel_con">
                            <img :src='item.img' alt="">
                            <h3>{{ item.title }}</h3>
                        </div>

                    </el-carousel-item>
                </el-carousel>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import { Carousel, CarouselItem, Layout } from 'element-ui'
export default{
  components: {
    'el-carousel': Carousel,
    'el-carousel-item': CarouselItem,
    'el-layout': Layout
  },
  props: ['carouselList'],
  methods: {
    xxxx () {
      console.log(this.carouselList)
    }
  }
}
</script>
<style>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .carousel_con{position:relative;height:150px;}
    .carousel_con h3{position:absolute; bottom:0; left:0; width:100%; text-align:center; line-height:60px;}
</style>
