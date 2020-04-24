<template>
  <div>
    <h1>Qesadila Auth</h1>
    <p>Qesadila auth is authentication and signature system.</p>
    <div v-if="this.$store.state.signalR.signalRIdentity">
      <h2>Current identity</h2>
      <v-simple-table>
        <tr>
          <td>Identity:</td>
          <td>{{ this.$store.state.signalR.signalRIdentity }}</td>
        </tr>
        <tr>
          <td>Certificate:</td>
          <td>{{ this.$store.state.signalR.signalRCertHash }}</td>
        </tr>
        <tr>
          <td>Status:</td>
          <td>{{ this.$store.state.signalR.signalRStatusText }}</td>
        </tr>
      </v-simple-table>
    </div>
    <h2>Download</h2>
    <ul>
      <li>
        <a
          target="_blank"
          href="https://apps.scholtz.sk/QesadilaAuth/win/publish.zip"
          >Windows</a
        >
      </li>
      <li>
        <a
          target="_blank"
          href="https://apps.scholtz.sk/QesadilaAuth/linux/publish.zip"
          >Linux</a
        >
      </li>
      <li>
        <a
          target="_blank"
          href="https://apps.scholtz.sk/QesadilaAuth/osx/publish.zip"
          >OSX</a
        >
      </li>
    </ul>
    <h2>Signature system</h2>
    <p>Supported signature standards:</p>
    <ul>
      <li>
        eID cards with X509Certificates with detached private key on smart cards
        or identification cards using PKCS#11 library
      </li>
      <li>System or custom X509Certificates with private key</li>
      <li>PGP private and public key</li>
    </ul>
    <p>
      Qesadila Auth receives JSON file readable by human, so he knows what he is
      signing. After signature the file is encapsulated in other json file, and
      human can see or check original content, signature, and hash of the signed
      message.
    </p>
    <h2>Authentication system</h2>
    <p>
      By signing the message with private key user authenticate against the
      website.
    </p>
    <ol>
      <li>
        Session is requested from website. Session is one time authorisation
        token with validity of few minutes.
      </li>
      <li>
        User signs message stating that he wants to authenticate to specific
        website. Current time is included this message.
      </li>
      <li>
        QesadilaAuth sends the message to the website. Website sends the message
        to the server.
      </li>
      <li>
        Server verifies the authentication with previous registration and
        validity of authentication session.
      </li>
    </ol>
  </div>
</template>

<script>
export default {}
</script>
