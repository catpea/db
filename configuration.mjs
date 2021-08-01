export default {

  common: {
    author: "catpea <https://catpea.com>",
  },

  task: [
    {
      name: 'catpea.com',
      configuration: {
        // this will override settings for all dependencies in the task, changing the website name here will change it for all sub projects, be careful.
        // title: 'Cat Pea University: Home of Furkies Purrkies and Westland Warrior',
      },
      dependencies: [
        'westland-warrior',
        'furkies-purrkies'
      ]
    },
    {
      name: 'westland-warrior',
      configuration: {
        // this will override settings for all dependencies in the task, changing the website name here will change it for all sub projects, be careful.
        subdir: '/warrior', // (endir) hosted in a sub-directory. This will rewrite all html file paths.
      },
      dependencies: [
        'westland-warrior'
      ]
    },
  ],

  project: [
    {
      format: "v4",
      theme: 'default',
      name: "westland-warrior",

      website: 'Westland Warrior: A Path To Greatness', // title
      brand: 'Westland Warrior', // brand
      title: "Westland Warrior",
      subtitle: "A Path To Greatness",
      description: "A small video book about the twisty little passages of growing up.",


      tagline: 'Growing All The Way Up, Until We Become Great Beings',
      // alert: 'I upgraded the website, I think I fixed all the bugs now, all should work now.',
      icon: "collection-play",
      order: "latest",

      links: [
        {
          name: "Source Code",
          icon: "link-45deg",
          href: "https://github.com/catpea/westland-warrior",
        },
        // {
        //   name: "Mirror",
        //   icon: "link-45deg",
        //   href: "https://westland-valhalla.github.io/warrior/",
        // },
        {
          name: "Bugs",
          icon: "link-45deg",
          href: "https://github.com/catpea/westland-warrior/issues",
        },
      ],

      network: [
        {
          name: "Cat Pea",
          icon: "link-45deg",
          href: "https://catpea.com",
        },
      ],

      templates: { // first one is the default one.
        yaml: 'templates/westland-warrior-yaml',
      },

      transformers: [
        { name: "ensureDirs", options: {} },
        { name: "verifyIntegrity", options: {} },
        { name: "initializeRecord", options: {} },
        { name: "processYaml", options: {} },
        { name: "processMd", options: {} },
        { name: "processHtml", options: {} },
        { name: "ensureBootstrap", options: {} },
        { name: "ensurePrint", options: {} },
        { name: "ensureText", options: {} },
        { name: "ensureImages", options: {} },
        { name: "ensureLinks", options: {} },
        { name: 'validateRecordSchema', options: {} },
        { name: "saveRecord", options: {} },
        { name: "verifyCacheIntegrity", options: {} },
        { name: "downloadYoutubeThumbnails", options: {} },
        { name: "createCoverFromThumbnails", options: {} },
        { name: "resizeCoverImages", options: {} },
        { name: "verifyPresenceOfImages", options: {} },
      ],

      generators: [
        { name: 'validateSoSchema', options:{} },
        { name: 'copyAttachments', options:{} },
        { name: "copyLocalLinks", options: {} },
        { name: "copyImages", options: {} },
        { name: "copyNarrations", options: {} },
        { name: "createMirror", options: {} },
        { name: "createWebsite", options: {} },
        { name: "rewritePaths", options: {} },
        // { name: 'verifyWebsite', options:{} },
      ],

      // list of projects required by this project, these will be built first.
      dependencies: [],

      // Objects to use for website
      objects: ["dist/westland-warrior/westland-warrior.json"],

      // Website mountpoints
      mounts: [
        { directory: "dist/westland-warrior/image", mountpoint: "/image" },
        { directory: "dist/westland-warrior/audio", mountpoint: "/audio" },
      ],
    },

    {
      format: "v4",
      theme: 'default',
      name: "furkies-purrkies",
      title: "Furkies Purrkies",

      brand: 'Cat Pea University',
      website: 'Cat Pea University: Home of Furkies Purrkies and Westland Warrior',
      subtitle: "Anthology of Inspirational Rhyme",
      description: "Just another dang old Audio Book about wisdom and growing up.",

      tagline: 'Home of Furkies Purrkies and Westland Warrior',
      alert: `Possible hosting disruptions/delays ahead, <a href="http://catpea.com">catpea.com</a> will always be the most reliable way to access the site. However, the site is now at 5.2GB (from a generic/uncompressed perspective), that is probably/possibly 200MB over github recommendations (and the way they measure things), there maybe publishing delays or disruptions. To resolve this issue I am testing a new hosting company netlify. Here is a temporary test address that may have more recent publications: <a href="https://catpea.netlify.app/">https://catpea.netlify.app/</a> Please note that the YouTube channel has thus far been a reliable source of most recent audio poetry: <a href="https://www.youtube.com/channel/UC6Og8hy_iEgZutvp0SQmNzQ">Cat Pea University on YouTube</a> If netlify works out then I'll point catpea.com to it instead of github, and update this message.`,
      icon: "earbuds",
      order: "latest",

      // Social Network Links For Website Plugin
      links: [
        
        {
          name: "Netlify Mirror",
          icon: "link-45deg",
          href: "https://catpea.netlify.app/",
        },
        {
          name: "Vercel Mirror",
          icon: "link-45deg",
          href: "https://catpea.vercel.app/",
        },
        {
          name: "Render Mirror",
          icon: "link-45deg",
          href: "https://catpea.onrender.com/",
        },
        {
          name: "Cloudflare Mirror",
          icon: "link-45deg",
          href: "https://catpea.pages.dev/",
        },
        {
          name: "YouTube Version",
          icon: "link-45deg",
          href: "https://www.youtube.com/playlist?list=PLOo-pqnffyOqsK6hf5tFwMqzvhogksrgW",
        },

        {
          name: "Github Source Code",
          icon: "link-45deg",
          href: "https://github.com/catpea/furkies-purrkies",
        },

        {
          name: "Bugs",
          icon: "link-45deg",
          href: "https://github.com/catpea/furkies-purrkies/issues",
        },
      ],

      network: [
        {
          name: 'Urban Dictionary',
          icon: 'link-45deg',
          href: 'https://www.urbandictionary.com/author.php?author=Cat%20Pea',
        },

        {
          name: 'Wayback Machine',
          icon: 'link-45deg',
          href: 'https://web.archive.org/web/*/catpea.com',
        },

        {
          name: 'Dribbble',
          icon: 'link-45deg',
          href: 'https://dribbble.com/catpea',
        },

        {
          name: 'GitLab',
          icon: 'link-45deg',
          href: 'https://gitlab.com/catpea',
        },

        {
          name: 'NPM',
          icon: 'link-45deg',
          href: 'https://www.npmjs.com/~catpea',
        },

        {
          name: 'GitHub',
          icon: 'link-45deg',
          href: 'https://github.com/catpea',
        },

      ],

      templates: { // first one is the default one.
        md: 'templates/furkies-purrkies-md',
        html: 'templates/furkies-purrkies-html',
      },

      transformers: [
        { name: "ensureDirs", options: {} },
        { name: "verifyIntegrity", options: {} },
        { name: "initializeRecord", options: {} },
        { name: "processYaml", options: {} },
        { name: "processMd", options: {} },
        { name: "processHtml", options: {} },
        { name: "ensureBootstrap", options: {} },
        { name: "ensurePrint", options: {} },
        { name: "ensureText", options: {} },
        { name: "ensureImages", options: {} },
        { name: "ensureLinks", options: {} },
        { name: 'validateRecordSchema', options: {} },
        { name: "saveRecord", options: {} },
        { name: "verifyCacheIntegrity", options: {} },
        { name: "downloadYoutubeThumbnails", options: {} },
        { name: "createCoverFromThumbnails", options: {} },
        { name: "resizeCoverImages", options: {} },
        { name: "verifyPresenceOfImages", options: {} },
      ],

      generators: [
        { name: 'validateSoSchema', options:{} },
        { name: 'copyAttachments', options:{} },
        { name: "copyLocalLinks", options: {} },
        { name: "copyImages", options: {} },
        { name: "copyNarrations", options: {} },
        { name: "createMirror", options: {} },
        { name: "createWebsite", options: {} },
        // { name: 'verifyWebsite', options:{} },
      ],

      // list of projects required by this project, these will be built first.
      dependencies: [
        "westland-warrior"
      ],

      // Objects to use for website
      objects: [
        "dist/westland-warrior/westland-warrior.json",
        "dist/furkies-purrkies/furkies-purrkies.json",
      ],

      // Website mountpoints
      mounts: [
        { directory: "dist/westland-warrior/image", mountpoint: "/image" },
        { directory: "dist/westland-warrior/audio", mountpoint: "/audio" },
        { directory: "dist/furkies-purrkies/image", mountpoint: "/image" },
        { directory: "dist/furkies-purrkies/audio", mountpoint: "/audio" },
      ],

    },
  ],
};
