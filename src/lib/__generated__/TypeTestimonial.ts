import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAuthorSkeleton } from "./TypeAuthor";
import type { TypeContentRichTextSkeleton } from "./TypeContentRichText";

export interface TypeTestimonialFields {
    internalLabel: EntryFieldTypes.Symbol;
    author: EntryFieldTypes.EntryLink<TypeAuthorSkeleton>;
    copy: EntryFieldTypes.EntryLink<TypeContentRichTextSkeleton>;
}

export type TypeTestimonialSkeleton = EntrySkeletonType<TypeTestimonialFields, "testimonial">;
export type TypeTestimonial<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTestimonialSkeleton, Modifiers, Locales>;
