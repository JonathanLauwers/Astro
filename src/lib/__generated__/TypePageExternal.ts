import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePageExternalFields {
    internalLabel: EntryFieldTypes.Symbol;
    url: EntryFieldTypes.Symbol;
}

export type TypePageExternalSkeleton = EntrySkeletonType<TypePageExternalFields, "pageExternal">;
export type TypePageExternal<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageExternalSkeleton, Modifiers, Locales>;
