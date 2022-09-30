<template>
    <!-- Basic Inputs start -->
    <section id="basic-input">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <form
                action="#"
                class="needs-validation"
                novalidate
                @submit.prevent="handleForm"
              >
                <div class="row">
                  <div class="col-6">
                    <div class="mb-1">
                      <label class="form-label" for="libelle">Libelle</label>
                      <input
                        id="libelle"
                        v-model="payload.libelle"
                        required
                        type="text"
                        class="form-control"
                        placeholder="Enter un nouveau libelle"
                      />
                      <div v-if="error.libelle" class="invalid-feedback">
                        {{ error.libelle[0] }}
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary">
                    {{ editId ? 'Modifier' : 'Soumettre' }}
                  </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Basic Inputs end -->
  </template>
  
  <script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'FormServices',
    middleware: 'auth',
    data() {
      return {
        payload: {},
        error: {},
        editId: false,
      }
    },
    head() {
      return {
        link: [
          {
            rel: 'stylesheet',
            href: '/vendors/css/pickers/pickadate/pickadate.css',
          },
          {
            rel: 'stylesheet',
            href: '/vendors/css/pickers/flatpickr/flatpickr.min.css',
          },
          {
            rel: 'stylesheet',
            href: 'https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/css-rtl/plugins/forms/pickers/form-flat-pickr.min.css',
          },
          {
            rel: 'stylesheet',
            href: 'https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/css-rtl/plugins/forms/pickers/form-pickadate.min.css',
          },
          {
            rel: 'stylesheet',
            href: '/css/plugins/forms/form-validation.css',
          },
        ],
        script: [
          {
            src: '/vendors/js/pickers/pickadate/picker.js',
            defer: true,
          },
          {
            src: '/vendors/js/pickers/pickadate/picker.date.js',
            defer: true,
          },
          {
            src: '/vendors/js/pickers/pickadate/picker.time.js',
            defer: true,
          },
          {
            src: '/vendors/js/pickers/pickadate/legacy.js',
            defer: true,
          },
          {
            src: '/js/scripts/forms/pickers/form-pickers.min.js',
            defer: true,
          },
          {
            src: '/js/scripts/forms/form-validation.js',
            defer: true,
          },
        ],
      }
    },
    computed: {},
    async mounted() {
      this.editId = this.$route.query.id
      if (this.editId) {
        await this.getService()
      }
      this.payload.user_id = this.$auth.user.id
      this.setBreadcrumbs({
        title: 'Services',
        options: [
          {
            title: 'Accueil',
            url: '/',
          },
          {
            title: 'Services',
            url: '/admin/services',
          },
          {
            title: this.editId
              ? "Formulaire d'edition"
              : 'Formulaire de création',
          },
        ],
      })
    },
    methods: {
      ...mapMutations({
        setBreadcrumbs: 'setBreadcrumbs',
      }),
      async handleForm() {
        try {
          if (this.editId) {
            await this.$axios.$put(`/service/update/${this.editId}`, {
              ...this.payload,
            })
          } else {
            await this.$axios.$post('/service/create', {
              ...this.payload,
            })
          }
          this.$router.push('/admin/services')
        } catch ({ response }) {
          this.error = response.data
        }
      },
      async getService() {
        try {
          this.payload = await this.$axios.$get(`/service/show/${this.editId}`)
        } catch ({ response }) {
          this.error = response.data
        }
      },
    },
  }
  </script>
  