import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeContentImageSkeleton } from "./TypeContentImage";

export interface TypeAuthorFields {
    name: EntryFieldTypes.Symbol;
    company: EntryFieldTypes.Symbol;
    role: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.EntryLink<TypeContentImageSkeleton>;
}

export type TypeAuthorSkeleton = EntrySkeletonType<TypeAuthorFields, "author">;
export type TypeAuthor<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeAuthorSkeleton, Modifiers, Locales>;
