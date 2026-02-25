import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeContentImageSkeleton } from "./TypeContentImage";
import type { TypeTestimonialSkeleton } from "./TypeTestimonial";

export interface TypeContentCarouselFields {
    internalLabel: EntryFieldTypes.Symbol;
    pagination: EntryFieldTypes.Boolean;
    items: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeContentImageSkeleton | TypeTestimonialSkeleton>>;
}

export type TypeContentCarouselSkeleton = EntrySkeletonType<TypeContentCarouselFields, "contentCarousel">;
export type TypeContentCarousel<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeContentCarouselSkeleton, Modifiers, Locales>;
