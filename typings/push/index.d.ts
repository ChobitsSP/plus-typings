
declare namespace plus {
  interface PlusStatic {
    /**
     * https://www.html5plus.org/doc/zh_cn/push.html
     */
    push: {
      /**
       * 添加推送消息事件监听器，当指定推送事件发出时触发。
       * @param type 支持事件类型："click"-从系统消息中心点击消息启动应用事件；"receive"-应用从推送服务器接收到推送消息事件。
       * @param listener 事件监听器回调函数，在接收到推送消息时调用
       * @param capture 是否捕获事件，此处可忽略
       */
      addEventListener(type: "click" | "receive", listener: plus.push.PushReceiveCallback, capture?: boolean): void;

      /**
       * 清空系统消息中心所有的推送消息。
       */
      clear(): void;

      /**
       * 在本地直接创建推送消息，并添加到系统消息中心。
       * @param content 消息显示的内容，在系统通知中心中显示的文本内容。
       * @param payload 消息承载的数据，可根据业务逻辑自定义数据格式。
       * @param option 创建消息的额外参数，参考MessageOptions。
       */
      createMessage(content: string, payload?: string, option?: plus.push.MessageOptions): void;

      /**
       * 获取所有推送消息
       * 获取客户端接收到的所有推送消息。 仅包括在系统消息中心显示的推送消息，不包括调用setAutoNotification(false)方法设置不显示推送消息后接收到的消息。
       */
      getAllMessage(): plus.push.PushMessage[];

      /**
       * 获取客户端推送标识信息
       */
      getClientInfo(): plus.push.ClientInfo;

      /**
       * 异步获取客户端推送标识信息
       * @param successCB 
       * @param errorCB 
       */
      getClientInfoAsync(successCB: (info: plus.push.ClientInfo) => void, errorCB?: plus.push.ErrorCallback): void;
      setAutoNotification(notify: boolean): void;
      remove(message: plus.push.PushMessage): void;
    };
  }
}

declare namespace plus.push {
  interface MessageOptions {
    /**
     * 仅在流应用环境中有效，默认值为当前流应用的appid。
     */
    appid?: string;

    /**
     * 是否覆盖上一次提示的消息
     * 可取值true或false，true为覆盖，false不覆盖。 默认为false。
     */
    cover?: boolean;

    /**
     * 提示消息延迟显示的时间
     * 当设备接收到推送消息后，可不立即显示，而是延迟一段时间显示，延迟时间单位为s，默认为0s，立即显示。
     */
    delay?: number;

    icon?: string;

    /**推送消息的提示音
     * 
     * 显示消息时的播放的提示音，可取值： “system”-表示使用系统通知提示音； “none”-表示不使用提示音； 默认值为“system”。
     */
    sound?: "system" | "none";

    /**
     * 推送消息的标题
     * 在系统消息中心显示的通知消息标题，默认值为程序的名称。
     */
    title?: string;

    /**
     * 推送消息的副标题
     */
    subtitle?: string;

    /**
     * 默认为当前时间，如果延迟显示则使用延时后显示消息的时间。
     */
    when?: Date;
  }

  type PushReceiveCallback = (msg: PushMessage) => void;

  interface AndroidMsg {
    /** 标题 */
    title: string;

    /** 内容 */
    content: string;

    /** 自定义数据 */
    payload: any;
  }

  interface PushMessage {
    /** 
     * 推送消息显示的标题
     */
    title: string;

    /** 如果为对象 则为 json 字符串 */
    content: string;

    /**
     * Apple APNS推送协议数据
     */
    aps?: {
      alert: {
        body: string;
        title: string;
      },
      "mutable-content": number;
      /** default */
      sound: string;
    },

    /** json parse 的 content 如果推送消息中传输的数据不符合JSON格式，则作为String类型数据保存。 */
    payload: any;

    type: "receive" | "click";
  }

  interface ClientInfo {
    /**
     * 目前支持以下推送通道： "igexin" - 表示个推推送； "mipush" - 表示小米推送； "unipush" - 表示DCloud UniPush。
     */
    id: string;

    /**
     * 设备令牌（iOS设备唯一标识），用于APNS服务推送中标识设备的身份
     */
    token: string;

    /**
     * 推送服务令牌（设备唯一标识），用于标识推送信息接收者身份
     */
    clientid: string;

    /**
     * 第三方推送服务的应用标识
     */
    appid: string;

    /**
     * 第三方推送服务器的应用键值
     */
    appkey: string;
  }

  interface Exception {
    code: number;
    message: string;
  }

  type ErrorCallback = (err: Exception) => void;
}
