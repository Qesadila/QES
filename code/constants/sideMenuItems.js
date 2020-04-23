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
  }
]

export const voterRoutes = [
  {
    icon: 'mdi-home',
    title: 'navigation.home',
    to: `/`
  },
  {
    icon: 'mdi-format-list-checks',
    title: 'navigation.listOfCurrentVotings',
    to: `/voter`
  },
  {
    icon: 'mdi-format-list-checks',
    title: 'navigation.listOfPastVotings',
    to: `/voter`
  }
]

export const votingListManagerRoutes = [
  {
    icon: 'mdi-home',
    title: 'navigation.home',
    to: `/`
  },
  {
    icon: 'mdi-format-list-checks',
    title: 'navigation.votingLists',
    to: `/voting-list-manager`
  },
  {
    icon: 'mdi-note-plus-outline',
    title: 'navigation.createNewVoterList',
    to: `/voting-list-manager/form/create`
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
