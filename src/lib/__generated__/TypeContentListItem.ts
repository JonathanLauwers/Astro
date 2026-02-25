import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeContentImageSkeleton } from "./TypeContentImage";
import type { TypeContentRichTextSkeleton } from "./TypeContentRichText";

export interface TypeContentListItemFields {
    internalLabel: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    content?: EntryFieldTypes.EntryLink<TypeContentRichTextSkeleton>;
    media?: EntryFieldTypes.EntryLink<TypeContentImageSkeleton>;
}

export type TypeContentListItemSkeleton = EntrySkeletonType<TypeContentListItemFields, "contentListItem">;
export type TypeContentListItem<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeContentListItemSkeleton, Modifiers, Locales>;
