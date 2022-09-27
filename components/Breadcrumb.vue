<template>
  <div class="content-header row">
    <div class="content-header-left col-md-9 col-12 mb-2">
      <div class="row breadcrumbs-top">
        <div class="col-12">
          <h2 class="content-header-title float-start mb-0">
            {{ breadcrumbs.title }}
          </h2>
          <div class="breadcrumb-wrapper">
            <ol class="breadcrumb">
              <li
                v-for="(breadcrumb, i) in breadcrumbs.options"
                :key="i"
                :class="[
                  'breadcrumb-item',
                  i === Object.keys(breadcrumbs.options).length - 1
                    ? 'active'
                    : '',
                ]"
              >
                <a v-if="breadcrumb.url" :href="breadcrumb.url">
                  {{ breadcrumb.title }}
                </a>
                <template v-else> {{ breadcrumb.title }} </template>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="actions"
      class="content-header-right text-md-end col-md-3 col-12 d-md-block d-none"
    >
      <div class="mb-1 breadcrumb-right">
        <template v-for="(action, i) in actions">
          <a
            v-if="action.url"
            :key="i"
            :class="['btn', action.classes]"
            :href="action.url"
          >
            {{ action.title }}
          </a>
          <button
            v-else
            :key="i"
            type="button"
            :class="['btn', action.classes]"
          >
            {{ action.title }}
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BreadcrumbsComponent',
  computed: {
    breadcrumbs() {
      return this.$store.state.breadcrumbs
    },
    actions() {
      return this.$store.state.actions
    },
  },
}
</script>
