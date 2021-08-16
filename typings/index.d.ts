/// <reference path="./barcode/index.d.ts" />
/// <reference path="./camera/index.d.ts" />
/// <reference path="./contacts/index.d.ts" />
/// <reference path="./gallery/index.d.ts" />
/// <reference path="./io/index.d.ts" />
/// <reference path="./key/index.d.ts" />
/// <reference path="./messaging/index.d.ts" />
/// <reference path="./nativeUI/index.d.ts" />
/// <reference path="./net/index.d.ts" />
/// <reference path="./payment/index.d.ts" />
/// <reference path="./push/index.d.ts" />
/// <reference path="./runtime/index.d.ts" />
/// <reference path="./share/index.d.ts" />
/// <reference path="./storage/index.d.ts" />
/// <reference path="./uploader/index.d.ts" />
/// <reference path="./webview/index.d.ts" />
/// <reference path="./zip/index.d.ts" />

// declare const plus: plus.PlusStatic;

declare namespace plus {
  /**
   * https://www.dcloud.io/docs/api/index.html
   */
  interface PlusStatic {
    accelerometer: any;
    audio: any;
    device: any;
    downloader: any;
    geolocation: any;
    nativeObj: any;
    navigator: any;
    orientation: any;
    proximity: any;
    splashscreen: any;

    maps: any;
    oauth: any;

    speech: any;
    sqlite: any;
    statistic: any;
    android: any;
    ios: any;
  }

  interface Exception {
    code: number;
    message: string;
  }

  type ErrorCallback = (err: Exception) => void;
}
