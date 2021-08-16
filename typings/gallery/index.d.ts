declare namespace plus {
  interface PlusStatic {
    gallery: {
      /**
       * 从系统相册中选择图片或视频文件。每次仅能选择一个文件，选择后将返回选择的文件路径。
       * @param successCB 从系统相册中选择文件完成后的回调函数 单选时通过GalleryPickSuccessCallback回调函数返回选择的图片或视频文件路径，多选时通过GalleryMultiplePickSuccessCallback回调函数返回图片或视频文件路径。
       * @param errorCB 
       * @param options 
       */
      pick(successCB: plus.gallery.GalleryPickSuccessCallback | plus.gallery.GalleryMultiplePickSuccessCallback,
        errorCB: plus.gallery.ErrorCallback,
        options: plus.gallery.GalleryOptions);

      /**
       * 保存文件到系统相册中。 每次仅能保存一个文件，支持图片文件（jpg/jpeg、png、bmp等格式）和视频文件（3gp、mov等格式）。 若保存的文件类型当前系统不支持，则通过errorCB回调返回错误信息。
       * @param path 要保存到系统相册中的文件文件地址
       * @param successCB 
       * @param errorCB 
       */
      save(path: string, successCB, errorCB: plus.gallery.ErrorCallback);
    };
  }
}

declare namespace plus.gallery {
  interface GalleryOptions {
    /**
     * 是否显示系统相册文件选择界面的动画
     */
    animation?: boolean;

    /**
     * 确认按钮文字
     */
    confirmText?: string;

    /**
     * 配置裁剪图片
     * 设置裁剪图片项后，在相册中选择图片一定会进入裁剪编辑界面，确认后返回裁剪后的图片。
     * 设置此值后只能选择一张图片。 注意：HBuilderX3.1.19及以上版本支持。
     */
    crop?: GalleryCropStyles;

    /**
     * 是否支持编辑图片
     */
    editable?: boolean;

    /**
     * 某些系统不能直接使用系统相册的路径，这时需要将选择的文件保存到应用可访问的目录中，可通过此参数设置保存文件的路径。 如果路径中包括文件后缀名称，则表明指定文件路径及名称，否则仅指定文件保存目录，文件名称自动生成。
     */
    filename?: string;

    /**
     * 系统相册选择器中可选择的文件类型，可设置为仅选择图片文件（“image”）、视频文件（“video”）或所有文件（“none”），默认值为“image”。
     */
    filter?: GalleryFilter;

    /**
     * 仅在支持多选时有效，取值范围为1到Infinity，默认值为Infinity，即不限制选择的图片数。 如果设置的值非法则使用默认值Infinity。
     */
    maximum?: number;

    /**
     * 是否支持多选图片
     */
    multiple?: boolean;

    /**
     * 是否检测权限
     */
    permissionAlert?: boolean;

    /**
     * 对于大屏幕设备如iPad，相册选择界面为弹出窗口，此时可通过此参数设置弹出窗口位置。 
     * 其为JSON对象，格式如{top:"10px",left:"10px",width:"200px",height:"200px"}，所有值为像素值，左上坐标相对于容器的位置，默认弹出位置为屏幕居中。
     */
    popover?: PopPosition;

    /**
     * 仅在多图片选择时生效，相册选择界面将选中指定的图片路径列表。 如果指定的路径无效，则忽略此项；如果指定的路径数超过maximum属性指定的最大选择数目则超出的图片不选中。
     */
    selected?: string[];

    /**
     * @deprecated 是否使用系统相册文件选择界面
     * 废弃，HBuilderX2.9.6+版本不再使用系统自带相册选择控件。
     */
    system?: boolean;

    /**
     * 使用相册多选图片时，可通过maximum属性设置最多选择的图片数量，当用户操作选择的数量大于此时触发此事件。
     */
    onmaxed?: Function;
  }

  interface GalleryCropStyles {
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

  type GalleryFilter = "image" | "video" | "none";

  interface PopPosition {
    top: string;
    left: string;
    width: string;
    height: string;
  }

  type GalleryPickSuccessCallback = (file: string) => void;

  type GalleryMultiplePickSuccessCallback = (event: { files: string[] }) => void;

  interface GallerySaveEvent {
    path: string;
  }

  interface Exception {
    code: number;
    message: string;
  }

  type ErrorCallback = (err: Exception) => void;
}
