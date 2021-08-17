/// <reference path="./index.d.ts" />

declare namespace plus.webview {
  interface WebviewObject {
    /**
     * Webview窗口的标识
     * 调用plus.webview.create或plus.webview.open新建窗口时传入的id参数值，如果没有设置id参数，此属性值为undefined。 注意：窗口标识只能在创建时设置，不支持动态修改，不要对此属性进行赋值操作。
     */
    readonly id: string;

    /**
     * 获取当前Webview窗口的创建者
     */
    opener(): WebviewObject;

    show(aniShow?: AnimationTypeShow, duration?: number, showedCB?: Function, extras?: any): void;

    /**
     * 隐藏Webview窗口可保存已加载HTML页面的上下文数据，能降低应用使用的系统资源，通过show方法可将隐藏的Webview窗口显示出来。
     * @param aniHide
     * @param duration
     * @param extras
     */
    hide(aniHide?: AnimationTypeClose, duration?: number, extras?: any): void;

    /**
     * 关闭并销毁Webview窗口，可设置关闭动画和动画持续时间。
     * @param aniClose 关闭Webview窗口动画效果
     * @param duration 关闭Webview窗口的动画持续时间
     * @param extras 关闭Webview窗口扩展参数
     */
    close(aniClose?: AnimationTypeClose, duration?: number, extras?: any): void;

    /**
     * 将JS脚本发送到Webview窗口中运行，可用于实现Webview窗口间的数据通讯。
     * @param js 要在窗口中运行的脚本字符串
     */
    evalJS(js: string): void;

    [key: string]: any;
  }
}
