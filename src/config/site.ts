export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Anzar",
  description: "Description of the website",
  mainNav: [
    {
      title: "Home",
      href: "/home",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
  links: {
    twitter: "https://twitter.com",
    github: "https://github.com",
  },
}
