<template>
    <div class="card main-card mb-3">
        <div class="card-header p-3 h-auto d-block">
            <b-button v-if="link" class="btn-icon btn-icon-only pull-right" variant="primary" size="sm"  @click="go()">
                <div class="btn-icon-wrapper">
                    <font-awesome-icon icon="plus-square"/> {{linkTitle}}
                </div>
            </b-button>
            <div class="d-block">{{heading}}</div>
            <div class="d-block font-weight-normal text-capitalize mt-1 grey--text">{{subheading}}</div>
            
        </div>
        <div class="card-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faPlusSquare,
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faPlusSquare,
    );

    export default {
        components: {'font-awesome-icon': FontAwesomeIcon},
        props: ['heading', 'subheading', 'link', 'linkTitle'],
        
        methods: {
            go() {
                console.log("click",this.link);
                this.$router.replace(this.link)
            },
        }
    }
</script>
