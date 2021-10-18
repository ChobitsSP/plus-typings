declare namespace plus {
  interface PlusStatic {
    /**
     * https://www.dcloud.io/docs/api/zh_cn/fingerprint.html#plus.fingerprint.authenticate
     */
    fingerprint: {
      isSupport(): boolean;
      isKeyguardSecure(): boolean;
      isEnrolledFingerprints(): boolean;
      authenticate(successCB: any, errorCB?: ErrorCallback, options?: plus.fingerprint.AuthenticateOptions): void;
      cancel(): void;
    };
  }
}

declare namespace plus.fingerprint {
  interface AuthenticateOptions {
    message?: string;
  }

  interface Exception {
    code: number;
    message: string;
  }

  type ErrorCallback = (err: Exception) => void;
}
