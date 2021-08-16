declare namespace plus {
  interface PlusStatic {
    /**
     * https://www.html5plus.org/doc/zh_cn/share.html
     * Share模块管理客户端的社交分享功能，提供调用终端社交软件的分享能力。通过plus.share可获取社交分享管理对象。
     * 分享接口支持开发者获取设备上安装的社交App环境，调用社交App进行分享操作。若当前设备安装了对应的社交App，则调用此App的分享操作界面，否则调用WAP页面进行分享。
     */
    share: {
      getServices(successCB: (services: plus.share.ShareService[]) => void, errorCB?: plus.share.ErrorCallback);
      sendWithSystem(msg: plus.share.ShareMessage, successCB?: () => void, errorCB?: plus.share.ErrorCallback);
    }
  }
}

declare namespace plus.share {
  interface ShareService {
    // Attributes
    id: string;
    description: string;
    authenticated: boolean;
    accessToken: string;
    nativeClient: boolean;

    // Methods
    authorize(successCallback, errorCallback, options);
    forbid();
    send(message);
    launchMiniProgram(options);
  }

  interface ShareMessage {
    type: "web" | "text" | "image" | "music" | "video" | "miniProgram";
    content?: string;
    thumbs?: string[];
    pictures?: string[];
    media?: string;
    href?: string;
    title?: string;
    extra?: any;
    geo?: any;
    miniProgram?: any;
    interface?: "auto" | "slient" | "editable";
  }

  interface Exception {
    code?: number;
    message?: string;
  }

  type ErrorCallback = (err?: Exception) => void;
}
