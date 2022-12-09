export class CustomUI {
    /** @type {Field[]} */
    fields: Field[];
    /**
     * @param {Field} field
     */
    addField(field: Field): void;
    /**
     * If no callback is provided, a Promise will be returned
     * @param {string} title
     * @param {Function} [callback] ({panel, data}) => {}
     * @returns {Promise<{panel: vscode.WebviewPanel, data: object}>}
     */
    loadPage(title: string, callback?: Function): Promise<{
        panel: vscode.WebviewPanel;
        data: object;
    }>;
    getHTML(panel: any): string;
}
export class Field {
    /**
     *
     * @param {"input"|"password"|"submit"|"buttons"|"checkbox"|"file"|"tabs"|"tree"|"select"|"paragraph"|"hr"} type
     * @param {string} [id]
     * @param {string} [label]
     */
    constructor(type: "input" | "password" | "submit" | "buttons" | "checkbox" | "file" | "tabs" | "tree" | "select" | "paragraph" | "hr", id?: string, label?: string);
    /** @type {"input"|"password"|"submit"|"buttons"|"checkbox"|"file"|"tabs"|"tree"|"select"|"paragraph"|"hr"} */
    type: "input" | "password" | "submit" | "buttons" | "checkbox" | "file" | "tabs" | "tree" | "select" | "paragraph" | "hr";
    /** @type {string} */
    id: string;
    /** @type {string} */
    label: string;
    /** @type {string|undefined} */
    description: string | undefined;
    /** @type {string|undefined} */
    default: string | undefined;
    /**
     * Used only for `input` type
     * @type {boolean|undefined}
    */
    readonly: boolean | undefined;
    /**
     * Used only for `input` type
     * @type {boolean|undefined}
    */
    multiline: boolean | undefined;
    /** @type {{label: string, value: string}[]|{selected?: boolean, value: string, description: string, text: string}[]|{label: string, id: string}[]|undefined} Used for select & button types. */
    items: {
        label: string;
        value: string;
    }[] | {
        selected?: boolean;
        value: string;
        description: string;
        text: string;
    }[] | {
        label: string;
        id: string;
    }[];
    treeList: any;
    getHTML(): string;
}
import vscode = require("vscode");
