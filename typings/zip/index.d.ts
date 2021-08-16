declare namespace plus {
  interface PlusStatic {
    /**
     * https://www.html5plus.org/doc/zh_cn/zip.html
     */
    zip: {
      /**
       * 压缩生成Zip文件
       * @param src 要压缩的源文件路径，支持文件路径或目录
       * @param zipfile 压缩后保存的Zip文件路径
       * @param successCB 压缩Zip文件操作成功回调，在压缩操作成功时调用
       * @param errorCB 压缩Zip文件操作失败回调，在压缩操作失败时调用
       */
      compress(src: string, zipfile: string, successCB?: plus.zip.ZipSuccessCallback, errorCB?: plus.zip.ErrorCallback);

      decompress(zipfile: string, target: string, successCB?, errorCB?: plus.zip.ErrorCallback);

      /**
       * 图片压缩转换
       * 可用于图片的质量压缩、大小缩放、方向旋转、区域裁剪、格式转换等。
       * @param options 
       * @param successCB 
       * @param errorCB 
       */
      compressImage(options: plus.zip.CompressImageOptions, successCB?: plus.zip.CompressImageSuccessCallback, errorCB?: plus.zip.ErrorCallback);

      compressVideo(options, successCB?, errorCB?: plus.zip.ErrorCallback);
    }
  }
}

declare namespace plus.zip {
  type ZipSuccessCallback = () => void;

  interface CompressImageOptions {
    /**
     * 压缩视频文件的路径
     * 支持以下图片路径： 相对路径 - 相对于当前页面的host位置，如"a.jpg"，注意当前页面为网络地址则不支持； 绝对路径 - 系统绝对路径，如Android平台"/storage/sdcard0/Android/data/io.dcloud.HBuilder/.HBuilder/apps/HBuilder/www/ａ.jpg"，iOS平台"/var/mobile/Containers/Data/Application/757966CF-345C-4348-B07F-EEF83CF9A369/Library/Pandora/apps/HBuilder/www/a.png"； 相对路径URL(RelativeURL) - 以"_"开头的相对路径，如"_www/a.jpg"、"_doc/b.jpg"、"_documents/c.jpg"、"_downloads/d.jpg"； 本地路径URL - 以“file://”开头，后面跟随系统绝对路径。
     */
    src: string;

    /**
     * 压缩转换目标图片的路径
     * 支持以下图片路径： 绝对路径 - 系统绝对路径，如Android平台"/storage/sdcard0/Android/data/io.dcloud.HBuilder/.HBuilder/apps/HBuilder/doc/ａ.jpg"，iOS平台"/var/mobile/Containers/Data/Application/757966CF-345C-4348-B07F-EEF83CF9A369/Library/Pandora/apps/HBuilder/doc/a.png"； 相对路径URL(RelativeURL) - 以"_"开头的相对路径，如"_doc/b.jpg"、"_documents/c.jpg"、"_downloads/d.jpg"，注意不支持"_www"开头的路径； 本地路径URL - 以“file://”开头，后面跟随系统绝对路径。 注意：如果设置的路径无权限访问，则返回失败。
     */
    dst: string;

    /**
     * 覆盖生成新文件
     * 仅在dst制定的路径文件存在时有效： true表示覆盖存在的文件； false表示不覆盖，如果文件存在，则返回失败。 默认值为false。
     */
    overwrite?: boolean;

    /**
     * 支持"jpg"、"png"，默认值为jpg。
     */
    format?: string;

    /**
     * 取值范围为1-100，1表示使用最低的图片质量（转换后的图片文件最小）、100表示使用最高的图片质量（转换后的图片文件最大）； 默认值为50。
     * 注意：仅对jpg格式图片有效。
     */
    quality?: number;

    /**
     * 支持像素值（如"100px"）、百分比（如"50%"）、自动计算（如"auto"，即根据height与源图高的缩放比例计算，若未设置height则使用源图高度）； 默认值为"auto"。 注意：若设置了width属性值不合法（如"0px"），则不对图片进行缩放操作。
     */
    width?: string;

    /**
     * 支持像素值（如"100px"）、百分比（如"50%"）、自动计算（如"auto"，即根据width与源图宽的缩放比例计算，若未设置width则使用源图高度）； 默认值为"auto"。 注意：若设置了height属性值不合法（如"0px"），则不对图片进行缩放操作。
     */
    height?: string;

    /**
     * 支持值：90-表示旋转90度；180-表示旋转180度；270-表示旋转270度。 注意：若设置rotate属性值不合法，则不对图片进行旋转操作。
     */
    rotate?: number;
    clip?: ClipImageOptions;
  }

  interface ClipImageOptions {
    top?: string;
    left?: string;
    width?: string;
    height?: string;
  }

  type CompressImageSuccessCallback = (event: CompressImageSuccessEvent) => void;

  interface CompressImageSuccessEvent {
    /**
     * 压缩转换后的图片url路径，以"file://"开头
     */
    target: string;

    /**
     * 压缩转换后图片的大小，单位为字节（Byte）
     */
    size: number;

    /**
     * 压缩转换后图片的实际宽度，单位为px
     */
    width: number;

    /**
     * 压缩转换后图片的实际高度，单位为px
     */
    height: number;
  }

  interface Exception {
    code: number;
    message: string;
  }

  type ErrorCallback = (err: Exception) => void;
}
