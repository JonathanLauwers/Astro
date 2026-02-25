import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeContentRichTextFields {
    internalLabel: EntryFieldTypes.Symbol;
    copy?: EntryFieldTypes.RichText;
}

export type TypeContentRichTextSkeleton = EntrySkeletonType<TypeContentRichTextFields, "contentRichText">;
export type TypeContentRichText<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeContentRichTextSkeleton, Modifiers, Locales>;
