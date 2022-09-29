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
                    <label class="form-label" for="civility"> Civilité </label>
                    <select
                      id="civility"
                      v-model="payload.civilite"
                      required
                      class="form-select"
                    >
                      <option value="M.">M.</option>
                      <option value="Mme">Mme</option>
                      <option value="Mlle">Mlle</option>
                    </select>
                    <div v-if="error.civilite" class="invalid-feedback">
                      {{ error.civilite[0] }}
                    </div>
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="prenom">Prénom</label>
                    <input
                      id="prenom"
                      v-model="payload.prenom"
                      required
                      type="text"
                      class="form-control"
                      placeholder="Enter le prenom de la mise en cause"
                    />
                    <div v-if="error.prenom" class="invalid-feedback">
                      {{ error.prenom[0] }}
                    </div>
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="nom">Nom</label>
                    <input
                      id="nom"
                      v-model="payload.nom"
                      required
                      type="text"
                      class="form-control"
                      placeholder="Enter le nom de la mise en cause"
                    />
                    <div v-if="error.nom" class="invalid-feedback">
                      {{ error.nom[0] }}
                    </div>
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="pseudonyme">
                      Pseudonyme
                    </label>
                    <input
                      id="pseudonyme"
                      v-model="payload.pseudonyme"
                      type="text"
                      class="form-control"
                      placeholder="Enter le pseudonyme de la mise en cause"
                    />
                    <div v-if="error.pseudonyme" class="invalid-feedback">
                      {{ error.pseudonyme[0] }}
                    </div>
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="genre"> Genre </label>
                    <select
                      id="genre"
                      v-model="payload.sexe"
                      required
                      class="form-select"
                    >
                      <option value="masculin">Masculin</option>
                      <option value="feminin">Feminin</option>
                    </select>
                    <div v-if="error.sexe" class="invalid-feedback">
                      {{ error.sexe[0] }}
                    </div>
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="date_naissance">
                      Date de naissance
                    </label>
                    <input
                      id="date_naissance"
                      v-model="payload.date_naissance"
                      type="text"
                      class="form-control flatpickr-basic"
                      placeholder="YYYY-MM-DD"
                    />
                    <div v-if="error.date_naissance" class="invalid-feedback">
                      {{ error.date_naissance[0] }}
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="mb-1">
                    <label class="form-label" for="taille">Taille</label>
                    <input
                      id="taille"
                      v-model="payload.taille"
                      required
                      type="text"
                      class="form-control"
                      placeholder="Enter la taille de la mise en cause"
                    />
                    <div v-if="error.taille" class="invalid-feedback">
                      {{ error.taille[0] }}
                    </div>
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="profession"
                      >Profession</label
                    >
                    <input
                      id="profession"
                      v-model="payload.profession"
                      type="text"
                      required
                      class="form-control"
                      placeholder="Enter la profession de la mise en cause"
                    />
                    <div v-if="error.profession" class="invalid-feedback">
                      {{ error.profession[0] }}
                    </div>
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="cni"
                      >Numéro carte d'identité nationale</label
                    >
                    <input
                      id="cni"
                      v-model="payload.cni"
                      type="text"
                      class="form-control"
                      placeholder="CNI de la mise en cause"
                    />
                    <div v-if="error.cni" class="invalid-feedback">
                      {{ error.cni[0] }}
                    </div>
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="passport"
                      >Numéro passport</label
                    >
                    <input
                      id="passport"
                      v-model="payload.passport"
                      type="text"
                      class="form-control"
                      placeholder="Passport de la mise en cause"
                    />
                    <div v-if="error.passport" class="invalid-feedback">
                      {{ error.passport[0] }}
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Soumettre
                  </button>
                </div>
              </div>
            </form>Prénom
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
  name: 'FormSuspcets',
  middleware: 'auth',
  data() {
    return {
      payload: {},
      error: {},
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
  mounted() {
    this.payload.user_id = this.$auth.user.id
    this.setBreadcrumbs({
      title: 'Mise en cause',
      options: [
        {
          title: 'Accueil',
          url: '/',
        },
        {
          title: 'Mise en cause',
          url: '/suspects',
        },
        {
          title: 'Formulaire de création',
        },
      ],
    })
    this.setActions([
      {
        title: 'Soumettre',
        classes: 'btn-outline-primary',
      },
    ])
  },
  methods: {
    ...mapMutations({
      setBreadcrumbs: 'setBreadcrumbs',
      setActions: 'setActions',
    }),
    async handleForm() {
      try {
        await this.$axios.$post('/suspect/create', {
          ...this.payload,
        })
        this.$router.push('/suspects')
      } catch ({ response }) {
        this.error = response.data
      }
    },
  },
}
</script>
