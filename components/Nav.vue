<template>
  <!-- BEGIN: Header-->
  <nav
    class="header-navbar navbar-expand-lg navbar navbar-fixed align-items-center navbar-shadow navbar-brand-center"
    data-nav="brand-center"
  >
    <div class="navbar-header d-xl-block d-none">
      <ul class="nav navbar-nav">
        <li class="nav-item">
          <a class="navbar-brand" href="/">
            <span class="brand-logo">
              <img src="/images/senegal.png" alt="logo dpts" srcset="" />
            </span>
            <h2 class="brand-text mb-0">DPTS</h2>
          </a>
        </li>
      </ul>
    </div>
    <div class="navbar-container d-flex content">
      <div class="bookmark-wrapper d-flex align-items-center">
        <ul class="nav navbar-nav d-xl-none">
          <li class="nav-item">
            <a class="nav-link menu-toggle" href="table-datatable-basic.html#"
              ><i class="ficon" data-feather="menu"></i
            ></a>
          </li>
        </ul>
      </div>
      <ul class="nav navbar-nav align-items-center ms-auto">
        <li class="nav-item dropdown dropdown-user">
          <a
            id="dropdown-user"
            class="nav-link dropdown-toggle dropdown-user-link"
            href="table-datatable-advanced.html#"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div class="user-nav d-sm-flex d-none">
              <span class="user-name fw-bolder">
                {{ $auth.user?.prenom }} {{ $auth.user?.nom }}
              </span>
              <span class="user-status">Admin</span>
            </div>
            <span class="avatar"
              ><img
                class="round"
                src="/images/userdpts.png"
                alt="avatar"
                height="40"
                width="40" /><span class="avatar-status-online"></span
            ></span>
          </a>
          <div
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="dropdown-user"
          >
            <a class="dropdown-item" href="#" @click="logout">
              <i class="me-50" data-feather="power"></i> Se deconnecter
            </a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
  <!-- END: Header-->
</template>
<script>
export default {
  name: 'NavComponant',
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/login')
    },
  },
}
</script>
