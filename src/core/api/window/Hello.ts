/**
 * 打招呼接口
 */
export interface Hello {
    /**
     * @param name 姓名
     * @returns 用户
     */
    hello: (name: string) => User;
}

/**
 * 用户接口
 */
export interface User {
    /**
     * 用户姓名
     */
    name: string;

    /**
     * 和朋友一起玩耍
     * @param friends 朋友列表
     * @returns 玩耍结果（很迷惑？
     */
    playWith: (...friends: Array<User>) => string;
}