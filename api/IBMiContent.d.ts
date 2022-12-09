/// <reference types="node" />
export = IBMiContent;
declare class IBMiContent {
    /**
     * @param {IBMi} instance
     */
    constructor(instance: IBMi);
    ibmi: IBMi;
    /**
     * @param {string} remotePath
     * @param {string} localPath
     */
    downloadStreamfile(remotePath: string, localPath?: string): Promise<string>;
    writeStreamfile(originalPath: any, content: any): Promise<void | String | CommandResult>;
    /**
     * Download the contents of a source member
     * @param {string|undefined} asp
     * @param {string} lib
     * @param {string} spf
     * @param {string} mbr
     */
    downloadMemberContent(asp: string | undefined, lib: string, spf: string, mbr: string): Promise<string>;
    /**
     * Upload to a member
     * @param {string|undefined} asp
     * @param {string} lib
     * @param {string} spf
     * @param {string} mbr
     * @param {string|Uint8Array} content
     */
    uploadMemberContent(asp: string | undefined, lib: string, spf: string, mbr: string, content: string | Uint8Array): Promise<boolean>;
    /**
     * Run an SQL statement
     * @param {string} statement
     * @returns {Promise<Tools.DB2Row[]>} Result set
     */
    runSQL(statement: string): Promise<Tools.DB2Row[]>;
    /**
     * Download the contents of a table.
     * @param {string} lib
     * @param {string} file
     * @param {string} [mbr] Will default to file provided
     * @param {boolean} [deleteTable] Will delete the table after download
     */
    getTable(lib: string, file: string, mbr?: string, deleteTable?: boolean): Promise<any>;
    /**
     * Get list of libraries with description and attribute
     * @param {string[]} libraries Array of libraries to retrieve
     * @returns {Promise<{name: string, text: string, attribute: string}[]>} List of libraries
     */
    getLibraryList(libraries: string[]): Promise<{
        name: string;
        text: string;
        attribute: string;
    }[]>;
    /**
     * @param {{library: string, object?: string, types?: string[]}} filters
     * @param {string?} sortOrder
     * @returns {Promise<{library: string, name: string, type: string, text: string, attribute: string, count?: number}[]>} List of members
     */
    getObjectList(filters: {
        library: string;
        object?: string;
        types?: string[];
    }, sortOrder?: string | null): Promise<{
        library: string;
        name: string;
        type: string;
        text: string;
        attribute: string;
        count?: number;
    }[]>;
    /**
     * @param {string} lib
     * @param {string} spf
     * @param {string} [mbr]
     * @returns {Promise<{asp?: string, library: string, file: string, name: string, extension: string, recordLength: number, text: string}[]>} List of members
     */
    getMemberList(lib: string, spf: string, mbr?: string, ext?: string): Promise<{
        asp?: string;
        library: string;
        file: string;
        name: string;
        extension: string;
        recordLength: number;
        text: string;
    }[]>;
    /**
     * Get list of items in a path
     * @param {string} remotePath
     * @return {Promise<{type: "directory"|"streamfile", name: string, path: string}[]>} Resulting list
     */
    getFileList(remotePath: string): Promise<{
        type: "directory" | "streamfile";
        name: string;
        path: string;
    }[]>;
    /**
     * @param {string} errorsString
     * @returns {{code: string, text: string}[]} errors
     */
    parseIBMiErrors(errorsString: string): {
        code: string;
        text: string;
    }[];
}
import { default as IBMi } from "./IBMi";
import { Tools } from "./Tools";
import path = require("path");
