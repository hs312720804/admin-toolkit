<template>
    <div class="probability">
        <el-table
                :data="formdata"
                border
        >
            <el-table-column prop="id" label="id"></el-table-column>
            <el-table-column prop="probability" label="中奖概率">
                <template slot-scope="scope">
                    <p :key="scope.row.id"
                       contenteditable="true"
                       class="button_underline"
                       @blur="probabilityBlur($event,scope.row)"
                    >
                        {{scope.row.probability}}
                    </p>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  props: {
    formdata: {
    }
  },
  data: function () {
    return {}
  },
  methods: {
    probabilityBlur (event, row) {
      this.$emit('probability-blur', event, row)
    }
  }
}
</script>

<style lang="stylus" scoped>
    .button_underline
        text-decoration underline
        &:hover
            cursor pointer
</style>
