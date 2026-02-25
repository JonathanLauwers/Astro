import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeHeroSkeleton } from "./TypeHero";
import type { TypeSectionSkeleton } from "./TypeSection";
import type { TypeSectionDuplexSkeleton } from "./TypeSectionDuplex";

export interface TypePageStaticFields {
    slug: EntryFieldTypes.Symbol<"experiences">;
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Text;
    keywords: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    hero?: EntryFieldTypes.EntryLink<TypeHeroSkeleton>;
    content: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSectionDuplexSkeleton | TypeSectionSkeleton>>;
}

export type TypePageStaticSkeleton = EntrySkeletonType<TypePageStaticFields, "pageStatic">;
export type TypePageStatic<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageStaticSkeleton, Modifiers, Locales>;
