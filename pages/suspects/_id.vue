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
                    <h4>{Civilite. Prenom Nom}</h4>
                    <span class="badge bg-light-secondary">{Profession}</span>
                  </div>
                </div>
              </div>
              <!-- <div class="d-flex justify-content-around my-2 pt-75">
                <div class="d-flex align-items-start me-2">
                  <span class="badge bg-light-primary p-75 rounded">
                    <i data-feather="check" class="font-medium-2"></i>
                  </span>
                  <div class="ms-75">
                    <h4 class="mb-0">1.23k</h4>
                    <small>Tasks Done</small>
                  </div>
                </div>
                <div class="d-flex align-items-start">
                  <span class="badge bg-light-primary p-75 rounded">
                    <i data-feather="briefcase" class="font-medium-2"></i>
                  </span>
                  <div class="ms-75">
                    <h4 class="mb-0">568</h4>
                    <small>Projects Done</small>
                  </div>
                </div>
              </div> -->
              <h4 class="fw-bolder border-bottom pb-50 my-2">Identité</h4>
              <div class="info-container">
                <ul class="list-unstyled">
                  <li class="mb-75">
                    <span class="fw-bolder me-25">Pseudonyme:</span>
                    <span>{pseudonyme}</span>
                  </li>
                  <li class="mb-75">
                    <span class="fw-bolder me-25">Date de naissance:</span>
                    <span>{Date de naissance}</span>
                  </li>
                  <li class="mb-75">
                    <span class="fw-bolder me-25">Lieu de naissance:</span>
                    <span>{Lieu de naissance}</span>
                  </li>
                  <li class="mb-75">
                    <span class="fw-bolder me-25"
                      >Numéro carte d'identité:</span
                    >
                    <span>{Numéro carte d'identité}</span>
                  </li>
                  <li class="mb-75">
                    <span class="fw-bolder me-25">Numéro passeport:</span>
                    <span>{Numéro passeport}</span>
                  </li>
                </ul>
                <div class="d-flex justify-content-center pt-2">
                  <a href="/suspects/form?id" class="btn btn-primary me-1">
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
            <h4 class="card-header">Antécédents de la mise en cause</h4>
            <div class="card-body pt-1">
              <ul class="timeline ms-50">
                <li class="timeline-item">
                  <span class="timeline-point timeline-point-indicator"></span>
                  <div class="timeline-event">
                    <div
                      class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1"
                    >
                      <h6>User login</h6>
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
      title: 'Profil mise en cause | DPTS',
    }
  },
  mounted() {
    const suspectId = this.$route.params.id
    console.log('this.params.id ==>', suspectId)
    this.setBreadcrumbs({
      title: 'Profil mise en cause',
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
          title: 'Détail {{ nom mise en cause}}',
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
        this.suspect = await this.$axios.$get(
          `/suspect/detail/${this.suspectId}`
        )
      } catch ({ response }) {
        this.error = response.data
      }
    },
  },
}
</script>
