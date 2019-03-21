<template>
  <div id="app">
    <!-- Section - Home Start -->
    <section id="home" class="home-bg-static bg-cover bg-gray-dark bg-overlay-black-5 w-100">
        <div class="container h-100">
            <div class="row align-items-center h-100 justify-content-center">
                <div class="col-lg-9 text-center">
                    <h2 class="font-alt font-w-600 letter-spacing-2 m-0 mt-3 opacity-9-5 text-uppercase text-black title-sm-extra-large-2 title-extra-large-4">Open Mic</h2>
                    <span class="d-block font-alt mt-2 opacity-9-5 text-black title-sm-extra-large title-extra-large-3"></span>
                </div>
                <!-- //.col-lg-9 -->
            </div>
            <!-- //.row -->
        </div>
        <!-- //.container -->
    </section>
    <!-- //Section - Home End -->
    
    
    <!-- Navigation Start -->
    <nav id="navigation" class="navbar navbar-dark navbar-expand-lg bg-dark">
        <div class="container">
            <div class="navbar-header d-lg-none">
                <a class="navbar-brand page-scroll" href="#page-top"></a>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-berg" aria-controls="navbar-berg" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <!-- //.navbar-header -->
            
            <div class="navbar-collapse collapse justify-content-center" id="navbar-berg">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                        
                    <li class="nav-item">
                        <router-link class="nav-link" to="/songs/new">New</router-link>
                    </li>
                  
                    <li class="nav-item">
                        <router-link class="nav-link" to="/signup">Sign Up</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login">Log In</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/logout">Log Out</router-link>
                    </li>
                </ul>
            </div>
            <!-- //.navbar-collapse -->
        </div>
        <!-- //.container -->
    </nav>
    <!-- //Navigation End -->

      <router-view/>

      <!-- Footer End -->
      <footer id="footer" class="bg-light footer-light">
        <div class="container container-1000">
          <div class="row">
            <div class="col-lg-3">
            </div>
          </div>
        </div>
      </footer>
  </div>
</template>

<style>
</style>