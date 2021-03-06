declare namespace plus {
  interface PlusStatic {
    /**
     * https://www.html5plus.org/doc/zh_cn/nativeui.html
     */
    nativeUI: {
      actionSheet(actionsheetStyle: plus.nativeUI.ActionSheetStyles, actionsheetCallback?: plus.nativeUI.ActionSheetCallback): plus.nativeUI.NativeUIObj;
      alert(message: string, alertCB: plus.nativeUI.IndexCallback, title: string, buttonCapture: string);
      confirm(message: string, confirmCB?: plus.nativeUI.IndexCallback, styles?: any);
      closeWaiting(): void;
      closeToast(): void;
      previewImage(url: string[], styles?: any);
      showWaiting(title?: string, styles?: plus.nativeUI.WaitingStyles);
      pickDate(successCB, errorCB?: any, styles?: any);
      pickTime(successCB, errorCB?: any, styles?: any);
      prompt(message: string, promptCB?, title?: string, tip?: string, buttons?: string[]);
      toast(message: string, styles?);
      setUIStyle(style: "light" | "dark" | "auto");
    }
  }
}

declare namespace plus.nativeUI {
  interface ActionSheetStyles {
    title: string;
    cancel?: string;
    buttons?: ActionButtonStyles[];
    popover?: any;
  }

  interface ActionButtonStyles {
    color?: string;
    title: string;
    style?: "destructive" | "default";
  }

  /**
   * 可通过event.index（Number类型）获取用户关闭时点击按钮的索引值，索引值从0开始
   */
  type ActionSheetCallback = (event: ActionSheetEvent) => void;

  interface ActionSheetEvent {
    /**
     * 0表示用户点击取消按钮，大于0值表示用户点击ActionSheetStyles中buttons属性定义的按钮，索引值从1开始（即1表示点击buttons中定义的第一个按钮）。 通过API（close()方法）关闭，则回调函数中event的index属性值为-1。
     */
    index: number;
  }

  interface WaitingStyles {
    width?: string;
    height?: string;
    color?: string;
    size?: string;
    textalign?: string;
    padding?: string;
    background?: string;

    /**
     * 可取值"black"、"white"，black表示等待框为黑色雪花样式，通常在背景主色为浅色时使用；white表示等待框为白色雪花样式，通常在背景主色为深色时使用。 仅在iOS平台有效，其它平台忽略此值，未设置时默认值为white。
     */
    style?: "black" | "white";

    /**
     * 等待框是否模态显示
     * 模态显示时用户不可操作直到等待对话框关闭，否则用户在等待对话框显示时也可操作下面的内容，未设置时默认为true。
     */
    modal?: boolean;

    round?: number | string;

    /**
     * 点击等待显示区域是否自动关闭
     */
    padlock?: boolean;

    /**
     * 返回键处理方式
     * 可取值"none"表示截获处理返回键，但不做任何响应；"close"表示截获处理返回键并关闭等待框；"transmit"表示不截获返回键，向后传递给Webview窗口继续处理（与未显示等待框的情况一致）。
     */
    back?: "none" | "close" | "transmit";

    loading?: WaitingLoadingStyles;
  }

  interface WaitingLoadingStyles {
    /**
     * loading图标显示样式
     * 可取值： "block"表示图标与文字分开两行显示，上面显示loading图标，下面显示文字； "inline"表示loading图标与文字在同一行显示，左边显示loading图标，右边显示文字； "none"表示不显示loading图标；
     */
    display?: string;

    /**
     * 设置loading图标的高度（宽度等比率缩放），取值类型：像素值，如"14px"表示14像素高。
     */
    height?: string;

    /**
     * 自定义loading图标的路径，png格式，并且必须是本地资源地址； loading图要求宽是高的整数倍，显示等待框时按照图片的高横向截取每帧刷新。
     */
    icon?: string;

    /**
     * loading图每帧刷新间隔
     * 单位为ms（毫秒），默认值为100ms。
     */
    interval?: string;

    /**
     * loading图标类型
     * 如果设置了icon属性，则优先使用icon自定义图标。 可取值： "circle" - 圆圈类型loading图标； "snow" - 雪花类型loading图标。 默认值为"circle"。
     */
    type?: string;
  }

  type IndexCallback = (event: { index: number }) => void;

  interface NativeUIObj {
    close();
  }
}
