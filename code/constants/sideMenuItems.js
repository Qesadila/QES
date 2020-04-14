export const anonymousRoutes = [
  {
    icon: 'mdi-apps',
    title: 'Voting results',
    to: `/anonym`
  },
  {
    icon: 'mdi-comment-text-outline',
    title: 'Terms and conditions',
    to: '/terms-and-conditions'
  }
]

export const voterRoutes = [
  {
    icon: 'mdi-home',
    title: 'Home',
    to: `/`
  },
  {
    icon: 'mdi-format-list-checks',
    title: 'List of current votings',
    to: `/voter`
  },
  {
    icon: 'mdi-format-list-checks',
    title: 'List of past votings',
    to: `/voter`
  }
]

export const votingListManagerRoutes = [
  {
    icon: 'mdi-home',
    title: 'Home',
    to: `/`
  },
  {
    icon: 'mdi-format-list-checks',
    title: 'List of voting forms',
    to: `/voting-list-manager`
  },
  {
    icon: 'mdi-account-multiple-plus-outline',
    title: 'Create new voter form',
    to: `/voting-form-manager/form/create`
  }
]

export const votingFormManagerRoutes = [
  {
    icon: 'mdi-home',
    title: 'Home',
    to: `/`
  },
  {
    icon: 'mdi-format-list-checks',
    title: 'List of forms',
    to: `/voting-form-manager`
  },
  {
    icon: 'mdi-note-plus-outline',
    title: 'Create list of voters',
    to: `/voting-list-manager/form/create`
  }
]
