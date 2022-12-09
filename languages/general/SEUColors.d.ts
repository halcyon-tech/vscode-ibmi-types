/// <reference types="node" />
import vscode from 'vscode';
export declare namespace SEUColors {
    interface Color {
        bytes: Buffer;
        decoration: vscode.TextEditorDecorationType;
    }
    export function forEach(cb: (name: string, color: Color) => void): void;
    export {};
}
