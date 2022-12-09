import Instance from './Instance';
export declare namespace Search {
    interface Result {
        path: string;
        lines: Line[];
    }
    interface Line {
        number: number;
        content: string;
    }
    function searchMembers(instance: Instance, library: string, sourceFile: string, memberFilter: string, searchTerm: string): Promise<Result[]>;
    function searchIFS(instance: Instance, path: string, searchTerm: string): Promise<Result[]>;
}
