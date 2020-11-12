export default `{
  'title': seoSettings.title,
  'description': seoSettings.description,
  'image': {
    'src': seoSettings.image.asset->url,
    'caption': seoSettings.image.caption,
    'alt': seoSettings.image.alt
  },
}`;
