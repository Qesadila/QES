export const anonymousRoutes = [
  {
    icon: 'mdi-home',
    title: 'navigation.home',
    to: `/`
  },
  {
    icon: 'mdi-apps',
    title: 'navigation.votingResults',
    to: `/anonym`
  },
  {
    icon: 'mdi-comment-text-outline',
    title: 'navigation.termsAndConditions',
    to: '/terms-and-conditions'
  },
  {
    icon: 'mdi-lock-reset',
    title: 'navigation.qesAuth',
    to: '/qesadila-auth'
  },
  {
    icon: 'mdi-apps',
    title: 'navigation.verifyMail',
    to: '/auth/verify-email'
  },
  {
    icon: 'mdi-timeline-help-outline',
    title: 'navigation.FAQ',
    to: '/faq'
  }
]

export const voterRoutes = [
  {
    icon: 'mdi-home',
    title: 'navigation.home',
    to: `/`
  },
  {
    icon: 'mdi-lock-reset',
    title: 'navigation.qesAuth',
    to: '/qesadila-auth'
  },
  {
    icon: 'mdi-format-list-checks',
    title: 'navigation.listOfCurrentVotings',
    to: `/voter`
  },
  {
    icon: 'mdi-package-variant-closed',
    title: 'navigation.lastSubmission',
    to: `/voter/submission`
  }
]

export const voterListManagerRoutes = [
  {
    icon: 'mdi-home',
    title: 'navigation.home',
    to: `/`
  },
  {
    icon: 'mdi-format-list-checks',
    title: 'navigation.voterLists',
    to: `/voter-list-manager`
  },
  {
    icon: 'mdi-note-plus-outline',
    title: 'navigation.createNewVoterList',
    to: `/voter-list-manager/form/create`
  }
]

export const votingFormManagerRoutes = [
  {
    icon: 'mdi-home',
    title: 'navigation.home',
    to: `/`
  },
  {
    icon: 'mdi-format-list-checks',
    title: 'navigation.listOfForms',
    to: `/voting-form-manager`
  },
  {
    icon: 'mdi-account-multiple-plus-outline',
    title: 'navigation.createNewVoterForm',
    to: `/voting-form-manager/form/create`
  }
]
