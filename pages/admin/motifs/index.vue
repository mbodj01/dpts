<template>
  <!-- Basic table -->
  <section id="basic-datatable">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <table
            id="motifs"
            class="table datatables-basic"
            width="100%"
          ></table>
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
  name: 'ListMotifs',
  middleware: 'auth',
  async mounted() {
    this.setBreadcrumbs({
      title: 'Motifs',
      options: [
        {
          title: 'Accueil',
          url: '/',
        },
        {
          title: 'Motifs',
        },
      ],
    })
    this.setActions([
      {
        title: 'Ajouter un nouveau motif',
        classes: 'btn-outline-primary',
        url: '/admin/motifs/form',
      },
    ])
    await this.$axios.$get('/motif/list').then((motifs) => {
      motifs = motifs.data.map((motif) => {
        return [motif.code, motif.libelle, motif.id]
      })
      window.$('#motifs').DataTable({
        language: {
          url: '/data/locales/fr-FR.json',
        },
        data: motifs,
        columns: [
          { title: 'code' },
          { title: 'motif' },
          {
            title: 'actions',
            render(id) {
              return (
                '<div class="d-inline-flex"><a class="pe-1 dropdown-toggle hide-arrow text-primary" data-bs-toggle="dropdown">' +
                '</a></div><a href="/admin/motifs/form?id=' +
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
