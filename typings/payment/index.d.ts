declare namespace plus {
  interface PlusStatic {
    payment: {
      /**
       * 请求支付操作
       * @param {*} channel 指定支付操作的通道，通过getChannels接口获取。
       * @param {*} statement 支付订单信息，由支付通道定义的数据格式，通常是由业务服务器生成或向支付服务器获取，是经过加密的字符串信息。
       * @param {*} successCB 请求支付成功时触发，用于返回支付结果。
       * @param {*} errorCB 请求支付失败时触发，用于返回错误信息。
       * @memberof PlusPayment
       */
      request(
        channel: plus.payment.PaymentChannel,
        statement: string | object,
        successCB: plus.payment.PaymentSuccessCallback,
        errorCB: plus.payment.PaymentErrorCallback
      );

      /**
       * 获取支付通道
       */
      getChannels(successCB: plus.payment.ChannelsSuccessCallback, errorCB: plus.payment.PaymentErrorCallback);
    };
  }
}

declare namespace plus.payment {
  interface PaymentReqResult {
    result: string;
  }

  /**
   * 当获取支付通道列表成功时的回调函数，用于返回终端支持的支付通道列表。
   * @param {PaymentChannel[]} channels 系统支持的支付通道PaymentChannel列表
   */
  type ChannelsSuccessCallback = (channels: PaymentChannel[]) => void;

  type PaymentSuccessCallback = (result: PaymentResult) => void;

  /**
   * 支付操作失败错误信息，可通过error.code获取错误代码，具体错误码有各支付通道定义
   * @param {{ code: number }} error 支付宝支付错误代码如下： 62000，客户端未安装支付通道依赖的服务； 62001，用户取消支付操作； 62002，此设备不支持支付； 62003，数据格式错误； 62004，支付账号状态错误； 62005，订单信息错误； 62006，支付操作内部错误； 62007，支付服务器错误； 62008，网络问题引起的错误； 62009，其它未定义的错误。 微信支付错误代码如下： -1，一般错误； -2，用户取消； -3，发送失败； -4，认证被否决； -5，不支持错误。
   */
  type PaymentErrorCallback = (error: { code: number }) => void;

  /**
   * 对象表示支付操作返回结果，用于确认支付操作成功。
   */
  interface PaymentResult {
    channel: any;
    tradeno: string;
    description: string;
    url: string;
    signature: string;
    rawdata: string;
  }

  interface PaymentChannel {
    readonly id: string;
    readonly description: string;
    readonly serviceReady: boolean;
    installService();

    // iOS iAP
    requestOrder(ids, successCB, errorCB);
    restoreComplateRequest(options, successCB);
  }

  interface PayRawResult {
    resultStatus: number;
    memo: string;
    result: string;
  }

  interface AlipayResult {
    alipay_trade_app_pay_response: { out_trade_no: string };
  }
}