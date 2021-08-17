/// <reference path="./WebviewObject.d.ts" />

declare namespace plus {
  interface PlusStatic {
    /**
     * https://www.html5plus.org/doc/zh_cn/webview.html
     */
    webview: {
      all(): plus.webview.WebviewObject[];

      /**
       * 关闭已经打开的Webview窗口，需先获取窗口对象或窗口id，并可指定关闭窗口的动画及动画持续时间。
       * @param id_wvobj 要关闭Webview窗口id或窗口对象
       * @param aniClose 关闭Webview窗口的动画效果
       * @param duration 关闭Webview窗口动画的持续时间 单位为ms，如果没有设置则使用显示窗口动画时间。
       * @param extras 关闭Webview窗口扩展参数
       */
      close(id_wvobj: string | plus.webview.WebviewObject, aniClose?: plus.webview.AnimationTypeClose, duration?: number, extras?: any): void;

      /**
       * 创建Webview窗口，用于加载新的HTML页面，可通过styles设置Webview窗口的样式，创建完成后需要调用show方法才能将Webview窗口显示出来。
       * @param url 打开窗口加载的HTML页面地址 新打开Webview窗口要加载的HTML页面地址，可支持本地地址和网络地址。
       * @param id 打开窗口的标识 窗口标识可用于在其它页面中通过getWebviewById来查找指定的窗口，为了保持窗口标识的唯一性，应该避免使用相同的标识来创建多个Webview窗口。 如果传入无效的字符串则使用url参数作为WebviewObject窗口的id值。
       * @param styles 创建Webview窗口的样式（如窗口宽、高、位置等信息）
       * @param extras 创建Webview窗口的额外扩展参数 值为JSON类型，设置扩展参数后可以直接通过Webview的点（“.”）操作符获取扩展参数属性值，如： var w=plus.webview.create('url.html','id',{},{preload:'preload webview'}); // 可直接通过以下方法获取preload值 console.log(w.preload); // 输出值为“preload webview”
       */
      create(url?: string, id?: string, styles?: any, extras?: object): plus.webview.WebviewObject;

      /**
       * 获取当前窗口的WebviewObject对象
       */
      currentWebview(): plus.webview.WebviewObject;

      getDisplayWebview(): plus.webview.WebviewObject[];

      getWebviewById(id: string): plus.webview.WebviewObject;

      /**
       * 获取应用首页WebviewObject窗口对象
       */
      getLaunchWebview(): plus.webview.WebviewObject;

      /**
       * 获取应用第二个首页WebviewObject窗口对象
       * 在双首页模式下（在manifest.json的plus->secondwebview节点下配置），
       * 应用会自动创建两个首页Webview，
       * 通过getLaunchWebview()可获取第一个首页窗口对象，
       * 通过getSecondWebview()可获取第二个首页窗口对象。
       */
      getSecondWebview(): plus.webview.WebviewObject;

      /**
       * 获取应用显示栈顶的WebviewObject窗口对象
       */
      getTopWebview(): plus.webview.WebviewObject;

      hide(id_wvobj: string | plus.webview.WebviewObject, aniClose?: plus.webview.AnimationTypeClose, duration?: number, extras?: any): void;

      /**
       * 创建并打开Webview窗口
       * 创建并显示Webview窗口，用于加载新的HTML页面，可通过styles设置Webview窗口的样式，创建完成后自动将Webview窗口显示出来。
       * @param url 打开窗口加载的HTML页面地址 新打开Webview窗口要加载的HTML页面地址，可支持本地地址和网络地址。
       * @param id 打开窗口的标识 窗口标识可用于在其它页面中通过getWebviewById来查找指定的窗口，为了保持窗口标识的唯一性，应该避免使用相同的标识来创建多个Webview窗口。 如果传入无效的字符串则使用url参数作为WebviewObject窗口的id值。
       * @param styles 创建Webview窗口的样式（如窗口宽、高、位置等信息）
       * @param aniShow 显示Webview窗口的动画效果 如果没有指定窗口动画，则使用默认无动画效果“none”。
       * @param duration 显示Webview窗口动画的持续时间 单位为ms，默认值为200ms（毫秒）。
       * @param showedCB Webview窗口显示完成的回调函数 当指定Webview窗口显示动画执行完毕时触发回调函数，窗口无动画效果（如"none"动画效果）时也会触发此回调。
       * @returns WebviewObject窗口对象
       */
      open(url?: string, id?: string, styles?, aniShow?, duration?: number, showedCB?): plus.webview.WebviewObject;

      prefetchURL(url: string);

      prefetchURLs(urls: string[]);

      show(id_wvobj: string | plus.webview.WebviewObject, aniShow?, duration?: number, showedCB?, extras?);

      startAnimation(options, otherOptions, callback);

      defaultHardwareAccelerated(): boolean;
    }
  }
}

declare namespace plus.webview {
  type AnimationTypeClose = "auto" | "none" | "slide-out-right";
  type AnimationTypeShow =
    "auto" |
    "none" |
    "slide-in-right" |
    "slide-in-left" |
    "slide-in-top" |
    "slide-in-bottom" |
    "fade-in" |
    "zoom-out" |
    "zoom-fade-out" |
    "pop-in";
}
