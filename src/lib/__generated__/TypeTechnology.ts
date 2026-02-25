import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeContentImageSkeleton } from "./TypeContentImage";

export interface TypeTechnologyFields {
    name: EntryFieldTypes.Symbol;
    logo: EntryFieldTypes.EntryLink<TypeContentImageSkeleton>;
}

export type TypeTechnologySkeleton = EntrySkeletonType<TypeTechnologyFields, "technology">;
export type TypeTechnology<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTechnologySkeleton, Modifiers, Locales>;
