export const IconSizeOptions = ['is-small', 'is-medium', 'is-large', 'is-default', 'is-12', 'is-14', 'is-26', 'is-28', 'is-36'] as const;
export type IconsSize = (typeof IconSizeOptions)[number];
