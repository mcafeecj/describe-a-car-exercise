// car-color.enum.ts

export enum CarColor {
    Black = 1,
    White = 2,
    Gray = 3,
    Red = 4,
    Orange = 5,
    Yellow = 6,
    Green = 7,
    Blue = 8,
    Purple = 9,
    Pink = 10,
    Gold = 11,
}

export const carColorArray: string[] = getEnumValues(CarColor);

// Helper function to get enum values
function getEnumValues<T>(enumObject: T): string[] {
    return Object.values(enumObject)
        .filter(value => typeof value === 'number')
        .map(value => value.toString());
}
