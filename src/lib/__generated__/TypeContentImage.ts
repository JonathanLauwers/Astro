import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeContentImageFields {
    internalLabel: EntryFieldTypes.Symbol;
    mobile?: EntryFieldTypes.AssetLink;
    tablet?: EntryFieldTypes.AssetLink;
    desktop: EntryFieldTypes.AssetLink;
}

export type TypeContentImageSkeleton = EntrySkeletonType<TypeContentImageFields, "contentImage">;
export type TypeContentImage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeContentImageSkeleton, Modifiers, Locales>;
