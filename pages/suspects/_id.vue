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
                    <span class="fw-bolder me-25">Username:</span>
                    <span>violet.dev</span>
                  </li>
                  <li class="mb-75">
                    <span class="fw-bolder me-25">Billing Email:</span>
                    <span>vafgot@vultukir.org</span>
                  </li>
                  <li class="mb-75">
                    <span class="fw-bolder me-25">Status:</span>
                    <span class="badge bg-light-success">Active</span>
                  </li>
                  <li class="mb-75">
                    <span class="fw-bolder me-25">Role:</span>
                    <span>Author</span>
                  </li>
                  <li class="mb-75">
                    <span class="fw-bolder me-25">Tax ID:</span>
                    <span>Tax-8965</span>
                  </li>
                  <li class="mb-75">
                    <span class="fw-bolder me-25">Contact:</span>
                    <span>+1 (609) 933-44-22</span>
                  </li>
                  <li class="mb-75">
                    <span class="fw-bolder me-25">Language:</span>
                    <span>English</span>
                  </li>
                  <li class="mb-75">
                    <span class="fw-bolder me-25">Country:</span>
                    <span>Wake Island</span>
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
                      <span class="timeline-event-time me-1">12 min ago</span>
                    </div>
                    <p>User login at 2:12pm</p>
                  </div>
                </li>
                <li class="timeline-item">
                  <span
                    class="timeline-point timeline-point-warning timeline-point-indicator"
                  ></span>
                  <div class="timeline-event">
                    <div
                      class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1"
                    >
                      <h6>Meeting with john</h6>
                      <span class="timeline-event-time me-1">45 min ago</span>
                    </div>
                    <p>React Project meeting with john @10:15am</p>
                    <div class="d-flex flex-row align-items-center mb-50">
                      <div class="avatar me-50">
                        <img
                          src="/images/portrait/small/avatar-s-7.jpg"
                          alt="Avatar"
                          width="38"
                          height="38"
                        />
                      </div>
                      <div class="user-info">
                        <h6 class="mb-0">Leona Watkins (Client)</h6>
                        <p class="mb-0">CEO of pixinvent</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="timeline-item">
                  <span
                    class="timeline-point timeline-point-info timeline-point-indicator"
                  ></span>
                  <div class="timeline-event">
                    <div
                      class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1"
                    >
                      <h6>Create a new react project for client</h6>
                      <span class="timeline-event-time me-1">2 day ago</span>
                    </div>
                    <p>Add files to new design folder</p>
                  </div>
                </li>
                <li class="timeline-item">
                  <span
                    class="timeline-point timeline-point-danger timeline-point-indicator"
                  ></span>
                  <div class="timeline-event">
                    <div
                      class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1"
                    >
                      <h6>Create Invoices for client</h6>
                      <span class="timeline-event-time me-1">12 min ago</span>
                    </div>
                    <p class="mb-0">
                      Create new Invoices and send to Leona Watkins
                    </p>
                    <div class="d-flex flex-row align-items-center mt-50">
                      <img
                        class="me-1"
                        src="/images/icons/pdf.png"
                        alt="data.json"
                        height="25"
                      />
                      <h6 class="mb-0">Invoices.pdf</h6>
                    </div>
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
  head() {
    return {
      title: 'Profil mise en cause | DPTS',
    }
  },
  mounted() {
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
  },
}
</script>
