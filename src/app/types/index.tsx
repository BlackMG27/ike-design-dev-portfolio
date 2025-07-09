export type Json = string | number | boolean | null | {[key: string]: Json | undefined} | Json[]

export interface Project{
  title: string,
  slug: string,
  description?: string,
  hero_image_url?: string,
  reading_time?: number,
  objective?: string,
  short_intro?: string,
  gallery_images?: string[],
  created_at?: string,
  process?: Json | null,
  final_product?: Json | null,
  seo_title?: string,
  seo_description?: string,
  seo_keywords?: string[]
}