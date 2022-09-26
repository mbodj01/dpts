<template>
  <div class="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
    <div class="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
      <h2 class="card-title fw-bold mb-1">Bienvenu à la DPTS! 👋</h2>
      <!-- <p class="card-text mb-2">
        Please sign-in to your account and start the adventure
      </p> -->
      <form
        class="auth-login-form mt-2"
        action="#"
        method="POST"
        @submit.prevent="userLogin"
      >
        <div class="mb-1">
          <label class="form-label" for="login-email">Email</label>
          <input
            id="login-email"
            v-model="login.email"
            class="form-control"
            type="text"
            name="login-email"
            placeholder="admin@example.com"
            aria-describedby="login-email"
            autofocus=""
            tabindex="1"
          />
        </div>
        <div class="mb-1">
          <div class="d-flex justify-content-between">
            <label class="form-label" for="login-password">Mot de passe</label>
          </div>
          <div class="input-group input-group-merge form-password-toggle">
            <input
              id="login-password"
              v-model="login.password"
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
        <div v-if="login.error" class="alert alert-danger" role="alert">
          <div class="alert-body">
            {{ login.error }}
          </div>
        </div>
        <button class="btn btn-primary w-100" tabindex="4">Se connecter</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      loadingForm: false,
      login: {
        email: '',
        password: '',
        error: null,
      },
    }
  },
  methods: {
    async userLogin() {
      try {
        this.loadingForm = true
        await this.$auth.loginWith('local', {
          data: this.login,
        })

        this.$router.push('/profil')
      } catch (err) {
        this.login.error = 'Login ou mot de passe incorrect.'
        if (err && typeof err.response === 'string') {
          this.login.error = err.response
        }
      }
      this.loadingForm = false
    },
  },
}
</script>
