export = exports;
declare class exports {
    static begin(context: any): void;
    /**
     * @param {vscode.TextEditor} editor
     */
    static refreshGutter(editor: vscode.TextEditor): void;
    /**
     * @returns {string} Stamp in format for source date
     */
    static currentStamp(): string;
}
import vscode = require("vscode");
