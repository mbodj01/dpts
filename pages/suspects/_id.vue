<template>
  <div>
    <section class="app-user-view-account">
      <div class="row">
        <!-- User Sidebar -->
        <div class="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0">
          <!-- User Card -->
          <div class="card">
            <div class="card-body">
              <div class="user-avatar-section">
                <div class="d-flex align-items-center flex-column">
                  <img
                    class="img-fluid rounded mt-3 mb-2"
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
              <h4 class="fw-bolder border-bottom pb-50 my-2">Identité</h4>
              <div class="info-container">
                <ul class="list-unstyled">
                  <li class="mb-75">
                    <span class="fw-bolder me-25">Pseudonyme:</span>
                    <span> {{ suspect?.pseudonyme }} </span>
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
                    <span class="fw-bolder me-25">Taille:</span>
                    <span> {{ suspect?.taille }} m </span>
                  </li>
                  <li class="mb-75">
                    <span class="fw-bolder me-25"
                      >Numéro carte d'identité:</span
                    >
                    <span> {{ suspect?.cni }} </span>
                  </li>
                  <li class="mb-75">
                    <span class="fw-bolder me-25">Numéro passeport:</span>
                    <span>{{ suspect?.passport }}</span>
                  </li>
                  <li class="mb-75">
                    <span class="fw-bolder me-25">Prénom / Nom mère:</span>
                    <span
                      >{{ suspect?.prenom_mere }} {{ suspect?.nom_mere }}</span
                    >
                  </li>
                  <li class="mb-75">
                    <span class="fw-bolder me-25">Prénom père:</span>
                    <span>{{ suspect?.prenom_pere }}</span>
                  </li>
                  <li class="mb-75">
                    <span class="fw-bolder me-25">Genre:</span>
                    <span>{{ suspect?.sexe }}</span>
                  </li>
                  <li class="mb-75">
                    <span class="fw-bolder me-25">Crée le:</span>
                    <span>{{ suspect?.created_at }}</span>
                  </li>
                </ul>
                <div class="d-flex justify-content-center pt-2">
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
                </div>
              </div>
            </div>
          </div>
          <!-- /User Card -->
        </div>
        <!--/ User Sidebar -->

        <!-- User Content -->
        <div class="col-xl-8 col-lg-7 col-md-7 order-0 order-md-1">
          <!-- Activity Timeline -->
          <div class="card">
            <h4 class="card-header">Antécédents du mis en cause</h4>
            <div class="card-body pt-1">
              <ul class="timeline ms-50">
                <li class="timeline-item">
                  <span class="timeline-point timeline-point-indicator"></span>
                  <div class="timeline-event">
                    <div
                      class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1"
                    >
                      <h6>15 Oct. 2022</h6>
                      <span class="timeline-event-time me-1">
                        {date signalisation}
                      </span>
                    </div>
                    <ul>
                      <li>
                        <p>
                          <span class="fw-b">Infractions:</span>
                          <span>{motif1} - {motif2} - {motif3}</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <span class="fw-b">Lieux de signalisation:</span>
                          <span>{lieu de signalisation}</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="timeline-item">
                  <span class="timeline-point timeline-point-indicator"></span>
                  <div class="timeline-event">
                    <div
                      class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1"
                    >
                      <h6>20 Sept. 2022</h6>
                      <span class="timeline-event-time me-1">
                        {date signalisation}
                      </span>
                    </div>
                    <ul>
                      <li>
                        <p>
                          <span class="fw-b">Infractions:</span>
                          <span>{motif1} - {motif2} - {motif3}</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <span class="fw-b">Lieux de signalisation:</span>
                          <span>{lieu de signalisation}</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="timeline-item">
                  <span class="timeline-point timeline-point-indicator"></span>
                  <div class="timeline-event">
                    <div
                      class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1"
                    >
                      <h6>20 Mars 2022</h6>
                      <span class="timeline-event-time me-1">
                        {date signalisation}
                      </span>
                    </div>
                    <ul>
                      <li>
                        <p>
                          <span class="fw-b">Infractions:</span>
                          <span>{motif1} - {motif2} - {motif3}</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <span class="fw-b">Lieux de signalisation:</span>
                          <span>{lieu de signalisation}</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="timeline-item">
                  <span class="timeline-point timeline-point-indicator"></span>
                  <div class="timeline-event">
                    <div
                      class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1"
                    >
                      <h6>01 Juin 2022</h6>
                      <span class="timeline-event-time me-1">
                        {date signalisation}
                      </span>
                    </div>
                    <ul>
                      <li>
                        <p>
                          <span class="fw-b">Infractions:</span>
                          <span>{motif1} - {motif2} - {motif3}</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <span class="fw-b">Lieux de signalisation:</span>
                          <span>{lieu de signalisation}</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- /Activity Timeline -->
        </div>
        <!--/ User Content -->
      </div>
    </section>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      suspectId: null,
      suspect: null,
    }
  },
  head() {
    return {
      title: 'Profil mis en cause | DPTS',
    }
  },
  async mounted() {
    this.suspectId = this.$route.params.id
    await this.getSuspect()
    this.setBreadcrumbs({
      title: 'Profil mis en cause',
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
          title: `Détail ${this.suspect.prenom} ${this.suspect.nom}`,
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
    }),
    async getSuspect() {
      try {
        this.suspect = await this.$axios.$get(`/suspects/${this.suspectId}`)
      } catch ({ response }) {
        this.error = response.data
      }
    },
  },
}
</script>
