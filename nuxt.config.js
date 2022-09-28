export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        htmlAttrs: {
            lang: 'fr',
            class: 'loading',
            'data-textdirection': 'ltr',
        },
        bodyAttrs: {
            class: 'horizontal-layout horizontal-menu  navbar-floating footer-static',
            'data-open': 'hover',
            'data-menu': 'horizontal-menu',
            'data-col': 'blank-page',
        },
        title: 'DPTS',
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
            { title: 'DPTS' },
        ],
        script: [
            { src: '/vendors/js/vendors.min.js', defer: true },
            { src: '/vendors/js/ui/jquery.sticky.js', defer: true },
            { src: '/vendors/js/forms/validation/jquery.validate.min.js', defer: true },
            { src: '/js/core/app-menu.min.js', defer: true },
            { src: '/js/core/app.min.js', defer: true },

            // page accueil
            {
                src: '/vendors/js/tables/datatable/jquery.dataTables.min.js',
                defer: true,
            },
            {
                src: '/vendors/js/tables/datatable/dataTables.bootstrap5.min.js',
                defer: true,
            },
            {
                src: '/vendors/js/tables/datatable/dataTables.responsive.min.js',
                defer: true,
            },
            {
                src: '/vendors/js/tables/datatable/responsive.bootstrap5.js',
                defer: true,
            },
            { src: '/vendors/js/pickers/flatpickr/flatpickr.min.js', defer: true },
        ],
        link: [
            { rel: 'shortcut icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600',
            },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: '/vendors/css/vendors.min.css',
            },
            { rel: 'stylesheet', type: 'text/css', href: '/css/bootstrap.min.css' },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: '/css/bootstrap-extended.min.css',
            },
            { rel: 'stylesheet', type: 'text/css', href: '/css/colors.min.css' },
            { rel: 'stylesheet', type: 'text/css', href: '/css/components.min.css' },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: '/css/themes/bordered-layout.min.css',
            },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: '/css/core/menu/menu-types/horizontal-menu.min.css',
            },

            // page accueil
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: '/vendors/css/tables/datatable/dataTables.bootstrap5.min.css',
            },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: '/vendors/css/tables/datatable/responsive.bootstrap5.min.css',
            },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: '/vendors/css/pickers/flatpickr/flatpickr.min.css',
            },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: '/css/plugins/forms/pickers/form-flat-pickr.min.css',
            },
        ],
        // please note that this is an area that is likely to change
        style: [
            // <style type="text/css">:root { color: red }</style>
            // { children: ':root { color: red }', type: 'text/css' }
        ],
        noscript: [
            // <noscript>Javascript is required</noscript>
            { children: 'Javascript is required' },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxtjs/auth-next', '@nuxtjs/axios'],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: process.env.BASE_API_URL,
    },

    auth: {
        strategies: {
            local: {
                token: {
                    property: 'access_token',
                    global: true,
                },
                user: {
                    property: '',
                },
                endpoints: {
                    login: {
                        url: process.env.BASE_API_URL + '/login',
                        method: 'post',
                    },
                    logout: {
                        url: process.env.BASE_API_URL + '/logout',
                        method: 'post',
                    },
                    user: { url: process.env.BASE_API_URL + '/me', method: 'get' },
                },
            },
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}