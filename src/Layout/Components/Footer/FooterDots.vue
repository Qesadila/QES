<template>
    <div class="footer-dots">
        <div class="dots-separator"></div>
        <b-dropdown toggle-class="dot-btn-wrapper" variant="link" no-caret dropup>
            <span slot="button-content">
                <i class="dot-btn-icon lnr-earth icon-gradient bg-happy-itmeo"></i>
            </span>
            <div class="dropdown-menu-header">
                <div class="dropdown-menu-header-inner pt-4 pb-4 bg-focus">
                    <div class="menu-header-image opacity-05 dd-header-bg-4"></div>
                    <div class="menu-header-content text-center text-white"><h6 class="menu-header-subtitle mt-0">{{ $t('chooseLanguage') }}</h6></div>
                </div>
            </div>
            <button type="button" tabindex="0" class="dropdown-item" @click="changeLocale('en')">
                <country-flag country="US" class="mr-3 opacity-8"/>
                <span>USA</span>
            </button>
            <button type="button" tabindex="0" class="dropdown-item" @click="changeLocale('sk')">
                <country-flag country="SVK" class="mr-3 opacity-8"/>
                <span>{{ $t('slovakia') }}</span>
            </button>
        </b-dropdown>
        <div class="dots-separator"></div>
    </div>
</template>

<script>

    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import CountryFlag from 'vue-country-flag'

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faArrowUp,
        faCog,
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faArrowUp,
        faCog,
    );

    export default {
        components: {
            VuePerfectScrollbar,
            CountryFlag,
            'font-awesome-icon': FontAwesomeIcon,
        },
        data: () => ({}),
        methods: {
            changeLocale(lang) {
                this.$root.$i18n.locale = lang
                localStorage.setItem('locale', lang)
            }
        }
    }
</script>

