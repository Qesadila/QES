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

    <h1 class="c24" id="h.vm2qww64y9qw">
      <span class="c20">Qesadila e-voting system</span>
    </h1>
    <p class="c22 subtitle" id="h.ehqbvpd2iqto">
      <span class="c19 c26">(proof of concept)</span>
    </p>
    <p class="c10">
      <span class="c27 c19">Version of the document: 0.1 Draft</span>
    </p>
    <p class="c10"><span class="c19">Date: 2020-04-21</span></p>
    <h2 class="c18" id="h.zddgsw9fsip"><span class="c8">Scope</span></h2>
    <p class="c5"><span class="c3"></span></p>
    <p class="c10">
      <span class="c3"
        >Qesadila is open source e-voting software system, providing offered
        under licence: GNU GPLv3. By e-voting we mean the participation on
        making decisions of any group of voters, where is necessery to autorize
        the voters (using qualified electronic signature, or generated
        certificate) and to check, if only autorized voters participated and
        how:</span
      >
    </p>
    <ul class="c2 lst-kix_al23kmdoz5f5-0 start">
      <li class="c10 c13">
        <span class="c3"
          >city council meetings of elected representatives of the city,
        </span>
      </li>
      <li class="c10 c13">
        <span class="c3">citizens voting in participatory budget,</span>
      </li>
      <li class="c10 c13">
        <span class="c3">members of the company executive boards</span>
      </li>
      <li class="c10 c13">
        <span class="c3">members or volunters of th NGO</span>
      </li>
    </ul>
    <p class="c5"><span class="c3"></span></p>
    <p class="c10">
      <span class="c3"
        >The system is developed by volunteers and formaly provided by NGO
        Srdcom doma o.z. registered in Slovakia and engaged in election
        legislative changes. We take seriously the possibility to participate on
        democratic rights so as elections.</span
      >
    </p>
    <p class="c5"><span class="c3"></span></p>
    <h2 class="c18" id="h.tcvd9hioz74p"><span class="c8">Disclaimer</span></h2>
    <p class="c5"><span class="c3"></span></p>
    <p class="c10">
      <span class="c3"
        >Please note, that this is not a final application and we are not
        responsible for any incidencies. If you decide to test application, you
        should be careful and you should know, what you are doing. To be
        familiar with using desktop computer is just good supposition.</span
      >
    </p>
    <p class="c5"><span class="c3"></span></p>
    <p class="c10">
      <span
        >The simplest approach to test Qesadila is to sign-up on the site </span
      ><span class="c16"
        ><a
          class="c7"
          href="https://www.google.com/url?q=https://www.qesadila.com&amp;sa=D&amp;ust=1587468292180000"
          >https://www.qesadila.com</a
        ></span
      ><span class="c3"
        >. After e-mail confirmation you can sign-in and switch between roles:
        Anonymous, Voting List Manager, Voting Form Manager and Voter. To
        participate on Voting, You will need to to use our desktop application
        (Windows, macOS, Linux currently supported - see below) and to confirm
        our Terms and conditions.</span
      >
    </p>
    <p class="c5"><span class="c3"></span></p>
    <p class="c5"><span class="c3"></span></p>
    <h2 class="c18" id="h.b477xtc2yoe2">
      <span>Qesadila e-voting system</span
      ><span class="c8">&nbsp;consists of three parts:</span>
    </h2>
    <ol class="c2 lst-kix_b8mdv27g2tmd-0 start" start="1">
      <li class="c10 c13">
        <span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://dev.azure.com/Qesadila/_git/QesadilaAuth&amp;sa=D&amp;ust=1587468292182000"
            >Desktop signing application</a
          ></span
        >
      </li>
    </ol>
    <ol class="c2 lst-kix_b8mdv27g2tmd-1 start" start="1">
      <li class="c4"><span class="c3">Instalation on Windows</span></li>
    </ol>
    <ol class="c2 lst-kix_b8mdv27g2tmd-2 start" start="1">
      <li class="c0">
        <span class="c3">without .net core 3.1 installed</span>
      </li>
    </ol>
    <ol class="c2 lst-kix_b8mdv27g2tmd-3 start" start="1">
      <li class="c9">
        <span>Download: </span
        ><span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://apps.scholtz.sk/QesadilaAuth/win-sa/publish.zip&amp;sa=D&amp;ust=1587468292183000"
            >https://apps.scholtz.sk/QesadilaAuth/win-sa/publish.zip</a
          ></span
        ><span class="c3">&nbsp;- Windows</span>
      </li>
    </ol>
    <ol class="c2 lst-kix_b8mdv27g2tmd-2" start="2">
      <li class="c0">
        <span class="c3">Instalation with .net core 3.1 installed</span>
      </li>
    </ol>
    <ol class="c2 lst-kix_b8mdv27g2tmd-3 start" start="1">
      <li class="c9">
        <span>Download: </span
        ><span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://apps.scholtz.sk/QesadilaAuth/win/publish.zip&amp;sa=D&amp;ust=1587468292184000"
            >https://apps.scholtz.sk/QesadilaAuth/win/publish.zip</a
          ></span
        ><span class="c3">&nbsp;- Windows</span>
      </li>
    </ol>
    <ol class="c2 lst-kix_b8mdv27g2tmd-1" start="2">
      <li class="c4"><span class="c3">Instalation on MAC / macOS </span></li>
    </ol>
    <ol class="c2 lst-kix_b8mdv27g2tmd-2 start" start="1">
      <li class="c0">
        <span>Download: </span
        ><span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://apps.scholtz.sk/QesadilaAuth/osx/publish.zip&amp;sa=D&amp;ust=1587468292184000"
            >https://apps.scholtz.sk/QesadilaAuth/osx/publish.zi</a
          ></span
        ><span
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://apps.scholtz.sk/QesadilaAuth/osx/publish.zip&amp;sa=D&amp;ust=1587468292184000"
            >p</a
          ></span
        ><span class="c3">&nbsp;- Mac</span>
      </li>
    </ol>
    <ol class="c2 lst-kix_b8mdv27g2tmd-1" start="3">
      <li class="c4"><span class="c3">Instalation on Linux</span></li>
    </ol>
    <ol class="c2 lst-kix_b8mdv27g2tmd-2 start" start="1">
      <li class="c0">
        <span>Download: </span
        ><span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://apps.scholtz.sk/QesadilaAuth/linux/publish.zip&amp;sa=D&amp;ust=1587468292185000"
            >https://apps.scholtz.sk/QesadilaAuth/linux/publish.zip</a
          ></span
        ><span>&nbsp;- Linux</span>
      </li>
    </ol>
    <ol class="c2 lst-kix_b8mdv27g2tmd-0" start="2">
      <li class="c10 c13">
        <span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://dev.azure.com/Qesadila/QesadilaBackend&amp;sa=D&amp;ust=1587468292185000"
            >Qesadila Backend</a
          ></span
        ><span>: </span
        ><span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://qesadila.azurewebsites.net/swagger/index.html&amp;sa=D&amp;ust=1587468292186000"
            >https://qesadila.azurewebsites.net/swagger/index.html</a
          ></span
        ><span>&nbsp;</span>
      </li>
      <li class="c10 c13">
        <span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://github.com/Qesadila/QES/&amp;sa=D&amp;ust=1587468292186000"
            >Frontend web application</a
          ></span
        ><span>: </span
        ><span class="c28"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://www.qesadila.com/&amp;sa=D&amp;ust=1587468292187000"
            >https://www.qesadila.com</a
          ></span
        >
      </li>
    </ol>
    <p class="c5"><span class="c3"></span></p>
    <ol class="c2 lst-kix_467v1fe4e5b8-0 start" start="1">
      <li class="c18 c13">
        <h2 id="h.t4j80es1rdsd" style="display:inline">
          <span class="c8">What it does and what it doesn&rsquo;t</span>
        </h2>
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-1 start" start="1">
      <li class="c4">
        <span class="c3"
          >Qesadila is currently for testing purposes and is not dedicated for
          using in production yet.</span
        >
      </li>
      <li class="c4">
        <span class="c3"
          >Please note, that to test voting using qualified electronic signature
          you have to use</span
        >
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-2 start" start="1">
      <li class="c0">
        <span class="c3"
          >class 3 certificate at smart card using PKCS11 driver</span
        >
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-3 start" start="1">
      <li class="c9">
        <span class="c3">Tested using slovak identity card</span>
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-2" start="2">
      <li class="c0">
        <span class="c3"
          >or if user does not have eID he / she can use certificate from system
          store or custom certificate</span
        >
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-3 start" start="1">
      <li class="c9">
        <span>Custom certificate can be </span
        ><span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://github.com/Qesadila/QES/blob/master/cert/script&amp;sa=D&amp;ust=1587468292188000"
            >generated</a
          ></span
        ><span class="c3">&nbsp;using openssl library</span>
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-1" start="3">
      <li class="c4">
        <span
          >In the Qesadila web app we distinguish four roles. To make proof of
          concept easier to test, any registered User can switch between roles
          on the website </span
        ><span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://www.qesadila.com&amp;sa=D&amp;ust=1587468292189000"
            >https://www.qesadila.com</a
          ></span
        ><span class="c3"
          >&nbsp;using select in the header. (In real life some person can be
          authorized to manage voters, another to create a voting and another to
          vote.)</span
        >
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-2 start" start="1">
      <li class="c0"><span class="c14 c11">Anonymous</span></li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-3 start" start="1">
      <li class="c9">
        <span class="c3">any visitor on the website without sign-in</span>
      </li>
      <li class="c9"><span class="c3">can display voting results </span></li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-2" start="2">
      <li class="c0"><span class="c14 c11">Voter List Manager</span></li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-3 start" start="1">
      <li class="c9">
        <span>user signed-up</span
        ><span class="c3">&nbsp;on the website registered</span>
      </li>
      <li class="c9">
        <span class="c3"
          >can create / edit / delete Lists of Voters created by him/her</span
        >
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-2" start="3">
      <li class="c0"><span class="c11 c14">Voting Form Manager</span></li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-3 start" start="1">
      <li class="c9">
        <span class="c3"
          >can create / edit / delete Voting Forms created by him/her</span
        >
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-2" start="4">
      <li class="c0"><span class="c14 c11">Voter</span></li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-3 start" start="1">
      <li class="c9">
        <span
          >can vote in all Voting Forms, connected with Voting List, which the
          Voter is member.</span
        >
      </li>
    </ol>
    <p class="c5"><span class="c3"></span></p>
    <ol class="c2 lst-kix_467v1fe4e5b8-0" start="2">
      <li class="c15 c13">
        <h3 id="h.4tvvjivuw4xh" style="display:inline">
          <span class="c23">Qesadila frontend </span>
        </h3>
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-1 start" start="1">
      <li class="c4"><span class="c14 c11">Recommended / tested on:</span></li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-2 start" start="1">
      <li class="c0">
        <span class="c3"
          >Internet Browser Chrome 80.0.3987.163, and Safari 13.1</span
        >
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-1" start="2">
      <li class="c4"><span class="c14 c11">What id does</span></li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-2 start" start="1">
      <li class="c0"><span class="c3">Web app allows </span></li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-3 start" start="1">
      <li class="c9">
        <span>manage (create / edit / delete) </span
        ><span class="c11">Voting List</span><span class="c3">, </span>
      </li>
      <li class="c9">
        <span>to create </span><span class="c11">Voter</span
        ><span class="c3"
          >&nbsp;by seting e-mail and uploading his / her voter.xml.asice signed
          gdpr consent,
        </span>
      </li>
      <li class="c9">
        <span>to assign </span><span class="c11">Voter</span
        ><span>&nbsp;to </span><span class="c11">Voter List</span
        ><span class="c3">, </span>
      </li>
      <li class="c9">
        <span>to create </span><span class="c11">Voting Form</span
        ><span class="c3">,</span>
      </li>
      <li class="c9">
        <span>allows </span><span class="c11">Voter</span
        ><span>&nbsp;to initiate vvoting process</span
        ><span class="c11">&nbsp;</span
        ><span class="c3"
          >- sends request through backend to desktop application to sign the
          ballot using eID, or certificate in the desktop application,</span
        >
      </li>
      <li class="c9">
        <span>to display </span><span class="c11">Voting results</span
        ><span class="c3">.</span>
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-1" start="3">
      <li class="c4"><span class="c3">Technology used: </span></li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-2 start" start="1">
      <li class="c0"><span class="c3">Vue.js, SignalR, Axios</span></li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-1" start="4">
      <li class="c4"><span class="c3">Licence: GNU GPL v3</span></li>
      <li class="c4">
        <span>Source code: </span
        ><span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://github.com/Qesadila/QES&amp;sa=D&amp;ust=1587468292193000"
            >https://github.com/Qesadila/QES</a
          ></span
        >
      </li>
      <li class="c4">
        <span
          >CI/CD: Github Actions. Deploy time from commit to master: 3min</span
        >
      </li>
    </ol>
    <p class="c5 c25"><span class="c3"></span></p>
    <ol class="c2 lst-kix_467v1fe4e5b8-0" start="3">
      <li class="c13 c15">
        <h3 id="h.4bobfgs5thvi" style="display:inline">
          <span class="c23">QesadilaAuth - desktop application </span>
        </h3>
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-1 start" start="1">
      <li class="c4"><span class="c14 c11">Minimum requirements</span></li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-2 start" start="1">
      <li class="c0"><span class="c3">Tested on Windows 10, </span></li>
      <li class="c0"><span class="c3">Tested on macOS Mojave 10.14.6</span></li>
      <li class="c0"><span>Linux (Desktop) - supported, not tested</span></li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-1" start="2">
      <li class="c4"><span class="c14 c11">Setup your environment</span></li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-2 start" start="1">
      <li class="c0">
        <span>Download the package from </span
        ><span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://apps.scholtz.sk/QesadilaAuth/win/publish.zip&amp;sa=D&amp;ust=1587468292195000"
            >https://apps.scholtz.sk/QesadilaAuth/</a
          ></span
        ><span class="c1"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://apps.scholtz.sk/QesadilaAuth/win/publish.zip&amp;sa=D&amp;ust=1587468292195000"
            >win</a
          ></span
        ><span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://apps.scholtz.sk/QesadilaAuth/win/publish.zip&amp;sa=D&amp;ust=1587468292195000"
            >/publish.zip</a
          ></span
        ><span>&nbsp;(for Windows) or<br /></span
        ><span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://apps.scholtz.sk/QesadilaAuth/osx/publish.zip&amp;sa=D&amp;ust=1587468292196000"
            >https://apps.scholtz.sk/QesadilaAuth/</a
          ></span
        ><span class="c1"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://apps.scholtz.sk/QesadilaAuth/osx/publish.zip&amp;sa=D&amp;ust=1587468292196000"
            >osx</a
          ></span
        ><span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://apps.scholtz.sk/QesadilaAuth/osx/publish.zip&amp;sa=D&amp;ust=1587468292196000"
            >/publish.zip</a
          ></span
        ><span>&nbsp;(for macOS)</span><span>&nbsp;or<br /></span
        ><span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://apps.scholtz.sk/QesadilaAuth/linux/publish.zip&amp;sa=D&amp;ust=1587468292196000"
            >https://apps.scholtz.sk/QesadilaAuth/</a
          ></span
        ><span class="c1"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://apps.scholtz.sk/QesadilaAuth/linux/publish.zip&amp;sa=D&amp;ust=1587468292197000"
            >linux</a
          ></span
        ><span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://apps.scholtz.sk/QesadilaAuth/linux/publish.zip&amp;sa=D&amp;ust=1587468292197000"
            >/publish.zip</a
          ></span
        ><span>&nbsp;(for Linux) </span
        ><span class="c3"
          >&nbsp;<br />and unpack it. Application launcher:</span
        >
      </li>
      <li class="c0"><span class="c3">Run the application</span></li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-3 start" start="1">
      <li class="c9">
        <span>Windows: </span
        ><span class="c14 c11">QesadilaAvaloniaSigner.exe</span>
      </li>
      <li class="c9">
        <span>Linux, Mac: </span
        ><span class="c11">QesadilaAvaloniaSigner </span>
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-1" start="3">
      <li class="c4"><span class="c3">Technology used:</span></li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-2 start" start="1">
      <li class="c0"><span class="c3">written in .net core 3</span></li>
      <li class="c0"><span class="c3">Avalonia</span></li>
      <li class="c0"><span class="c3">SignalR host</span></li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-1" start="4">
      <li class="c4"><span class="c3">Licence: GNU GPL v3</span></li>
      <li class="c4">
        <span>Source code: </span
        ><span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://dev.azure.com/Qesadila/_git/QesadilaAuth&amp;sa=D&amp;ust=1587468292198000"
            >https://dev.azure.com/Qesadila/_git/QesadilaAuth</a
          ></span
        ><span>&nbsp;</span>
      </li>
    </ol>
    <p class="c5"><span class="c3"></span></p>
    <ol class="c2 lst-kix_467v1fe4e5b8-0" start="4">
      <li class="c15 c13">
        <h3 id="h.7m3rezyn9ata" style="display:inline">
          <span>Qesadila Backend</span>
        </h3>
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-1 start" start="1">
      <li class="c4"><span class="c14 c11">Minimum requirements</span></li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-2 start" start="1">
      <li class="c0"><span class="c3">Running using docker container</span></li>
      <li class="c0">
        <span class="c3"
          >Can be run in kubernetes, as azure web app or self hosted docker
          container</span
        >
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-3 start" start="1">
      <li class="c9"><span class="c3">Tested as azure web app</span></li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-2" start="3">
      <li class="c0">
        <span class="c3"
          >Database: Configuration option between MsSQL, CosmosDB, MariaDB,
          MySQL, PostgreSQL, InMemory</span
        >
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-3 start" start="1">
      <li class="c9">
        <span class="c3">Tested with InMemory and CosmosDB</span>
      </li>
      <li class="c9"><span class="c3">Default system file storage</span></li>
      <li class="c9">
        <span class="c3"
          >We had technical issues creating MsSQL server as azure new server
          services were blocked at the time being.</span
        >
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-2" start="4">
      <li class="c0">
        <span class="c3"
          >Emailing with templating: Currently supports only Sendgrid dynamic
          templates</span
        >
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-3 start" start="1">
      <li class="c9">
        <span class="c3">Default no emailing, with no email validation</span>
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-2" start="5">
      <li class="c0">
        <span class="c3"
          >Data storage: Azure blob storage or System file storage</span
        >
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-3 start" start="1">
      <li class="c9">
        <span class="c3"
          >Tested in azure blob storage, default is system file storage</span
        >
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-1" start="2">
      <li class="c4">
        <span>Class diagram: </span
        ><span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://app.quickdatabasediagrams.com/%23/d/5Meb4N&amp;sa=D&amp;ust=1587468292200000"
            >https://app.quickdatabasediagrams.com/#/d/5Meb4N</a
          ></span
        ><span class="c3">&nbsp;</span>
      </li>
      <li class="c4"><span class="c3">Licence: GNU GPL v3</span></li>
      <li class="c4">
        <span>Source code: </span
        ><span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://dev.azure.com/Qesadila/QesadilaBackend&amp;sa=D&amp;ust=1587468292201000"
            >https://dev.azure.com/Qesadila/QesadilaBackend</a
          ></span
        ><span class="c3">&nbsp;</span>
      </li>
      <li class="c4">
        <span
          >CI/CD: Devops Pipelines, Testing: Deploy time 3 mins, docker image is
          pushed also to public </span
        ><span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://hub.docker.com/r/qesadila/qesadila-backend&amp;sa=D&amp;ust=1587468292202000"
            >docker hub</a
          ></span
        >
      </li>
    </ol>
    <p class="c5 c12"><span class="c3"></span></p>
    <ol class="c2 lst-kix_467v1fe4e5b8-0" start="5">
      <li class="c18 c13">
        <h2 id="h.sv7u06nfkkwx" style="display:inline">
          <span class="c8">Main scenarios</span>
        </h2>
      </li>
    </ol>
    <p class="c10">
      <span>Presamption: You signed-up on the </span
      ><span class="c16"
        ><a
          class="c7"
          href="https://www.google.com/url?q=http://www.qesadila.com&amp;sa=D&amp;ust=1587468292203000"
          >http://www.qesadila.com</a
        ></span
      ><span class="c3"
        >, confirmed e-mail and you are signed-in on the website.
      </span>
    </p>
    <p class="c5"><span class="c3"></span></p>
    <ol class="c2 lst-kix_467v1fe4e5b8-1" start="6">
      <li class="c4">
        <span class="c14 c11">Scenario &ldquo;Before voting&ldquo;</span>
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-2 start" start="1">
      <li class="c0">
        <span>Sign-in on the </span
        ><span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=http://www.qesadila.com&amp;sa=D&amp;ust=1587468292204000"
            >http://www.qesadila.com</a
          ></span
        ><span class="c3">. </span>
      </li>
      <li class="c0">
        <span class="c3">Change your rolle to Voting List Manager.</span>
      </li>
      <li class="c0">
        <span
          >Create Voting List and add a Voter (your e-mail and this document
          signed for example on the </span
        ><span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://zep.disig.sk/Portal&amp;sa=D&amp;ust=1587468292204000"
            >https://zep.disig.sk/Portal</a
          ></span
        ><span class="c3">&nbsp;website).</span>
      </li>
      <li class="c0">
        <span class="c3">Change your rolle to Voting List Manager.</span>
      </li>
      <li class="c0">
        <span
          >Create Voting Form and asociate the form with Voting List, you
          created before.</span
        >
      </li>
    </ol>
    <p class="c5"><span class="c14 c11"></span></p>
    <ol class="c2 lst-kix_467v1fe4e5b8-1" start="7">
      <li class="c4">
        <span class="c14 c11">Scenario &ldquo;Vote&rdquo;</span>
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-2 start" start="1">
      <li class="c0"><span class="c3">Presamtion: </span></li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-3 start" start="1">
      <li class="c9">
        <span class="c3"
          >You already installed Qesadila desktop application on your desktop
          computer and application is running.
        </span>
      </li>
      <li class="c9">
        <span>On the </span
        ><span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=http://www.qesadila.com&amp;sa=D&amp;ust=1587468292205000"
            >http://www.qesadila.com</a
          ></span
        ><span class="c3">&nbsp;</span>
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-4 start" start="1">
      <li class="c6">
        <span>Sign-in on the </span
        ><span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=http://www.qesadila.com&amp;sa=D&amp;ust=1587468292206000"
            >http://www.qesadila.com</a
          ></span
        ><span class="c3">. </span>
      </li>
      <li class="c6">
        <span class="c3">Change your rolle to Voting List Manager.</span>
      </li>
      <li class="c6">
        <span class="c3"
          >Choose the voting, you&rsquo;d like to participate</span
        >
      </li>
      <li class="c6">
        <span class="c3">Qesadila will ask you for authentication:</span>
      </li>
    </ol>
    <p class="c10">
      <span
        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 642.82px; height: 458.67px;"
        ><img
          alt=""
          src="images/image1.png"
          style="width: 642.82px; height: 458.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
          title=""
      /></span>
    </p>
    <ol class="c2 lst-kix_467v1fe4e5b8-2" start="2">
      <li class="c0">
        <span class="c3"
          >Connect your reader with eID to your desktop computer.
        </span>
      </li>
      <li class="c0"><span class="c3">Switch to desktop application</span></li>
      <li class="c0">
        <span class="c3"
          >In the desktop application authenticate your self to Qesadila
          system.</span
        >
      </li>
    </ol>
    <p class="c17">
      <span
        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 642.82px; height: 416.00px;"
        ><img
          alt=""
          src="images/image3.png"
          style="width: 642.82px; height: 416.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
          title=""
      /></span>
    </p>
    <ol class="c2 lst-kix_467v1fe4e5b8-2" start="5">
      <li class="c0">
        <span class="c3"
          >In the desktop application click on Start PKCS11 Authentication to
          desktop application and authorize, if you are asked.</span
        >
      </li>
      <li class="c0"><span class="c3">Enter your eID BOK code:</span></li>
    </ol>
    <p class="c17">
      <span
        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 642.82px; height: 416.00px;"
        ><img
          alt=""
          src="images/image2.png"
          style="width: 642.82px; height: 416.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
          title=""
      /></span>
    </p>
    <ol class="c2 lst-kix_467v1fe4e5b8-1" start="8">
      <li class="c4">
        <span class="c3"
          >After few seconds you will see in the desktop application, you are
          authenticated:</span
        >
      </li>
    </ol>
    <p class="c10">
      <span
        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 642.82px; height: 416.00px;"
        ><img
          alt=""
          src="images/image4.png"
          style="width: 642.82px; height: 416.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
          title=""
      /></span>
    </p>
    <ol class="c2 lst-kix_467v1fe4e5b8-1" start="9">
      <li class="c4">
        <span>On the website </span
        ><span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=http://www.qesadila.com&amp;sa=D&amp;ust=1587468292207000"
            >http://www.qesadila.com</a
          ></span
        ><span class="c3">:</span>
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-2 start" start="1">
      <li class="c0">
        <span class="c3"
          >Check the web aplication to see, you are authorized to vote:</span
        >
      </li>
    </ol>
    <p class="c10">
      <span
        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 642.82px; height: 458.67px;"
        ><img
          alt=""
          src="images/image8.png"
          style="width: 642.82px; height: 458.67px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
          title=""
      /></span>
    </p>
    <ol class="c2 lst-kix_467v1fe4e5b8-2" start="2">
      <li class="c0">
        <span>Choose your answer and submit your voting ballot.</span>
      </li>
      <li class="c0">
        <span class="c3"
          >In the desktop application you can see check your decision before
          voting:</span
        >
      </li>
    </ol>
    <p class="c17">
      <span
        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 642.82px; height: 416.00px;"
        ><img
          alt=""
          src="images/image6.png"
          style="width: 642.82px; height: 416.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
          title=""
      /></span>
    </p>
    <ol class="c2 lst-kix_467v1fe4e5b8-2" start="4">
      <li class="c0">
        <span class="c3"
          >Click on the &ldquo;Sign document&rdquo; button.
        </span>
      </li>
      <li class="c0">
        <span class="c3"
          >Application will ask you to enter the eID PIN code</span
        >
      </li>
    </ol>
    <p class="c10">
      <span
        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 642.82px; height: 416.00px;"
        ><img
          alt=""
          src="images/image7.png"
          style="width: 642.82px; height: 416.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
          title=""
      /></span>
    </p>
    <p class="c5"><span class="c3"></span></p>
    <ol class="c2 lst-kix_467v1fe4e5b8-2" start="6">
      <li class="c0">
        <span class="c3">Wait and click on &ldquo;Send&rdquo; button:</span>
      </li>
    </ol>
    <p class="c5"><span class="c3"></span></p>
    <p class="c17">
      <span
        style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 642.82px; height: 416.00px;"
        ><img
          alt=""
          src="images/image5.png"
          style="width: 642.82px; height: 416.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
          title=""
      /></span>
    </p>
    <ol class="c2 lst-kix_467v1fe4e5b8-2" start="7">
      <li class="c0">
        <span class="c3"
          >Go back to Qesadila website and check, your ballot was
          accepted.</span
        >
      </li>
    </ol>
    <p class="c5"><span class="c3"></span></p>
    <ol class="c2 lst-kix_467v1fe4e5b8-0" start="6">
      <li class="c18 c13">
        <h2 id="h.rje0poa98xz" style="display:inline">
          <span class="c8">Technical proof of concept</span>
        </h2>
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-1 start" start="1">
      <li class="c4">
        <span class="c3"
          >All voting is currently public, so we do not consider insecure
          network traffic as an issue.</span
        >
      </li>
      <li class="c4">
        <span class="c3"
          >Voter fills in voting form in the web application. Json is
          created.</span
        >
      </li>
      <li class="c4">
        <span class="c3"
          >Considering voter has already chosen his identity by selecting
          certificate he is going to sign documents, he receives the filled in
          voting form from web app.</span
        >
      </li>
      <li class="c4">
        <span class="c3"
          >Communication between website and signal r server in desktop
          application does not leave computer.</span
        >
      </li>
      <li class="c4">
        <span class="c3"
          >Voter reviews the json in desktop application.<br />Signing
          applications shows him the raw data as well as json formatted data.<br />Signer
          sees something like:</span
        >
      </li>
    </ol>
    <p class="c10 c12">
      <span class="c3"
        >{<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ldquo;Voting&rdquo;:
        &ldquo;Voting in matter 12345&rdquo;,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ldquo;Answers&rdquo;:
        {</span
      >
    </p>
    <p class="c10 c12">
      <span class="c3"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ldquo;What
        do you want in this park?&rdquo;: &ldquo;Trees&rdquo;,</span
      >
    </p>
    <p class="c10">
      <span class="c3"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ldquo;Do
        you want to fight corona?&rdquo;: &ldquo;Yes&rdquo;</span
      >
    </p>
    <p class="c10 c12 c29">
      <span class="c3"
        >},<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ldquo;VotinfFormId&rdquo;:&rdquo;GUID-OF-voting-form&rdquo;</span
      >
    </p>
    <p class="c10 c12"><span class="c3">}</span></p>
    <p class="c10 c12">
      <span class="c3">Voter can see what he signs for.</span>
    </p>
    <ol class="c2 lst-kix_467v1fe4e5b8-1" start="6">
      <li class="c4">
        <span class="c3"
          >Voter clicks sign, if the smart card requires pin to sign messages
          the pin is entered.</span
        >
      </li>
      <li class="c4">
        <span class="c3"
          >Voter can see now the original document, formatted original document,
          signed document and hash code of signed document. Because of shortage
          of time, we did not parse the original document from the signed
          document back, but this is something that should be done before
          production.</span
        >
      </li>
      <li class="c4">
        <span class="c3"
          >He sends this information to the web app. Web app sends it to the
          backend.</span
        >
      </li>
      <li class="c4">
        <span class="c3"
          >The connection between desktop app, web app and backend is considered
          not trusted.
        </span>
      </li>
      <li class="c4">
        <span class="c3">Qesadila backend received the file.</span>
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-2 start" start="1">
      <li class="c0">
        <span>Source code: Method </span><span class="c11">SubmitVote</span
        ><span>&nbsp;</span
        ><span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://dev.azure.com/Qesadila/_git/QesadilaBackend?path%3D%252FQesadilaBackend%252FControllers%252FAPI%252FVoterController.cs&amp;sa=D&amp;ust=1587468292212000"
            >https://dev.azure.com/Qesadila/_git/QesadilaBackend?path=%2FQesadilaBackend%2FControllers%2FAPI%2FVoterController.cs</a
          ></span
        >
      </li>
      <li class="c0">
        <span class="c3"
          >First check if any message was received and it is possible to parse
          it.</span
        >
      </li>
      <li class="c0">
        <span class="c3"
          >Identifies the voting form from the identifier provided.</span
        >
      </li>
      <li class="c0">
        <span class="c3"
          >Look up the voter and gets his public key stored in the
          database</span
        >
      </li>
      <li class="c0">
        <span class="c3"
          >Checks if the voter can cast votes in this voting.</span
        >
      </li>
      <li class="c0">
        <span class="c3"
          >Verify the signature in the document with the voter&rsquo;s public
          key</span
        >
      </li>
      <li class="c0">
        <span class="c3">Increase increment number in the VotingForm</span>
      </li>
      <li class="c0">
        <span class="c3"
          >Return to the web app the VoterBallot and show it to user</span
        >
      </li>
      <li class="c0">
        <span class="c3"
          >User can check - hash of the file to be stored in the voting to be
          same as he had in the desktop app (with the vote has not been
          manipulated). He can check this also after voting with accounted
          votes.</span
        >
      </li>
      <li class="c0">
        <span class="c3"
          >The increase of increment number in form voting as well global
          voting</span
        >
      </li>
      <li class="c0">
        <span class="c3">Time is decided by the server. </span>
      </li>
      <li class="c0">
        <span class="c3"
          >Because of shortage of time, we were not able to implement storing
          hash of the voter ballot to blockchain to verify that with the
          voterballot stored in the system has not been manipulated.</span
        >
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-1" start="11">
      <li class="c4">
        <span class="c3">After time comes up, the voting is finalized:</span>
      </li>
    </ol>
    <ol class="c2 lst-kix_467v1fe4e5b8-2 start" start="1">
      <li class="c0">
        <span>Source code: </span
        ><span class="c16"
          ><a
            class="c7"
            href="https://www.google.com/url?q=https://dev.azure.com/Qesadila/_git/QesadilaBackend?path%3D%252FQesadilaBackend%252FControllers%252FAPI%252FVotingResultController.cs&amp;sa=D&amp;ust=1587468292214000"
            >https://dev.azure.com/Qesadila/_git/QesadilaBackend?path=%2FQesadilaBackend%2FControllers%2FAPI%2FVotingResultController.cs</a
          ></span
        >
      </li>
    </ol>
    <p class="c5"><span class="c3"></span></p>
  </div>
</template>

<script>
export default {}
</script>
