import { BrowserWindow } from "electron";
import { YBCWindow } from "../../../api/window/window/window";
import { OnAfterWindowClosed, OnAfterWindowCreated, OnBeforeWindowClosed, OnBeforeWindowCreated } from "../../../api/window/window/window-lifecycle-hooks";

export class YBCWindowImpl implements YBCWindow, OnBeforeWindowCreated, OnAfterWindowCreated, OnBeforeWindowClosed, OnAfterWindowClosed {
    private windowInstance: BrowserWindow = null;


    constructor() {
        this.registerLifecycle();
    }

    /**
     * 注册生命周期hook
     */
    private registerLifecycle() {
        this.beforeWindowCreated();
        this.windowInstance = new BrowserWindow();
        this.afterWindowCreated()
        this.windowInstance.on("close", (e) => {
            this.beforeWindowClosed();
        })
        this.windowInstance.on("closed", () => {
            this.afterWindowClosed();
        })
    }

    sum(a: number, b: number): number {
        return a + b;
    }

    beforeWindowCreated(): void {
        throw new Error("Method not implemented.");
    }
    afterWindowCreated(): void {
        throw new Error("Method not implemented.");
    }
    beforeWindowClosed(): void {
        throw new Error("Method not implemented.");
    }
    afterWindowClosed(): void {
        throw new Error("Method not implemented.");
    }
}
