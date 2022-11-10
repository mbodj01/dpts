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
                    <label class="form-label" for="civility"> Civilité* </label>
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
                    <label class="form-label" for="prenom">Prénom*</label>
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
                    <label class="form-label" for="nom">Nom*</label>
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
                    <label class="form-label" for="date_naissance">
                      Date de naissance*
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
                  <div class="mb-1">
                    <label class="form-label" for="lieu_naissance">
                      Lieu de Naissance
                    </label>
                    <input
                      id="lieu_naissance"
                      v-model="payload.lieu_naissance"
                      type="text"
                      class="form-control"
                      placeholder="Enter le lieu de naissance du mis en cause"
                    />
                    <div v-if="error?.lieu" class="invalid-feedback">
                      {{ error?.lieu_naissance[0] }}
                    </div>
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="">
                      Nationalité sénégalaise?*
                    </label>
                    <div class="form-check form-check-inline">
                      <input
                        id="senegalais"
                        v-model="payload.senegalais"
                        required
                        :value="true"
                        class="form-check-input"
                        type="radio"
                      />
                      <label class="form-check-label" for="senegalais"
                        >Oui</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        id="non-senegalais"
                        v-model="payload.senegalais"
                        required
                        :value="false"
                        class="form-check-input"
                        type="radio"
                      />
                      <label class="form-check-label" for="non-senegalais"
                        >Non</label
                      >
                    </div>
                  </div>
                  <div class="mb-1 d-flex flex-column">
                    <label class="form-label" for="country"
                      >Autre nationalité</label
                    >
                    <client-only placeholder="Chargement...">
                      <vue-country-dropdown
                        :immediate-call-select-event="true"
                        :enabled-flags="true"
                        :enabled-country-code="true"
                        :show-name-input="true"
                        :show-not-selected-option="true"
                        @onSelect="onSelect"
                      >
                      </vue-country-dropdown>
                    </client-only>
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="genre"> Genre* </label>
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
                    <div class="mb-1">
                      <label class="form-label" for="adresse"
                        >Lieu de résidence</label
                      >
                      <input
                        id="adresse"
                        v-model="payload.adresse"
                        required
                        type="text"
                        class="form-control"
                        placeholder="Enter l'adresse du mis en cause"
                      />
                      <!-- <div v-if="error?.prenom" class="invalid-feedback">
                      {{ error?.prenom[0] }}
                    </div> -->
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="mb-1">
                    <label class="form-label" for="prenom_pere"
                      >Prénom du pére*</label
                    >
                    <input
                      id="prenom_pere"
                      v-model="payload.prenom_pere"
                      required
                      type="text"
                      class="form-control"
                      placeholder="Enter le prenom du pére du mis en cause"
                    />
                    <div v-if="error?.prenom_pere" class="invalid-feedback">
                      {{ error?.prenom_pere[0] }}
                    </div>
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="prenom_mere"
                      >Prénom de la mére*</label
                    >
                    <input
                      id="prenom_mere"
                      v-model="payload.prenom_mere"
                      required
                      type="text"
                      class="form-control"
                      placeholder="Enter le prenom de la mére du mis en cause"
                    />
                    <div v-if="error?.prenom_mere" class="invalid-feedback">
                      {{ error?.prenom_mere[0] }}
                    </div>
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="nom_mere"
                      >Nom de la mére*</label
                    >
                    <input
                      id="nom_mere"
                      v-model="payload.nom_mere"
                      required
                      type="text"
                      class="form-control"
                      placeholder="Enter le nom de la mére du mis en cause"
                    />
                    <div v-if="error?.nom_mere" class="invalid-feedback">
                      {{ error?.nom_mere[0] }}
                    </div>
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="formule"
                      >Formule décadactylaire</label
                    >
                    <input
                      id="formule"
                      v-model="payload.formule"
                      required
                      type="text"
                      class="form-control"
                      placeholder="Enter la formule décadactylaire du mis en cause"
                    />
                    <!-- <div v-if="error?.nom_mere" class="invalid-feedback">
                      {{ error?.nom_mere[0] }}
                    </div> -->
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="taille">Taille*</label>
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
                    <label class="form-label" for="masse">Masse*</label>
                    <input
                      id="masse"
                      v-model="payload.masse"
                      required
                      type="text"
                      class="form-control"
                      placeholder="Enter la masse du mis en cause"
                    />
                    <!-- <div v-if="error?.taille" class="invalid-feedback">
                      {{ error?.taille[0] }}
                    </div> -->
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
                    <label class="form-label" for="profession">Procédure</label>
                    <input
                      id="procedure"
                      v-model="payload.procedure"
                      type="text"
                      required
                      class="form-control"
                      placeholder="Enter la procédure du mis en cause"
                    />
                    <!-- <div v-if="error?.profession" class="invalid-feedback">
                      {{ error?.profession[0] }} -->
                    <!-- </div> -->
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="created-at"> Le </label>
                    <input
                      id="created-at"
                      v-model="payload.created_at"
                      type="text"
                      class="form-control flatpickr-basic"
                      placeholder="YYYY-MM-DD"
                    />
                    <div v-if="error?.created_at" class="invalid-feedback">
                      {{ error?.created_at[0] }}
                    </div>
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="fiche"
                      >Fiche établie par :
                    </label>
                    <span class="user-name fw-bolder">
                      {{ $auth.user?.prenom }} {{ $auth.user?.nom }}
                    </span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary">
                      {{ editId ? 'Modifier' : 'Soumettre' }}
                    </button>
                  </div>
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
import VueCountryDropdown from 'vue-country-dropdown'
export default {
  name: 'FormSuspcets',
  components: {
    VueCountryDropdown,
  },
  middleware: 'auth',
  data() {
    return {
      payload: {
        senegalais: true,
        created_at: this.formatDate(Date.now()),
      },
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
        window.toastr.success('La liste des suspects a été mis à jour', {
          positionClass: 'toast-top-right',
        })
        this.$router.push('/suspects')
      } catch ({ response }) {
        this.error = response.data
      }
    },
    async getSuspect() {
      try {
        const data = await this.$axios.$get(`/suspect/detail/${this.editId}`)
        this.payload = {
          ...this.payload,
          ...data[0],
        }
        this.payload.created_at = this.formatDate(
          new Date(this.payload.created_at)
        )
      } catch ({ response }) {
        this.error = response?.data
      }
    },
    formatDate(d) {
      if (d) {
        const ye = new Intl.DateTimeFormat('fr', { year: 'numeric' }).format(d)
        const mo = new Intl.DateTimeFormat('fr', { month: '2-digit' }).format(d)
        const da = new Intl.DateTimeFormat('fr', { day: '2-digit' }).format(d)
        return `${ye}-${mo}-${da}`
      }
    },
    onSelect({ name, iso2, dialCode }) {
      this.payload.nationalite = JSON.stringify({ cc: iso2, name })
    },
  },
}
</script>
