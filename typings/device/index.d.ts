declare namespace plus {
  interface PlusStatic {
    /**
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
