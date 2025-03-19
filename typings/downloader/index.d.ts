declare namespace plus {
  interface PlusStatic {
    /**
     * https://www.html5plus.org/doc/zh_cn/downloader.html
     */
    downloader: {
      /**
       * 新建下载任务
       * 请求下载管理创建新的下载任务，创建成功则返回Download对象，用于管理下载任务。
       * @param url 要下载文件的url地址，仅支持网络资源地址，支持http或https协议。 允许创建多个相同url地址的下载任务。 注意：如果url地址中包含中文或空格等，需要进行urlencode转换。
       * @param options 可通过此参数设置下载任务属性，如保存文件路径、下载优先级等。
       * @param completedCB 当下载任务下载完成时触发，成功或失败都会触发。
       */
      createDownload(url: string, options?: plus.downloader.DownloadOptions, completedCB?: plus.downloader.DownloadCompletedCallback): plus.downloader.Download;

      /**
       * 枚举下载任务
       * @param enumCB 枚举下载任务完成时触发。
       * @param state 如果未指定state值，则枚举所有未完成的下载任务。
       */
      enumerate(enumCB: plus.downloader.DownloadEnumerateCallback, state?: any): void;

      /**
       * 清除指定状态的下载任务。
       * @param state 
       */
      clear(state?: any): void;

      /**
       * 开始所有下载任务
       */
      startAll(): void;
    };
  }
}

declare namespace plus.downloader {
  interface DownloadOptions {
    method?: string;
    data?: string;
    filename?: string;
    priority?: number;
    timeout?: number;
    retry?: number;
    retryInterval?: number;
  }

  interface Download {
    readonly id: string;
    readonly url: string;
    readonly state: number;
    readonly options: DownloadOptions;
    readonly filename: string;
    readonly downloadedSize: number;
    readonly totalSize: number;
    abort(): void;
    addEventListener(event: string, listener: Function, capture?: boolean): void;
    getAllResponseHeaders(): string;
    getResponseHeader(headerName: string): string;
    pause(): void;
    resume(): void;
    setRequestHeader(headerName: string, headerValue: string): void;
    start(): void;
  }

  /**
   * 下载任务完成事件
   */
  type DownloadCompletedCallback = (download: Download, status: number) => void;

  /**
   * 下载任务完成事件
   */
  type DownloadStateChangedCallback = (download: Download, status: number) => void;

  /**
   * 枚举下载任务回调
   */
  type DownloadEnumerateCallback = (downloads: Download[]) => void;
}