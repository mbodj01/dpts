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
              <div v-if="error" class="row">
                <div class="alert alert-danger" role="alert">
                  <div class="alert-body">
                    <ul>
                      <li v-for="(err, i) in error" :key="i">
                        {{ err[0] }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="mb-1">
                    <label class="form-label" for="prenom">Prénom *</label>
                    <input
                      id="prenom"
                      v-model="payload.prenom"
                      required
                      type="text"
                      class="form-control"
                      placeholder="Enter le prenom"
                    />
                    <div v-if="error?.prenom" class="invalid-feedback">
                      {{ error?.prenom[0] }}
                    </div>
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="nom">Nom *</label>
                    <input
                      id="nom"
                      v-model="payload.nom"
                      required
                      type="text"
                      class="form-control"
                      placeholder="Enter le nom"
                    />
                    <div v-if="error?.nom" class="invalid-feedback">
                      {{ error?.nom[0] }}
                    </div>
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="email">Email *</label>
                    <input
                      id="email"
                      v-model="payload.email"
                      required
                      type="text"
                      class="form-control"
                      placeholder="Enter l'email"
                    />
                    <div v-if="error?.email" class="invalid-feedback">
                      {{ error?.email[0] }}
                    </div>
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="profession"
                      >Profession *</label
                    >
                    <input
                      id="profession"
                      v-model="payload.profession"
                      required
                      type="text"
                      class="form-control"
                      placeholder="Enter la profession"
                    />
                    <div v-if="error?.profession" class="invalid-feedback">
                      {{ error?.profession[0] }}
                    </div>
                  </div>
                  <div class="mb-1">
                    <label class="form-label"> Service *</label>
                    <select
                      v-model="payload.service_id"
                      required
                      class="form-select"
                    >
                      <option>Selectionner le service</option>
                      <option
                        v-for="service in services"
                        :key="service.id"
                        :value="service.id"
                      >
                        {{ service.libelle }}
                      </option>
                    </select>
                  </div>
                  <client-only>
                    <div class="mb-1">
                      <label class="form-label" for="select2-multiple">
                        Rôles
                      </label>
                      <select
                        id="select2-multiple"
                        v-model="payload.roles"
                        class="select2 form-select"
                        multiple
                      >
                        <option
                          v-for="role in roles"
                          :key="role.code"
                          :value="role.code"
                        >
                          {{ role.libelle }}
                        </option>
                      </select>
                    </div>
                  </client-only>
                  <div class="mb-1">
                    <label class="form-label" for=""> Active? * </label>
                    <div class="form-check form-check-inline">
                      <input
                        id="active"
                        v-model="payload.active"
                        required
                        :value="true"
                        class="form-check-input"
                        type="radio"
                      />
                      <label class="form-check-label" for="active">Oui</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        id="non-active"
                        v-model="payload.active"
                        required
                        :value="false"
                        class="form-check-input"
                        type="radio"
                      />
                      <label class="form-check-label" for="non-active"
                        >Non</label
                      >
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    {{ editId ? 'Modifier' : 'Soumettre' }}
                    <div
                      v-if="loading"
                      class="spinner-border spinner-border-sm spinner-grow-sm"
                      role="status"
                    >
                      <span class="visually-hidden">Loading...</span>
                    </div>
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
  name: 'FormMotifs',
  middleware: 'auth',
  data() {
    return {
      payload: {
        active: false,
      },
      error: null,
      editId: false,
      loading: false,
      services: [],
      roles: [
        { code: 'ROLE_ADMIN', libelle: 'Administrateur' },
        { code: 'ROLE_USER', libelle: 'Utilisateur' },
      ],
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
        {
          rel: 'stylesheet',
          href: '/css/forms/select/select2.min.css',
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
        {
          src: '/js/forms/select/select2.full.min.js',
          defer: true,
        },
        {
          src: '/js/scripts/forms/form-select2.min.js',
          defer: true,
        },
      ],
    }
  },
  computed: {},
  async mounted() {
    this.editId = this.$route.query.id
    this.getServices()
    if (this.editId) {
      await this.getUser()
      console.log('this.payload.roles ==>', this.payload.roles)
      window
        .$('#select2-basic')
        .val({ code: 'ROLE_ADMIN', libelle: 'Administrateur' })
        .trigger('change')
    }
    this.setBreadcrumbs({
      title: 'Utilisateurs',
      options: [
        {
          title: 'Accueil',
          url: '/',
        },
        {
          title: 'Utilisateurs',
          url: '/admin/users',
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
        this.loading = true
        if (this.editId) {
          await this.$axios.$post(`/edit_profile/${this.editId}`, {
            ...this.payload,
          })
        } else {
          await this.$axios.$post('/register', {
            ...this.payload,
          })
        }
        window.toastr.success('La liste des utilisateurs a été mis à jour', {
          positionClass: 'toast-top-right',
        })
        this.$router.push('/admin/users')
      } catch ({ response }) {
        if (response.status === 500) {
          this.error = {
            '': ['Une erreur serveur est survenue'],
          }
        } else {
          this.error = response.data
        }
      }
      this.loading = false
    },
    async getUser() {
      try {
        this.payload = await this.$axios.$get(`/users/${this.editId}`)
      } catch ({ response }) {
        this.error = response.data
      }
    },
    async getServices() {
      try {
        const services = await this.$axios.$get(`/service/list`)
        this.services = services.data
      } catch ({ response }) {
        this.error = response.data
      }
    },
  },
}
</script>
