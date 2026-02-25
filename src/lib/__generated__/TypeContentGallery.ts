import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypePageProjectSkeleton } from "./TypePageProject";

export interface TypeContentGalleryFields {
    internalLabel: EntryFieldTypes.Symbol;
    media: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePageProjectSkeleton>>;
}

export type TypeContentGallerySkeleton = EntrySkeletonType<TypeContentGalleryFields, "contentGallery">;
export type TypeContentGallery<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeContentGallerySkeleton, Modifiers, Locales>;
