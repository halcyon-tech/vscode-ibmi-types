/// <reference types="node" />
import { ExtensionContext } from "vscode";
import Instance from "./api/Instance";
export interface CodeForIBMi {
    instance: Instance;
    baseContext: ExtensionContext;
    CustomUI: object;
    Field: object;
}
export interface StandardIO {
    onStdout?: (data: Buffer) => void;
    onStderr?: (data: Buffer) => void;
    stdin?: string;
}
/**
 * External interface for extensions to call `code-for-ibmi.runCommand`
 */
export interface RemoteCommand {
    command: string;
    environment?: "ile" | "qsh" | "pase";
    cwd?: string;
    env?: {
        [name: string]: string;
    };
}
export interface CommandData extends StandardIO {
    command: string;
    directory?: string;
    env?: {
        [name: string]: string;
    };
}
export interface CommandResult {
    code: number | null;
    stdout: string;
    stderr: string;
    command?: string;
}
export interface Action {
    name: string;
    command: string;
    type?: "member" | "streamfile" | "object" | "file";
    environment: "ile" | "qsh" | "pase";
    extensions: string[];
    deployFirst?: boolean;
    postDownload?: string[];
}
export interface ConnectionData {
    name: string;
    host: string;
    port: number;
    username: string;
    password?: string;
    privateKey: string | null;
    keepaliveInterval: number;
}
export interface Server {
    name: string;
}
export interface Profile {
    profile: string;
}
export interface IBMiObject {
    library: string;
    name: string;
    type: string;
    text: string;
    attribute?: string;
}
