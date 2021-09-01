declare namespace plus {
  interface PlusStatic {
    /**
     * https://www.html5plus.org/doc/zh_cn/audio.html
     */
    audio: {
      /**
       * 音频输出线路常量，值为0。音频播放时在设备的扬声器输出。
       */
      readonly ROUTE_SPEAKER: 0;

      /**
       * 音频输出线路常量，值为1。音频播放时在设备的听筒输出。
       */
      readonly ROUTE_EARPIECE: 1;

      getRecorder(): any;

      /**
       * 用于播放音频文件，可以直接传入音频文件地址或音频播放参数对象AudioPlayerStyles。 返回播放对象，可调用其play方法开始播放。
       * @param path 音频文件路径
       */
      createPlayer(path: string): plus.audio.AudioPlayer;
      createPlayer(styles: plus.audio.AudioPlayerStyles): plus.audio.AudioPlayer;
    }
  }
}

declare namespace plus.audio {
  interface AudioPlayer {
    close(): void;
    isPaused(): boolean;
    play(successCB: () => void, errorCB?: ErrorCallback): void;
    pause(): void;
    resume(): void;
    stop(): void;
    seekTo(position: number): void;
    getBuffered(): number;
    getDuration(): number;
    getPosition(): number;
    setRoute(route: number): void;
    setSessionCategory(category): void;
  }

  interface AudioPlayerStyles {
    autoplay?: boolean;
    backgroundControl?: boolean;
    coverImgUrl?: string;
    epname?: string;
    loop?: boolean;
    singer?: string;
    src?: string;
    startTime?: number;
    title?: string;
    volume?: number;
  }

  interface Exception {
    code?: number;
    message?: string;
  }

  type ErrorCallback = (err?: Exception) => void;
}
