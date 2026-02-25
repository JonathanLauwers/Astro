import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeContentCallToActionSkeleton } from "./TypeContentCallToAction";

export interface TypeNavigationFields {
    internalLabel: EntryFieldTypes.Symbol<"navigation">;
    links: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeContentCallToActionSkeleton>>;
}

export type TypeNavigationSkeleton = EntrySkeletonType<TypeNavigationFields, "navigation">;
export type TypeNavigation<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeNavigationSkeleton, Modifiers, Locales>;
