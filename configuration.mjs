export default {
  common: {
    author: "catpea <https://catpea.com>",
  },

  task: [
    {
      name: 'catpea.com',
      configuration: {
        website: 'Cat Pea University',
        tagline: 'Home of Furkies Purrkies and Westland Warrior',
      },
      dependencies: [
        'westland-warrior',
        'furkies-purrkies'
      ]
    },
    {
      name: 'westland-warrior',
      configuration: {
        website: 'Westland Warrior',
        tagline: 'Growing All The Way Up, Until We Become Great Beings',
      },
      dependencies: [
        'westland-warrior'
      ]
    },
  ],

  project: [
    {
      format: "v4",
      name: "westland-warrior",
      title: "Westland Warrior",
      subtitle: "A Path To Greatness",
      description: "A small video book about the twisty little passages of growing up.",
      icon: "collection-play",
      order: "latest",

      links: [
        {
          name: "Source Code",
          icon: "link-45deg",
          href: "https://github.com/westland-valhalla/warrior",
        },
        {
          name: "Mirror",
          icon: "link-45deg",
          href: "https://westland-valhalla.github.io/warrior/",
        },
        {
          name: "Bugs",
          icon: "link-45deg",
          href: "https://github.com/westland-valhalla/warrior/issues",
        },
      ],

      network: [
        {
          name: "Cat Pea",
          icon: "link-45deg",
          href: "https://catpea.com",
        },
      ],

      templates: {
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
      name: "furkies-purrkies",
      title: "Furkies Purrkies",
      subtitle: "Anthology of Inspirational Rhyme",
      description: "Just another dang old Audio Book about wisdom and growing up.",
      icon: "earbuds",
      order: "latest",

      // Social Network Links For Website Plugin
      links: [
        {
          name: "Source Code",
          icon: "link-45deg",
          href: "https://github.com/catpea/poetry",
        },
        {
          name: "Mirror",
          icon: "link-45deg",
          href: "https://catpea.github.io/poetry/",
        },
        {
          name: "Bugs",
          icon: "link-45deg",
          href: "https://github.com/catpea/poetry/issues",
        },
        {
          name: "YouTube",
          icon: "link-45deg",
          href: "https://www.youtube.com/playlist?list=PLOo-pqnffyOqsK6hf5tFwMqzvhogksrgW",
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
          name: 'GitHub',
          icon: 'link-45deg',
          href: 'https://github.com/catpea',
        },
      ],

      templates: {
        html: 'templates/furkies-purrkies-html',
        md: 'templates/furkies-purrkies-md'
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
