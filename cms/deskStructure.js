import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.editor().schemaType('globalSettings').documentId('af74fa4d-70d2-44c3-9a0a-c54991dc5076')
        ),
    ]);
