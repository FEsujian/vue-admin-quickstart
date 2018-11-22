<template>
  <section class="component data-box">
    <div class="table">
      <el-table :row-style="rowStyle" :row-class-name="rowClass" :emptyText="emptyText" :height="tableHeight()" :max-height="maxHeight" tooltip-effect="dark" ref="table" :data="data" border stripe :highlight-current-row="selectionRow!=undefined" @current-change="onCurrentChange" @selection-change="onSelectionChange" @sort-change="onSortChange" :span-method="objectSpanMethod">
        <el-table-column v-if="selectionList" type="selection" width="40">
        </el-table-column>
        <el-table-column v-if="!hiddenIndex" type="index" :label="indexLabel" width="50">
        </el-table-column>
        <slot name="columns"></slot>
      </el-table>
    </div>
    <div v-if="page&&data&&data.length>0" class="page row end-span">
      <el-pagination size="small" :layout="page.layout" :total="page.total" :current-page.sync="page.pageIndex" :page-size.sync="page.pageSize" :page-sizes="page.pageSizeOpts" @size-change="pageSizeChange" @current-change="pageIndexChange"></el-pagination>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch, Prop, Emit } from 'vue-property-decorator';
import { PageService } from '@/utils/page.service';
import { SortService } from '@/utils/sort.service';
import { Table } from 'element-ui';

@Component({
  components: {},
})
export default class DataBox extends Vue {
  public table: any;
  // 数据列表
  @Prop()
  private data!: any[];
  // 分页数据
  @Prop()
  private page!: PageService;
  // 分页数据
  @Prop()
  private sort!: SortService;
  // 选择列表
  @Prop()
  private selectionList: any;
  // 选择项
  @Prop()
  private selectionRow: any;
  @Prop({ default: 528 })
  private maxHeight!: number;
  @Prop()
  private height: any;
  @Prop({ type: Function })
  private rowStyle!: () => any;

  @Prop({ type: Function })
  private rowClass!: () => any;

  @Prop({ type: Boolean })
  private hiddenIndex;

  // 用来判断是否合并单元格
  @Prop({ type: Boolean })
  private isSpan;

  @Prop({
    type: String,
    default: '序号',
  })
  private indexLabel;
  // 分页信息改变消息
  @Emit('onPageChange')
  private pageConfigChange(page) {}
  // 更新选择项列表
  @Emit('update:selectionList')
  private updateSelectionList(list) {}
  // 更新当前选择项
  @Emit('update:selectionRow')
  private updateSelectionRow(row) {}

  // 监听当前选中行变化
  @Watch('selectionRow')
  private onSelectionRowChange(val: string, oldVal: string) {
    if (this.table.store.states.currentRow !== val) {
      this.$nextTick(() => {
        this.table.setCurrentRow(val);
      });
    }
  }

  // 监听当前选中列表变化
  @Watch('selectionList')
  private onSelectionListChanged(val: any[], oldVal: any[]) {
    if (!val) {
      return;
    }
    //  等待data 渲染完毕之后再进行选中行赋值
    this.$nextTick(() => {
      // 待删除检测
      val.forEach((row) => {
        const target = this.table.store.states.selection.find((x) => x === row);
        if (!target) {
          this.table.toggleRowSelection(row, true);
        }
      });

      // 待删除检测
      this.table.store.states.selection.forEach((row) => {
        const target = this.table.store.states.selection.find((x) => x === row);
        if (!target) {
          this.table.toggleRowSelection(row, false);
        }
      });
    });
  }

  private tableHeight() {
    if (this.height === '') {
      return this.maxHeight;
    } else {
      return this.height;
    }
  }

  private get emptyText() {
    return this.data ? '暂无数据' : ' ';
  }
  /**
   * 组件初始化
   */
  private mounted() {
    this.table = this.$refs['table'] as any;
  }

  /**
   * 监听绑定数据变化
   */
  @Watch('data')
  private onDataChanged(newVal: string, oldVal: string) {}

  /**
   * 页码数量变化回调
   */
  private pageSizeChange(value) {
    this.page.pageIndex = 1;
    this.page.pageSize = value;
    this.pageConfigChange(this.page);
  }

  /**
   * 页码位置变化回调
   */
  private pageIndexChange(value) {
    this.page.pageIndex = value;
    this.pageConfigChange(this.page);
  }

  /**
   *  选择列表变化回调
   */
  private onSelectionChange(list) {
    if (this.selectionList) {
      this.updateSelectionList(list);
    }
  }

  /**
   * 排序改变
   */
  private onSortChange({ column, prop, order }) {
    if (this.sort) {
      this.sort.update(prop, order);
      this.pageConfigChange(this.page);
    }
  }

  /**
   *  选择项变化回调
   */
  private onCurrentChange(row) {
    this.updateSelectionRow(row);
  }

  /**
   *  清楚选择项
   */
  private clearSelection() {
    this.table.clearSelection();
    this.table.setCurrentRow();
  }

  /**
   * 合并列（2行合并一行）
   */

  private objectSpanMethod({ row, column, rowIndex, columnIndex }) {
    if (this.isSpan === true) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.data-box {
  & > * {
    padding: 10px;
  }
}
</style>
<style lang="less">
.data-box.component {
  .el-table {
    thead th {
      height: 26px;
      line-height: 26px;
      background-color: #f5f5f5;
      color: #8c8c8c;
      font-size: 12px;
      padding: 0;
      text-align: center;
    }
  }
}
</style>
