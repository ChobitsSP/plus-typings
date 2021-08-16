declare namespace plus {
  interface PlusStatic {
    /**
     * https://www.html5plus.org/doc/zh_cn/barcode.html
     */
    barcode: {
      /** QR二维码 */
      readonly QR: 0;
      /** EAN条形码标准版 */
      readonly EAN13: 1;
      /** ENA条形码简版 */
      readonly EAN8: 2;
      /** Aztec二维码 */
      readonly AZTEC: 3;
      /** Data Matrix二维码 */
      readonly DATAMATRIX: 4;
      /** UPC条形码标准版 */
      readonly UPCA: 5;
      /** UPC条形码缩短版 */
      readonly UPCE: 6;
      /** Codabar条形码 */
      readonly CODABAR: 7;
      /** Code39条形码 */
      readonly CODE39: 8;
      /** Code93条形码 */
      readonly CODE93: 9;
      /** Code128条形码 */
      readonly CODE128: 10;
      /** ITF条形码 */
      readonly ITF: 11;
      /** MaxiCode二维码 */
      readonly MAXICODE: 12;
      /** PDF 417二维条码 */
      readonly PDF417: 13;
      /** RSS 14条形组合码 */
      readonly RSS14: 14;
      /** 扩展式RSS条形组合码 */
      readonly RSSEXPANDED: 15;

      /**
       * 扫码识别图片中的条码
       * 输入图片文件进行扫码识别，成功扫描到条码（一维码或二维码）后通过successCallback回调返回，失败则通过errorCallback回调返回。
       * @param path 要扫码的图片路径 必须是本地文件路径，如URLType类型（如以"_www"、"_doc"、"_documents"、"_downloads"开头的相对URL路径）或者系统绝对路径。
       * @param successCB 
       * @param errorCB 
       * @param filters 条码类型常量数组，默认情况支持QR、EAN13、EAN8类型。 通过此参数可设置扫码识别支持的条码类型（注意：设置支持的条码类型越多，扫描识别速度可能将会降低）。
       * @param autoDecodeCharset 自动解码字符集 false - 将二维码解码数据当做utf-8字符集处理，对于非utf-8字符集数据可能会出现乱码 true - 自动检测二维码解码数据，兼容处理utf-8、GBK、Big5编码格式的字符
       */
      scan(path: string, successCB: plus.barcode.BarcodeSuccessCallback, errorCB: plus.barcode.ErrorCallback, filters?: number[], autoDecodeCharset?: boolean): void;

      /**
       * 创建扫码识别控件对象
       * 此方法创建扫码识别控件并不会显示在页面中，需要调用plus.webview.Webview窗口对象的append方法将其添加到Webview窗口中才能显示。 注意：需要设置styles参数的top/left/width/height属性指定扫码识别控件的位置及大小，否则可能无法正确显示。
       * @param id 可用于通过plus.barcode.getBarcodeById()方法查找已经创建的扫码识别控件对象。
       * @param filters 条码类型常量数组，默认情况支持QR、EAN13、EAN8类型。 通过此参数可设置扫码识别支持的条码类型（注意：设置支持的条码类型越多，扫描识别速度可能将会降低）。
       * @param styles 用于设置扫码控件在页面中显示的样式，如扫码框、扫码条的颜色等。
       * @param autoDecodeCharset 自动解码字符集 false - 将二维码解码数据当做utf-8字符集处理，对于非utf-8字符集数据可能会出现乱码 true - 自动检测二维码解码数据，兼容处理utf-8、GBK、Big5编码格式的字符
       */
      create(id: string, filters?: number[], styles?: plus.barcode.BarcodeStyles, autoDecodeCharset?: boolean): plus.barcode.Barcode;

      getBarcodeById(id: string): plus.barcode.Barcode;

      Barcode: plus.barcode.Barcode;
    };
  }
}

declare namespace plus.barcode {
  interface Barcode {
    /**
     * 构造扫码识别控件
     * 创建扫码识别控件，并绑定当前Webview窗口指定id的DOM标签（如div或object等），覆盖在DOM元素上方并显示。 此时styles参数中的left/top/width/height属性值将被忽略，通过DOM标签来确定扫码识别控件的位置及大小。 注意：uni-app项目不能通过此方法创建扫码识别控件，应该使用plus.barcode.create方法创建。
     */
    new(domId: string, filters?: number[], styles?: BarcodeStyles, autoDecodeCharset?: boolean): Barcode;

    cancel(): void;
    close(): void;
    setFlash(open: boolean): void;
    setStyle(styles: BarcodeStyles): void;
    start(options?: BarcodeOptions): void;

    // Events
    onerror: ErrorCallback;
    onmarked: BarcodeSuccessCallback;
  }

  interface BarcodeStyles {
    background: string;
    frameColor: string;
    scanbarColor: string;

    top: string;
    left: string;
    width: string;
    height: string;
    position?: "static" | "absolute";
  }

  interface BarcodeOptions {
    conserve: boolean;
    filename: string;
    vibrate: boolean;
    sound: "none" | "default";
  }

  /**
   * 扫码识别成功回调函数
   * 当Barcode控件扫码成功时的回调函数，返回识别成功的扫码数据。
   */
  interface BarcodeSuccessCallback {
    /**
     * 
     * @param type Number类型的值，与Barcode对象定义的条码类型常量一致。
     * @param code 扫码识别出的数据内容，字符串类型，采用UTF8编码格式。
     * @param file 扫码识别到的截图，png格式文件，如果设置为不保存截图，则返回undefined。
     * @param charset 仅在设置autoDecodeCharset为true时会自动识别字符集，否则当做utf-8字符集处理。
     */
    (type: number, code: string, file: string, charset: "UTF-8" | "GB2312" | "BIG5"): void;
  }

  interface Exception {
    code: number;
    message: string;
  }

  type ErrorCallback = (err: Exception) => void;
}
