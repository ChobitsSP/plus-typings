declare namespace plus {
  interface PlusStatic {
    /**
     * https://www.html5plus.org/doc/zh_cn/contacts.html
     */
    contacts: {
      readonly ADDRESSBOOK_PHONE: 0;
      readonly ADDRESSBOOK_SIM: 1;
      /**
       * 根据指定通讯录类型获取通讯录对象，获取通讯录对象后可对其进行增、删、改操作。
       * @param type 可取通讯录类型常量，可获取手机通讯录或SIM卡通讯录。
       * @param succesCB 
       * @param errorCB 
       */
      getAddressBook(type: number, succesCB: plus.contacts.AddressBookSuccessCallback, errorCB: plus.contacts.ErrorCallback): void;
    };
  }
}

declare namespace plus.contacts {
  interface AddressBook {
    create(): Contact;

    /**
     * 在通讯录中安装指定的规则查找联系人，contactFields可设定查找返回的联系人中包含的字段值，查找联系人成功时通过successCB回调返回，查找联系人失败则通过errorCB回调返回。
     * @param contactFields 可取Contact对象的属性名称，若指定为null或""或空数组则包含所有联系人信息。可通过“.”来分割子项，如“name.familyName”指定获取联系人名称中的姓；对于ContactField类型的值则可指定类型值，如“phoneNumbers.mobile”指定获取联系人的手机号码。
     * @param successCB 
     * @param errorCB 
     * @param findOptions 查找联系人的参数
     */
    find(contactFields: string[], successCB: FindSuccessCallback, errorCB: ErrorCallback, findOptions: ContactFindOption): void;
  }

  interface Contact {
    readonly id: string;
    displayName: string;
    name: ContactName;
    nickname: string;
    phoneNumbers: ContactField[];
    emails: ContactField[];
    addresses: ContactAddress[];
    ims: ContactField[];
    organizations: ContactOriganization[];
    birthday: Date;
    note: string;
    photos: ContactField[];
    categories: ContactField[];
    urls: ContactField[];
    clone(): Contact;
    remove(successCB, errorCB);
    save(successCB, errorCB);
  }

  interface ContactName {
    formatted: string;
    familyName: string;
    givenName: string;
    middleName: string;
    honorificPrefix: string;
    honorificSuffix: string;
  }

  interface ContactField {
    type: string;
    value: string;
    preferred: boolean;
  }

  interface ContactAddress {
    type: string;
    formatted: string;
    streetAddress: string;
    locality: string;
    region: string;
    country: string;
    postalCode: string;
    preferred: boolean;
  }

  interface ContactOriganization {
    type: string;
    name: string;
    department: string;
    title: string;
    preferred: boolean;
  }

  interface ContactFindOption {
    filter: ContactFindFilter[];
    multiple: boolean;
  }

  interface ContactFindFilter {
    logic: "and" | "or" | "not";
    field: string;
    value: string;
  }

  type AddressBookSuccessCallback = (addressbook: AddressBook) => void;

  type FindSuccessCallback = (contacts: Contact[]) => void;

  interface Exception {
    code: number;
    message: string;
  }

  type ErrorCallback = (err: Exception) => void;
}
