// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about-me",
    title: "About Me🌟",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications📝",
          description: "( * Indicates Equal contributions.)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-our-paper-metasapiens-accepted-to-asplos-2025",
          title: 'Our paper, Metasapiens, accepted to ASPLOS 2025.',
          description: "",
          section: "News",},{id: "news-our-paper-privateeye-accepted-to-wacv-2025",
          title: 'Our paper, PrivateEye, accepted to WACV 2025.',
          description: "",
          section: "News",},{id: "news-our-paper-on-streaming-3dgs-accepted-to-hotmobile-2025",
          title: 'Our paper on streaming 3DGS accepted to HotMobile 2025.',
          description: "",
          section: "News",},{id: "news-our-paper-streamgrid-accepted-to-asplos-2025",
          title: 'Our paper, StreamGrid, accepted to ASPLOS 2025.',
          description: "",
          section: "News",},{id: "news-awarded-the-openai-research-access-grant",
          title: 'Awarded the OpenAI Research Access Grant.',
          description: "",
          section: "News",},{id: "news-our-paper-snappix-accepted-to-dac-2025",
          title: 'Our paper, SnapPix, accepted to DAC 2025.',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
