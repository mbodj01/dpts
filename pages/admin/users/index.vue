<template>
  <!-- Basic table -->
  <section id="basic-datatable">
    <div class="row">
      <div class="col-12">
        <div class="card p-2">
          <table id="users" class="table datatables-basic" width="100%"></table>
        </div>
      </div>
    </div>
    <!-- Modal to add new record -->
  </section>
  <!--/ Basic table -->
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ListUsers',
  middleware: 'auth',
  async mounted() {
    this.setBreadcrumbs({
      title: 'Utilisateurs',
      options: [
        {
          title: 'Accueil',
          url: '/',
        },
        {
          title: 'Utilisateurs',
        },
      ],
    })
    this.setActions([
      {
        title: 'Ajouter un nouvel utilisateur',
        classes: 'btn-outline-primary',
        url: '/admin/users/form',
      },
    ])
    await this.$axios.$get('/users').then((users) => {
      users = users.data.map((user) => {
        return [
          {
            nom: user.nom,
            prenom: user.prenom,
            profession: user.profession,
            avatar: user.avatar,
          },
          user.email,
          user.user_service?.libelle || 'Pas de service',
          user.roles,
          user.is_active,
          user.created_at,
        ]
      })
      window.$('#users').DataTable({
        language: {
          url: '/data/locales/fr-FR.json',
        },
        data: users,
        columns: [
          {
            title: 'Utilisateur',
            render(data) {
              return `<div class="d-flex justify-content-left align-items-center">
              <div class="avatar bg-light-warning  me-1">
              <span class="avatar-content">U</span></div>
              <div class="d-flex flex-column">
              <span class="emp_name text-truncate fw-bold">${data.prenom} ${data.nom}</span><small class="emp_post text-truncate text-muted"> ${data.profession} </small></div></div>`
            },
          },
          { title: 'email' },
          { title: 'service' },
          {
            title: 'rôles',
            render(data) {
              let roleobj = {
                type: 'success',
                libelle: 'Utilisateur',
              }
              if (data.includes('ROLE_ADMIN')) {
                roleobj = {
                  type: 'danger',
                  libelle: 'administrateur',
                }
              }
              return `<span class="badge rounded-pill  badge-light-${roleobj.type}">${roleobj.libelle}</span>`
            },
          },
          {
            title: 'actions',
            render(id) {
              return (
                '<div class="d-inline-flex"><a class="pe-1 dropdown-toggle hide-arrow text-primary" data-bs-toggle="dropdown">' +
                '</a></div><a href="/admin/users/form?id=' +
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
