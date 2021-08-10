/// <reference path="./net/index.d.ts" />
/// <reference path="./payment/index.d.ts" />
/// <reference path="./webview/index.d.ts" />

export = plus;
export as namespace plus;

declare const _: plus.PlusStatic;

declare namespace plus {
  /**
   * https://www.dcloud.io/docs/api/index.html
   */
  interface PlusStatic {}
}
