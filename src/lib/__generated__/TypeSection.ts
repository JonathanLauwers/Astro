import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSectionFields {
    internalLabel: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    titlePosition: EntryFieldTypes.Symbol<"end" | "start">;
    gap: EntryFieldTypes.Symbol<"large" | "medium" | "none" | "small">;
    content: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
}

export type TypeSectionSkeleton = EntrySkeletonType<TypeSectionFields, "section">;
export type TypeSection<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSectionSkeleton, Modifiers, Locales>;
