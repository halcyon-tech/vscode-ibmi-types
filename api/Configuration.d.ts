/// <reference types="vscode" />
export declare namespace GlobalConfiguration {
    function get<T>(prop: string): T | undefined;
    function set(key: string, value: any): Thenable<void>;
}
export declare namespace ConnectionConfiguration {
    interface Parameters extends ConnectionProfile {
        host: string;
        autoClearTempData: boolean;
        connectionProfiles: ConnectionProfile[];
        autoSortIFSShortcuts: boolean;
        enableSQL: boolean;
        tempLibrary: string;
        tempDir: string;
        sourceASP: string;
        sourceFileCCSID: string;
        autoConvertIFSccsid: boolean;
        hideCompileErrors: string[];
        enableSourceDates: boolean;
        sourceDateMode: "edit" | "diff";
        sourceDateGutter: boolean;
        encodingFor5250: string;
        terminalFor5250: string;
        setDeviceNameFor5250: boolean;
        connectringStringFor5250: string;
        autoSaveBeforeAction: boolean;
        showDescInLibList: boolean;
        [name: string]: any;
    }
    interface ObjectFilters {
        name: string;
        library: string;
        object: string;
        types: string[];
        member: string;
        memberType: string;
    }
    interface CustomVariable {
        name: string;
        value: string;
    }
    interface ConnectionProfile {
        name: string;
        homeDirectory: string;
        currentLibrary: string;
        libraryList: string[];
        objectFilters: ObjectFilters[];
        ifsShortcuts: string[];
        customVariables: CustomVariable[];
    }
    function update(parameters: Parameters): Promise<void>;
    /**
     * Will load an existing config if it exists, otherwise will create it with default values.
     * @param name Connection name string for configuration
     * @returns the parameters
     */
    function load(name: string): Promise<Parameters>;
}
