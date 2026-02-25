import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeContentFormFields {
    internalLabel: EntryFieldTypes.Symbol<"Contact form">;
}

export type TypeContentFormSkeleton = EntrySkeletonType<TypeContentFormFields, "contentForm">;
export type TypeContentForm<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeContentFormSkeleton, Modifiers, Locales>;
