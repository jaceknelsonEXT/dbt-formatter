export interface Writer {
    write(buffer: string): void;
}
export declare class FileWriter implements Writer {
    private fp;
    constructor(fp: string);
    write(buffer: string): void;
}
export declare class StdOutWriter implements Writer {
    write(buffer: string): void;
}
