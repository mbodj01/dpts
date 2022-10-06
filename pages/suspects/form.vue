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
                <div class="col-6">
                  <!-- header section -->
                  <div class="d-flex">
                    <a href="#" class="me-25">
                      <img
                        id="account-upload-img"
                        src="/images/suspect.png"
                        class="uploadedAvatar rounded me-50"
                        alt="profile image"
                        height="100"
                        width="100"
                      />
                    </a>
                    <!-- upload and reset button -->
                    <div class="d-flex align-items-end mt-75 ms-1">
                      <div>
                        <label
                          for="account-upload"
                          class="btn btn-sm btn-primary mb-75 me-75"
                          >Charger la photo</label
                        >
                        <input
                          id="account-upload"
                          type="file"
                          hidden
                          accept="image/*"
                        />
                        <p class="mb-0">Extentions: png, jpg, jpeg.</p>
                      </div>
                    </div>
                    <!--/ upload and reset button -->
                  </div>
                  <!--/ header section -->
                </div>
              </div>
              <div class="row mb-1">
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
                    <div v-if="error?.civilite" class="invalid-feedback">
                      {{ error?.civilite[0] }}
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
                      placeholder="Enter le prenom du mis en cause"
                    />
                    <div v-if="error?.prenom" class="invalid-feedback">
                      {{ error?.prenom[0] }}
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
                      placeholder="Enter le nom du mis en cause"
                    />
                    <div v-if="error?.nom" class="invalid-feedback">
                      {{ error?.nom[0] }}
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
                      placeholder="Enter le pseudonyme du mis en cause"
                    />
                    <div v-if="error?.pseudonyme" class="invalid-feedback">
                      {{ error?.pseudonyme[0] }}
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
                    <div v-if="error?.sexe" class="invalid-feedback">
                      {{ error?.sexe[0] }}
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
                    <div v-if="error?.date_naissance" class="invalid-feedback">
                      {{ error?.date_naissance[0] }}
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
                      placeholder="Enter la taille du mis en cause"
                    />
                    <div v-if="error?.taille" class="invalid-feedback">
                      {{ error?.taille[0] }}
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
                      placeholder="Enter la profession du mis en cause"
                    />
                    <div v-if="error?.profession" class="invalid-feedback">
                      {{ error?.profession[0] }}
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
                      placeholder="CNI du mis en cause"
                    />
                    <div v-if="error?.cni" class="invalid-feedback">
                      {{ error?.cni[0] }}
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
                      placeholder="Passport du mis en cause"
                    />
                    <div v-if="error?.passport" class="invalid-feedback">
                      {{ error?.passport[0] }}
                    </div>
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="prenom_pere">Prénom du pere</label>
                    <input
                      id="prenom_pere"
                      v-model="payload.prenom_pere"
                      required
                      type="text"
                      class="form-control"
                      placeholder="Enter le prenom du pere du mis en cause"
                    />
                    <div v-if="error?.prenom_pere" class="invalid-feedback">
                      {{ error?.prenom_pere[0] }}
                    </div>
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="prenom_mere">Prénom de la mere</label>
                    <input
                      id="prenom_mere"
                      v-model="payload.prenom_mere"
                      required
                      type="text"
                      class="form-control"
                      placeholder="Enter le prenom de la mere du mis en cause"
                    />
                    <div v-if="error?.prenom_mere" class="invalid-feedback">
                      {{ error?.prenom_mere[0] }}
                    </div>
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="nom_mere">Nom de la mere</label>
                    <input
                      id="nom_mere"
                      v-model="payload.nom_mere"
                      required
                      type="text"
                      class="form-control"
                      placeholder="Enter le nom de la mere du mis en cause"
                    />
                    <div v-if="error?.nom_mere" class="invalid-feedback">
                      {{ error?.nom_mere[0] }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 d-flex justify-content-end">
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
  name: 'FormSuspcets',
  middleware: 'auth',
  data() {
    return {
      payload: {},
      error: null,
      editId: false,
    }
  },
  head() {
    return {
      title: 'Formulaire mis en cause | DPTS',
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
      await this.getSuspect()
    }
    this.payload.user_id = this.$auth.user.id
    this.setBreadcrumbs({
      title: 'mis en cause',
      options: [
        {
          title: 'Accueil',
          url: '/',
        },
        {
          title: 'mis en cause',
          url: '/suspects',
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
          await this.$axios.$put(`/suspect/update/${this.editId}`, {
            ...this.payload,
          })
        } else {
          await this.$axios.$post('/suspect/create', {
            ...this.payload,
          })
        }
        this.$router.push('/suspects')
      } catch ({ response }) {
        this.error = response.data
      }
    },
    async getSuspect() {
      try {
        this.payload = await this.$axios.$get(`/suspect/detail/${this.editId}`)
      } catch ({ response }) {
        this.error = response.data
      }
    },
  },
}
</script>
