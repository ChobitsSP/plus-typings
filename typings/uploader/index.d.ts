declare namespace plus {
  interface PlusStatic {
    uploader: {
      /**
       * 请求上传管理创建新的上传任务，创建成功则返回Upload对象，用于管理上传任务。
       * @param url 上传服务器的url地址，仅支持http或https协议。 允许创建多个相同url地址的上传任务。
       * @param options 上传任务的参数 可通过此参数设置定义上传任务属性，如请求类型、上传优先级等。
       * @param completedCB 上传任务完成回调函数 当上传任务提交完成时触发，成功或失败都会触发。
       */
      createUpload(url: string, options?: any, completedCB?: any): Upload;
      clear(state): void;
      enumerate(enumCB, state);
      startAll();
    };
  }

  interface Upload {
    id: string;
    url: string;
    state: number;
    options: any;
    responseText: string;
    uploadedSize: number;
    totalSize: number;

    addFile(path, options): boolean;
    addData(key, value): boolean;
    start(): void;
    pause(): void;
    resume(): void;
    abort(): void;
    addEventListener(type, listener, capture): void;
    getAllResponseHeaders(): string;
    getResponseHeader(headerName: string): string;
    setRequestHeader(headerName: string, headerValue: string): void;
  }

  interface UploadOptions {

  }
}
