// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Apollo Docs",
  tagline: "Open-source Machine Learning validation.",
  favicon: "img/docusaurus.png",

  // Set the production url of your site here
  url: "https://docs.apolloapi.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Apollo API", // Usually your GitHub org/user name.
  projectName: "Apollo", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/apolloapi",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/social-image.png",
      navbar: {
        title: "Apollo",
        logo: {
          alt: "Apollo Logo",
          src: "img/docusaurus.png",
        },
        items: [
          {
            href: "https://github.com/apolloapi/apolloapi/",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://apolloapi.io",
            label: "Website",
            position: "right",
          },
          {
            href: "https://discord.gg/ZUH7f7AzUY",
            label: "Discord",
            position: "right",
          },
          { to: "/docs/intro/", label: "Docs", position: "left" },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "SDK Guide",
                to: "/docs/intro",
              },
              {
                label: "Platform Guide",
                to: "/docs/intro",
              },
              {
                label: "Feature Details",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/JakFUDmCke",
              },
              {
                label: "Linkedin",
                href: "https://linkedin.com/company/apolloapi",
              },
              {
                label: "Newsletter",
                href: "https://www.thebriefnewsletter.com",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/apolloapi",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Apollo API, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
