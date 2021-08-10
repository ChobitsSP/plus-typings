/// <reference path="./payment/index.d.ts" />
/// <reference path="./webview/index.d.ts" />

declare namespace plus {
  /**
   * https://www.dcloud.io/docs/api/index.html
   */
  interface plus {
    payment: PlusPayment;
    webview: PlusWebview;

    nativeUI: any;
    net: PlusNet;
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
