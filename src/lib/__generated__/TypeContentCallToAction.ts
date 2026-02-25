import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeIconSkeleton } from "./TypeIcon";
import type { TypePageContentSkeleton } from "./TypePageContent";
import type { TypePageExternalSkeleton } from "./TypePageExternal";
import type { TypePageHomeSkeleton } from "./TypePageHome";
import type { TypePageProjectSkeleton } from "./TypePageProject";
import type { TypePageStaticSkeleton } from "./TypePageStatic";

export interface TypeContentCallToActionFields {
    internalLabel: EntryFieldTypes.Symbol;
    label?: EntryFieldTypes.Symbol;
    icon?: EntryFieldTypes.EntryLink<TypeIconSkeleton>;
    destination: EntryFieldTypes.EntryLink<TypePageContentSkeleton | TypePageExternalSkeleton | TypePageHomeSkeleton | TypePageProjectSkeleton | TypePageStaticSkeleton>;
}

export type TypeContentCallToActionSkeleton = EntrySkeletonType<TypeContentCallToActionFields, "contentCallToAction">;
export type TypeContentCallToAction<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeContentCallToActionSkeleton, Modifiers, Locales>;
