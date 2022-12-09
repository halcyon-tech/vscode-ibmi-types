import * as vscode from "vscode";
import * as node_ssh from "node-ssh";
import { ConnectionConfiguration } from "./Configuration";
import { ConnectionData, CommandData, StandardIO, CommandResult } from "../typings";
interface MemberParts {
    asp: string | undefined;
    library: string | undefined;
    file: string | undefined;
    member: string | undefined;
    extension: string | undefined;
    basename: string | undefined;
}
export default class IBMi {
    client: node_ssh.NodeSSH;
    currentHost: string;
    currentPort: number;
    currentUser: string;
    currentConnectionName: string;
    tempRemoteFiles: {
        [name: string]: string;
    };
    defaultUserLibraries: string[];
    outputChannel: vscode.OutputChannel;
    subscriptions: vscode.Disposable[];
    aspInfo: {
        [id: number]: string;
    };
    qccsid: number | null;
    remoteFeatures: {
        [name: string]: string | undefined;
    };
    variantChars: {
        american: string;
        local: string;
    };
    lastErrors: object[];
    config?: ConnectionConfiguration.Parameters;
    commandsExecuted: number;
    constructor();
    /**
     * @returns {Promise<{success: boolean, error?: any}>} Was succesful at connecting or not.
     */
    connect(connectionObject: ConnectionData): Promise<{
        success: boolean;
        error?: any;
    }>;
    /**
     * @param {string} command
     * @param {string} [directory] If not passed, will use current home directory
     */
    remoteCommand(command: string, directory?: string): Promise<String | CommandResult>;
    sendQsh(options: CommandData): Promise<CommandResult>;
    /**
     * @deprecated Use sendCommand instead
     */
    paseCommand(command: string, directory?: string, returnType?: number, standardIO?: StandardIO): Promise<String | CommandResult>;
    sendCommand(options: CommandData): Promise<CommandResult>;
    private determineClear;
    /**
     * Generates path to a temp file on the IBM i
     * @param {string} key Key to the temp file to be re-used
     */
    getTempRemote(key: string): string;
    parserMemberPath(string: string): MemberParts;
    /**
     * @param {string} string
     * @returns {string} result
     */
    sysNameInLocal(string: string): string;
    /**
     * @param {string} string
     * @returns {string} result
     */
    sysNameInAmerican(string: string): string;
}
export {};
