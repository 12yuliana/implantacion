<template>
  <body class="">

    <header class="navbar navbar-dark sticky-top bg-light flex-md-nowrap p-0 shadow">
      
      <router-link class="navbar-brand col-md-2 col-lg-2 me-0 px-3 fs-6 bg-success" href="" to="/productos">TuSena</router-link>

      <button class="navbar-toggler bg-dark position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>


      <input class="form-control form-control-dark w-100 rounded-0 border-0 bg-warning rounded-3 py-2 px-2 mx-2"  type="text" placeholder="Buscar"
        aria-label="Search">


      <div class="navbar-nav">
        <div class="nav-item text-nowrap">
          <a class="nav-link px-4 mx-3 bg-danger rounded" href="#">Salir</a>
        </div>
      </div>



    </header>

    <div class="container-fluid mt-2">
      <div class="row">
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div class="position-sticky pt-3 sidebar-sticky">
            <ul class="nav flex-column nav-pills">
              <li class="nav-item mt-5">
                <a class="nav-link active text-dark bg-success" aria-current="page" href="#">
                  <span data-feather="home" class="align-text-bottom"></span>
                  Usuarios
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file" class="align-text-bottom"></span>
                  Semilleros
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="shopping-cart" class="align-text-bottom"></span>
                  Productos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="users" class="align-text-bottom"></span>
                  Proyectos
                </a>
              </li>
              <!-- <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="bar-chart-2" class="align-text-bottom"></span>
                  Reports
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="layers" class="align-text-bottom"></span>
                  Integrations
                </a>
              </li> -->
            </ul>

            <h6
              class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
              <span>Reporte</span>
              <a class="link-secondary" href="#" aria-label="Add a new report">
                <span data-feather="plus-circle" class="align-text-bottom"></span>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text" class="align-text-bottom"></span>
                  Current month
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text" class="align-text-bottom"></span>
                  Last quarter
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text" class="align-text-bottom"></span>
                  Social engagement
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text" class="align-text-bottom"></span>
                  Year-end sale
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Panel de Administracion</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group me-2">
                <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
              </div>
              <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar" class="align-text-bottom"></span>
                This week
              </button>
            </div>
          </div>


          <!-- <h2>Productos</h2> -->
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">NOMBRE</th>
                  <th scope="col">TIPO DE PRODUCTO</th>
                  <th scope="col">LINEA</th>
                  <th scope="col">ME GUSTA</th>
                  <th scope="col">ID</th>
                  <th scope="col">NOMBRE</th>
                  <th scope="col">TIPO DE PRODUCTO</th>
                  <th scope="col">LINEA</th>
                  <th scope="col">ME GUSTA</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" v-bind:key="user">
                  <td>{{user.id }}</td>
                  <td>{{user.name}}</td>
                  <td>{{user.linea }}</td>
                  <td>Investigacion y Cienciadsdsds</td>
                  <td>18</td>
                  <td>1</td>
                  <td>Producto 2</td>
                  <td>Tipo Col</td>
                  <td>Investigacion y Ciencia</td>
                  <td>4</td>
                </tr>
                <!-- <tr>
                  <td>1</td>
                  <td>Producto 2</td>
                  <td>Tipo Col</td>
                  <td>Investigacion y Ciencia</td>
                  <td>4</td>
                  <td>1</td>
                  <td>Producto 2</td>
                  <td>Tipo Col</td>
                  <td>Investigacion y Ciencia</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Producto 2</td>
                  <td>Tipo Col</td>
                  <td>Investigacion y Ciencia</td>
                  <td>4</td>
                  <td>1</td>
                  <td>Producto 2</td>
                  <td>Tipo Col</td>
                  <td>Investigacion y Ciencia</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Producto 2</td>
                  <td>Tipo Col</td>
                  <td>Investigacion y Ciencia</td>
                  <td>4</td>
                  <td>1</td>
                  <td>Producto 2</td>
                  <td>Tipo Col</td>
                  <td>Investigacion y Ciencia</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Producto 2</td>
                  <td>Tipo Col</td>
                  <td>Investigacion y Ciencia</td>
                  <td>4</td>
                  <td>1</td>
                  <td>Producto 2</td>
                  <td>Tipo Col</td>
                  <td>Investigacion y Ciencia</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Producto 2</td>
                  <td>Tipo Col</td>
                  <td>Investigacion y Ciencia</td>
                  <td>4</td>
                  <td>1</td>
                  <td>Producto 2</td>
                  <td>Tipo Col</td>
                  <td>Investigacion y Ciencia</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Producto 2</td>
                  <td>Tipo Col</td>
                  <td>Investigacion y Ciencia</td>
                  <td>4</td>
                  <td>1</td>
                  <td>Producto 2</td>
                  <td>Tipo Col</td>
                  <td>Investigacion y Ciencia</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Producto 2</td>
                  <td>Tipo Col</td>
                  <td>Investigacion y Ciencia</td>
                  <td>4</td>
                  <td>1</td>
                  <td>Producto 2</td>
                  <td>Tipo Col</td>
                  <td>Investigacion y Ciencia</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Producto 2</td>
                  <td>Tipo Col</td>
                  <td>Investigacion y Ciencia</td>
                  <td>4</td>
                  <td>1</td>
                  <td>Producto 2</td>
                  <td>Tipo Col</td>
                  <td>Investigacion y Ciencia</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Producto 2</td>
                  <td>Tipo Col</td>
                  <td>Investigacion y Ciencia</td>
                  <td>4</td>
                  <td>1</td>
                  <td>Producto 2</td>
                  <td>Tipo Col</td>
                  <td>Investigacion y Ciencia</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Producto 2</td>
                  <td>Tipo Col</td>
                  <td>Investigacion y Ciencia</td>
                  <td>4</td>
                  <td>1</td>
                  <td>Producto 2</td>
                  <td>Tipo Col</td>
                  <td>Investigacion y Ciencia</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Producto 2</td>
                  <td>Tipo Col</td>
                  <td>Investigacion y Ciencia</td>
                  <td>4</td>
                  <td>1</td>
                  <td>Producto 2</td>
                  <td>Tipo Col</td>
                  <td>Investigacion y Ciencia</td>
                  <td>4</td>
                </tr> -->
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>

  </body>
</template>

<script>



export default {
  name: 'DashboardComponent',
  data(){
    return {
      users:[]
    }
  },
  async mounted(){
        // hacer la peticion GET a la ruta de la API 
        await this.axios.get('http://localhost:3000/')
        // devuelve la promesa con un resultado (response)
        .then(response => {
            // guardar en la variable usuarios la respuesta obtenida
            this.users = response.data;
            // si se quiere ver el resultado en consola
            console.log(response.data)
        }) //Mostrar por consola el error
        .catch((e) => {
        console.log(e)      
    });
    }
}
</script>


<style scoped>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

body {
  font-size: .875rem;
}

.feather {
  width: 16px;
  height: 16px;
}

/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  /* rtl:raw:
  right: 0;
  */
  bottom: 0;
  /* rtl:remove */
  left: 0;
  z-index: 100;
  /* Behind the navbar */
  padding: 48px 0 0;
  /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}

.sidebar-sticky {
  height: calc(100vh - 48px);
  overflow-x: hidden;
  overflow-y: auto;
  /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #727272;
}

.sidebar .nav-link.active {
  color: #2470dc;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: .75rem;
  padding-bottom: .75rem;
  background-color: rgba(0, 0, 0, .25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}

.navbar .navbar-toggler {
  top: .25rem;
  right: 1rem;
}

.navbar .form-control {
  padding: .75rem 1rem;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}</style>