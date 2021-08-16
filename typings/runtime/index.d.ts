declare namespace plus {
  interface PlusStatic {
    /**
     * https://www.html5plus.org/doc/zh_cn/storage.html
     */
    runtime: {
      readonly appid: string;
      readonly arguments: string;
      readonly channel: string;
      readonly launcher: string;
      readonly origin: string;
      readonly version: string;
      readonly versionCode: string;
      readonly innerVersion: string;
      readonly uniVersion: string;
      readonly launchLoadedTime: number;
      readonly processId: string;
      readonly startupTime: number;
      readonly isRecovery: boolean;

      agreePrivacy(): void;
      disagreePrivacy(): void;
      isAgreePrivacy(): boolean;
      getProperty(appid: string, getPropertyCB): void;
      install(filePath: string, options?: plus.runtime.WidgetOptions, installSuccessCB?, installErrorCB?): void;
      quit(): void;
      restart(): void;
      setBadgeNumber(number: number, options?: plus.runtime.BadgeOptions): void;
      openURL(url: string, errorCB?, identity?: string): void;

      /**
       * 使用内置Webview窗口打开URL
       * @param url 要打开的URL地址 字符串类型，仅支持http/https地址。
       */
      openWeb(url: string): void;

      openFile(filepath: string, options?: plus.runtime.OpenFileOptions, errorCB?): void;

      processDirectPage(): string;

      launchApplication(appInf: plus.runtime.ApplicationInf, errorCB): void;

      isApplicationExist(appInf: plus.runtime.ApplicationInf): boolean;

      isCustomLaunchPath(): boolean;
    };
  }
}

declare namespace plus.runtime {
  interface ApplicationInf {
    [key: string]: any;
  }

  interface BadgeOptions {
    [key: string]: any;
  }

  interface OpenFileOptions {
    [key: string]: any;
  }

  interface WidgetInfo {
    [key: string]: any;
  }

  interface WidgetOptions {
    [key: string]: any;
  }
}
