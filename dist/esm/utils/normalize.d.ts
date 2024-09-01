export declare const trimEnd: {
    (string?: string, chars?: string): string;
    (string: string, index: string | number, guard: object): string;
};
export declare const equalizeWhitespace: (st: string) => string;
export declare const addWhitespace: (st: string, pre?: boolean) => string;
export declare const removeWhitespace: (st: string) => string;
export declare const isCamelCase: (token: string) => boolean;
