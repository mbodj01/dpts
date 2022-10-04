<template>
  <!-- Basic table -->
  <section id="basic-datatable">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <table
            id="suspects"
            class="table datatables-basic"
            width="100%"
          ></table>
        </div>
      </div>
    </div>
    <!-- Modal to add new record -->
    <div id="modals-slide-in" class="modal modal-slide-in fade">
      <div class="modal-dialog sidebar-sm">
        <form class="add-new-record modal-content pt-0">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            ×
          </button>
          <div class="modal-header mb-1">
            <h5 id="exampleModalLabel" class="modal-title">New Record</h5>
          </div>
          <div class="modal-body flex-grow-1">
            <div class="mb-1">
              <label class="form-label" for="basic-icon-default-fullname"
                >Full Name</label
              >
              <input
                id="basic-icon-default-fullname"
                type="text"
                class="form-control dt-full-name"
                placeholder="John Doe"
                aria-label="John Doe"
              />
            </div>
            <div class="mb-1">
              <label class="form-label" for="basic-icon-default-post"
                >Post</label
              >
              <input
                id="basic-icon-default-post"
                type="text"
                class="form-control dt-post"
                placeholder="Web Developer"
                aria-label="Web Developer"
              />
            </div>
            <div class="mb-1">
              <label class="form-label" for="basic-icon-default-email"
                >Email</label
              >
              <input
                id="basic-icon-default-email"
                type="text"
                class="form-control dt-email"
                placeholder="john.doe@example.com"
                aria-label="john.doe@example.com"
              />
              <small class="form-text">
                You can use letters, numbers & periods
              </small>
            </div>
            <div class="mb-1">
              <label class="form-label" for="basic-icon-default-date"
                >Joining Date</label
              >
              <input
                id="basic-icon-default-date"
                type="text"
                class="form-control dt-date"
                placeholder="MM/DD/YYYY"
                aria-label="MM/DD/YYYY"
              />
            </div>
            <div class="mb-4">
              <label class="form-label" for="basic-icon-default-salary"
                >Salary</label
              >
              <input
                id="basic-icon-default-salary"
                type="text"
                class="form-control dt-salary"
                placeholder="$12000"
                aria-label="$12000"
              />
            </div>
            <button type="button" class="btn btn-primary data-submit me-1">
              Submit
            </button>
            <button
              type="reset"
              class="btn btn-outline-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  <!--/ Basic table -->
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ListSuspcets',
  middleware: 'auth',
  head() {
    return {
      title: 'Liste des mis en cause | DPTS',
    }
  },
  async mounted() {
    this.setBreadcrumbs({
      title: 'mis en cause',
      options: [
        {
          title: 'Accueil',
          url: '/',
        },
        {
          title: 'mis en cause',
        },
      ],
    })
    this.setActions([
      {
        title: 'Ajouter une nouvelle mis en cause',
        classes: 'btn-outline-primary',
        url: '/suspects/form',
      },
    ])
    await this.$axios.$get('/suspect/list').then((suspects) => {
      suspects = suspects.map((suspect) => {
        return [
          {
            nom: suspect.nom,
            prenom: suspect.prenom,
            profession: suspect.profession,
          },
          suspect.date_naissance,
          suspect.lieu_naissance,
          suspect.taille,
          suspect.sexe === 'masculin' ? 'Masculin' : 'Feminin',
          suspect.id,
        ]
      })
      window.$('#suspects').DataTable({
        language: {
          url: '/data/locales/fr-FR.json',
        },
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
                '</a><div class="dropdown-menu dropdown-menu-end"><a href="/suspects/' + id + '" class="dropdown-item">' +
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
    })
  },
  methods: {
    ...mapMutations({
      setBreadcrumbs: 'setBreadcrumbs',
      setActions: 'setActions',
    }),
  },
}
</script>
