import vscode from 'vscode';
export interface PathContent extends Record<string, string[]> {
}
export declare class Storage {
    readonly context: vscode.ExtensionContext;
    readonly connectionName: string;
    constructor(context: vscode.ExtensionContext, connectionName: string);
    private get;
    private set;
    getSourceList(): PathContent;
    setSourceList(sourceList: PathContent): Promise<void>;
    getLastProfile(): string;
    setLastProfile(lastProfile: string): Promise<void>;
    getPreviousCurLibs(): string[];
    setPreviousCurLibs(previousCurLibs: string[]): Promise<void>;
    getDeployment(): PathContent;
    setDeployment(existingPaths: PathContent): Promise<void>;
}
