declare namespace plus {
  interface PlusStatic {
    /**
     * Device模块管理设备信息，用于获取手机设备的相关信息，如IMEI、IMSI、型号、厂商等。通过plus.device获取设备信息管理对象。
     * https://www.html5plus.org/doc/zh_cn/device.html
     */
    device: {
      /**
       * @deprecated 此API将废弃，HBuilderX2.0.0以后版本使用plus.device.getInfo。
       */
      readonly imei: string;

      /**
       * @deprecated 此API将废弃，HBuilderX2.0.0以后版本使用plus.device.getInfo。
       */
      readonly imsi: string;

      /**
       * 调用此属性获取设备的型号信息。 如果设备不支持则返回空字符串。
       */
      readonly model: string;

      /**
       * 调用此属性获取设备的生产厂商信息。 如果设备不支持则返回空字符串。
       */
      readonly vendor: string;

      /**
       * @deprecated 此API将废弃，HBuilderX2.0.0以后版本使用plus.device.getInfo。
       */
      readonly uuid: string;

      /**
       * 调用此方法使得设备发出蜂鸣声。
       * @param times 蜂鸣声重复的次数，默认发出一次蜂鸣声
       */
      beep(times?: number): void;

      /**
       * 调用系统程序拨打电话。
       * @param number 要拨打的电话号码
       * @param confirm 是否需要用户确认后开始拨打电话 设置为true表示打开系统拨打电话界面，需用户点击拨号按钮后才开始拨打电话，false则无需确认直接拨打电话，默认值为true。
       */
      dial(number: string, confirm?: boolean);

      /**
       * 获取设备信息
       * @param options 
       */
      getInfo(options: plus.device.GetInfoOptions): void;

      getOAID(options);

      getVAID(options);

      getAAID(options);

      /**
       * 获取设备的系统音量
       * 系统音量值范围为0到1，0表示静音，1表示最大音量值。
       */
      getVolume(): number;

      /**
       * 获取程序是否一直保持唤醒（屏幕常亮）状态
       */
      isWakelock(): boolean;

      /**
       * 设置应用是否保持唤醒（屏幕常亮）状态
       * @param lock 可取值true或false，true表示设定程序一直保持唤醒状态，false表示关闭程序一直保持唤醒状态。程序退出后将恢复默认状态，默认为关闭程序保持唤醒状态。
       */
      setWakelock(lock: boolean);

      /**
       * 调用此方法调节设备的系统音量。
       * @param volume 取值范围为0到1，0表示静音，1表示最大音量值。设置设备音量后对所有程序生效，退出程序系统仍然保持最后设定的音量值。
       */
      setVolume(volume: number);

      /**
       * 调用此方法使得设备振动。
       * @param milliseconds 设备振动持续的时间 数值类型，单位为ms，默认为500ms。
       */
      vibrate(milliseconds?: number);
    };

    /**
     * Screen模块管理设备屏幕信息
     * https://www.html5plus.org/doc/zh_cn/device.html#plus.screen
     */
    screen: {
      readonly dpiX: string;
      readonly dpiY: string;
      readonly height: number;
      readonly width: number;
      readonly resolutionHeight: number;
      readonly resolutionWidth: number;
      readonly scale: number;
      setBrightness(brightness: number);
      getBrightness(): number;
      getCurrentSize(): { height, width, resolutionHeight, resolutionWidth };

      /**
       * 锁定屏幕方向
       * @param orientation 要锁定的屏幕方向值 锁定屏幕方向可取以下值： "portrait-primary": 竖屏正方向； "portrait-secondary": 竖屏反方向，屏幕正方向按顺时针旋转180°； "landscape-primary": 横屏正方向，屏幕正方向按顺时针旋转90°； "landscape-secondary": 横屏方向，屏幕正方向按顺时针旋转270°； "portrait": 竖屏正方向或反方向，根据设备重力感应器自动调整； "landscape": 横屏正方向或反方向，根据设备重力感应器自动调整；
       */
      lockOrientation(orientation: string): void;

      /**
       * 解除锁定屏幕方向
       */
      unlockOrientation(): void;
    };

    /**
     * Display模块管理应用可使用的显示区域信息
     * https://www.html5plus.org/doc/zh_cn/device.html#plus.display
     */
    display: {
      readonly resolutionHeight: number;
      readonly resolutionWidth: number;
    };

    /**
     * networkinfo模块用于获取网络信息
     * https://www.html5plus.org/doc/zh_cn/device.html#plus.networkinfo
     */
    networkinfo: {
      readonly CONNECTION_UNKNOW: 0;
      readonly CONNECTION_NONE: 1;
      readonly CONNECTION_ETHERNET: 2;
      readonly CONNECTION_WIFI: 3;
      readonly CONNECTION_CELL2G: 4;
      readonly CONNECTION_CELL3G: 5;
      readonly CONNECTION_CELL4G: 6;

      /**
       * 获取当前设备连接的网络类型，返回值为网络类型常量，可取值CONNECTION_*常量。
       */
      getCurrentType(): number;

      /**
       * 获取当前网络是否设置代理
       */
      isSetProxy(): boolean;
    };

    /**
     * OS模块管理操作系统信息
     * https://www.html5plus.org/doc/zh_cn/device.html#plus.os
     */
    os: {
      /** 
       * 系统语言信息
       * 获取当前操作系统设置的系统语言，字符串类型数据，格式为"语言-地区"，如"zh-CN"表示语言为简体中文、地区为中国大陆。
       */
      readonly language: string;

      /**
       * 获取当前操作系统的名称，字符串类型数据。Android or iOS
       */
      readonly name: string;

      /**
       * 系统的供应商信息 Google or Apple
       */
      readonly vendor: string;

      /**
       * 系统版本信息
       * 获取当前操作系统的版本信息，字符串类型数据。
       */
      readonly version: string;
    };
  }
}

declare namespace plus.device {
  interface GetInfoOptions {
    success?: PlusCallback<DeviceInfo>;
    fail?: PlusCallback<Exception>;
    complete?: PlusCallback;
  }

  type PlusCallback<T = any> = (event: T) => void;

  type DeviceSuccessCallback = (info: DeviceInfo) => void;

  interface DeviceInfo {
    /**
     * 设备的国际移动设备身份码
     * 如果设备不支持或无法获取（如用户未授权）则返回空字符串。 如果设备存在多个身份码，则以“,”字符分割拼接，如“862470039452950,862470039452943”。
     */
    readonly imei: string;

    /**
     * 设备的国际移动用户识别码
     * 字符串数组类型，获取设备上插入SIM的国际移动设备身份码。 如果设备支持多卡模式则返回所有SIM身份码。 如果设备不支持或没有插入SIM卡则返回空数组。
     */
    readonly imsi: string[];

    /**
     * 设备的唯一标识号。
     */
    readonly uuid: string;
  }

  interface Exception {
    code: number;
    message: string;
  }

  type ErrorCallback = (err: Exception) => void;
}
