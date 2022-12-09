import vscode from "vscode";
import { TreeDataProvider } from "vscode";
import { Search } from "../api/Search";
export declare class SearchView implements TreeDataProvider<any> {
    private _term;
    private _results;
    private _onDidChangeTreeData;
    readonly onDidChangeTreeData: vscode.Event<vscode.TreeItem | undefined | null | void>;
    constructor(context: vscode.ExtensionContext);
    setViewVisible(visible: boolean): void;
    setResults(term: string, results: Search.Result[]): void;
    refresh(): void;
    getTreeItem(element: vscode.TreeItem): vscode.TreeItem;
    getChildren(hitSource: HitSource): Promise<vscode.TreeItem[]>;
}
declare class HitSource extends vscode.TreeItem {
    readonly result: Search.Result;
    readonly term: string;
    private readonly _path;
    constructor(result: Search.Result, term: string);
    getChildren(): Promise<LineHit[]>;
}
declare class LineHit extends vscode.TreeItem {
    readonly path: string;
    constructor(term: string, path: string, line: Search.Line);
}
export {};
