// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about-me",
    title: "🌟 About Me",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "🔬 Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "📝 Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-experience",
          title: "💼 Experience",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/experience/";
          },
        },{id: "nav-️-blog",
          title: "✍️ Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-re-reading-the-bitter-lesson",
      
        title: "Re-reading The Bitter Lesson",
      
      description: "Sutton&#39;s Bitter Lesson has already been proved by the LLM moment. Now the same wave is reaching CV and CG. We should design for scalability, not for clever human priors.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/re-reading-the-bitter-lesson/";
        
      },
    },{id: "post-embrace-ai-like-notion-does",
      
        title: "Embrace AI, Like Notion Does",
      
      description: "Intelligence is becoming infinite. Notion&#39;s CEO saw it first — and Notion is already building for it.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/embrace-ai-like-notion/";
        
      },
    },{id: "post-building-alphago-vs-mastering-go-the-ai-replacement-boundary",
      
        title: "Building AlphaGo vs. Mastering Go: The AI Replacement Boundary",
      
      description: "Should we focus on mastering Go as human players, or step back and build AlphaGo? I&#39;m exploring the boundaries of AI replacement in daily work to avoid cultivating obsolete skills.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/building-alphago-vs-mastering-go/";
        
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
          section: "News",},{id: "news-one-paper-accepted-to-cvpr-2026",
          title: 'One paper accepted to CVPR 2026.',
          description: "",
          section: "News",},{id: "news-one-paper-accepted-to-dac-2026",
          title: 'One paper accepted to DAC 2026.',
          description: "",
          section: "News",},{id: "news-one-paper-selected-as-cvpr-2026-highlight",
          title: 'One paper selected as CVPR 2026 Highlight.',
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
