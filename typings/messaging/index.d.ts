
declare namespace plus {
  interface PlusStatic {
    messaging: {
      readonly TYPE_SMS: 1;
      readonly TYPE_MMS: 2;
      readonly TYPE_EMAIL: 3;
      createMessage(type: number): Message;
      sendMessage(msg: Message, successCB: () => void, errorCB: (err) => void): void;
    }
  }

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
