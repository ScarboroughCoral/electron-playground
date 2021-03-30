/**
 * 打招呼接口
 */
export interface Hello {
    /**
     * @param name 姓名
     * @returns 用户
     */
    hello(name: string):string;
}

/**
 * 用户类
 */
export class User implements Hello {
    
    /**
     * 用户的朋友列表
     */
    friends:Array<User> = [];

    /**
     * 创建新用户
     * @param friends 朋友列表
     */
    constructor(friends: Array<User> = []) {
        this.friends = friends;
    }

    /**
     * 打招呼
     * @param name 用户名
     * @returns 招呼字符串
     */
    hello(name: string): string {
        return `hello ${name}`;
    }
}