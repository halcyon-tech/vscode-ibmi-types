export = Login;
declare class Login {
    /**
     * Called when logging into a brand new system
     * @param {vscode.ExtensionContext} context
     */
    static show(context: vscode.ExtensionContext): Promise<void>;
    /**
     * Start the login process to connect to a system
     * @param {string} name Connection name
     * @param {vscode.ExtensionContext} context
     */
    static LoginToPrevious(name: string, context: vscode.ExtensionContext): Promise<boolean>;
}
import vscode = require("vscode");
