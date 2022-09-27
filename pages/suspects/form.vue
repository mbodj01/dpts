<template>
  <!-- Basic Inputs start -->
  <section id="basic-input">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-xl-4 col-md-6 col-12">
                <div class="mb-1">
                  <label class="form-label" for="prenom">Prénom</label>
                  <input
                    id="prenom"
                    type="text"
                    class="form-control"
                    placeholder="Enter le prenom de la mise en cause"
                  />
                </div>
                <div class="mb-1">
                  <label class="form-label" for="nom">Nom</label>
                  <input
                    id="nom"
                    type="text"
                    class="form-control"
                    placeholder="Enter le nom de la mise en cause"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Basic Inputs end -->
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'FormSuspcets',
  middleware: 'auth',
  computed: {},
  mounted() {
    this.setBreadcrumbs({
      title: 'Mise en cause',
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
          title: 'Formulaire de création',
        },
      ],
    })
    this.setActions([
      {
        title: 'Soumettre',
        classes: 'btn-outline-primary',
      },
    ])
  },
  methods: {
    ...mapMutations({
      setBreadcrumbs: 'setBreadcrumbs',
      setActions: 'setActions',
    }),
  },
}
</script>
