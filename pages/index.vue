<template>
  <div>
    <h1>{{ $t('welcome') }}</h1>
    <div style="padding:62.5% 0 0 0;position:relative;">
      <iframe
        src="https://player.vimeo.com/video/406483646?byline=0&portrait=0"
        style="position:absolute;top:0;left:0;width:640px;height:400px"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      >
      </iframe>
    </div>
    <script src="https://player.vimeo.com/api/player.js"></script>

    <h1>Qesadila e-voting system</h1>
    <p>(proof of concept)</p>
    <p>Version of the document: 0.1 Draft</p>
    <p>Date: 2020-04-21</p>
    <h2>Scope</h2>

    <p>
      Qesadila is open source e-voting software system, providing offered under
      licence: GNU GPLv3. By e-voting we mean the participation on making
      decisions of any group of voters, where is necessery to autorize the
      voters (using qualified electronic signature, or generated certificate)
      and to check, if only autorized voters participated and how:
    </p>
    <ul>
      <li>city council meetings of elected representatives of the city,</li>
      <li>citizens voting in participatory budget,</li>
      <li>members of the company executive boards</li>
      <li>members or volunters of th NGO</li>
    </ul>

    <p>
      The system is developed by volunteers and formaly provided by NGO Srdcom
      doma o.z. registered in Slovakia and engaged in election legislative
      changes. We take seriously the possibility to participate on democratic
      rights so as elections.
    </p>

    <h2>Disclaimer</h2>

    <p>
      Please note, that this is not a final application and we are not
      responsible for any incidencies. If you decide to test application, you
      should be careful and you should know, what you are doing. To be familiar
      with using desktop computer is just good supposition.
    </p>

    <p>
      The simplest approach to test Qesadila is to sign-up on the site
      <a href="https://www.qesadila.com">https://www.qesadila.com</a>. After
      e-mail confirmation you can sign-in and switch between roles: Anonymous,
      Voting List Manager, Voting Form Manager and Voter. To participate on
      Voting, You will need to to use our desktop application (Windows, macOS,
      Linux currently supported - see below) and to confirm our Terms and
      conditions.
    </p>

    <h2>Qesadila e-voting system&nbsp;consists of three parts:</h2>
    <ol>
      <li>
        <a href="https://dev.azure.com/Qesadila/_git/QesadilaAuth"
          >Desktop signing application
        </a>
      </li>
    </ol>
    <ol>
      <li>Instalation on Windows</li>
    </ol>
    <ol>
      <li>without .net core 3.1 installed</li>
    </ol>
    <ol>
      <li>
        Download:
        <a href="hhttps://apps.scholtz.sk/QesadilaAuth/win-sa/publish.zip"
          >https://apps.scholtz.sk/QesadilaAuth/win-sa/publish.zip&nbsp;-
          Windows
        </a>
      </li>
    </ol>
    <ol>
      <li>Instalation with .net core 3.1 installed</li>
    </ol>
    <ol>
      <li>
        Download:
        <a href="https://apps.scholtz.sk/QesadilaAuth/win/publish.zip"
          >https://apps.scholtz.sk/QesadilaAuth/win/publish.zip&nbsp;- Windows
        </a>
      </li>
    </ol>
    <ol>
      <li>Instalation on MAC / macOS</li>
    </ol>
    <ol>
      <li>
        Download:
        <a href="https://apps.scholtz.sk/QesadilaAuth/osx/publish.zip"
          >https://apps.scholtz.sk/QesadilaAuth/osx/publish.zip</a
        ><a href="https://apps.scholtz.sk/QesadilaAuth/osx/publish.zip"
          >&nbsp;- Mac
        </a>
      </li>
    </ol>
    <ol>
      <li>Instalation on Linux</li>
    </ol>
    <ol>
      <li>
        Download:
        <a href="https://apps.scholtz.sk/QesadilaAuth/linux/publish.zip"
          >https://apps.scholtz.sk/QesadilaAuth/linux/publish.zip&nbsp;- Linux
        </a>
      </li>
    </ol>
    <ol>
      <li>
        <a href="https://dev.azure.com/Qesadila/QesadilaBackend"
          >Qesadila Backend: </a
        ><a href="https://qesadila.azurewebsites.net/swagger/index.html"
          >https://qesadila.azurewebsites.net/swagger/index.html
        </a>
      </li>
      <li>
        <a href="https://github.com/Qesadila/QES/">Frontend web application: </a
        ><a href="https://www.qesadila.com/">https://www.qesadila.com </a>
      </li>
    </ol>

    <ol>
      <li>
        <h2>What it does and what it doesn&rsquo;t</h2>
      </li>
    </ol>
    <ol>
      <li>
        Qesadila is currently for testing purposes and is not dedicated for
        using in production yet.
      </li>
      <li>
        Please note, that to test voting using qualified electronic signature
        you have to use
      </li>
    </ol>
    <ol>
      <li>class 3 certificate at smart card using PKCS11 driver</li>
    </ol>
    <ol>
      <li>Tested using slovak identity card</li>
    </ol>
    <ol>
      <li>
        or if user does not have eID he / she can use certificate from system
        store or custom certificate
      </li>
    </ol>
    <ol>
      <li>
        Custom certificate can be
        <a href="https://github.com/Qesadila/QES/blob/master/cert/script"
          >generated&nbsp;using openssl library
        </a>
      </li>
    </ol>
    <ol>
      <li>
        In the Qesadila web app we distinguish four roles. To make proof of
        concept easier to test, any registered User can switch between roles on
        the website
        <a href="https://www.qesadila.com">https://www.qesadila.com</a
        >&nbsp;using select in the header. (In real life some person can be
        authorized to manage voters, another to create a voting and another to
        vote.)
      </li>
    </ol>
    <ol>
      <li>Anonymous</li>
    </ol>
    <ol>
      <li>any visitor on the website without sign-in</li>
      <li>can display voting results</li>
    </ol>
    <ol>
      <li>Voter List Manager</li>
    </ol>
    <ol>
      <li>user signed-up&nbsp;on the website registered</li>
      <li>can create / edit / delete Lists of Voters created by him/her</li>
    </ol>
    <ol>
      <li>Voting Form Manager</li>
    </ol>
    <ol>
      <li>can create / edit / delete Voting Forms created by him/her</li>
    </ol>
    <ol>
      <li>Voter</li>
    </ol>
    <ol>
      <li>
        can vote in all Voting Forms, connected with Voting List, which the
        Voter is member.
      </li>
    </ol>

    <ol>
      <li>
        <h3>Qesadila frontend</h3>
      </li>
    </ol>
    <ol>
      <li>Recommended / tested on:</li>
    </ol>
    <ol>
      <li>Internet Browser Chrome 80.0.3987.163, and Safari 13.1</li>
    </ol>
    <ol>
      <li>What id does</li>
    </ol>
    <ol>
      <li>Web app allows</li>
    </ol>
    <ol>
      <li>manage (create / edit / delete) Voting List,</li>
      <li>
        to create Voter&nbsp;by seting e-mail and uploading his / her
        voter.xml.asice signed gdpr consent,
      </li>
      <li>to assign Voter&nbsp;to Voter List,</li>
      <li>to create Voting Form,</li>
      <li>
        allows Voter&nbsp;to initiate vvoting process&nbsp;- sends request
        through backend to desktop application to sign the ballot using eID, or
        certificate in the desktop application,
      </li>
      <li>to display Voting results.</li>
    </ol>
    <ol>
      <li>Technology used:</li>
    </ol>
    <ol>
      <li>Vue.js, SignalR, Axios</li>
    </ol>
    <ol>
      <li>Licence: GNU GPL v3</li>
      <li>
        Source code:
        <a href="https://github.com/Qesadila/QES"
          >https://github.com/Qesadila/QES
        </a>
      </li>
      <li>CI/CD: Github Actions. Deploy time from commit to master: 3min</li>
    </ol>

    <ol>
      <li>
        <h3>QesadilaAuth - desktop application</h3>
      </li>
    </ol>
    <ol>
      <li>Minimum requirements</li>
    </ol>
    <ol>
      <li>Tested on Windows 10,</li>
      <li>Tested on macOS Mojave 10.14.6</li>
      <li>Linux (Desktop) - supported, not tested</li>
    </ol>
    <ol>
      <li>Setup your environment</li>
    </ol>
    <ol>
      <li>
        Download the package from
        <a href="https://apps.scholtz.sk/QesadilaAuth/win/publish.zip"
          >/publish.zip&nbsp;(for Windows) or<br /></a
        ><a href="https://apps.scholtz.sk/QesadilaAuth/osx/publish.zip"
          >/publish.zip&nbsp;(for macOS)&nbsp;or<br /></a
        ><a href="https://apps.scholtz.sk/QesadilaAuth/linux/publish.zip"
          >/publish.zip&nbsp;(for Linux) &nbsp; <br />and unpack it. Application
          launcher:
        </a>
      </li>
      <li>Run the application</li>
    </ol>
    <ol>
      <li>Windows: QesadilaAvaloniaSigner.exe</li>
      <li>Linux, Mac: QesadilaAvaloniaSigner</li>
    </ol>
    <ol>
      <li>Technology used:</li>
    </ol>
    <ol>
      <li>written in .net core 3</li>
      <li>Avalonia</li>
      <li>SignalR host</li>
    </ol>
    <ol>
      <li>Licence: GNU GPL v3</li>
      <li>
        Source code:
        <a href="https://dev.azure.com/Qesadila/_git/QesadilaAuth"
          >https://dev.azure.com/Qesadila/_git/QesadilaAuth
        </a>
      </li>
    </ol>

    <ol>
      <li>
        <h3>Qesadila Backend</h3>
      </li>
    </ol>
    <ol>
      <li>Minimum requirements</li>
    </ol>
    <ol>
      <li>Running using docker container</li>
      <li>
        Can be run in kubernetes, as azure web app or self hosted docker
        container
      </li>
    </ol>
    <ol>
      <li>Tested as azure web app</li>
    </ol>
    <ol>
      <li>
        Database: Configuration option between MsSQL, CosmosDB, MariaDB, MySQL,
        PostgreSQL, InMemory
      </li>
    </ol>
    <ol>
      <li>Tested with InMemory and CosmosDB</li>
      <li>Default system file storage</li>
      <li>
        We had technical issues creating MsSQL server as azure new server
        services were blocked at the time being.
      </li>
    </ol>
    <ol>
      <li>
        Emailing with templating: Currently supports only Sendgrid dynamic
        templates
      </li>
    </ol>
    <ol>
      <li>Default no emailing, with no email validation</li>
    </ol>
    <ol>
      <li>Data storage: Azure blob storage or System file storage</li>
    </ol>
    <ol>
      <li>Tested in azure blob storage, default is system file storage</li>
    </ol>
    <ol>
      <li>
        Class diagram:
        <a href="https://app.quickdatabasediagrams.com/%23/d/5Meb4N"
          >https://app.quickdatabasediagrams.com/#/d/5Meb4N&nbsp;
        </a>
      </li>
      <li>Licence: GNU GPL v3</li>
      <li>
        Source code:
        <a href="https://dev.azure.com/Qesadila/QesadilaBackend"
          >https://dev.azure.com/Qesadila/QesadilaBackend&nbsp;
        </a>
      </li>
      <li>
        CI/CD: Devops Pipelines, Testing: Deploy time 3 mins, docker image is
        pushed also to public
        <a href="https://hub.docker.com/r/qesadila/qesadila-backend"
          >docker hub
        </a>
      </li>
    </ol>

    <ol>
      <li>
        <h2>Main scenarios</h2>
      </li>
    </ol>
    <p>
      Presamption: You signed-up on the
      <a href="http://www.qesadila.com"
        >http://www.qesadila.com, confirmed e-mail and you are signed-in on the
        website.
      </a>
    </p>

    <ol>
      <li>Scenario &ldquo;Before voting&ldquo;</li>
    </ol>
    <ol>
      <li>
        Sign-in on the
        <a href="http://www.qesadila.com">http://www.qesadila.com. </a>
      </li>
      <li>Change your rolle to Voting List Manager.</li>
      <li>
        Create Voting List and add a Voter (your e-mail and this document signed
        for example on the
        <a href="https://zep.disig.sk/Portal"
          >https://zep.disig.sk/Portal&nbsp;website).
        </a>
      </li>
      <li>Change your rolle to Voting List Manager.</li>
      <li>
        Create Voting Form and asociate the form with Voting List, you created
        before.
      </li>
    </ol>

    <ol>
      <li>Scenario &ldquo;Vote&rdquo;</li>
    </ol>
    <ol>
      <li>Presamtion:</li>
    </ol>
    <ol>
      <li>
        You already installed Qesadila desktop application on your desktop
        computer and application is running.
      </li>
      <li>
        On the
        <a href="http://www.qesadila.com">http://www.qesadila.com&nbsp; </a>
      </li>
    </ol>
    <ol>
      <li>
        Sign-in on the
        <a href="http://www.qesadila.com">http://www.qesadila.com. </a>
      </li>
      <li>Change your rolle to Voting List Manager.</li>
      <li>Choose the voting, you&rsquo;d like to participate</li>
      <li>Qesadila will ask you for authentication:</li>
    </ol>
    <p><img title="" src="images/image1.png" alt="" /></p>
    <ol>
      <li>Connect your reader with eID to your desktop computer.</li>
      <li>Switch to desktop application</li>
      <li>
        In the desktop application authenticate your self to Qesadila system.
      </li>
    </ol>
    <p><img title="" src="images/image3.png" alt="" /></p>
    <ol>
      <li>
        In the desktop application click on Start PKCS11 Authentication to
        desktop application and authorize, if you are asked.
      </li>
      <li>Enter your eID BOK code:</li>
    </ol>
    <p><img title="" src="images/image2.png" alt="" /></p>
    <ol>
      <li>
        After few seconds you will see in the desktop application, you are
        authenticated:
      </li>
    </ol>
    <p><img title="" src="images/image4.png" alt="" /></p>
    <ol>
      <li>
        On the website
        <a href="http://www.qesadila.com">http://www.qesadila.com: </a>
      </li>
    </ol>
    <ol>
      <li>Check the web aplication to see, you are authorized to vote:</li>
    </ol>
    <p><img title="" src="images/image8.png" alt="" /></p>
    <ol>
      <li>Choose your answer and submit your voting ballot.</li>
      <li>
        In the desktop application you can see check your decision before
        voting:
      </li>
    </ol>
    <p><img title="" src="images/image6.png" alt="" /></p>
    <ol>
      <li>Click on the &ldquo;Sign document&rdquo; button.</li>
      <li>Application will ask you to enter the eID PIN code</li>
    </ol>
    <p><img title="" src="images/image7.png" alt="" /></p>

    <ol>
      <li>Wait and click on &ldquo;Send&rdquo; button:</li>
    </ol>

    <p><img title="" src="images/image5.png" alt="" /></p>
    <ol>
      <li>Go back to Qesadila website and check, your ballot was accepted.</li>
    </ol>

    <ol>
      <li>
        <h2>Technical proof of concept</h2>
      </li>
    </ol>
    <ol>
      <li>
        All voting is currently public, so we do not consider insecure network
        traffic as an issue.
      </li>
      <li>
        Voter fills in voting form in the web application. Json is created.
      </li>
      <li>
        Considering voter has already chosen his identity by selecting
        certificate he is going to sign documents, he receives the filled in
        voting form from web app.
      </li>
      <li>
        Communication between website and signal r server in desktop application
        does not leave computer.
      </li>
      <li>
        Voter reviews the json in desktop application.<br />Signing applications
        shows him the raw data as well as json formatted data.<br />Signer sees
        something like:
      </li>
    </ol>
    <p>
      {<br />
      &ldquo;Voting&rdquo;: &ldquo;Voting in matter 12345&rdquo;,<br />
      &ldquo;Answers&rdquo;: {
    </p>
    <p>&ldquo;What do you want in this park?&rdquo;: &ldquo;Trees&rdquo;,</p>
    <p>&ldquo;Do you want to fight corona?&rdquo;: &ldquo;Yes&rdquo;</p>
    <p>
      },<br />
      &ldquo;VotinfFormId&rdquo;:&rdquo;GUID-OF-voting-form&rdquo;
    </p>
    <p>}</p>
    <p>Voter can see what he signs for.</p>
    <ol>
      <li>
        Voter clicks sign, if the smart card requires pin to sign messages the
        pin is entered.
      </li>
      <li>
        Voter can see now the original document, formatted original document,
        signed document and hash code of signed document. Because of shortage of
        time, we did not parse the original document from the signed document
        back, but this is something that should be done before production.
      </li>
      <li>
        He sends this information to the web app. Web app sends it to the
        backend.
      </li>
      <li>
        The connection between desktop app, web app and backend is considered
        not trusted.
      </li>
      <li>Qesadila backend received the file.</li>
    </ol>
    <ol>
      <li>
        Source code: Method SubmitVote&nbsp;<a
          href="https://dev.azure.com/Qesadila/_git/QesadilaBackend?path%3D%252FQesadilaBackend%252FControllers%252FAPI%252FVoterController.cs"
          >https://dev.azure.com/Qesadila/_git/QesadilaBackend?path=%2FQesadilaBackend%2FControllers%2FAPI%2FVoterController.cs
        </a>
      </li>
      <li>
        First check if any message was received and it is possible to parse it.
      </li>
      <li>Identifies the voting form from the identifier provided.</li>
      <li>Look up the voter and gets his public key stored in the database</li>
      <li>Checks if the voter can cast votes in this voting.</li>
      <li>
        Verify the signature in the document with the voter&rsquo;s public key
      </li>
      <li>Increase increment number in the VotingForm</li>
      <li>Return to the web app the VoterBallot and show it to user</li>
      <li>
        User can check - hash of the file to be stored in the voting to be same
        as he had in the desktop app (with the vote has not been manipulated).
        He can check this also after voting with accounted votes.
      </li>
      <li>
        The increase of increment number in form voting as well global voting
      </li>
      <li>Time is decided by the server.</li>
      <li>
        Because of shortage of time, we were not able to implement storing hash
        of the voter ballot to blockchain to verify that with the voterballot
        stored in the system has not been manipulated.
      </li>
    </ol>
    <ol start="11">
      <li>After time comes up, the voting is finalized:</li>
    </ol>
    <ol>
      <li>
        Source code:
        <a
          href="https://dev.azure.com/Qesadila/_git/QesadilaBackend?path%3D%252FQesadilaBackend%252FControllers%252FAPI%252FVotingResultController.cs"
          >https://dev.azure.com/Qesadila/_git/QesadilaBackend?path=%2FQesadilaBackend%2FControllers%2FAPI%2FVotingResultController.cs
        </a>
      </li>
    </ol>
  </div>
</template>

<script>
export default {}
</script>
