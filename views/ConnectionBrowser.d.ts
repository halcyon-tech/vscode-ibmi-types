import vscode from 'vscode';
import { Server } from '../typings';
export declare class ObjectBrowserProvider {
    private _attemptingConnection;
    private readonly _emitter;
    readonly onDidChangeTreeData: vscode.Event<ServerItem | undefined | null | void>;
    constructor(context: vscode.ExtensionContext);
    refresh(): void;
    getTreeItem(element: ServerItem): vscode.TreeItem;
    getChildren(): Promise<ServerItem[]>;
}
declare class ServerItem extends vscode.TreeItem implements Server {
    readonly name: string;
    constructor(name: string, user: string, host: string);
}
export {};
