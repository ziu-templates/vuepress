module.exports = {
  host: 'localhost',
  base: '/',
  port: 8666,
  title: '{{ name }}',
  description: '{{ description }}',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    nav: [],
    sidebar: [
      {
        title: 'demo',
        collapsable: false,
        children: [
          'chapter1/',
        ],
      }
    ],
  },
};
