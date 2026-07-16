export declare function isNot<T extends (value: unknown) => boolean>(pred: T): (value: unknown) => boolean;
export declare const isAllPass: ((predicates: ((value: unknown) => boolean)[], value: unknown) => boolean) & ((...args: any[]) => any);
export declare const isAnyPass: ((predicates: ((value: unknown) => boolean)[], value: unknown) => boolean) & ((...args: any[]) => any);
export declare const isNonePass: ((predicates: ((value: unknown) => boolean)[], value: unknown) => boolean) & ((...args: any[]) => any);
export declare const isOneOf: ((selection: unknown[], value: unknown) => boolean) & ((...args: any[]) => any);
