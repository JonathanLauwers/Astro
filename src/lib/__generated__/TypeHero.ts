import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeContentImageSkeleton } from "./TypeContentImage";

export interface TypeHeroFields {
    internalLabel: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    media?: EntryFieldTypes.EntryLink<TypeContentImageSkeleton>;
}

export type TypeHeroSkeleton = EntrySkeletonType<TypeHeroFields, "hero">;
export type TypeHero<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHeroSkeleton, Modifiers, Locales>;
