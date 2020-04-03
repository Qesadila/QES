<template>
  <div>
    <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
    <tabs
      :tabs="tabs"
      :currentTab="currentTab"
      :wrapper-class="'body-tabs shadow-tabs'"
      :tab-class="'tab-item'"
      :tab-active-class="'tab-item-active'"
      :line-class="'tab-item-line'"
      @onClick="handleClick"
    />
    <div class="content">
      <div v-if="currentTab === 'tab1'">
        <b-row>
          <b-col lg="12">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <template v-for="variant in ['circle','cube-grid','wave','folding-cube','three-bounce','double-bounce','wandering-cubes','chasing-dots','rotating-plane','pulse','wordpress','fading-circle']">
                  <div class="font-icon-wrapper float-left mr-3 mb-3">
                    <div
                      class="loader-wrapper d-flex justify-content-center align-items-center">
                      <Spinner :name="variant" color="var(--primary)"/>
                    </div>
                    <p>{{variant}}</p>
                  </div>
                </template>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
      <div v-if="currentTab === 'tab2'">
        <b-row>
          <b-col lg="12">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <template
                  v-for="variant in ['ball-grid-beat','ball-grid-pulse','line-spin-fade-loader','ball-spin-fade-loader','ball-pulse-rise','line-scale','line-scale-pulse-out','line-scale-pulse-out-rapid','pacman','line-scale-party','ball-triangle-path','ball-scale-multiple','ball-scale-ripple-multiple','ball-pulse-sync','ball-beat','ball-zig-zag','ball-zig-zag-deflect','ball-clip-rotate-pulse','ball-clip-rotate-multiple','ball-clip-rotate','ball-scale-ripple','triangle-skew-spin']">
                  <div class="font-icon-wrapper float-left mr-3 mb-3">
                    <div
                      class="loader-wrapper d-flex justify-content-center align-items-center">
                      <Spinner :name="variant" color="var(--primary)"/>
                    </div>
                    <p>{{variant}}</p>
                  </div>
                </template>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
      <div v-if="currentTab === 'tab3'">
        <b-row>
          <b-col lg="12">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div
                    class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="circle" color="var(--primary)"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div
                    class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="cube-grid" color="var(--secondary)"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div
                    class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="wave" color="var(--danger)"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div
                    class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="folding-cube" color="var(--success)"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div
                    class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="three-bounce" color="#warning"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div
                    class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="wandering-cubes" color="var(--info)"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div
                    class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="chasing-dots" color="var(--focus)"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div
                    class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="rotating-plane" color="var(--dark)"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="pulse" color="var(--alternate)"/>
                  </div>
                </div>
                <div class="divider"></div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="ball-grid-beat" color="#4632a8"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="ball-grid-pulse" color="#a51d36"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="line-spin-fade-loader" color="#d1f99f"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="ball-spin-fade-loader" color="#9d99fc"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="ball-pulse-rise" color="#b58a0c"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="line-scale" color="#c84ef4"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="line-scale-pulse-out" color="#f4add7"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="line-scale-pulse-out-rapid" color="#ef2db2"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="pacman" color="#d6271d"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="line-scale-party" color="#e53bbd"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="ball-triangle-path" color="#cd00ed"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="ball-scale-multiple" color="#d6f296"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="ball-scale-ripple-multiple" color="#28cc49"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="ball-pulse-sync" color="#e54840"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="ball-beat" color="#b141d3"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="ball-zig-zag" color="#fc079e"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="ball-zig-zag-deflect" color="#42147f"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="ball-clip-rotate-pulse" color="#098d99"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="ball-clip-rotate-multiple" color="#db9429"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="ball-clip-rotate" color="#026275"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="ball-scale-ripple" color="#e55ef2"/>
                  </div>
                </div>
                <div class="font-icon-wrapper float-left mr-3 mb-3">
                  <div class="loader-wrapper d-flex justify-content-center align-items-center">
                    <Spinner name="triangle-skew-spin" color="#aca4f9"/>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
      <div v-if="currentTab === 'tab4'">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <div class="card-title">Elements Block Loading</div>
            <div class="text-center">
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  <button @click="show1 = !show1" class="btn btn-primary mb-5 mt-2 block-element-btn-example-1">
                    Toggle Spinner Example
                  </button>
                  <div class="card">
                    <VueElementLoading :active="show1" spinner="bar-fade-scale" color="var(--primary)"/>
                    <div class="card-header">Header</div>
                    <div class="card-body"><p>With supporting text below as a natural lead-in to additional content.</p>
                      <div class="d-block text-right card-footer">
                        <button class="mr-2 btn btn-link btn-sm">Cancel</button>
                        <button class="btn btn-success btn-lg">Save</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <button @click="show2 = !show2" class="btn btn-primary mb-5 mt-2 block-element-btn-example-1">
                    Toggle Ring Example
                  </button>
                  <div class="card">
                    <VueElementLoading :active="show2" spinner="ring" color="var(--success)"/>
                    <div class="card-header">Header</div>
                    <div class="card-body"><p>With supporting text below as a natural lead-in to additional content.</p>
                      <div class="d-block text-right card-footer">
                        <button class="mr-2 btn btn-link btn-sm">Cancel</button>
                        <button class="btn btn-success btn-lg">Save</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <button @click="show3 = !show3" class="btn btn-primary mb-5 mt-2 block-element-btn-example-1">
                    Toggle Bar Fade Example
                  </button>
                  <div class="card">
                    <VueElementLoading :active="show3" spinner="bar-fade" color="var(--danger)"/>
                    <div class="card-header">Header</div>
                    <div class="card-body"><p>With supporting text below as a natural lead-in to additional content.</p></div>
                    <div class="d-block text-right card-footer">
                      <button class="mr-2 btn btn-link btn-sm">Cancel</button>
                      <button class="btn btn-success btn-lg">Save</button>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <button @click="show4 = !show4" class="btn btn-primary mb-5 mt-2 block-element-btn-example-1">
                    Toggle Line Scale Example
                  </button>
                  <div class="card">
                    <VueElementLoading :active="show4" spinner="line-scale" color="var(--info)"/>
                    <div class="card-header">Header</div>
                    <div class="card-body"><p>With supporting text below as a natural lead-in to additional content.</p></div>
                    <div class="d-block text-right card-footer">
                      <button class="mr-2 btn btn-link btn-sm">Cancel</button>
                      <button class="btn btn-success btn-lg">Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import PageTitle from "../../Layout/Components/PageTitle.vue";
  import Tabs from 'vue-tabs-with-active-line';
  import Spinner from 'vue-spinkit'
  import VueElementLoading from 'vue-element-loading'

  const TABS = [{
    title: 'SpinKit',
    value: 'tab1',
  }, {
    title: 'Loaders.css',
    value: 'tab2',
  }, {
    title: 'Colors',
    value: 'tab3',
  }, {
    title: 'Block Loading',
    value: 'tab4',
  }];

  export default {
    components: {
      PageTitle,
      Tabs,
      Spinner,
      VueElementLoading
    },
    data: () => ({
      heading: 'Loading Indicators',
      subheading: 'Use these loading indicators in combination with other elements to show current app status to users.',
      icon: 'pe-7s-moon icon-gradient bg-amy-crisp',

      tabs: TABS,
      currentTab: 'tab1',

      show1: false,
      show2: false,
      show3: false,
      show4: false,
    }),

    methods: {
      handleClick(newTab) {
        this.currentTab = newTab;
      },
    }
  }
</script>
