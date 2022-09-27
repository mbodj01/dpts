<template>
    <!-- Basic table -->
    <section id="basic-datatable">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <table
              id="lieux"
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
    name: 'ListSuspcets',
    middleware: 'auth',
    async mounted() {
      this.setBreadcrumbs({
        title: 'Lieux de signalisation',
        options: [
          {
            title: 'Accueil',
            url: '/',
          },
          {
            title: 'Administration',
          }
        ],
      })
      this.setActions([
        {
          title: 'Ajouter un nouveau lieu',
          classes: 'btn-outline-primary',
          url: '/suspects/form'
        },
      ])
      await this.$axios.$get('/lieu_signalisation/list').then((lieux) => {
        lieux = lieux.data.map((lieu) => {
          return [
            lieu.libelle,
            lieu.code,
          ]
        })
        window.$('#lieux').DataTable({
          data: lieux,
          columns: [
            { title: 'Libelle' },
            { title: 'Code' },
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
  