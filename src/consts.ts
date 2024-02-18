// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Astro Blog";
export const SITE_DESCRIPTION = "Welcome to my website!";
export const SITE_COLOR = "#4f46e5";
export const ALL_LOCALES = ["ru", "en"];
export const TOP_MENU_ITEMS = [
  { text: "Блог", path: "/blog", locales: ALL_LOCALES },
  { text: "Проекты", path: "/projects", locales: ALL_LOCALES },
  { text: "Обо мне", path: "/about", locales: ALL_LOCALES },
  { text: "Контакты", path: "/contact", locales: ALL_LOCALES },
];

export const SOCIALS = [
  { alt: "github", iconUrl: "", href: "https://github.com/ymatuhin" },
  { alt: "telegram", iconUrl: "", href: "https://t.me/ymatuhin" },
  { alt: "email", iconUrl: "", href: "mailto:ym@ymatuhin.ru" },
  { alt: "rss", iconUrl: "", href: "/rss.xml" },
];

export const LANGUAGES = {
  ru: "Русский",
  uk: "Український",
  be: "Беларуская",
  kk: "Қазақ",
  en: "English",
  zh: "中国人", // китайский
  es: "Español", // испанский
  pt: "Português", // Portuguese
  fr: "Français", // French
  ja: "日本", // Japanese
  de: "Deutsch", // German
  pl: "Polski",
  ro: "Română",
};
