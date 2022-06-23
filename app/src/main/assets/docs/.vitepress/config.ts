import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Belajar Pemrograman",
  lang: "id",
  base: "/assets/docs/.vitepress/dist/",
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern:
        "https://github.com/mzaini30/belajar-pemrograman-offline/tree/master/app/src/main/assets/docs/:path",
      text: "Edit halaman ini",
    },
    nav: [
      {
        text: "Review aplikasi",
        link: "https://play.google.com/store/apps/details?id=com.mzaini30.belajarpemrogramanoffline",
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/mzaini30/belajar-pemrograman-offline",
      },
    ],
    sidebar: [
      {
        text: "Beranda",
        items: [{ text: "Permulaan", link: "/index.html" }],
      },
      {
        text: "Text Editor",
        collapsible: true,
        items: [
          {
            text: "Memilih Text Editor",
            link: "/text-editor/memilih",
          },
        ],
      },
      {
        text: "JavaScript",
        collapsible: true,
        items: [
          {
            text: "Variabel",
            link: "/javascript/variabel",
          },
          {text: 'Fungsi', link: '/javascript/fungsi'}
        ],
      },
      {
        text: 'TypeScript',
        collapsible: true,
        items: [
          {text: 'Apa Itu?', link: '/typescript/apaItu'}
        ]
      }
    ],
  },
});
