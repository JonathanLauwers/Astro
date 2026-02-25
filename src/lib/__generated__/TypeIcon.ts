import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeIconFields {
    name: EntryFieldTypes.Symbol<"instagram" | "linkedIn">;
}

export type TypeIconSkeleton = EntrySkeletonType<TypeIconFields, "icon">;
export type TypeIcon<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeIconSkeleton, Modifiers, Locales>;
