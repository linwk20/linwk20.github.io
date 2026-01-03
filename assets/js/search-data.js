// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about-me",
    title: "About Me 🌟",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications📝",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog-️",
          title: "Blog ✍️",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-why-rebuild-general-agents-introducing-pycursor-agent",
      
        title: "Why Rebuild General Agents? Introducing pycursor_agent",
      
      description: "Why rebuild general agents when Cursor already provides a capable one? I built `pycursor_agent` to invoke Cursor&#39;s agent directly from Python scripts and pipelines.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/introducing-pycursor-agent/";
        
      },
    },{id: "post-building-alphago-vs-mastering-go-the-ai-replacement-boundary",
      
        title: "Building AlphaGo vs. Mastering Go: The AI Replacement Boundary",
      
      description: "Should we focus on mastering Go as human players, or step back and build AlphaGo? I&#39;m exploring the boundaries of AI replacement in daily work to avoid cultivating obsolete skills.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/building-alphago-vs-mastering-go/";
        
      },
    },{id: "post-hello-world",
      
        title: "Hello World",
      
      description: "First post on the new blog!",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/hello-world/";
        
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
          section: "News",},{id: "news-our-paper-lumina-accepted-to-isca-2025",
          title: 'Our paper, Lumina, accepted to ISCA 2025.',
          description: "",
          section: "News",},{id: "news-our-paper-metasapiens-received-asplos-25-best-paper-award",
          title: 'Our paper, Metasapiens, received ASPLOS’25 Best Paper Award.',
          description: "",
          section: "News",},{id: "news-our-paper-powergs-accepted-to-siggraph-asia-2025-see-you-in-hong-kong",
          title: 'Our paper, PowerGS, accepted to Siggraph Asia 2025. See you in Hong Kong....',
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
