<template>
  <div id="app">
    <h2>ActionList</h2>
    <ActionListDemo />

    <h2>TagNav</h2>
    <TagNavDemo />

    <Ellipsis :content='EllipsisContent' width="100" height="100" ></Ellipsis>
    <NumberInfo :title="NumberInfo.title"
      :subTitle="NumberInfo.subTitle"
      :total="NumberInfo.total"
      :subTotal="NumberInfo.subTotal"
      :status="NumberInfo.status"
      :gap="NumberInfo.gap"
    ></NumberInfo>

    <h2>Breadcrumb</h2>
    <BreadcrumbDemo />

    <h2>GateSchemaForm</h2>
    <GateSchemaFormDemo />

    <h2>Table</h2>
    <TableDemo />

    <h2>ContentWrapper</h2>
    <ContentWrapperDemo />

    <h2>RemoteSelect</h2>
    <RemoteSelectDemo />

      <h2>pop</h2>
      <c-pop
        :title="pop.title">
      </c-pop>
      <h2>Dropdown</h2>
      <dropdown :droplist = dropdown>

      </dropdown>
    <h2>
      Carousel
    </h2>
    <c-carousel :carouselList = carousel>

    </c-carousel>
  </div>
</template>

<script>
import pop from '@/lib/components/pop.vue'
import Dropdown from '@/lib/components/Dropdown.vue'
import Carousel from '@/lib/components/Carousel.vue'
import NumberInfo from '@/lib/components/NumberInfo'
import Ellipsis from './lib/components/Ellipsis'

export default {
  name: 'app',
  components: {
    pop,
    Dropdown,
    Carousel,
    NumberInfo,
    Ellipsis

  },
  data () {
    return {
      EllipsisContent: '方中大黄性味苦寒，泻火解毒，又能攻下通便，有釜底抽薪之意，故为主药；黄芩攻善清热燥湿.',
      NumberInfo: {
        title: '标题1',
        subTitle: '标题二',
        total: 12321,
        subTotal: 27.1,
        status: 'up',
        gap: 14
      },
      pop: {
        title: '弹窗'
      },
      dropdown: [
        {
          name: '首页',
          to: '/'
        },
        {
          name: '文章管理',
          to: '/article'
        },
        {
          name: '创建文章',
          to: '/create'
        }
      ],
      carousel: [
        {
          url: '/to',
          img: '#',
          title: '哈哈'
        },
        {
          url: '/to',
          img: '#',
          title: '嘻嘻'
        },
        {
          url: '/to',
          img: '#',
          title: '呜呜'
        }
      ]
    }
  }
}
</script>

<style>
</style>
