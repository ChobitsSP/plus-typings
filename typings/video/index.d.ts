declare namespace plus {
  interface PlusStatic {
    /**
     * https://www.html5plus.org/doc/zh_cn/video.html
     */
    video: {
      createVideoPlayer(id: string, styles?: any): any;
      createLivePusher(id: string, styles?: plus.video.LivePusherStyles): plus.video.LivePusher;
      getVideoPlayerById(id: string): any;
      getLivePusherById(id: string): any;
      VideoPlayer: any;
      LivePusher: plus.video.LivePusher;
    };
  }
}

declare namespace plus.video {
  interface LivePusher {
    new(id: string, styles: LivePusherStyles): LivePusher;
    addEventListener(event, listener, capture?: boolean): void;
    setStyles(styles: LivePusherStyles): void;
    preview(): void;
    start(successCB, errorCB?: ErrorCallback): void;
    stop(options?: any): void;
    pause(): void;
    resume(): void;
    switchCamera(): void;
    snapshot(successCB, errorCB?: ErrorCallback): void;
    close(): void;
  }

  interface LivePusherStyles {
    url?: string;
    mode?: string;
    muted?: boolean;
    'enable-camera'?: boolean;
    'auto-focus'?: boolean;
    beauty?: number;
    whiteness?: number;
    aspect?: string;
    'min-bitrate'?: number;
    'max-bitrate'?: number;
    top?: string;
    left?: string;
    width?: string;
    height?: string;
    /**
     * LivePusher控件在Webview窗口的布局模式
     * 可取值： "static" - 静态布局模式，如果页面存在滚动条则随窗口内容滚动； "absolute" - 绝对布局模式，如果页面存在滚动条不随窗口内容滚动； 默认值为"static"。
     */
    position?: string;
  }

  interface Exception {
    code: number;
    message: string;
  }

  type ErrorCallback = (err: Exception) => void;
}