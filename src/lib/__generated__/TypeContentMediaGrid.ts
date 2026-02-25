import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeContentImageSkeleton } from "./TypeContentImage";

export interface TypeContentMediaGridFields {
    internalLabel: EntryFieldTypes.Symbol;
    items: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeContentImageSkeleton>>;
}

export type TypeContentMediaGridSkeleton = EntrySkeletonType<TypeContentMediaGridFields, "contentMediaGrid">;
export type TypeContentMediaGrid<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeContentMediaGridSkeleton, Modifiers, Locales>;
