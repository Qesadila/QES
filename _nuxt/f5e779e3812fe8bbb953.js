(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{497:function(e,t,n){"use strict";n.r(t);var h={},r=n(64),component=Object(r.a)(h,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Qesadila Auth")]),e._v(" "),n("p",[e._v("Qesadila auth is authentication and signature system.")]),e._v(" "),n("h2",[e._v("Download")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{target:"_blank",href:"https://apps.scholtz.sk/QesadilaAuth/win/publish.zip"}},[e._v("Windows")])]),e._v(" "),n("li",[n("a",{attrs:{target:"_blank",href:"https://apps.scholtz.sk/QesadilaAuth/linux/publish.zip"}},[e._v("Linux")])]),e._v(" "),n("li",[n("a",{attrs:{target:"_blank",href:"https://apps.scholtz.sk/QesadilaAuth/osx/publish.zip"}},[e._v("OSX")])])]),e._v(" "),n("h2",[e._v("Signature system")]),e._v(" "),n("p",[e._v("Supported signature standards:")]),e._v(" "),n("ul",[n("li",[e._v("\n      eID cards with X509Certificates with detached private key on smart cards\n      or identification cards using PKCS#11 library\n    ")]),e._v(" "),n("li",[e._v("System or custom X509Certificates with private key")]),e._v(" "),n("li",[e._v("PGP private and public key")])]),e._v(" "),n("p",[e._v("\n    Qesadila Auth receives JSON file readable by human, so he knows what he is\n    signing. After signature the file is encapsulated in other json file, and\n    human can see or check original content, signature, and hash of the signed\n    message.\n  ")]),e._v(" "),n("h2",[e._v("Authentication system")]),e._v(" "),n("p",[e._v("\n    By signing the message with private key user authenticate against the\n    website.\n  ")]),e._v(" "),n("ol",[n("li",[e._v("\n      Session is requested from website. Session is one time authorisation\n      token with validity of few minutes.\n    ")]),e._v(" "),n("li",[e._v("\n      User signs message stating that he wants to authenticate to specific\n      website. Current time is included this message.\n    ")]),e._v(" "),n("li",[e._v("\n      QesadilaAuth sends the message to the website. Website sends the message\n      to the server.\n    ")]),e._v(" "),n("li",[e._v("\n      Server verifies the authentication with previous registration and\n      validity of authentication session.\n    ")])])])}],!1,null,null,null);t.default=component.exports}}]);