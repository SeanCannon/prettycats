export declare function isObject(value: unknown): value is Record<string, unknown>;
export declare const isObjectContaining: ((key: string, value: unknown) => boolean) & ((...args: any[]) => any);
export declare const isObjectAbsent: ((key: string, value: unknown) => boolean) & ((...args: any[]) => any);
export declare const isObjectMatching: ((a: unknown, b: unknown) => boolean) & ((...args: any[]) => any);
export declare const isObjectExtending: ((schema: Record<string, unknown>, value: unknown) => boolean) & ((...args: any[]) => any);
export declare const isObjectSatisfying: {
    <T extends Record<string, (value: unknown) => boolean>>(schema: T, value: unknown): value is Record<string, unknown>;
    (schema: unknown, value: unknown): boolean;
};
export declare function isEmptyObject(value: unknown): value is Record<string, unknown>;
export declare function isNonEmptyObject(value: unknown): value is Record<string, unknown>;
export declare function isPlainObject(value: unknown): value is Record<string, unknown>;
export declare function isFrozenObject(value: unknown): value is Record<string, unknown>;
export declare function isSealedObject(value: unknown): value is Record<string, unknown>;
export declare function isExtensibleObject(value: unknown): value is Record<string, unknown>;
export declare const isObjectWithKeys: ((keys: string[], value: unknown) => boolean) & ((...args: any[]) => any);
export declare const isObjectContainingAll: ((keys: string[], value: unknown) => boolean) & ((...args: any[]) => any);
export declare const isObjectContainingAny: ((keys: string[], value: unknown) => boolean) & ((...args: any[]) => any);
