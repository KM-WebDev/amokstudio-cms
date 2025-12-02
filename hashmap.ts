export function createHashMap<T extends Record<string, any>>(elements: T) {
    return {
        data: elements,
        has(key: string): boolean {
            return key in elements;
        },
        get<K extends keyof T>(key: K): T[K] {
            return elements[key];
        },
    };
}
