export declare namespace Tools {
    interface DB2Headers {
        name: string;
        from: number;
        length: number;
    }
    interface DB2Row extends Record<string, string | number | null> {
    }
    /**
     * Parse standard out for `/usr/bin/db2`
     * @param output /usr/bin/db2's output
     * @returns rows
     */
    function db2Parse(output: string): DB2Row[];
    function makeid(): string;
    /**
     * Build the IFS path string to a member
     * @param library
     * @param object
     * @param member
     * @param iasp Optional: an iASP name
     */
    function qualifyPath(library: string, object: string, member: string, iasp?: string): string;
    /**
     * @param Path
     * @returns the escaped path
     */
    function escapePath(Path: string): string;
}
