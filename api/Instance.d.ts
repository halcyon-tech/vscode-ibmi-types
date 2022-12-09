import * as vscode from "vscode";
import IBMi from "./IBMi";
import IBMiContent from "./IBMiContent";
import { Storage } from "./Storage";
import { ConnectionConfiguration } from "./Configuration";
export default class Instance {
    connection: IBMi | undefined;
    content: IBMiContent | undefined;
    storage: Storage | undefined;
    emitter: vscode.EventEmitter<any> | undefined;
    events: {
        event: string;
        func: Function;
    }[];
    constructor();
    getConnection(): IBMi;
    setConfig(newConfig: ConnectionConfiguration.Parameters): Promise<void>;
    getConfig(): ConnectionConfiguration.Parameters;
    getContent(): IBMiContent;
    getStorage(): Storage;
}
