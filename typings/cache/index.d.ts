declare namespace plus {
  interface PlusStatic {
    /**
     * https://www.html5plus.org/doc/zh_cn/cache.html
     */
    cache: {
      /**
       * 清除应用的缓存数据
       * @param clearCB 清除应用缓存回调函数，调用plus.cache.clear清除缓存操作时作为参数传入，在清除缓存操作完成时触发回调。
       */
      clear(clearCB: () => void): void;

      /**
       * 计算应用已使用的缓存数据大小
       * @param calculateCB 计算应用当前使用缓存容量回调函数，调用plus.cache.calculate计算缓存容量操作时作为参数传入，在计算缓存容量大小完成时触发回调。
       */
      calculate(calculateCB: (size: number) => void): void;

      /**
       * 设置应用的可使用的最大缓存大小
       * @param size 应用可使用的最大缓存大小，单位为byte
       */
      setMaxSize(size: number): void;
    };
  }
}

declare namespace plus.cache {

}
