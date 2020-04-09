<template>
    <div class="header-dots">
        <b-dropdown toggle-class="p-0 mr-2" variant="link" no-caret right>
            <span slot="button-content">
                <div class="icon-wrapper icon-wrapper-alt rounded-circle">
                    <div class="icon-wrapper-bg bg-focus"></div>
                    <div class="language-icon">
                        <country-flag :country="this.$root.$i18n.locale === 'en' ? 'USA' : 'SVK'" class="opacity-8"/>
                    </div>
                </div>
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

