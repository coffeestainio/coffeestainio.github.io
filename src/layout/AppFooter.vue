<template>
    <footer class="footer has-cards">
            <div class="navbar-main" transparent type="" effect="light" expand>
                <div class="container">
                    <div class="row">
                        <div slot="brand" class="col-6 col-lg-4 cs-footer-logo-box">
                            <img class="card-img-top cs-footer-logo" src="../../src/assets/img/clients/CofeeStein.png" alt="Coffestain logo">
                        </div>
                        <div slot="brand" class="col-6 col-lg-4 text-center align-items-center cs-footer-followus-items">
                         <h5>Follow Us</h5>
                            <ul class="navbar-nav cs-footer-items">
                             <li class="nav-item">
                                    <a class="nav-link nav-link-icon" href="https://www.facebook.com/Coffeestainio-109104094097824/" target="_blank"
                                    data-toggle="tooltip" title="Like us on Facebook">
                                        <i class="fa fa-facebook-square"></i>
                                        <span class="nav-link-inner--text d-lg-none">Facebook</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link nav-link-icon" href="https://dev.to/dashboard/organization/1716" target="_blank"
                                    data-toggle="tooltip" title="Read us on dev.to">
                                        <i class="fa fa-book"></i>
                                        <span class="nav-link-inner--text d-lg-none">dev.to</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link nav-link-icon" href="https://www.linkedin.com/company/coffeestain-io/"
                                    target="_blank" data-toggle="tooltip" title="Follow us on LinkedIn">
                                        <i class="fa fa-linkedin"></i>
                                        <span class="nav-link-inner--text d-lg-none">LinkedIn</span>
                                    </a>
                                </li>
                                <li class="nav-item d-lg-block ml-lg-4">
                                </li>
                            </ul>
                        </div>

                        <div slot="brand" class="col-12 col-lg-4 align-items-center cs-footer-contactus">
                        
                                    <a href="mailto:info@coffeestain.io" target="_blank"
                                    class="btn btn-neutral btn-icon cs-contactus-button">
                                    <span class="btn-inner--icon">
                                        <i class="fa fa-envelope mr-2"></i>
                                    </span>
                                        <span class="nav-link-inner--text">Contact Us</span>
                                    </a>
                        </div>
                        <div class="text-center col-12 cs-copyright-footer">
                                &copy; {{year}}
                                <spam>Coffeestain</spam> - <spam>Costa Rican Company</spam>
                        </div>

                    </div>
                </div>
            </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>



