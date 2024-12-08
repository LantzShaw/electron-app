(参考文章)[https://dev.to/bellatrick/how-to-use-electronjs-for-building-desktop-applications-with-javascript-html-and-css-4kpn]

```bash
src
├── main
│   ├── factories
│   │   ├── app
│   │   │   ├── index.ts
│   │   │   ├── instance.ts
│   │   │   └── setup.ts
│   │   ├── index.ts
│   │   ├── ipcs
│   │   │   └── register-window-creation.ts
│   │   └── windows
│   │       └── create.ts
│   ├── index.ts
│   └── windows
│       ├── About
│       │   ├── index.ts
│       │   └── ipcs
│       │       ├── index.ts
│       │       └── register-window-creation.ts
│       ├── Main
│       │   └── index.ts
│       └── index.ts
├── preload
│   ├── index.ts
│   └── ipcs
│       ├── index.ts
│       └── windows
│           ├── about
│           │   ├── create.ts
│           │   └── when-close.ts
│           └── index.ts
├── renderer
│   ├── components
│   │   ├── Button
│   │   │   ├── index.tsx
│   │   │   └── styles.module.sass
│   │   ├── Container
│   │   │   ├── index.tsx
│   │   │   └── styles.module.sass
│   │   ├── Heading
│   │   │   ├── index.tsx
│   │   │   └── styles.module.sass
│   │   └── index.ts
│   ├── index.html
│   ├── index.tsx
│   ├── routes.tsx
│   ├── screens
│   │   ├── About
│   │   │   ├── index.tsx
│   │   │   └── styles.module.sass
│   │   ├── Another
│   │   │   └── index.tsx
│   │   ├── Main
│   │   │   └── index.tsx
│   │   └── index.ts
│   └── store
│       └── index.tsx
├── resources
│   ├── build
│   │   └── icons
│   │       ├── icon.icns
│   │       └── icon.ico
│   ├── public
│   │   └── illustration.svg
│   └── styles
│       ├── animations.sass
│       ├── globals.sass
│       └── resets.sass
└── shared
    ├── constants
    │   ├── environment.ts
    │   ├── index.ts
    │   ├── ipc.ts
    │   └── platform.ts
    ├── index.ts
    ├── types
    │   └── index.ts
    └── utils
        └── index.ts
```