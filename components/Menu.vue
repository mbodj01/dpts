<template>
  <div class="navbar-container main-menu-content" data-menu="menu-container">
    <!-- include ../../../includes/mixins-->
    <ul
      id="main-menu-navigation"
      class="nav navbar-nav"
      data-menu="menu-navigation"
    >
      <li class="nav-item" data-menu="">
        <a class="nav-link d-flex align-items-center" href="/">
          <i data-feather="home"></i>
          <span data-i18n="Statistiques">Statistiques</span>
        </a>
      </li>
      <li class="nav-item" data-menu="">
        <a class="nav-link d-flex align-items-center" href="/suspects">
          <i data-feather="package"></i>
          <span data-i18n="mis en cause">Mises en cause</span>
        </a>
      </li>
      <li class="nav-item" data-menu="">
        <a class="nav-link d-flex align-items-center" href="/signalisations">
          <i data-feather="package"></i>
          <span data-i18n="Signalisations">Signalisations</span>
        </a>
      </li>
      <li class="dropdown nav-item" data-menu="dropdown">
        <a
          class="dropdown-toggle nav-link d-flex align-items-center"
          href="#"
          data-bs-toggle="dropdown"
        >
          <i data-feather="layers"></i>
          <span data-i18n="User Interface">Administration</span>
        </a>
        <ul class="dropdown-menu" data-bs-popper="none">
          <li data-menu="">
            <a
              class="dropdown-item d-flex align-items-center"
              href="/admin/motifs"
              data-bs-toggle=""
              data-i18n="Typography"
            >
              <i data-feather="type"></i>
              <span data-i18n="Motifs">Motifs</span>
            </a>
          </li>
          <li data-menu="">
            <a
              class="dropdown-item d-flex align-items-center"
              href="/admin/lieu"
              data-bs-toggle=""
              data-i18n="Feather"
            >
              <i data-feather="eye"></i>
              <span data-i18n="Lieux de signalisation"
                >Lieux de signalisation</span
              >
            </a>
          </li>
          <li class="dropdown" data-menu="">
            <a
              class="dropdown-item d-flex align-items-center"
              href="/admin/services"
              data-i18n="Cards"
            >
              <i data-feather="credit-card"></i>
              <span data-i18n="Cards">Services</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuComponant',
}
</script>
