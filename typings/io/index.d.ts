declare namespace plus {
  interface PlusStatic {
    io: {
      readonly PRIVATE_WWW: 1;
      readonly PRIVATE_DOC: 2;
      readonly PUBLIC_DOCUMENTS: 3;
      readonly PUBLIC_DOWNLOADS: 4;

      requestFileSystem(type: number, succesCB, errorCB);

      /**
       * 通过URL参数获取目录对象或文件对象
       * 快速获取指定的目录或文件操作对象，如通过URL值“_www/test.html”可直接获取文件操作对象。 url值可支持相对路径URL、本地路径URL。 获取指定的文件或目录操作对象成功通过succesCB回调返回，如果指定URL路径或文件不存在则失败通过errorCB回调返回。
       * @param url 要操作文件或目录的URL地址
       * @param succesCB 
       * @param errorCB 
       */
      resolveLocalFileSystemURL(url: string, succesCB: (entry: plus.io.DirectoryEntry | plus.io.FileEntry) => void, errorCB);

      /**
       * 将本地URL路径转换成平台绝对路径
       * 绝对路径符合各平台文件路径格式，通常用于Native.JS调用系统原生文件操作API，也可以在前面添加“file://”后在html页面中直接使用。
       * @param url 要转换的文件或目录URL地址
       * @returns 转换后在平台路径，在不同平台或者不同设备返回的值可能存在差异，如输入url为“_doc/a.png”： Android平台转换后的路径为“/storage/sdcard0/Android/data/io.dcloud.HBuilder/.HBuilder/apps/HBuilder/doc/ａ.png”； 在iOS平台转换后的路径为“/var/mobile/Containers/Data/Application/757966CF-345C-4348-B07F-EEF83CF9A369/Library/Pandora/apps/HBuilder/doc/a.png”。
       */
      convertLocalFileSystemURL(url: string): string;

      /**
       * 将平台绝对路径转换成本地URL路径
       * 绝对路径符合各平台文件路径格式，转换后变成RelativeURL类型格式。 功能与convertLocalFileSystemURL方法相反，将绝对路径转换成相对路径。
       * @param path 绝对路径必须是合法的路径，如果绝对路径不合法则返回null。
       */
      convertAbsoluteFileSystem(path: string): string;

      /**
       * 获取音频文件信息
       * @param options 
       */
      getAudioInfo(options): void;

      getFileInfo(options): void;

      getImageInfo(options): void;

      getVideoInfo(options): void;
    }
  }
}

declare namespace plus.io {
  interface FileSystem {
    /**
     * 文件系统的名称
     * 值为文件系统类型常量值字符串，如“PRIVATE_WWW”、“PRIVATE_DOCUMENTS”。
     */
    readonly name: string;

    /**
     * 文件系统的根目录
     */
    readonly root: DirectoryEntry;
  }

  interface DirectoryEntry extends IoEntry {
    getMetadata(successCB, errorCB, recursive: boolean);
    moveTo(parent: DirectoryEntry, newName: string, succesCB, errorCB);
    copyTo(parent: DirectoryEntry, newName: string, succesCB, errorCB);
    remove(succesCB, errorCB);
    getParent(succesCB, errorCB);
    createReader(): any;
    getDirectory(path: string, flag, succesCB, errorCB);
    getFile(path: string, flag, succesCB, errorCB);
    removeRecursively(succesCB, errorCB);
  }

  interface IoEntry {
    /**
     * 文件操作对象的是否为文件
     */
    readonly isFile: boolean;

    /**
     * 文件操作对象是否为目录
     */
    readonly isDirectory: boolean;
    readonly name: string;
    readonly fullPath: string;
    /**
     * 文件操作对象所属的文件系统对象
     */
    readonly fileSystem: FileSystem;

    /**
     * 获取目录路径转换为URL地址
     * @returns 格式为相对路径URL
     */
    toURL(): string;

    /**
     * 获取目录路径转换为本地路径URL地址
     * @returns 格式为本地路径URL
     */
    toLocalURL(): string;

    /**
     * 获取目录路径转换为网络路径URL地址
     * @deprecated 仅用于网络页面访问本地资源，不推荐使用（将废弃）。
     * @returns URL地址格式为以“http://localhost:13131/”开头的网络路径。 注：仅用于网络页面访问本地资源，不推荐使用（将废弃）。
     */
    toRemoteURL(): string;
  }

  interface FileEntry extends IoEntry {
    getMetadata(successCB, errorCB);
    moveTo(parent: DirectoryEntry, newName: string, succesCB, errorCB);
    copyTo(parent: DirectoryEntry, newName: string, succesCB, errorCB);
    remove(succesCB, errorCB);
    getParent(succesCB, errorCB);
    createWriter(succesCB, errorCB);
    file(succesCB, errorCB);
  }
}
