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
              <div class="row mb-2">
                <div class="col-2">
                  <label class="form-label" for="objet"> Objet* </label>
                  <select
                    id="objet"
                    v-model="payload.objet"
                    required
                    class="form-select"
                  >
                    <option value="CBVM">
                      CBVM: Certificat de Bonne Vie et Mœurs
                    </option>
                    <option value="RC">RC: Recherche Criminelle</option>
                    <option value="DRG">
                      DRG: Demande de Renseignements Généraux
                    </option>
                  </select>
                  <div v-if="error?.objet" class="invalid-feedback">
                    {{ error?.objet[0] }}
                  </div>
                </div>
                <div class="col-2">
                  <label class="form-label" for="prenom">Prénom</label>
                  <input
                    id="prenom"
                    v-model="payload.prenom"
                    required
                    type="text"
                    class="form-control"
                    placeholder="Enter un nouveau prenom"
                  />
                  <div v-if="error?.prenom" class="invalid-feedback">
                    {{ error?.prenom[0] }}
                  </div>
                </div>
                <div class="col-2">
                  <label class="form-label" for="nom">Nom</label>
                  <input
                    id="nom"
                    v-model="payload.nom"
                    required
                    type="text"
                    class="form-control"
                    placeholder="Enter un nouveau nom"
                  />
                  <div v-if="error?.nom" class="invalid-feedback">
                    {{ error?.nom[0] }}
                  </div>
                </div>
                <div class="col-2">
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
                  <div v-if="error?.date_naissance" class="invalid-feedback">
                    {{ error?.date_naissance[0] }}
                  </div>
                </div>
                <div class="col-2">
                  <label class="form-label" for="lieu_naissance"
                    >Lieu de naissance</label
                  >
                  <input
                    id="lieu_naissance"
                    v-model="payload.lieu_naissance"
                    required
                    type="text"
                    class="form-control"
                    placeholder="Enter un nouveau lieu_naissance"
                  />
                  <div v-if="error?.lieu_naissance" class="invalid-feedback">
                    {{ error?.lieu_naissance[0] }}
                  </div>
                </div>
              </div>
              <div class="row">
                <button
                  type="submit"
                  class="btn btn-primary"
                  style="width: 170px"
                >
                  Rechercher
                </button>
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
  name: 'SearchPage',
  middleware: 'auth',
  data() {
    return {
      payload: {},
      error: null,
    }
  },
  head() {
    return {
      title: 'Rechercher mis en cause | DPTS',
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
  mounted() {
    this.setBreadcrumbs({
      title: 'Recherche',
      options: [
        {
          title: 'Accueil',
          url: '/',
        },
        {
          title: 'recherche',
        },
      ],
    })
  },
  methods: {
    ...mapMutations({
      setBreadcrumbs: 'setBreadcrumbs',
      setActions: 'setActions',
    }),
    handleForm() {},
  },
}
</script>
