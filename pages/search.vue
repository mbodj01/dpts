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

    <!-- Basic table -->
    <section id="basic-datatable">
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
    </section>
    <!--/ Basic table -->
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
    this.initTableau(this.suspectSearch)
  },
  methods: {
    ...mapMutations({
      setBreadcrumbs: 'setBreadcrumbs',
      setActions: 'setActions',
    }),
    async handleForm() {
      await this.$axios.$get('/suspects').then((suspects) => {
        this.suspectSearch = suspects.data
        // this.initTableau(this.suspectSearch)
        this.table.clear()
        this.table.rows
          .add(
            suspects.data.map((suspect) => {
              return [
                {
                  nom: suspect.nom,
                  prenom: suspect.prenom,
                  profession: suspect.profession,
                },
                { cc: 'SN', name: 'Sénégal' },
                suspect.pseudo,
                suspect.date_naissance,
                suspect.lieu_naissance,
                suspect.taille,
                suspect.sexe === 'masculin' ? 'Masculin' : 'Feminin',
                suspect.id,
              ]
            })
          )
          .draw()
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
