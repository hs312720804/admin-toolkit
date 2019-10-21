<template>
       <ContentEllipsis :content='EllipsisContent' width="100" height="100" ></ContentEllipsis>
</template>
<script>
export default {
  data () {
    return {
      EllipsisContent: `Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.`
    }
  }
}
</script>
