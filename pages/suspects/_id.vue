<template>
  <div id="user-profile">
    <!-- profile header -->
    <div class="row">
      <div class="col-12">
        <div class="card profile-header mb-2">
          <!-- profile cover photo -->
          <img
            class="card-img-top"
            src="/images/profile/user-uploads/timeline.jpg"
            alt="User Profile Image"
          />
          <!--/ profile cover photo -->

          <div class="position-relative">
            <!-- profile picture -->
            <div class="profile-img-container d-flex align-items-center">
              <div class="profile-img">
                <img
                  src="/images/portrait/small/avatar-s-2.jpg"
                  class="rounded img-fluid"
                  alt="Card image"
                />
              </div>
              <!-- profile title -->
              <div class="profile-title ms-3">
                <h2 class="text-white">Kitty Allanson</h2>
                <p class="text-white">UI/UX Designer</p>
              </div>
            </div>
          </div>

          <!-- tabs pill -->
          <div class="profile-header-nav">
            <!-- navbar -->
            <nav
              class="navbar navbar-expand-md navbar-light justify-content-end justify-content-md-between w-100"
            >
              <button
                class="btn btn-icon navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i data-feather="align-justify" class="font-medium-5"></i>
              </button>

              <!-- collapse  -->
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div
                  class="profile-tabs d-flex justify-content-between flex-wrap mt-1 mt-md-0"
                >
                  <ul class="nav nav-pills mb-0">
                    <li class="nav-item">
                      <a
                        class="nav-link fw-bold active"
                        href="page-profile.html#"
                      >
                        <span class="d-none d-md-block">Feed</span>
                        <i data-feather="rss" class="d-block d-md-none"></i>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link fw-bold" href="page-profile.html#">
                        <span class="d-none d-md-block">About</span>
                        <i data-feather="info" class="d-block d-md-none"></i>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link fw-bold" href="page-profile.html#">
                        <span class="d-none d-md-block">Photos</span>
                        <i data-feather="image" class="d-block d-md-none"></i>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link fw-bold" href="page-profile.html#">
                        <span class="d-none d-md-block">Friends</span>
                        <i data-feather="users" class="d-block d-md-none"></i>
                      </a>
                    </li>
                  </ul>
                  <!-- edit button -->
                  <button class="btn btn-primary">
                    <i data-feather="edit" class="d-block d-md-none"></i>
                    <span class="fw-bold d-none d-md-block">Edit</span>
                  </button>
                </div>
              </div>
              <!--/ collapse  -->
            </nav>
            <!--/ navbar -->
          </div>
        </div>
      </div>
    </div>
    <!--/ profile header -->
  </div>
</template>
<script>
export default {
  head() {
    return {
      htmlAttrs: {
        lang: 'fr',
        class: 'loading',
        'data-textdirection': 'ltr',
      },
      bodyAttrs: {
        class:
          'horizontal-layout horizontal-menu  navbar-floating footer-static',
        'data-open': 'hover',
        'data-menu': 'horizontal-menu',
        'data-col': '',
      },
      link: [
        {
          rel: 'stylesheet',
          href: '/css/pages/page-profile.min.css',
        },
      ],
      script: [
        {
          src: '/js/scripts/pages/page-profile.min.js',
          defer: true,
        },
      ],
    }
  },
  mounted() {
    console.log('ok ==>')
    if (window.feather) {
      window.feather.replace({ width: 14, height: 14 })
    }
  },
}
</script>
