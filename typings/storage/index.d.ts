declare namespace plus {
  interface PlusStatic {
    /**
     * Storage模块管理应用本地数据存储区，用于应用数据的保存和读取。应用本地数据与localStorage、sessionStorage的区别在于数据有效域不同，前者可在应用内跨域操作，数据存储期是持久化的，并且没有容量限制。通过plus.storage可获取应用本地数据管理对象。
     */
    storage: {
      clear(): void;
      clearAsync(successCB?, errorCB?: plus.storage.ErrorCallback): void;
      getAllKeys(): string[];
      getAllKeysAsync(successCB, errorCB?: plus.storage.ErrorCallback);
      getLength(): number;
      getItem(key: string): string;
      getItemAsync(key: string, successCB, errorCB?: plus.storage.ErrorCallback);
      key(index: number): string;
      setItem(key: string, value: string);
      setItemAsync(key: string, value: string, successCB, errorCB?: plus.storage.ErrorCallback);
      removeItem(key: string);
      removeItemAsync(key: string, successCB, errorCB?: plus.storage.ErrorCallback);
    };
  }
}

declare namespace plus.storage {
  interface Exception {
    code: number;
    message: string;
  }

  type ErrorCallback = (err: Exception) => void;
}
