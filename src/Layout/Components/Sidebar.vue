<template>
    <div :class="sidebarbg" class="app-sidebar sidebar-shadow bg-sunny-morning text-darker" @mouseover="toggleSidebarHover('add','closed-sidebar-open')" @mouseleave="toggleSidebarHover('remove','closed-sidebar-open')">
        <div class="app-header__logo">
            <div class="logo-src" style="margin-left: auto"/>
            <div class="header__pane ml-auto">
                <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" v-bind:class="{ 'is-active' : isOpen }" @click="toggleBodyClass('closed-sidebar')">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
        <div class="app-sidebar-content">
            <VuePerfectScrollbar class="app-sidebar-scroll" v-once>
                <sidebar-menu showOneChild :menu="menu"/>
            </VuePerfectScrollbar>
        </div>

    </div>
</template>

<script>
    import {SidebarMenu} from 'vue-sidebar-menu'
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'


    export default {
        components: {
            SidebarMenu,
            VuePerfectScrollbar
        },
        data() {
            return {
                votingManagementMenu: {
                        title: this.$t('VotingManagement'),
                        icon: 'pe-7s-note2',
                        href: '/',
                        child: [
                            {
                                href: '/voting-management/manage-voting',
                                title: this.$t('votingsList')
                            },
                            {
                                href: '/voting-management/new-voting',
                                title: this.$t('CreateVoting')
                            }                            
                        ]
    },
    votingListManagementMenu: {
                        title: this.$t('VotingListManagement'),
                        icon: 'lnr-text-align-justify',
                        href: '/voting-list-management/manage-list',
                        child: [
                            {
                                href: '/voting-list-management/manage-voter',
                                title: this.$t('ManageVoters')
                            },
                            {
                                href: '/voting-list-management/manage-list',
                                title: this.$t('VotingListManagement')
                            }                            
                        ]
    },
    votingMenu: {
                        title: this.$t('Votings'),
                        icon: 'pe-7s-note2',
                        href: '/voting',
                        child: [
                            {
                                href: '/voting/history',
                                title: this.$t('VotingHistory.pageHeading')
                            },                            
                            {
                                href: '/voting/vote/1',
                                title: this.$t('Voting') + ' 1'
                            },
                            {
                                href: '/voting/vote/2',
                                title: this.$t('Voting') + ' 2'
                            },
                        ]
                    },

                isOpen: false,
                sidebarActive: false,

                menu: [],
                collapsed: true,

                windowWidth: 0,

            }
        },
        props: {
            sidebarbg: String,

        },
        methods: {
            initMenu() {
                if ('role' in localStorage) {
                    if (localStorage.role === 'votingListManager') {
                        this.menu.push(this.votingListManagementMenu)
                    } else if (localStorage.role === 'votingManager') {
                        this.menu.push(this.votingManagementMenu)
                    }
                }

                this.menu.push(this.votingMenu)
            },

            toggleBodyClass(className) {
                const el = document.body;
                this.isOpen = !this.isOpen;

                if (this.isOpen) {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
            toggleSidebarHover(add, className) {
                const el = document.body;
                this.sidebarActive = !this.sidebarActive;

                this.windowWidth = document.documentElement.clientWidth;

                if (this.windowWidth > '992') {
                    if (add === 'add') {
                        el.classList.add(className);
                    } else {
                        el.classList.remove(className);
                    }
                }
            },
            getWindowWidth() {
                const el = document.body;

                this.windowWidth = document.documentElement.clientWidth;

                if (this.windowWidth < '1350') {
                    el.classList.add('closed-sidebar', 'closed-sidebar-md');
                } else {
                    el.classList.remove('closed-sidebar', 'closed-sidebar-md');
                }
            },
        },
        mounted() {
            this.initMenu();

            this.$nextTick(function () {
                window.addEventListener('resize', this.getWindowWidth);

                //Init
                this.getWindowWidth()
            })
        },

        beforeDestroy() {
            window.removeEventListener('resize', this.getWindowWidth);
        }
    }
</script>
