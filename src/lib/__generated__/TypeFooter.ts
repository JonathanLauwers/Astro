import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeContentCallToActionSkeleton } from "./TypeContentCallToAction";

export interface TypeFooterFields {
    internalLabel: EntryFieldTypes.Symbol<"footer">;
    socials?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeContentCallToActionSkeleton>>;
    links?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeContentCallToActionSkeleton>>;
}

export type TypeFooterSkeleton = EntrySkeletonType<TypeFooterFields, "footer">;
export type TypeFooter<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeFooterSkeleton, Modifiers, Locales>;
