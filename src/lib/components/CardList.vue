<template>
    <div class="card-list"> 
        <div 
            class="card-item-wrapper" 
            v-for="(row, index) in data" 
            :key="index"
            @click="handleClickRow(index, row)"
        > 
            <slot name="row" :row="row" :index="index"></slot>
            <div class="card-item__selection">
                <el-checkbox 
                    v-if="selectionType === 'multiple'"
                    :value="selected.indexOf(index) > -1"
                    @input="handleToggleSelect($event, index, row)"
                    @click.native="stopPropagation"
                >
                </el-checkbox>
                <el-radio 
                    v-if="selectionType === 'single'"
                    :value="selected === index"
                    @input="handleToggleSelect($event, index, row)"
                    @click.native="stopPropagation"
                >
                </el-radio>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
        },
        selected: {
        },
        selectionType: {
            type: String,
            default () {
                return 'none' // none, multiple, single
            }
        },
        selectOnRowClick: {
            type: Boolean,
            default() {
                return false
            }
        }
    },
    methods: {
        stopPropagation(event) {
            event.stopPropagation()
        },
        handleClickRow(index, row) {
            if (this.selectOnRowClick) {
                this.handleToggleSelect(this.selected.indexOf(index) === -1, index, row)
            }
        },
        handleToggleSelect(value, index, row) {
            if (value) {
                this.$emit('row-selection-add', row, index)
            } else {
                this.$emit('row-selection-remove', row, index)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.card-list
    display flex
.card-item-wrapper 
    position relative
.card-item__selection
    position absolute
    top 0px
    left 0px
    line-height 1
    >>> .el-checkbox
        vertical-align top
</style>

