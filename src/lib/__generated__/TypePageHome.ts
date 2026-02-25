import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSectionSkeleton } from "./TypeSection";
import type { TypeSectionDuplexSkeleton } from "./TypeSectionDuplex";

export interface TypePageHomeFields {
    internalLabel: EntryFieldTypes.Symbol<"Home">;
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Text;
    keywords: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    hero?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    content: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSectionDuplexSkeleton | TypeSectionSkeleton>>;
}

export type TypePageHomeSkeleton = EntrySkeletonType<TypePageHomeFields, "pageHome">;
export type TypePageHome<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageHomeSkeleton, Modifiers, Locales>;
