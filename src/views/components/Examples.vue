<template>
    <section class="section section-lg section-shaped overflow-hidden my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container shape-container py-0 pb-5">
            <div class="row row-grid justify-content-between align-items-center">
                <div class="col-lg-6">
                    <h3 class="display-3 text-white">Mindful thinking
                        <span class="text-white"> meets on hands <b>experience</b></span>
                    </h3>
                    <p class="lead text-white">With many years of work in different 
                        project sizes and different domains we have gained enough experience to drive 
                        toguether along with our customers to a just perfect for your organization.
                        <b>Want to know more?</b>
                    </p>
                    <div class="btn-wrapper">
                        <a href="https://dev.to/dashboard/organization/1716" class="btn btn-secondary">
                            Read Our Blog
                        </a>
                        <a href="mailto:info@coffeestain.io" class="btn btn-success">
                            Get in Touch With Us
                        </a>
                    </div>
                </div>
                <div class="col-lg-5 mb-lg-auto">
                    <div class="transform-perspective-right">
                        <card class="border-0" type="secondary" shadow
                              body-classes="px-lg-5 py-lg-5"
                              header-classes="pb-5 bg-white">
                            <template slot="header">
                                <div class="text-muted text-center mb-3">
                                    <small>How would you test this form?</small>
                                </div>
                                <div class="btn-wrapper text-center">
                                    <base-button type="neutral">
                                        Automated
                                    </base-button>

                                    <base-button type="neutral">
                                        Manual
                                    </base-button>
                                </div>
                            </template>
                            <template>
                                <div class="text-center text-muted mb-4">
                                    <small>Be confident that about your system!</small>
                                </div>
                                <form role="form">
                                    <base-input alternative
                                                placeholder="Email"
                                                addon-left-icon="ni ni-email-83">
                                    </base-input>
                                    <base-input alternative
                                                type="password"
                                                placeholder="Password"
                                                addon-left-icon="ni ni-lock-circle-open">
                                    </base-input>
                                    <base-checkbox>
                                        Regression testing
                                    </base-checkbox>
                                    <div class="text-center">
                                        <base-button type="primary" class="my-4">Execute tests</base-button>
                                    </div>
                                </form>
                            </template>
                        </card>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {};
</script>
<style>
</style>
