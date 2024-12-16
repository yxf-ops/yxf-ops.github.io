// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ZheJiang Lab', 
  tagline: '之江实验室',  
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://yxf-ops.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yxf-ops', // Usually your GitHub org/user name.
  projectName: 'yxf-ops.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn'],
  },

  plugins: [
    'docusaurus-plugin-sass',
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebarsCommunity.js'),
        editUrl: 'https://github.com/yxf-ops/yxf-ops.github.io/tree/main',
        editLocalizedFiles: true,
      }),
    ],
    [
      'client-redirects',
      /** @type {import('@docusaurus/plugin-client-redirects').Options} */
      ({
        fromExtensions: ['html', 'mdx'],
        redirects: [
          {
            from: ['/docs'],
            to: '/docs/introduction/what-is-byconity',
          },
          {
            from: ['/community'],
            to: '/community/become-maintainer',
          },
        ],
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/yxf-ops/yxf-ops.github.io/tree/main',
          editLocalizedFiles: true,
          lastVersion: 'current',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/yxf-ops/yxf-ops.github.io/tree/main',
          editLocalizedFiles: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-BYY7CCPJZ6',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/byconity-social-card.png',
      navbar: {
        title: 'Lab',
        hideOnScroll: true,
        logo: {
          alt: 'Zhejiang Lab Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction/what-is-byconity',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            to: '/community/become-maintainer',
            label: 'Community',
            position: 'left',
            activeBaseRegex: `/community/`,
          },
          { to: '/users', label: 'Users', position: 'left' },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/yxf-ops/yxf-ops.github.io',   
            position: 'right',                              
            // These allows adding Github icon using custom styles
            html: '<span>GitHub</span>',                    
            className: 'header-github-link',                
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'ByConity',
          src: 'img/footer-logo.svg',
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/introduction/main-principle-concepts',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Community',
                href: '/community',
              },
              {
                label: 'Users',
                href: '/users',
              },
             {
               label: 'Bilibili',
               href: 'https://space.bilibili.com/358999379?spm_id_from=333.999.0.0',
             },
              // {
              //   label: "Twitter",
              //   href: "",
              // },
              // {
              //   label: "Slack",
              //   href: "",
              // },
              // {
              //   label: "Meetup",
              //   href: "",
              // },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ByConity/ByConity',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ByteDance.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        disableSwitch: true,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'Y8UJSN6KEB',
        // Public API key: it is safe to commit it
        apiKey: 'c31c7c3457fc1ef352e35f7cb171be33',
        indexName: 'byconityio',
        contextualSearch: true,
        searchPagePath: 'search',
      },
    }),
};

module.exports = config;
