import vscode from 'vscode';
export declare class ProfilesView {
    private _onDidChangeTreeData;
    readonly onDidChangeTreeData: vscode.Event<void | vscode.TreeItem>;
    constructor(context: vscode.ExtensionContext);
    refresh(): void;
    getTreeItem(element: vscode.TreeItem): vscode.TreeItem;
    getChildren(): Promise<vscode.TreeItem[]>;
}
