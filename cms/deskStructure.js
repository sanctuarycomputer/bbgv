import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem().title('Home Page').child(S.editor().schemaType('home').documentId('_home')),
      S.listItem()
        .title('Settings')
        .child(S.editor().schemaType('globalSettings').documentId('_globalSettings')),
      S.divider(),
      S.documentTypeListItem('founder'),
      S.documentTypeListItem('company'),
    ]);
