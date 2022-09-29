<template>
  <div class="app-content content">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row"></div>
      <div class="content-body">
        <div class="auth-wrapper auth-cover">
          <div class="auth-inner row m-0">
            <!-- Brand logo-->
            <a href="/" class="brand-logo">
              <img
                height="40"
                src="/images/senegal.png"
                alt="logo dpts"
                srcset=""
              />
              <h2 class="brand-text text-primary ms-1">DPTS</h2>
            </a>
            <!-- /Brand logo-->
            <!-- Left Text-->
            <div class="d-none d-lg-flex col-lg-8 align-items-center p-5">
              <div
                class="w-100 d-lg-flex align-items-center justify-content-center px-5"
              >
                <img
                  class="img-fluid"
                  src="/images/pages/login-v2-dark.svg"
                  alt="Login V2"
                />
              </div>
            </div>
            <!-- /Left Text-->
            <Nuxt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthComponent',
  head() {
    return {
      title: 'Se connecter | DPTS',
      meta: [{ name: 'description', content: 'Page connextion' }],
      htmlAttrs: {
        lang: 'fr',
        class: 'loading',
        'data-textdirection': 'ltr',
      },
      bodyAttrs: {
        class:
          'horizontal-layout horizontal-menu blank-page navbar-floating footer-static',
        'data-open': 'hover',
        'data-menu': 'horizontal-menu',
        'data-col': 'blank-page',
      },
      link: [
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: '/css/plugins/forms/form-validation.css',
        },
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: '/css/pages/authentication.css',
        },
      ],
      script: [{ src: '/js/scripts/pages/auth-login.js', defer: true }],
    }
  },
  mounted() {
    if (window.feather) {
      window.feather.replace({ width: 14, height: 14 })
    }
  },
}
</script>
