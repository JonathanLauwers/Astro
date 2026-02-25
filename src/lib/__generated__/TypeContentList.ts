import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeContentListItemSkeleton } from "./TypeContentListItem";

export interface TypeContentListFields {
    internalLabel: EntryFieldTypes.Symbol;
    items: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeContentListItemSkeleton>>;
}

export type TypeContentListSkeleton = EntrySkeletonType<TypeContentListFields, "contentList">;
export type TypeContentList<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeContentListSkeleton, Modifiers, Locales>;
