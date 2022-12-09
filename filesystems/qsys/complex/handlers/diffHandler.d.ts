export = Handler;
declare class Handler {
    static begin(context: any): void;
    /**
     * @param {vscode.TextDocument} document
     */
    static refreshGutter(document: vscode.TextDocument): void;
    /**
     * @param {string} alias
     * @param {string} body
     */
    static calcNewSourceDates(alias: string, body: string): string[];
    /**
     * @returns {string} Stamp in format for source date
     */
    static currentStamp(): string;
}
import vscode = require("vscode");
