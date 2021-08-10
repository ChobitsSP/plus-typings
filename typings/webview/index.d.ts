declare namespace plus {
  interface PlusStatic {
    webview: PlusWebview;
  }

  interface PlusWebview {
    /**
     * 获取当前窗口的WebviewObject对象
     */
    currentWebview(): WebviewObject;
    create(url?: string, id?: string, styles?: any, extras?: object): WebviewObject;
    all(): WebviewObject[];

    /**
     * 关闭已经打开的Webview窗口，需先获取窗口对象或窗口id，并可指定关闭窗口的动画及动画持续时间。
     * @param id_wvobj 要关闭Webview窗口id或窗口对象
     * @param aniClose 关闭Webview窗口的动画效果
     * @param duration 关闭Webview窗口动画的持续时间 单位为ms，如果没有设置则使用显示窗口动画时间。
     * @param extras 关闭Webview窗口扩展参数
     */
    close(id_wvobj: string | WebviewObject, aniClose?: AnimationTypeClose, duration?: number, extras?: any): void;
    hide(id_wvobj: string | WebviewObject, aniClose?: AnimationTypeClose, duration?: number, extras?: any): void;
    getWebviewById(id: string): WebviewObject;

    /**
     * 获取应用首页WebviewObject窗口对象
     */
    getLaunchWebview(): WebviewObject;

    /**
     * 获取应用第二个首页WebviewObject窗口对象
     * 在双首页模式下（在manifest.json的plus->secondwebview节点下配置），
     * 应用会自动创建两个首页Webview，
     * 通过getLaunchWebview()可获取第一个首页窗口对象，
     * 通过getSecondWebview()可获取第二个首页窗口对象。
     */
    getSecondWebview(): WebviewObject;

    /**
     * 获取应用显示栈顶的WebviewObject窗口对象
     */
    getTopWebview(): WebviewObject;
  }

  type AnimationTypeClose = "auto" | "none" | "slide-out-right";

  interface WebviewObject {
    id: string;

    /**
     * 获取当前Webview窗口的创建者
     */
    opener(): WebviewObject;

    show(aniShow?: any, duration?: Number, showedCB?: Function, extras?: any): void;

    /**
     * 隐藏Webview窗口可保存已加载HTML页面的上下文数据，能降低应用使用的系统资源，通过show方法可将隐藏的Webview窗口显示出来。
     * @param aniHide
     * @param duration
     * @param extras
     */
    hide(aniHide?: AnimationTypeClose, duration?: number, extras?): void;

    /**
     * 关闭并销毁Webview窗口，可设置关闭动画和动画持续时间。
     * @param aniClose 关闭Webview窗口动画效果
     * @param duration 关闭Webview窗口的动画持续时间
     * @param extras 关闭Webview窗口扩展参数
     */
    close(aniClose?: AnimationTypeClose, duration?: number, extras?): void;

    evalJS(js: string);
  }
}
