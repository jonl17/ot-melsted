// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client'

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] }

/**
 * Content for footer documents
 */
interface FooterDocumentData {
  /**
   * About field in *footer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.about
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  about: prismic.RichTextField

  /**
   * Contact box field in *footer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.contact_box
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  contact_box: prismic.RichTextField

  /**
   * Address box field in *footer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.address_box
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  address_box: prismic.RichTextField

  /**
   * image field in *footer*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>
}

/**
 * footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    'footer',
    Lang
  >

type HomepageDocumentDataSlicesSlice =
  | ProjectShowcaseSliceSlice
  | FrontpageHeroSliceSlice

/**
 * Content for homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>
}

/**
 * homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    'homepage',
    Lang
  >

/**
 * Content for Page settings documents
 */
interface PageSettingsDocumentData {
  /**
   * favicon field in *Page settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page_settings.favicon
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  favicon: prismic.ImageField<never>

  /**
   * page title field in *Page settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page_settings.page_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  page_title: prismic.KeyTextField

  /**
   * page image field in *Page settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page_settings.page_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  page_image: prismic.ImageField<never>

  /**
   * page description field in *Page settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Optimal SEO description length is 150-160 characters
   * - **API ID Path**: page_settings.page_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  page_description: prismic.KeyTextField
}

/**
 * Page settings document from Prismic
 *
 * - **API ID**: `page_settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageSettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<PageSettingsDocumentData>,
    'page_settings',
    Lang
  >

type ProjectDocumentDataSlicesSlice =
  | ProjectBannerSlice
  | DescriptionSliceSlice
  | ProjectImageSectionSlice

/**
 * Content for project documents
 */
interface ProjectDocumentData {
  /**
   * title field in *project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * featured image field in *project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.featured_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  featured_image: prismic.ImageField<never>

  /**
   * Slice Zone field in *project*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: project.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectDocumentDataSlicesSlice>
  /**
   * seo title field in *project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.seo_title
   * - **Tab**: seo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  seo_title: prismic.KeyTextField

  /**
   * seo description field in *project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Optimal SEO description length is 150-160 characters
   * - **API ID Path**: project.seo_description
   * - **Tab**: seo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  seo_description: prismic.KeyTextField

  /**
   * seo image field in *project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.seo_image
   * - **Tab**: seo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  seo_image: prismic.ImageField<never>
}

/**
 * project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<ProjectDocumentData>, 'project', Lang>

export type AllDocumentTypes =
  | FooterDocument
  | HomepageDocument
  | PageSettingsDocument
  | ProjectDocument

/**
 * Primary content in *DescriptionSlice → Primary*
 */
export interface DescriptionSliceSliceDefaultPrimary {
  /**
   * text field in *DescriptionSlice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: description_slice.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField
}

/**
 * Default variation for DescriptionSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DescriptionSliceSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<DescriptionSliceSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *DescriptionSlice*
 */
type DescriptionSliceSliceVariation = DescriptionSliceSliceDefault

/**
 * DescriptionSlice Shared Slice
 *
 * - **API ID**: `description_slice`
 * - **Description**: DescriptionSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DescriptionSliceSlice = prismic.SharedSlice<
  'description_slice',
  DescriptionSliceSliceVariation
>

/**
 * Primary content in *FrontpageHeroSlice → Primary*
 */
export interface FrontpageHeroSliceSliceDefaultPrimary {
  /**
   * hero image field in *FrontpageHeroSlice → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: frontpage_hero_slice.primary.hero_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero_image: prismic.ImageField<never>

  /**
   * text field in *FrontpageHeroSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: frontpage_hero_slice.primary.text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField
}

/**
 * Default variation for FrontpageHeroSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FrontpageHeroSliceSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<FrontpageHeroSliceSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *FrontpageHeroSlice*
 */
type FrontpageHeroSliceSliceVariation = FrontpageHeroSliceSliceDefault

/**
 * FrontpageHeroSlice Shared Slice
 *
 * - **API ID**: `frontpage_hero_slice`
 * - **Description**: FrontpageHeroSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FrontpageHeroSliceSlice = prismic.SharedSlice<
  'frontpage_hero_slice',
  FrontpageHeroSliceSliceVariation
>

/**
 * Primary content in *ProjectBannerSlice → Primary*
 */
export interface ProjectBannerSliceDefaultPrimary {
  /**
   * image field in *ProjectBannerSlice → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project_banner.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>
}

/**
 * Default variation for ProjectBannerSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectBannerSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<ProjectBannerSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *ProjectBannerSlice*
 */
type ProjectBannerSliceVariation = ProjectBannerSliceDefault

/**
 * ProjectBannerSlice Shared Slice
 *
 * - **API ID**: `project_banner`
 * - **Description**: ProjectBanner
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectBannerSlice = prismic.SharedSlice<
  'project_banner',
  ProjectBannerSliceVariation
>

/**
 * Primary content in *ProjectImageSectionSlice → Primary*
 */
export interface ProjectImageSectionSliceDefaultPrimary {
  /**
   * help field in *ProjectImageSectionSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Accepts 1 or 2 images. If 2 are added, make sure they have same dimensions!!
   * - **API ID Path**: project_image_section.primary.help
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  help: prismic.KeyTextField

  /**
   * first image field in *ProjectImageSectionSlice → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project_image_section.primary.first_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  first_image: prismic.ImageField<never>

  /**
   * second image field in *ProjectImageSectionSlice → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project_image_section.primary.second_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  second_image: prismic.ImageField<never>

  /**
   * remove container field in *ProjectImageSectionSlice → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: project_image_section.primary.remove_container
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  remove_container: prismic.BooleanField
}

/**
 * Default variation for ProjectImageSectionSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectImageSectionSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<ProjectImageSectionSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *ProjectImageSectionSlice*
 */
type ProjectImageSectionSliceVariation = ProjectImageSectionSliceDefault

/**
 * ProjectImageSectionSlice Shared Slice
 *
 * - **API ID**: `project_image_section`
 * - **Description**: ProjectImageSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectImageSectionSlice = prismic.SharedSlice<
  'project_image_section',
  ProjectImageSectionSliceVariation
>

/**
 * Primary content in *ProjectShowcaseSlice → Items*
 */
export interface ProjectShowcaseSliceSliceDefaultItem {
  /**
   * showcase field in *ProjectShowcaseSlice → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: project_showcase_slice.items[].showcase
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  showcase: prismic.ContentRelationshipField<'project'>
}

/**
 * Default variation for ProjectShowcaseSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectShowcaseSliceSliceDefault = prismic.SharedSliceVariation<
  'default',
  Record<string, never>,
  Simplify<ProjectShowcaseSliceSliceDefaultItem>
>

/**
 * Slice variation for *ProjectShowcaseSlice*
 */
type ProjectShowcaseSliceSliceVariation = ProjectShowcaseSliceSliceDefault

/**
 * ProjectShowcaseSlice Shared Slice
 *
 * - **API ID**: `project_showcase_slice`
 * - **Description**: ProjectShowcaseSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectShowcaseSliceSlice = prismic.SharedSlice<
  'project_showcase_slice',
  ProjectShowcaseSliceSliceVariation
>

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>
  }

  namespace Content {
    export type {
      FooterDocument,
      FooterDocumentData,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      PageSettingsDocument,
      PageSettingsDocumentData,
      ProjectDocument,
      ProjectDocumentData,
      ProjectDocumentDataSlicesSlice,
      AllDocumentTypes,
      DescriptionSliceSlice,
      DescriptionSliceSliceDefaultPrimary,
      DescriptionSliceSliceVariation,
      DescriptionSliceSliceDefault,
      FrontpageHeroSliceSlice,
      FrontpageHeroSliceSliceDefaultPrimary,
      FrontpageHeroSliceSliceVariation,
      FrontpageHeroSliceSliceDefault,
      ProjectBannerSlice,
      ProjectBannerSliceDefaultPrimary,
      ProjectBannerSliceVariation,
      ProjectBannerSliceDefault,
      ProjectImageSectionSlice,
      ProjectImageSectionSliceDefaultPrimary,
      ProjectImageSectionSliceVariation,
      ProjectImageSectionSliceDefault,
      ProjectShowcaseSliceSlice,
      ProjectShowcaseSliceSliceDefaultItem,
      ProjectShowcaseSliceSliceVariation,
      ProjectShowcaseSliceSliceDefault,
    }
  }
}
