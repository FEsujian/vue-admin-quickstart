export class PageService {
  public pageIndex: number; // 当前页
  public pageTotal: number; // 总页数
  public numberTotal: number; // 总条数
  public pageSize: number; // 页面条数
  public pageSizeOpts: number[]; // 页面条数配置
  public layout: string; // 布局
  public loading: boolean = false; // 加载状态

  constructor() {
    this.numberTotal = 0;
    this.pageTotal = 0;
    this.pageIndex = 1;
    this.pageSize = 10;
    this.loading = false;
    this.pageSizeOpts = [10, 20, 30, 50, 100];
    this.layout = 'total, sizes, prev, pager, next, jumper';
  }

  /**
   * 获取分页配置
   */
  public getPageConfig() {
    return {
      page: this.pageIndex - 1,
      size: this.pageSize,
    };
  }

  /**
   * 更新分页配置信息
   */
  public updatePageConfig({ totalElements, totalPages }) {
    this.pageTotal = parseInt(totalPages, 10);
    this.numberTotal = parseInt(totalElements, 10);
  }

  /**
   * 重置分页数据
   */
  public resetPage() {
    this.pageTotal = 0;
    this.pageIndex = 1;
    this.loading = false;
  }
}
