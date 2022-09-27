<template>
  <!-- Basic Inputs start -->
  <section id="basic-input">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-xl-4 col-md-6 col-12">
                <div class="mb-1">
                  <label class="form-label" for="prenom">Prénom</label>
                  <input
                    id="prenom"
                    type="text"
                    class="form-control"
                    placeholder="Enter le prenom de la mise en cause"
                  />
                </div>
                <div class="mb-1">
                  <label class="form-label" for="nom">Nom</label>
                  <input
                    id="nom"
                    type="text"
                    class="form-control"
                    placeholder="Enter le nom de la mise en cause"
                  />
                </div>
                <div class="mb-1">
                  <label class="form-label" for="pseudonyme">Pseudonyme</label>
                  <input
                    id="pseudonyme"
                    type="text"
                    class="form-control"
                    placeholder="Enter le pseudonyme de la mise en cause"
                  />
                </div>
                <div class="mb-1">
                  <label class="form-label" for="sex"> Genre </label>
                  <select id="sex" class="form-select">
                    <option>Masculin</option>
                    <option>Feminin</option>
                  </select>
                </div>
                <div class="mb-1">
                  <label class="form-label" for="date_naissance">
                    Date de naissance
                  </label>
                  <input
                    id="date_naissance"
                    type="text"
                    class="form-control flatpickr-basic"
                    placeholder="YYYY-MM-DD"
                  />
                </div>
              </div>
            </div>
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
  },
}
</script>
