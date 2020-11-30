export default `{
  _type,
  'image': {
    'src': image.asset->url,
    'caption': image.caption,
    'alt': image.alt
  },
  jobTitle,
  firstName,
  lastName,
  bio,
  'linkedIn': linkedIn.link,
  'instagram': instagram.link,
  'twitter': twitter.link,
}`;
