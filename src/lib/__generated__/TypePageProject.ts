import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeHeroSkeleton } from "./TypeHero";
import type { TypeProjectSkeleton } from "./TypeProject";
import type { TypeSectionSkeleton } from "./TypeSection";
import type { TypeSectionDuplexSkeleton } from "./TypeSectionDuplex";

export interface TypePageProjectFields {
    internalLabel: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Text;
    keywords: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    hero: EntryFieldTypes.EntryLink<TypeHeroSkeleton>;
    project: EntryFieldTypes.EntryLink<TypeProjectSkeleton>;
    content?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSectionDuplexSkeleton | TypeSectionSkeleton>>;
}

export type TypePageProjectSkeleton = EntrySkeletonType<TypePageProjectFields, "pageProject">;
export type TypePageProject<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageProjectSkeleton, Modifiers, Locales>;
