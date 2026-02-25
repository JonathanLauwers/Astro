import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSectionDuplexFields {
    internalLabel: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    titlePosition: EntryFieldTypes.Symbol<"end" | "start">;
    gap: EntryFieldTypes.Symbol<"large" | "medium" | "none" | "small">;
    sectionA?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    sectionB?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    variant: EntryFieldTypes.Symbol<"even" | "focus A" | "focus B">;
}

export type TypeSectionDuplexSkeleton = EntrySkeletonType<TypeSectionDuplexFields, "sectionDuplex">;
export type TypeSectionDuplex<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSectionDuplexSkeleton, Modifiers, Locales>;
