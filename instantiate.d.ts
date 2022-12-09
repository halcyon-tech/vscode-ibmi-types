import * as vscode from "vscode";
import Instance from "./api/Instance";
import IBMi from "./api/IBMi";
import { Search } from "./api/Search";
export declare const instance: Instance;
export declare function setupEmitter(): void;
export declare function setConnection(conn: IBMi): void;
export declare function setSearchResults(term: string, results: Search.Result[]): void;
export declare function disconnect(): Promise<boolean>;
export declare function loadAllofExtension(context: vscode.ExtensionContext): Promise<void>;
/**
 * Register event
 */
export declare function on(event: string, func: Function): void;
