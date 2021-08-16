declare namespace plus {
  interface PlusStatic {
    camera: {
      /**
       * 获取需要操作的摄像头对象，如果要进行拍照或摄像操作，需先通过此方法获取摄像头对象。
       * @param index 指定要获取摄像头的索引值，1表示主摄像头，2表示辅摄像头。如果没有设置则使用系统默认主摄像头。
       */
      getCamera(index: number): plus.camera.Camera;
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
    crop?: CameraCropStyles;
    filename?: string;
    format?: string;
    index?: string | number;
    videoMaximumDuration?: number;
    optimize?: boolean;
    resolution?: string;
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
