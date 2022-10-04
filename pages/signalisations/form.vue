<template>
  <!-- Basic Inputs start -->
  <section id="basic-input">
    <form action="#" novalidate @submit.prevent="handleForm">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
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
                  </div>
                  <!--/ header section -->
                </div>
              </div>
              <div class="row mb-1">
                <div class="col-6">
                  <div class="mb-1">
                    <label class="form-label" for="select2-basic"
                      >Mis en cause</label
                    >
                    <select id="select2-basic" class="select2 form-select">
                      <option
                        v-for="s in suspects"
                        :key="s.id"
                        :value="JSON.stringify(s)"
                      >
                        {{ s.nom }} {{ s.prenom }}
                      </option>
                    </select>
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="civility"> Civilité </label>
                    <select
                      id="civility"
                      v-model="suspect.civilite"
                      required
                      disabled
                      class="form-select"
                    >
                      <option value="M.">M.</option>
                      <option value="Mme">Mme</option>
                      <option value="Mlle">Mlle</option>
                    </select>
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="pseudonyme">
                      Pseudonyme
                    </label>
                    <input
                      id="pseudonyme"
                      v-model="suspect.pseudonyme"
                      disabled
                      type="text"
                      class="form-control"
                      placeholder="Enter le pseudonyme du mis en cause"
                    />
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="genre"> Genre </label>
                    <input
                      id="genre"
                      v-model="suspect.sexe"
                      disabled
                      type="text"
                      class="form-control"
                      placeholder="Enter le genre du mis en cause"
                    />
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="date_naissance">
                      Date de naissance
                    </label>
                    <input
                      id="date_naissance"
                      v-model="suspect.date_naissance"
                      disabled
                      type="text"
                      class="form-control flatpickr-basic"
                      placeholder="YYYY-MM-DD"
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="mb-1">
                    <label class="form-label" for="taille">Taille</label>
                    <input
                      id="taille"
                      v-model="suspect.taille"
                      required
                      disabled
                      type="text"
                      class="form-control"
                      placeholder="Enter la taille du mis en cause"
                    />
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="profession"
                      >Profession</label
                    >
                    <input
                      id="profession"
                      v-model="suspect.profession"
                      type="text"
                      required
                      disabled
                      class="form-control"
                      placeholder="Enter la profession du mis en cause"
                    />
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="cni"
                      >Numéro carte d'identité nationale</label
                    >
                    <input
                      id="cni"
                      v-model="suspect.cni"
                      disabled
                      type="text"
                      class="form-control"
                      placeholder="CNI du mis en cause"
                    />
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="passport"
                      >Numéro passport</label
                    >
                    <input
                      id="passport"
                      v-model="suspect.passport"
                      disabled
                      type="text"
                      class="form-control"
                      placeholder="Passport du mis en cause"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="row mb-1">
                <div class="col-12">
                  <div class="col-md-12 mb-1">
                    <label class="form-label" for="select2-multiple">
                      Infractions
                    </label>
                    <select
                      id="select2-multiple"
                      class="select2 form-select"
                      multiple
                    >
                      <option
                        v-for="motif in motifs"
                        :key="motif.id"
                        :value="motif.id"
                      >
                        {{ motif.libelle }}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-12 mb-1">
                    <div class="row">
                      <div class="col-6">
                        <span>Le:</span>
                        <span>
                          {{ new Date().toLocaleDateString('fr-FR') }}
                        </span>
                      </div>
                      <div class="col-6 d-flex align-items-center gap-1">
                        <label class="form-label" for="civility"> à </label>
                        <select required class="form-select">
                          <option
                            v-for="department in departments"
                            :key="department"
                            :value="department"
                          >
                            {{ department }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <label class="form-label" for="detail">
                    Informations supplémentaires sur la signalisation
                  </label>
                  <textarea
                    id="detail"
                    class="form-control"
                    rows="3"
                    placeholder="Informations supplémentaires sur la signalisation"
                  ></textarea>
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
          </div>
        </div>
      </div>
    </form>
  </section>
  <!-- Basic Inputs end -->
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'FormSignalisation',
  middleware: 'auth',
  data() {
    return {
      suspects: [],
      motifs: [],
      departments: [],
      suspect: {},
      payload: {
        motifs: [],
      },
      error: {},
      editId: false,
    }
  },
  head() {
    return {
      title: 'Formulaire signalisation | DPTS',
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
    await this.getSuspects()
    await this.getMotifs()
    await this.getDepartments()
    const $suspect = document.getElementById('select2-basic').value
    if ($suspect) {
      this.suspect = JSON.parse($suspect)
    }
    window.$('#select2-basic').on('change', (e) => {
      if (e.target.value) {
        this.suspect = JSON.parse(e.target.value)
      }
    })
    window
      .$('#select2-multiple')
      .on('select2:select', (e) => {
        if (!this.payload.motifs.includes(e.target.value)) {
          this.payload.motifs.push(e.target.value)
        }
      })
      .on('select2:unselecting', (e) => {
        const index = this.payload.motifs.indexOf(e.target.value)
        if (index > -1) {
          this.payload.motifs.splice(index, 1)
        }
      })
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
    async getSuspects() {
      try {
        this.suspects = await this.$axios.$get(`/suspect/list`)
      } catch ({ response }) {
        this.error = response.data
      }
    },
    async getMotifs() {
      try {
        const motifs = await this.$axios.$get(`/motif/list`)
        this.motifs = motifs.data
      } catch ({ response }) {
        this.error = response.data
      }
    },
    async getDepartments() {
      try {
        const departments = await this.$axios.$get(`/departement/list`)
        this.departments = Object.values(departments)
        console.log('this.departments ==>', this.departments)
      } catch ({ response }) {
        this.error = response.data
      }
    },
  },
}
</script>
