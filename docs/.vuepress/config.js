module.exports = {
    base: '/',
    title: 'Laravel Enso',
    description: 'Full featured Single Page Application boilerplate',
    plugins: {
        '@vuepress/google-analytics': {
            'ga': 'UA-102265111-1'
        }
    },
    head: [
        ['link', { rel: 'icon', href: `/enso.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    themeConfig: {
        repo: 'laravel-enso/documentation',
        docsDir: "docs",
        lastUpdated: true,
        editLinks: true,
        editLinkText: 'Edit this page on Github',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
            { text: "Guide", link: "/guide/" },
            { text: "Front End", link: "/frontend/" },
            { text: "Back End", link: "/backend/" },
        ],
        sidebar: {
            '/guide/': [{
                title: 'Guide',
                collapsable: false,
                children: [
                    '',
                    'getting-started',
                    'usage',
                    'development',
                    'under-the-hood',
                    'thanks',
                    'license'
                ]
            }],
            '/frontend/': [{
                title: 'Front End',
                collapsable: false,
                children: [
                    'accessories',
                    'bulma',
                    'card',
                    'charts',
                    'companies',
                    'confirmation',
                    'data-import',
                    'datepicker',
                    'directives',
                    'divider',
                    'dropdown',
                    'dropdown-indicator',
                    'filters',
                    'forms',
                    'loader',
                    'mixins',
                    'modal',
                    'money',
                    'progress-bar',
                    'progress-circle',
                    `scroll-to-top`,
                    `select`,
                    'switch',
                    'tables',
                    'tabs',
                    'themes',
                    'toastr',
                    'transitions',
                    'typeahead',
                    'ui',
                    'uploader',
                    'wysiwyg',
                ]
            }],
            '/backend/': [{
                title: 'Back End',
                collapsable: false,
                children: [
                    'action-logger',
                    'activity-log',
                    'avatars',
                    'addresses',
                    'charts',
                    'cli',
                    'comments',
                    'companies',
                    'core',
                    'currencies',
                    'data-export',
                    'data-import',
                    'discussions',
                    'documents',
                    'dynamic-methods',
                    'excel',
                    'emails',
                    'enums',
                    'files',
                    'forms',
                    'helpers',
                    'history-tracker',
                    'how-to',
                    'impersonate',
                    'io',
                    'localisation',
                    'logs',
                    'migrator',
                    'menus',
                    'multitenancy',
                    'notifications',
                    'pdf',
                    'people',
                    'permissions',
                    'products',
                    'rememberable',
                    'roles',
                    'searchable',
                    'select',
                    'services',
                    'tables',
                    'teams',
                    'track-who',
                    'tutorials',
                    'versioning',
                    'versions'
                ]
            }],
        }
    }
};
