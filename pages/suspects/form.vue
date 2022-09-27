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
                    <label class="form-label" for="prenom">Prénom</label>
                    <input
                      id="prenom"
                      v-model="payload.prenom"
                      required
                      type="text"
                      class="form-control"
                      placeholder="Enter le prenom de la mise en cause"
                    />
                    <div class="invalid-feedback"></div>
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
                    <div class="invalid-feedback"></div>
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="pseudonyme"
                      >Pseudonyme</label
                    >
                    <input
                      id="pseudonyme"
                      v-model="payload.pseudonyme"
                      type="text"
                      class="form-control"
                      placeholder="Enter le pseudonyme de la mise en cause"
                    />
                    <div class="invalid-feedback"></div>
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
                    <div class="invalid-feedback"></div>
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
                    <div class="invalid-feedback"></div>
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
                    <div class="invalid-feedback"></div>
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="profession"
                      >Profession</label
                    >
                    <input
                      id="profession"
                      v-model="payload.profession"
                      type="text"
                      class="form-control"
                      placeholder="Enter la profession de la mise en cause"
                    />
                    <div class="invalid-feedback"></div>
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
                    <div class="invalid-feedback"></div>
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
                    <div class="invalid-feedback"></div>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Soumettre
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
  name: 'FormSuspcets',
  middleware: 'auth',
  data() {
    return {
      payload: {},
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
    handleForm() {
      console.log('this.payload ==>', this.payload)
    },
  },
}
</script>
