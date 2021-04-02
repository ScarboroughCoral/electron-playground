export interface OnBeforeWindowCreated {
    beforeWindowCreated(): void
}

export interface OnAfterWindowCreated {
    afterWindowCreated(): void;
}

export interface OnBeforeWindowClosed {
    beforeWindowClosed(): void;
}

export interface OnAfterWindowClosed {
    afterWindowClosed(): void;
}