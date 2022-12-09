import { ExtensionContext } from "vscode";
import { CustomUI, Field } from "./api/CustomUI";
export declare function activate(context: ExtensionContext): {
    instance: import("./api/Instance").default;
    CustomUI: typeof CustomUI;
    Field: typeof Field;
    baseContext: ExtensionContext;
};
export declare function deactivate(): void;
