import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem().title('Home Page').child(S.editor().schemaType('home').documentId('_home')),
      S.listItem()
        .title('About Us Page')
        .child(S.editor().schemaType('about').documentId('_about')),
      S.listItem()
        .title('Companies Page')
        .child(S.editor().schemaType('companies').documentId('_companies')),
      S.listItem()
        .title('Why We Invest Page')
        .child(S.editor().schemaType('whyWeInvest').documentId('_whyWeInvest')),
      S.listItem()
        .title('Settings')
        .child(S.editor().schemaType('globalSettings').documentId('_globalSettings')),
      S.divider(),
      S.documentTypeListItem('teamMember'),
      S.documentTypeListItem('founder'),
      S.documentTypeListItem('company'),
    ]);
