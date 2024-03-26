/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Images".
 */
export type Images =
  | {
      url?: string | null;
      id?: string | null;
    }[]
  | null;

export interface Config {
  collections: {
    organisations: Organisation;
    partnerships: Partnership;
    activities: Activity;
    counters: Counter;
    places: Place;
    profiles: Profile;
    contacts: Contact;
    categories: Category;
    classifications: Classification;
    products: Product;
    sessions: Session;
    week_availabilities: WeekAvailability;
    season_availabilities: SeasonAvailability;
    availabilities: Availability;
    codes: Code;
    code_lists: CodeList;
    media: Media;
    users: User;
    pages: Page;
    posts: Post;
    projects: Project;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {};
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "organisations".
 */
export interface Organisation {
  id: string;
  key?: string | null;
  name?: string | null;
  place?: (string | null) | Place;
  mainImage?: Image;
  images?: Images;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "places".
 */
export interface Place {
  id: string;
  key?: string | null;
  name?: string | null;
  /**
   * @minItems 2
   * @maxItems 2
   */
  center?: [number, number] | null;
  within?: (string | Place)[] | null;
  addressText?: string | null;
  title: string;
  someTextField: string;
  address?: Address;
  categories?: (string | Category)[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Address".
 */
export interface Address {
  street?: string | null;
  locality?: string | null;
  postalCode?: string | null;
  country?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: string;
  key?: string | null;
  name?: string | null;
  subject?: string | null;
  classification?: (string | null) | Classification;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "classifications".
 */
export interface Classification {
  id: string;
  key?: string | null;
  name?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Image".
 */
export interface Image {
  url?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "partnerships".
 */
export interface Partnership {
  id: string;
  key?: string | null;
  name?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "activities".
 */
export interface Activity {
  id: string;
  key?: string | null;
  name?: string | null;
  manager?: Party;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Party".
 */
export interface Party {
  organisation?: (string | null) | Organisation;
  partnership?: (string | null) | Partnership;
  activity?: (string | null) | Activity;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "counters".
 */
export interface Counter {
  id: string;
  key?: string | null;
  name?: string | null;
  place?: (string | null) | Place;
  availabilities?: (string | Availability)[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "availabilities".
 */
export interface Availability {
  id: string;
  key?: string | null;
  name?: string | null;
  season?: (string | null) | SeasonAvailability;
  week?: (string | null) | WeekAvailability;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "season_availabilities".
 */
export interface SeasonAvailability {
  id: string;
  key?: string | null;
  name?: string | null;
  year?: {
    months?: ('Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec')[] | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "week_availabilities".
 */
export interface WeekAvailability {
  id: string;
  key?: string | null;
  name?: string | null;
  days?: ('Mo' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa' | 'Su')[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "profiles".
 */
export interface Profile {
  id: string;
  key?: string | null;
  name?: string | null;
  type?: string | null;
  link?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contacts".
 */
export interface Contact {
  id: string;
  type?: ('person' | 'organisation') | null;
  givenName?: string | null;
  familyName?: string | null;
  name?: string | null;
  mainPhoneNumber?: string | null;
  slug?: string | null;
  editSlug?: boolean | null;
  holder?: Party;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "products".
 */
export interface Product {
  id: string;
  name?: string | null;
  owner?: Party;
  producer?: Party;
  categories?: (string | Category)[] | null;
  allergenList?:
    | {
        containmentLevel?: (string | null) | Code;
        allergen?: (string | null) | Code;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "codes".
 */
export interface Code {
  id: string;
  name?: string | null;
  code?: string | null;
  key?: string | null;
  list?: (string | null) | CodeList;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "code_lists".
 */
export interface CodeList {
  id: string;
  key?: string | null;
  name?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sessions".
 */
export interface Session {
  id: string;
  key?: string | null;
  name?: string | null;
  place?: (string | null) | Place;
  manager?: Party;
  parent?: (string | null) | Session;
  breadcrumbs?:
    | {
        doc?: (string | null) | Session;
        url?: string | null;
        label?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  caption?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name?: string | null;
  roles?: ('admin' | 'user')[] | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  publishedAt?: string | null;
  hero: {
    type: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact';
    richText: {
      [k: string]: unknown;
    }[];
    links?:
      | {
          link: {
            type?: ('reference' | 'custom') | null;
            newTab?: boolean | null;
            reference?: {
              relationTo: 'pages';
              value: string | Page;
            } | null;
            url?: string | null;
            label: string;
            appearance?: ('default' | 'primary' | 'secondary') | null;
          };
          id?: string | null;
        }[]
      | null;
    media?: string | Media | null;
  };
  layout: (
    | {
        invertBackground?: boolean | null;
        richText: {
          [k: string]: unknown;
        }[];
        links?:
          | {
              link: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                url?: string | null;
                label: string;
                appearance?: ('primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'cta';
      }
    | {
        invertBackground?: boolean | null;
        columns?:
          | {
              size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
              richText: {
                [k: string]: unknown;
              }[];
              enableLink?: boolean | null;
              link?: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                url?: string | null;
                label: string;
                appearance?: ('default' | 'primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'content';
      }
    | {
        invertBackground?: boolean | null;
        position?: ('default' | 'fullscreen') | null;
        media: string | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: ('collection' | 'selection') | null;
        relationTo?: ('posts' | 'projects') | null;
        categories?: (string | Category)[] | null;
        limit?: number | null;
        selectedDocs?:
          | (
              | {
                  relationTo: 'posts';
                  value: string | Post;
                }
              | {
                  relationTo: 'projects';
                  value: string | Project;
                }
            )[]
          | null;
        populatedDocs?:
          | (
              | {
                  relationTo: 'posts';
                  value: string | Post;
                }
              | {
                  relationTo: 'projects';
                  value: string | Project;
                }
            )[]
          | null;
        populatedDocsTotal?: number | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'archive';
      }
  )[];
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts".
 */
export interface Post {
  id: string;
  title: string;
  categories?: (string | Category)[] | null;
  secondCategories?: (string | Category)[] | null;
  publishedAt?: string | null;
  authors?: (string | User)[] | null;
  populatedAuthors?:
    | {
        id?: string | null;
        name?: string | null;
      }[]
    | null;
  hero: {
    type: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact';
    richText: {
      [k: string]: unknown;
    }[];
    links?:
      | {
          link: {
            type?: ('reference' | 'custom') | null;
            newTab?: boolean | null;
            reference?: {
              relationTo: 'pages';
              value: string | Page;
            } | null;
            url?: string | null;
            label: string;
            appearance?: ('default' | 'primary' | 'secondary') | null;
          };
          id?: string | null;
        }[]
      | null;
    media?: string | Media | null;
  };
  layout: (
    | {
        invertBackground?: boolean | null;
        richText: {
          [k: string]: unknown;
        }[];
        links?:
          | {
              link: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                url?: string | null;
                label: string;
                appearance?: ('primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'cta';
      }
    | {
        invertBackground?: boolean | null;
        columns?:
          | {
              size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
              richText: {
                [k: string]: unknown;
              }[];
              enableLink?: boolean | null;
              link?: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                url?: string | null;
                label: string;
                appearance?: ('default' | 'primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'content';
      }
    | {
        invertBackground?: boolean | null;
        position?: ('default' | 'fullscreen') | null;
        media: string | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: ('collection' | 'selection') | null;
        relationTo?: ('posts' | 'projects') | null;
        categories?: (string | Category)[] | null;
        limit?: number | null;
        selectedDocs?:
          | (
              | {
                  relationTo: 'posts';
                  value: string | Post;
                }
              | {
                  relationTo: 'projects';
                  value: string | Project;
                }
            )[]
          | null;
        populatedDocs?:
          | (
              | {
                  relationTo: 'posts';
                  value: string | Post;
                }
              | {
                  relationTo: 'projects';
                  value: string | Project;
                }
            )[]
          | null;
        populatedDocsTotal?: number | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'archive';
      }
  )[];
  enablePremiumContent?: boolean | null;
  premiumContent?:
    | (
        | {
            invertBackground?: boolean | null;
            richText: {
              [k: string]: unknown;
            }[];
            links?:
              | {
                  link: {
                    type?: ('reference' | 'custom') | null;
                    newTab?: boolean | null;
                    reference?: {
                      relationTo: 'pages';
                      value: string | Page;
                    } | null;
                    url?: string | null;
                    label: string;
                    appearance?: ('primary' | 'secondary') | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'cta';
          }
        | {
            invertBackground?: boolean | null;
            columns?:
              | {
                  size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
                  richText: {
                    [k: string]: unknown;
                  }[];
                  enableLink?: boolean | null;
                  link?: {
                    type?: ('reference' | 'custom') | null;
                    newTab?: boolean | null;
                    reference?: {
                      relationTo: 'pages';
                      value: string | Page;
                    } | null;
                    url?: string | null;
                    label: string;
                    appearance?: ('default' | 'primary' | 'secondary') | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'content';
          }
        | {
            invertBackground?: boolean | null;
            position?: ('default' | 'fullscreen') | null;
            media: string | Media;
            id?: string | null;
            blockName?: string | null;
            blockType: 'mediaBlock';
          }
        | {
            introContent: {
              [k: string]: unknown;
            }[];
            populateBy?: ('collection' | 'selection') | null;
            relationTo?: ('posts' | 'projects') | null;
            categories?: (string | Category)[] | null;
            limit?: number | null;
            selectedDocs?:
              | (
                  | {
                      relationTo: 'posts';
                      value: string | Post;
                    }
                  | {
                      relationTo: 'projects';
                      value: string | Project;
                    }
                )[]
              | null;
            populatedDocs?:
              | (
                  | {
                      relationTo: 'posts';
                      value: string | Post;
                    }
                  | {
                      relationTo: 'projects';
                      value: string | Project;
                    }
                )[]
              | null;
            populatedDocsTotal?: number | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'archive';
          }
      )[]
    | null;
  relatedPosts?: (string | Post)[] | null;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "projects".
 */
export interface Project {
  id: string;
  title: string;
  categories?: (string | Category)[] | null;
  publishedAt?: string | null;
  extraInfo: Meta;
  hero: {
    type: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact';
    richText: {
      [k: string]: unknown;
    }[];
    links?:
      | {
          link: {
            type?: ('reference' | 'custom') | null;
            newTab?: boolean | null;
            reference?: {
              relationTo: 'pages';
              value: string | Page;
            } | null;
            url?: string | null;
            label: string;
            appearance?: ('default' | 'primary' | 'secondary') | null;
          };
          id?: string | null;
        }[]
      | null;
    media?: string | Media | null;
  };
  layout: (
    | {
        invertBackground?: boolean | null;
        richText: {
          [k: string]: unknown;
        }[];
        links?:
          | {
              link: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                url?: string | null;
                label: string;
                appearance?: ('primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'cta';
      }
    | {
        invertBackground?: boolean | null;
        columns?:
          | {
              size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
              richText: {
                [k: string]: unknown;
              }[];
              enableLink?: boolean | null;
              link?: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                url?: string | null;
                label: string;
                appearance?: ('default' | 'primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'content';
      }
    | {
        invertBackground?: boolean | null;
        position?: ('default' | 'fullscreen') | null;
        media: string | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: ('collection' | 'selection') | null;
        relationTo?: ('posts' | 'projects') | null;
        categories?: (string | Category)[] | null;
        limit?: number | null;
        selectedDocs?:
          | (
              | {
                  relationTo: 'posts';
                  value: string | Post;
                }
              | {
                  relationTo: 'projects';
                  value: string | Project;
                }
            )[]
          | null;
        populatedDocs?:
          | (
              | {
                  relationTo: 'posts';
                  value: string | Post;
                }
              | {
                  relationTo: 'projects';
                  value: string | Project;
                }
            )[]
          | null;
        populatedDocsTotal?: number | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'archive';
      }
  )[];
  relatedProjects?: (string | Project)[] | null;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Meta".
 */
export interface Meta {
  firstDescription: string;
  secondDescription: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}