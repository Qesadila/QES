<template>
    <div>
        <ul class="header-megamenu nav">
            <li class="nav-item">
                <b-dropdown variant="link" no-caret class="dropdown-menu-rounded" menu-class="dropdown-menu-lg">
                    <span slot="button-content">
                        <i class="nav-link-icon pe-7s-users"> </i>
                        {{ `${$t('roles')} (${role})` }}
                        <font-awesome-icon class="ml-1 opacity-5" icon="angle-down"/>
                    </span>
                    <div class="dropdown-menu-header">
                        <div class="dropdown-menu-header-inner bg-success">
                            <div class="menu-header-image opacity-1 dd-header-bg-3"></div>
                            <div class="menu-header-content text-left">
                                <h5 class="menu-header-title">{{ $t('chooseRole') }}</h5>
                            </div>
                        </div>
                    </div>
                    <button type="button" tabindex="0" class="dropdown-item" @click="setRole('anonymous')"><i class="dropdown-icon lnr-file-empty"> </i>{{ $t('anonymous') }}</button>
                    <button type="button" tabindex="0" class="dropdown-item" @click="setRole('voter')"><i class="dropdown-icon lnr-file-empty"> </i>{{ $t('voter') }}</button>
                    <button type="button" tabindex="0" class="dropdown-item" @click="setRole('votingManager')"><i class="dropdown-icon lnr-file-empty"> </i>{{ $t('votingManager') }}</button>
                    <button type="button" tabindex="0" class="dropdown-item" @click="setRole('votingListManager')"><i class="dropdown-icon lnr-file-empty"> </i>{{ $t('votingListManager') }}</button>
                </b-dropdown>
            </li>
        </ul>
        <b-popover @show="onPopoverShow" ref="PopoverMegaMenu" target="exPopover3" triggers="focus" placement="bottomright">

            <div class="dropdown-mega-menu">
                <div class="grid-menu grid-menu-3col">
                    <div class="no-gutters row">
                        <div class="col-sm-6 col-xl-4">
                            <ul class="nav flex-column">
                                <li class="nav-item-header nav-item">Overview</li>
                                <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon lnr-inbox"> </i><span>Contacts</span></a></li>
                                <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon lnr-book"> </i><span>Incidents</span>
                                    <div class="ml-auto badge badge-pill badge-danger">5</div>
                                </a></li>
                                <li class="nav-item"><a href="javascript:void(0);" class="nav-link"><i class="nav-link-icon lnr-picture"> </i><span>Companies</span></a></li>
                                <li class="nav-item"><a disabled href="javascript:void(0);" class="nav-link disabled"><i class="nav-link-icon lnr-file-empty"> </i><span>Dashboards</span></a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                            <ul class="nav flex-column">
                                <li class="nav-item-header nav-item">Favourites</li>
                                <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Reports Conversions</a></li>
                                <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Quick Start
                                    <div class="ml-auto badge badge-success">New</div>
                                </a></li>
                                <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Users &amp; Groups</a></li>
                                <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Proprieties</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                            <ul class="nav flex-column">
                                <li class="nav-item-header nav-item">Sales &amp; Marketing</li>
                                <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Queues</a></li>
                                <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Resource Groups</a></li>
                                <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Goal Metrics
                                    <div class="ml-auto badge badge-warning">3</div>
                                </a></li>
                                <li class="nav-item"><a href="javascript:void(0);" class="nav-link">Campaigns</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </b-popover>

    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faAngleDown,
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faAngleDown,
    );

    export default {
        components: {
            VuePerfectScrollbar,
            'font-awesome-icon': FontAwesomeIcon,
        },

        data() {
            return {
                role: null,
            }
        },

        methods: {
            onPopoverShow() {
                this.$refs.PopoverMegaMenu._toolpop.getTipElement().classList.add('rm-max-width')
            },

            setRole(role) {
                localStorage.setItem('role', role)
                this.$emit('roleChanged' ,role)
            }
        },

        mounted() {
            this.role = 'role' in localStorage ? this.$t(localStorage.role) : this.$t('voter')
            let roleLabel = localStorage.getItem('role');
            if(roleLabel === 'voter'){
                this.$router.replace('/voting')
            } else if (roleLabel === 'votingManager') {
                this.$router.replace('/voting-management/manage-voting')
            } else if(roleLabel === 'votingListManager'){
                this.$router.replace('/voting-list-management/manage-list')
            } else{
                this.$router.replace('/')
            }
        }
    }

</script>
