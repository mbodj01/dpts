<template>
  <div class="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
    <div class="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
      <h2 class="card-title fw-bold mb-1">Bienvenu à la DPTS! 👋</h2>
      <!-- <p class="card-text mb-2">
        Please sign-in to your account and start the adventure
      </p> -->
      <form class="auth-login-form mt-2" action="#" method="POST">
        <div class="mb-1">
          <label class="form-label" for="login-email">Email</label>
          <input
            id="login-email"
            class="form-control"
            type="text"
            name="login-email"
            placeholder="john@example.com"
            aria-describedby="login-email"
            autofocus=""
            tabindex="1"
          />
        </div>
        <div class="mb-1">
          <div class="d-flex justify-content-between">
            <label class="form-label" for="login-password">Password</label>
            <a href="auth-forgot-password-cover.html">
              <small>Forgot Password?</small>
            </a>
          </div>
          <div class="input-group input-group-merge form-password-toggle">
            <input
              id="login-password"
              class="form-control form-control-merge"
              type="password"
              name="login-password"
              placeholder="············"
              aria-describedby="login-password"
              tabindex="2"
            />
            <span class="input-group-text cursor-pointer">
              <i data-feather="eye"></i>
            </span>
          </div>
        </div>
        <div class="mb-1">
          <div class="form-check">
            <input
              id="remember-me"
              class="form-check-input"
              type="checkbox"
              tabindex="3"
            />
            <label class="form-check-label" for="remember-me">
              Remember Me</label
            >
          </div>
        </div>
        <button class="btn btn-primary w-100" tabindex="4">Sign in</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
}
</script>
