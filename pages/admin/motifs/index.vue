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
      title: 'motifs',
      options: [
        {
          title: 'Accueil',
          url: '/',
        },
        {
          title: 'motifs',
        },
      ],
    })
    this.setActions([
      {
        title: 'Ajouter un nouveau motif',
        classes: 'btn-outline-primary',
        url: '/suspects/form',
      },
    ])
    await this.$axios.$get('/motif/list').then((motifs) => {
      motifs = motifs.data.map((motif) => {
        return [motif.code, motif.libelle]
      })
      window.$('#motifs').DataTable({
        data: motifs,
        language: {
          url: '/data/locales/fr-FR.json',
        },
        columns: [{ title: 'code' }, { title: 'motif' }],
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
