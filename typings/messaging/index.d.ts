declare namespace plus {
  interface PlusStatic {
    messaging: {
      readonly TYPE_SMS: 1;
      readonly TYPE_MMS: 2;
      readonly TYPE_EMAIL: 3;
      createMessage(type: number): plus.messaging.Message;
      sendMessage(msg: plus.messaging.Message, successCB: () => void, errorCB: (err) => void): void;
    }
  }
}

declare namespace plus.messaging {
  interface Message {
    to: string[];
    cc: string[];
    bcc: string[];
    from: string;
    subject: string;
    body: string;
    bodyType: BodyType;
    silent?: boolean;
    addAttachment(url: string): void;
  }

  type BodyType = "text" | "html";
}
