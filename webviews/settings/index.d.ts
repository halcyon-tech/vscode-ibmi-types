export = SettingsUI;
declare class SettingsUI {
    /**
     * Called to log in to an IBM i
     * @param {vscode.ExtensionContext} context
     */
    static init(context: vscode.ExtensionContext): void;
}
import vscode = require("vscode");
