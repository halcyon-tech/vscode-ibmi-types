import vscode from 'vscode';
export declare class HelpView {
    getTreeItem(element: vscode.TreeItem): vscode.TreeItem;
    getChildren(): Promise<HelpItem[]>;
}
declare class HelpItem extends vscode.TreeItem {
    constructor(icon: string, text: string, url: string);
}
export {};
