import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeContentImageSkeleton } from "./TypeContentImage";
import type { TypeContentRichTextSkeleton } from "./TypeContentRichText";
import type { TypeRoleSkeleton } from "./TypeRole";
import type { TypeTechnologySkeleton } from "./TypeTechnology";

export interface TypeProjectFields {
    internalLabel: EntryFieldTypes.Symbol;
    name: EntryFieldTypes.Symbol;
    logo?: EntryFieldTypes.EntryLink<TypeContentImageSkeleton>;
    description?: EntryFieldTypes.EntryLink<TypeContentRichTextSkeleton>;
    website?: EntryFieldTypes.Symbol;
    roles?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeRoleSkeleton>>;
    technologies?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTechnologySkeleton>>;
    theme: EntryFieldTypes.Object;
}

export type TypeProjectSkeleton = EntrySkeletonType<TypeProjectFields, "project">;
export type TypeProject<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProjectSkeleton, Modifiers, Locales>;
