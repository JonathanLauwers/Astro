import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeHeroSkeleton } from "./TypeHero";
import type { TypeSectionSkeleton } from "./TypeSection";
import type { TypeSectionDuplexSkeleton } from "./TypeSectionDuplex";

export interface TypePageContentFields {
    internalLabel: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Text;
    keywords: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    hero?: EntryFieldTypes.EntryLink<TypeHeroSkeleton>;
    content: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSectionDuplexSkeleton | TypeSectionSkeleton>>;
}

export type TypePageContentSkeleton = EntrySkeletonType<TypePageContentFields, "pageContent">;
export type TypePageContent<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageContentSkeleton, Modifiers, Locales>;
