/// <reference path="./payment/index.d.ts" />
/// <reference path="./webview/index.d.ts" />

export = plus;
export as namespace plus;

declare const _: plus.PlusStatic;

declare namespace plus {
  /**
   * https://www.dcloud.io/docs/api/index.html
   */
  interface PlusStatic {
    nativeUI: any;
    nativeObj: any;
    uploader: any;
    device: {
      uuid: string;
      dial(phone: string, confirm?: boolean);
    }

    share: {
      sendWithSystem(options): void;
    }

    runtime: {
      appid: string;
      version: string;
    }

    /** 相机 */
    camera: any;
    /** 文件 */
    io: any;
    /** 相册 */
    gallery: any;
  }
}
