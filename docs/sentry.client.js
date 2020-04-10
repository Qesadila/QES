import VueLib from 'vue'
import * as Sentry from '@sentry/browser'
import { Dedupe, ExtraErrorData, ReportingObserver, RewriteFrames, Vue } from '@sentry/integrations'

export default function (ctx, inject) {
  const opts = Object.assign({}, {"dsn":"","environment":"production"}, {
    integrations: [
      new Dedupe({}),
      new ExtraErrorData({}),
      new ReportingObserver({}),
      new RewriteFrames({}),
      new Vue({Vue: VueLib, ...{"attachProps":true}})
    ]
  })

  // Inject Sentry to the context as $sentry
  inject('sentry', Sentry)
  ctx.$sentry = Sentry
}
