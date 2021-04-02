import { YBCWindow } from "../../../api/window/window/window";

export class YBCWindowImpl implements YBCWindow {
    sum(a: number, b: number): number {
        return a + b;
    }

}