export default defineAppConfig({
  appName: "HR Folio",
  appDescription: "Hugo Richard Portfolio",
  profilePicture: "/assets/hugo-richard-light.webp",
  footerName: "HugoRCD",
  email: "contact@hrcd.fr",
  phone: "(+33) 6 21 56 22 18",
  socials: {
    github: "https://github.com/HugoRCD",
    twitter: "https://twitter.com/HugoRCD__",
    linkedin: "https://www.linkedin.com/in/hugo-richard-0801",
    instagram: "https://www.instagram.com/hugo.rcd_",
    spotify: "https://open.spotify.com/user/yuvl0zpp3bpx4hne1ag7huten?si=df7ee2777c0c4fc4",
  },
  ui: {
    primary: "emerald",
    gray: "zinc",
    notifications: {
      position: "top-0 bottom-auto",
    },
    notification: {
      progress: {
        base: "absolute bottom-0 end-0 start-0 h-0",
        background: "bg-transparent dark:bg-transparent",
      },
    },
    input: {
      variant: {
        none: "bg-gray-100 dark:bg-gray-900 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out",
      },
    },
    textarea: {
      variant: {
        none: "bg-gray-100 dark:bg-gray-900 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out",
      },
    },
  },
});
