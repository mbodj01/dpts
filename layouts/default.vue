<template>
  <div>
    <Nav />
    <!-- BEGIN: Main Menu-->
    <div class="horizontal-menu-wrapper">
      <div
        class="header-navbar navbar-expand-sm navbar navbar-horizontal floating-nav navbar-dark navbar-shadow menu-border container-xxl"
        role="navigation"
        data-menu="menu-wrapper"
        data-menu-type="floating-nav"
      >
        <div class="navbar-header">
          <ul class="nav navbar-nav flex-row">
            <li class="nav-item me-auto">
              <a class="navbar-brand" href="/">
                <span class="brand-logo">
                  <img src="/images/senegal.png" alt="logo dpts" srcset="" />
                </span>
                <h2 class="brand-text mb-0">DPTS</h2>
              </a>
            </li>
            <li class="nav-item nav-toggle">
              <a
                class="nav-link modern-nav-toggle pe-0"
                data-bs-toggle="collapse"
                ><i
                  class="d-block d-xl-none text-primary toggle-icon font-medium-4"
                  data-feather="x"
                ></i
              ></a>
            </li>
          </ul>
        </div>
        <div class="shadow-bottom"></div>
        <!-- Horizontal menu content-->
        <Menu />
      </div>
    </div>
    <!-- END: Main Menu-->

    <!-- BEGIN: Content-->
    <div class="app-content content">
      <div class="content-overlay"></div>
      <div class="header-navbar-shadow"></div>
      <div class="content-wrapper container-xxl p-0">
        <Breadcrumb />
        <div class="content-body">
          <Nuxt />
        </div>
      </div>
    </div>
    <!-- END: Content-->
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  mounted() {
    if (window.feather) {
      window.feather.replace({ width: 14, height: 14 })
    }
  },
}
</script>

<style>
.__nuxt-error-page {
  position: relative;
}
</style>
