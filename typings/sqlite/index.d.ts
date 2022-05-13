declare namespace plus {
  interface PlusStatic {
    sqlite: {
      /**
       * 
       * @param options 
       */
      openDatabase(options: plus.sqlite.BaseOptions & plus.sqlite.EventOptions): void;

      closeDatabase(options): void;

      /**
       * 数据库已经打开则返回true，数据库没有打开则返回false。 HBuilderX1.9.0及以上版本支持。
       */
      isOpenDatabase(options: plus.sqlite.BaseOptions): boolean;

      /**
       * 执行事务
       * @param options 
       */
      transaction(options: plus.sqlite.TransactionOptions): void;

      /**
       * 执行增删改等操作的SQL语句
       * @param options 
       */
      executeSql(options: plus.sqlite.ExecuteSqlOptions): void;

      /**
       * 执行查询的SQL语句
       * @param options 
       */
      selectSql<T = any>(options: plus.sqlite.SelectSqlOptions<T>): void;
    }
  }
}

declare namespace plus.sqlite {
  interface BaseOptions {
    /**
     * 数据库名称
     */
    name: string;
    /**
     * 数据库路径
     * 必须为本地地址，支持以下类型路径： 
     * 5+ API路径(RelativeURL) - 以"_"开头的相对路径，如"_doc/a.db"（推荐使用"_doc/x.db"目录保存）； 
     * 相对路径 - 相对于当前页面的host位置，如"a.db"（不推荐使用，相对路径无法写入数据，只能读取数据）； 
     * 绝对路径 - 系统绝对路径，如Android平台"/sdcard/a.db"，此类路径通常通过其它5+ API获取的（不推荐使用，无法跨平台）； 
     * 本地路径URL - 以“file://”开头，后面跟随系统绝对路径。 
     * 注意：写入数据需符合系统沙盒权限机制，应用资源目录（_www）目录通常不允许写操作，只能读取。
     */
    path: string;
  }

  interface TransactionOptions extends EventOptions {
    name: string;
    /**
     * 可选值：begin（开始事务）、commit（提交）、rollback（回滚）。
     */
    operation: "begin" | "commit" | "rollback";
  }

  interface ExecuteSqlOptions extends EventOptions {
    name: string;
    /**
     * 参数为字符串时，表示执行单条SQL语句； 参数为字符串数组时（HBuilderX2.5.5+支持），表示执行多条SQL语句，按数组顺序执行，某条SQL语句执行错误则终止。 注意：Android平台不支持SQL语句中使用“;”分割多条命令，要运行多条命令请使用字符串数组参数。
     */
    sql: string | string[];
  }

  interface SelectSqlOptions<T = any> {
    name: string;
    /**
     * 需要查询的SQL语句
     */
    sql: string;

    /**
     * 回调函数返回参数为JSON对象数组，其中JSON对象为查询的结果。 如果未查询到数据则返回参数为空数组。
     * @param data 
     */
    success(data: T[]): void;

    /**
     * 打开数据库失败回调函数
     * @param event 
     */
    fail(event): void;
  }

  interface EventOptions {
    /**
     * SQLite操作成功回调函数
     * @param event 
     */
    success(event): void;

    /**
     * 打开数据库失败回调函数
     * @param event 
     */
    fail(event): void;
  }
}