declare namespace plus {
  interface PlusStatic {
    camera: {
      /**
       * 获取需要操作的摄像头对象，如果要进行拍照或摄像操作，需先通过此方法获取摄像头对象。
       * @param index 指定要获取摄像头的索引值，1表示主摄像头，2表示辅摄像头。如果没有设置则使用系统默认主摄像头。
       */
      getCamera(index?: number): plus.camera.Camera;
    };
  }
}

declare namespace plus.camera {
  interface Camera {
    readonly supportedImageResolutions: string[];
    readonly supportedVideoResolutions: string[];
    readonly supportedImageFormats: string[];
    readonly supportedVideoFormats: string;

    captureImage(successCB: CameraSuccessCallback, errorCB: ErrorCallback, option: CameraOptions): void;
    startVideoCapture(successCB: CameraSuccessCallback, errorCB: ErrorCallback, option: CameraOptions): void;
    stopVideoCapture(): void;
  }

  interface CameraOptions {
    /**
     * 配置裁剪图片
     * 设置裁剪图片项后，在拍照后会进入裁剪编辑界面，确认后返回裁剪后的图片。
     * 注意：HBuilderX3.1.19及以上版本支持。
     */
    crop?: CameraCropStyles;

    /**
     * 拍照或摄像文件保存的路径
     * 可设置具体文件名（如"_doc/camera/a.jpg"）；也可只设置路径，以"/"结尾则表明是路径（如"_doc/camera/"）。 如未设置文件名称或设置的文件名冲突则文件名由程序程序自动生成。
     */
    filename?: string;

    /**
     * 拍照或摄像的文件格式
     * 可通过Camera对象的supportedImageFormats或supportedVideoFormats获取，如果设置的参数无效则使用系统默认值。
     */
    format?: string;

    /**
     * 拍照或摄像默认使用的摄像头
     * 拍照或摄像界面默认使用的摄像头编号，1表示主摄像头，2表示辅摄像头。
     */
    index?: string | number;

    /**
     * 视频长度
     * 单位为秒（s），小于等于0表示不限定视频长度。 默认值为0（不限定视频长度）。 注意：仅在调用拍摄视频（startVideoCapture）时有效。
     */
    videoMaximumDuration?: number;

    /**
     * 是否优化图片
     * 自动调整图片的方向，在部分设备上可能出现图片方向不正确的问题，此参数将配置是否自动调整图片方向。 可取值： true - 自动调整图片方向； false - 不调整。 默认值为true。 注意：自动调整图片方向将消耗部分系统资源，可能会导致拍照后回调触发时机延迟，将此值设置为false则可避免延迟问题。
     */
    optimize?: boolean;

    /**
     * 拍照或摄像使用的分辨率
     * 可通过Camera对象的supportedImageResolutions或supportedVideoResolutions获取，如果设置的参数无效则使用系统默认值。
     */
    resolution?: string;

    /**
     * 拍照或摄像界面弹出指示区域
     * 对于大屏幕设备如iPad，拍照或摄像界面为弹出窗口，此时可通过此参数设置弹出窗口位置，其为JSON对象，格式如{top:"10px",left:"10px",width:"200px",height:"200px"}，默认弹出位置为屏幕居中。
     */
    popover?: PopPosition;
  }

  interface CameraCropStyles {
    /**
     * 取值范围为1-100，数值越小，质量越低（仅对jpg格式有效）。 默认值为80。
     */
    quality: number;

    /**
     * 单位为px，用于计算裁剪宽高比。 必须设置此值。
     */
    width: number;

    /**
     * 单位为px，用于计算裁剪宽高比。 必须设置此值。
     */
    height: number;

    /**
     * 是否将图片保存为指定的宽高像素
     * true表示将width和height作为裁剪保存图片的像素值，false表示使用图片编辑操作的真实像素值。
     * 默认值为true。
     * 设置为false时在裁剪编辑界面显示图片的像素值，设置为true时不显示。
     */
    resize: boolean;
  }

  interface PopPosition {
    top: string;
    left: string;
    width: string;
    height: string;
  }

  type CameraSuccessCallback = (capturedFile: string) => void;

  interface Exception {
    code: number;
    message: string;
  }

  type ErrorCallback = (err: Exception) => void;
}
