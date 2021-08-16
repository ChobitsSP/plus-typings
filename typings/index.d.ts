/// <reference path="./messaging/index.d.ts" />
/// <reference path="./net/index.d.ts" />
/// <reference path="./payment/index.d.ts" />
/// <reference path="./push/index.d.ts" />
/// <reference path="./uploader/index.d.ts" />
/// <reference path="./webview/index.d.ts" />

// declare const plus: plus.PlusStatic;

declare namespace plus {
  /**
   * https://www.dcloud.io/docs/api/index.html
   */
  interface PlusStatic {
    accelerometer: any;
    audio: any;
    cache: any;
    camera: {
      getCamera(index: number): any;
    };
    contacts: any;
    device: any;
    downloader: any;
    gallery: any;
    geolocation: any;
    io: any;
    nativeObj: any;
    nativeUI: any;
    navigator: any;
    orientation: any;
    proximity: any;
    runtime: any;
    splashscreen: any;
    storage: any;

    zip: any;
    barcode: any;
    maps: any;
    oauth: any;

    share: any;
    speech: any;
    sqlite: any;
    statistic: any;
    android: any;
    ios: any;
    key: any;
  }

  interface Exception {
    code: number;
    message: string;
  }
}
