declare namespace plus {
  interface PlusStatic {
    /**
     * https://www.html5plus.org/doc/zh_cn/key.html
     */
    key: {
      addEventListener(keyevent: plus.key.KeyType, listener: plus.key.KeyEventCallback, capture?: boolean);
      hideSoftKeybord();
      setAssistantType(type: string);
      showSoftKeybord();
      removeEventListener(event: plus.key.KeyType, listener: plus.key.KeyEventCallback);
    }
  }
}

declare namespace plus.key {
  type KeyType = "backbutton" | "keydown" | "keyup" | "longpressed" | "menubutton" | "searchbutton" | "volumeupbutton" | "volumedownbutton";


  interface KeyEvent {
    /**
     * 触发按键事件的键值
     */
    keyCode: number;
  }

  type KeyEventCallback = (event: KeyEvent) => void;
}
