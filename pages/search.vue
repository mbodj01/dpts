<template>
  <div>
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
                  <div class="col-4">
                    <button type="submit" class="btn btn-primary">
                      Rechercher
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

    <!-- Basic table -->
    <!-- <section id="basic-datatable">
      <div class="row">
        <div class="col-12">
          <div class="card p-2">
            <table
              id="suspects"
              class="table datatables-basic"
              width="100%"
            ></table>
          </div>
        </div>
      </div>
    </section> -->
    <!--/ Basic table -->
    <section class="row">
      <!-- User Sidebar -->
      <div v-for="suspect in suspectSearch" :key="suspect.id" class="col-3">
        <!-- User Card -->
        <div class="card">
          <div class="card-body p-1">
            <div class="btn-group">
              <a
                id="dropdownMenuButton100"
                href="#"
                class="dropdown-toggle waves-effect"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-more-vertical font-medium-3 cursor-pointer"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg>
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="dropdownMenuButton100"
              >
                <a class="dropdown-item" :href="`/suspects/${suspect.id}`">
                  Consulter la fiche
                </a>
                <a
                  class="dropdown-item"
                  :href="`/suspects/form?id=${suspect.id}`"
                >
                  Editer les informations
                </a>
              </div>
            </div>
            <div class="user-avatar-section">
              <div class="d-flex align-items-center flex-column">
                <img
                  class="img-fluid rounded mb-2"
                  src="/images/suspect.png"
                  height="110"
                  width="110"
                  alt="User avatar"
                />
                <div class="user-info text-center">
                  <h4>
                    {{ suspect?.civilite }} {{ suspect?.prenom }}
                    {{ suspect?.nom }}
                  </h4>
                  <span class="badge bg-light-secondary">{{
                    suspect?.profession || 'Pas de profession'
                  }}</span>
                </div>
              </div>
            </div>
            <!-- <h4 class="fw-bolder border-bottom pb-50 my-2">Identité</h4> -->
            <div class="info-container">
              <ul class="list-unstyled">
                <li class="mb-75">
                  <span class="fw-bolder me-25">Alias:</span>
                  <span> {{ suspect?.pseudo }} </span>
                </li>
                <li class="mb-75">
                  <span class="fw-bolder me-25">Date de naissance:</span>
                  <span> {{ suspect?.date_naissance }} </span>
                </li>
                <li class="mb-75">
                  <span class="fw-bolder me-25">Lieu de naissance:</span>
                  <span> {{ suspect?.lieu_naissance }} </span>
                </li>
                <li class="mb-75">
                  <span class="fw-bolder me-25">Genre:</span>
                  <span>{{ suspect?.sexe }}</span>
                </li>
              </ul>
              <!-- <div class="d-flex justify-content-center pt-1">
                <a
                  :href="`/suspects/form?id=${suspect?.id}`"
                  class="btn btn-primary me-1"
                >
                  Editer les informations
                </a>
                <a
                  href="/signalisations/form?id"
                  class="btn btn-outline-danger suspend-user"
                >
                  Créer une signalisation
                </a>
              </div> -->
            </div>
          </div>
        </div>
        <!-- /User Card -->
      </div>
      <!--/ User Sidebar -->
    </section>
  </div>
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
      suspectSearch: [],
      table: null,
      loading: false,
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
    if (window.feather) {
      window.feather.replace({ width: 14, height: 14 })
    }
  },
  methods: {
    ...mapMutations({
      setBreadcrumbs: 'setBreadcrumbs',
      setActions: 'setActions',
    }),
    async handleForm() {
      this.loading = true
      const searchParams = new URLSearchParams(this.payload).toString()
      await this.$axios
        .$get(`/suspects?${searchParams}`)
        .then((suspects) => {
          this.suspectSearch = suspects.data
          this.loading = false
        })
        .catch((err) => {
          console.log('err ==>', err)
          this.loading = false
        })
    },
    initTableau(suspects) {
      this.table = window.$('#suspects').DataTable({
        language: {
          url: '/data/locales/fr-FR.json',
        },
        searching: false,
        data: suspects,
        columns: [
          {
            title: 'Nom et prénom',
            render(data) {
              return `<div class="d-flex justify-content-left align-items-center">
              <div class="avatar bg-light-warning  me-1">
              <span class="avatar-content">U</span></div>
              <div class="d-flex flex-column">
              <span class="emp_name text-truncate fw-bold">${data.prenom} ${data.nom}</span><small class="emp_post text-truncate text-muted"> ${data.profession} </small></div></div>`
            },
          },
          {
            title: 'Nationalité',
            render({ cc, name }) {
              return `<img src="https://flagcdn.com/16x12/${cc.toLowerCase()}.png" title="${name}" alt="${name}" height="18" width="24">`
            },
          },
          { title: 'Pseudonyme' },
          { title: 'Date de naissance' },
          { title: 'Lieu de naissance' },
          { title: 'Taille (en M)' },
          { title: 'Genre' },
          {
            title: 'actions',
            render(id) {
              return (
                '<div class="d-inline-flex"><a class="pe-1 dropdown-toggle hide-arrow text-primary" data-bs-toggle="dropdown">' +
                window.feather.icons['more-vertical'].toSvg({
                  class: 'font-small-4',
                }) +
                '</a><div class="dropdown-menu dropdown-menu-end"><a href="/suspects/' +
                id +
                '" class="dropdown-item">' +
                window.feather.icons['file-text'].toSvg({
                  class: 'font-small-4 me-50',
                }) +
                'Details</a></div></div><a href="/suspects/form?id=' +
                id +
                '" class="item-edit">' +
                window.feather.icons.edit.toSvg({ class: 'font-small-4' }) +
                '</a>'
              )
            },
          },
        ],
      })
    },
  },
}
</script>
