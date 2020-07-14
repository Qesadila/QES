export default {
  general: {
    langCode: 'sk',
    shortTitle: 'Qesadila',
    longTitle: 'Qesadila elektronický hlasovací systém',
    description:
      'Qesadila je open source hlasovací systém, ponúkaný pod licenciou: GNU GPLv3. Hlasovaním sa myslí účasť na rozhodovaní akejkoľvek skupiny hlasujúcich, kde je požadované overenie / autorizácia hlasujúceho (s využitím eID, kvalifikovaného elektronického podpisu, alebo vygenerovaného certifikátu).',
    welcome: 'Vitajte',
    signIn: 'Prihlásiť sa',
    logout: 'Odhlásiť sa',
    signUp: 'Vytvoriť účet',
    forgotPassword: 'Zabudnuté heslo',
    language: 'Jazyk',
    role: 'Rola',
    resetPassword: 'Obnoviť heslo',
    sendResetLink: 'Požiadať o obnovenie hesla',
    signInForm: 'Prihlasovací formulár',
    signUpForm: 'Registračný formulár',
    enterNewPasswordTitle: 'Zadajte nové heslo',
    acceptCheckbox: 'Súhlasím s',
    acceptComercialMessages: 'Súhlasím so zasielaním reklamných oznámení.',
    labelName: 'meno a priezvisko',
    labelPassword: 'heslo',
    labelPasswordAgain: 'zopakovať heslo',
    verifyEmail: 'Overiť e-mailovú adresu',
    resendToken: 'Opätovné zaslanie e-mailu pre overenie',
    verifyEmailAction: 'overiť',
    backToVerification: 'Späť na overenie',
    verifyMail: 'Overovací email',
    verifyVoterMail: "Verify voter's email",
    contentNeedsLoginMessage:
      'Musíte byť prihlásený pre zobrazenie tohto obsahu',
    htmlPokus: '<H1 style = "font-size: 20px;">SK</ h1>',
    yes: 'Áno',
    no: 'Nie'
  },
  navigation: {
    home: 'Domov',
    votingResults: 'Výsledky hlasovania',
    termsAndConditions: 'Pravidlá používania',
    verifyMail: 'Overovací email',
    listOfCurrentVotings: 'Zoznam aktuálnych hodnotenie',
    listOfPastVotings: 'Zoznam minulých hodnotenie',
    listOfForms: 'Zoznam formulárov',
    createNewVoterForm: 'Vytvoriť nový hlasovací formulár',
    createNewVoterList: 'Vytvoriť nový zoznam hlasujúcich',
    voterLists: 'Zoznam hlasujúcich',
    lastSubmission: 'Posledné hlasovanie',
    qesAuth: 'Qesadila Auth'
  },
  anonym: {
    title: 'Zoznam verejných hlasovaní',
    showResults: 'Zobraziť výsledky',
    fundRaising: 'Prispejte nám'
  },
  voter: {
    title: 'Zoznam hlasovaní',
    showResults: 'Zobraziř výsledky',
    vote: 'Hlasovať',
    question: 'Otázka', // otázka 1 -> Question 1
    labelDoNotWantToAnswer: 'Nechcem odpovedať',
    submitForm: 'Odoslať formulár',
    signVoteInApp: 'Podpíšte svoj hlas v desktopovej aplikácii Qesadila Auth',
    signAppNotFound:
      'Desktopová aplikácia Qesadila Auth nebola detekovaná. Spustite ju.',
    startSignAppForProceed:
      'Teraz podpíšte svoj hlas v desktopovej aplikácii Qesadila Auth.',

    backButton: 'Späť',
    table: {
      formListName: 'Názov formulára',
      openFrom: 'Hlasovanie umožené od',
      openUntil: 'Hlasovanie umožené do',
      voterList: 'Zoznam hlasujúcich',
      actions: 'Akcia'
    }
  },
  votingFormManager: {
    title: 'Management Hlasovacích formulárov',
    showResults: 'Zobraziť výsledky',
    edit: 'Upraviť',
    show: 'Zobraziť',
    questionText: 'Otázka', // 1. otázka -> 1. question
    possibleAnswers: 'Možné odpovede:',
    addNewPossibleAnswer: 'Pridať možnosť',
    saveQuestion: 'Uložiť otázku',
    removeQuestion: 'Odstrániť otázku',
    createFormTitleText: 'Vytvoriť nový Hlasovací formulár',
    formName: 'Názov formulára',
    placeholderFormName: 'Tu zadajte názov formulára',
    formOpenUntil: 'Hlasovanie umožené do',
    voterListId: 'ID Zoznamu Voličov',
    placeholderVoterListId: 'Zadajte ID Zoznamu Voličov',
    questions: 'otázky:',
    addNewQuestion: 'Pridať nový dotaz',
    saveForm: 'Uložiť formulár',
    table: {
      formListName: 'Názov formulára',
      openFrom: 'Hlasovanie umožené od',
      openUntil: 'Hlasovanie umožené do',
      isPublic: 'Verejný',
      voterList: 'Zoznam hlasujúcich',
      actions: 'Akcia'
    },
    AutoClosingWhenAllHasVoted:
      'automaticky po prijatí hlasu posledného hlasujúceho',
    TimeoutOnly: 'v presne stanovenom čase',
    VoterManagerCanCloseAnyTime:
      'Manažér Hlasovacieho Formulára môže kedykoľvek ukončiť hlasovanie.',
    VoterManagerCanCloseIfAllHasVoted:
      'Manažér Hlasovacieho Formulára môže ukončiť hlasovanie ak hlasovali všetci oprávnení.',

    stopVoting: 'Koniec hlasovania',
    endingType: 'Ukončenie hlasovania:'
  },
  voterListManager: {
    title: 'Manažer Voličských zoznamov',
    showDetails: 'Zobraziť detail',
    createNewVoterList: 'Vytvoriť nový Zoznam hlasujúcich',
    labelListName: 'Názov Zoznamu hlasujúcich',
    labelIsPubli: 'Zoznam hlasovanie je verejné',
    continue: 'Pokračovať',
    voters: 'Voliči',
    voterListDetail: 'Detail Zoznamu Voličov',
    addVoter: 'Pridať hlasujúceho',
    labelVoterEmail: 'E-mailom',
    labelVoterSubmittedGDPR: 'Volič prijal GDPR súhlas',
    labelSingFile: 'Podpísať',
    labelIsQes: 'Je QES?',
    published: 'Verejné',
    unpublished: 'Neverejné',
    indexTable: {
      voterListName: 'Názov Zoznamu Voličov',
      actions: 'Akcia'
    },
    votersTable: {
      voterName: 'Meno hlasujúceho',
      voterEmail: 'E-mailom',
      voterQes: 'Kvalifikovaný elektronický podpis',
      actions: 'Akcia'
    }
  },
  errorPage: {
    getMeOut: 'Odísť'
  },
  htmlCode: {
    vimeoExplanationVideo:
      '<iframe src="https://player.vimeo.com/video/414439497?byline=0&portrait=0" width="100%" height="400" frameborder="0" allow="autoplay; fullscreen" allowfullscreen ></iframe>',
    fundRaising:
      '<p>Podporte tento projekt vašim darom na transparentný účet <a href="https://ib.fio.sk/ib/transparent?a=2901594765&amp;l=ENGLISH" >SK3783300000002901594765/FIOZSKBAXXX</a> Srdcom Doma o.z.</p>' +
      '<ul>' +
      '<li>Dar vo výške 1 EUR nám pomôže financovať naše denné výdaje za cloudové služby v azure</li>' +
      '<li>S darom 1 000 - 5 000 EUR si môžeme objednať penetračné testy</li>' +
      '<li>S darom 10 000 - 100 000 EUR môžeme najať profesionálov, s ktorými prototyp pretavíme do produktu, ktorý bude možné využívať v praxi širším spektrom užívateľov.</li>' +
      '</ul>',
    f6sComFollowWidget:
      '<a href="https://www.f6s.com/qesadila?follow=1" target="_blank" title="Follow Qesadila on F6S"><img src="https://www.f6s.com/images/f6s-follow-white.png" border="0" width="78" height="22 " alt="Follow Qesadila on F6S" style="width: 78px; height: 22px; padding: 0px; margin: 0px;" /></a><br/><p>Napíšte nám na: qesadila.com@gmail.com</p>',
    acknowledgment:
      '<h1>Poďakovanie</h1><p>Za pomoc pri riešení projektu ďakujeme našim partnerom:</p>    <ul style="list-style: none"><li style="margin:20px 0; "><a href="https://inezis.sk/" target="_blank"><img src="/images/partners/SK-Inezis.png" width="200"> Inezis s.r.o. SR</a></li>    <li style="margin:20px 0; "><a href="https://www.czechinvest.org/cz" target="_blank"><img src="/images/partners/CZ-Czechinvest.png" width="200"> CzechInvest ČR</a></li>    <li style="margin:20px 0; "><a href="https://www.srdcomdoma.sk" target="_blank"><img src="/images/partners/Srdcomdoma_logo_horizontal_RGB_no_margin.jpg" width="200"> Srdcom doma o.z. SR</a></li></ul>',
    projectOverview:
      '<h1>Qesadila e-hlasovací systém</h1> <p>(proof of concept)</p> <p>Verzia dokumentu: 0.3 Návrh</p> <p>Dňa: 13.7.2020</p> <h2>1. Rozsah</h2> <p>Qesadila je open source e-hlasovací systém - software, poskytovaný pod licenciou: GNU GPLv3. Pod e-hlasováním máme na mysli účasť na rozhodování pre akúkoľvek skupinu hlasujúcich, kde je nevyhnutná autentifikácia hlasujúceho (s využitím elektronickej identity - napr. pomocou eID - občianskeho preukazu s čipom) a kde se vyžaduje možnost kontroly, či hlasovali len autorizovaní hlasujúci a tiež ako hlasovali. Predovšetkým teda hlasovania: </p> <ul> <li>orgány samospráv obcí a samosprávnych krajov,</li> <li>členov výkonných orgánov společností</li> <li>členov a dobrovoľníkov v iniciatívach a neziskových organizáciách.</li> </ul><br/> <p>Tento systém vyvinuli dobrovoľnící a formálne ho poskytuje občianske združenie Srdcom doma o.z. registrované na Slovensku, které mobilizuje občanov k angažovaniu na správe vecí verejných a to tiež zo zahraničia.</p> <br/> <h2>2. Obmedzenie zodpovednosti</h2> <p>Berte prosím na vedomie, že sa nejedná o finálnu aplikáciu a nie sme zodpovední za akékoľvek škody spôsobené používaním tohto softvéru. Ak sa rozhodnete pre testovacie aplikácie, mali by ste býť opatrní a mali by ste vedieť, čo robíte. Minimálny predpoklad je znalosť práce s počítačem a eID. </p> <p>Nejjednoduššou cestou ako začať s testovaním systému Qesadila je zaregistrovať sa na <a href="https://www.qesadila.com">https://www.qesadila.com</a>. Po potvrdení e-mailu sa môžete prihlásiť na stránke a prepínať medzi rolami: anonymný užívateľ, Hlasujúci, Manager zoznamov oprávnených hlasujúcích, Manažér hlasovacích formulárov. Pre možnosť hlasovania budete musieť použiť našu desktopovú aplikáciu (Windows, MacOS, Linux - viď nižšie) a potvrdiť naše zmluvné podmienky. </p> <br/> <h2>3. Riešenie</h2> <h3>Qesadila e-hlasovací systém  sa skladá z troch častí:</h3> <ol type = "A"> <li><a href="https://dev.azure.com/Qesadila/_git/QesadilaAuth">Desktopová aplikácia</a> - <a href="/qesadila-auth">Popis a link pre stiahnutie aplikácie je na osobitnej stránke v menu QesadilaAuth</a></li><li><a href="https://dev.azure.com/Qesadila/QesadilaBackend">Qesadila backend</a > a <a href="https://qesadila.azurewebsites.net/swagger/index.html">dokumentácia API</a> </li> <li><a  href="https://github.com/Qesadila/QES/">webovej aplikácie</a> - frontend:<a href="https://www.qesadila.com/">https://www.qesadila.com</a> </li> </ol> <br /> <h2>4. Čo Qesadila umožňuje a čo nie</h2> <ol type = "1"> <li>Qesadila je zatiaľ určená na testovacie účely a nie je určená pre použitie v praxi. </li> <li>Vezmite prosím na vedomie, že do testovacieho hlasovania pomocou kvalifikovaného elektronického podpisu budete musieť použiť </li> <ol> <li>class 3 certifikát na čipovej karte za použitia ovládača PKCS11</li> <ol> <li>Testováné pomocou slovenského občianskeho preukazu</li> </ol> <li>alebo ak užívateľ nemá eID môže použíť certifikát z úložiska v počítači alebo vlastný certifikát </li> <ol> <li>Vlastný certifikát môže byť <a href = "https://github.com/Qesadila/QES/blob/master/cert/script" >Generovaný  pomocou openssl knižnice </a> </li> </ol> </ol> <li>V prípade webovej aplikácie Qesadila rozoznávame štyri role. Aby sme umožnili jednoduchšie overenie konceptu riešenia, ktorýkoľvek registrovaný užívatelľ môže prepínať medzi rolami na webových stránkach <a href="https://www.qesadila.com">https://www.qesadila.com</a >pomocou výberu z roletky v záhlaví. (V reálnom živote jedna, alebo skôr viac osôb bude mať povolené manažovať hlasujúcich, iná vytvárať hlasovacie formuláre a iné osoby budú hlasovať.) </li> <ol> <li>Anonymní užívatelia</li> <ol> <li>akýkoľvek návštevník na internetových stránkach bez registrácie na stránkách a bez prihlásenia</li> <li>môže zobraziť výsledky hlasovania</li> </ol> <li>Manažér zoznamov oprávnených hlasujúcich</li> <ol> <li>užívateľ registrovaný a prihlásený na stránkach</li> <li>môže vytvárať / editovať / mazať svoje zoznamy oprávnených hlasujúcich</li> </ol> <li>Manažér hlasovacích formulárov</li> <ol> <li>môže vytvárať / editovať / mazať hlasovacie formuláre ním vytvorené</li> </ol> <li>Hlasujúci</li> <ol> <li>môže hlasovať v každom hlasovacom formulári, prepojenom so zoznamom hlasujúcich, v ktorom je užívateľ uvedený. </li> </ol> </ol> </ol> <br /> <h2>5. Qesadila webové užívateľské rozhranie</h2> <ol type = "A"> <li>Doporučená / testovaná na:</li> <ol> <li>internetový prehliadač Chrome 80.0.3987.163 a Safari 13,1</li> </ol> <li>Čo umožňuje</li> <ol> <li>Web aplikácia umožňuje</li> <ol> <li>riadiť (vytvárať / editovať / mazať) zoznam hlasujúcich,</li> <li>pridať hlasujúceho zadaním e-mailu a nahraním elektronicky podpísaného súhlasu s pravidlami používania: voter.xml.asice, </li> <li>priradiť užívateľa do zoznamu hlasujúcich,</li> <li>vytvoriť Hlasovací formulár,</li> <li>umožňuje hlasujúcemu zahájiť proces hlasovania - odoslaním požiadavky cez backend pre desktopové aplikácie a podpísať hlasovanie pomocou eID, alebo certifikátom v desktopovej aplikácii, </li> <li>zobraziť výsledky hlasovaní.</li> </ol> </ol> <li>Použité technológie:</li> <ol> <li>Vue.js, SignalR, Axios</li> </ol> <li>Licencie: GNU GPL v3</li> <li>Zdrojový kód: <a href="https://github.com/Qesadila/QES">https://github.com/Qesadila/QES </a> </li> <li>CI / CD: GitHub Actions. Interval pre nasadzovania zmien do master-u: 3min</li> </ol> <br /> <h2>6. QesadilaAuth - desktopová aplikácia</h2> <ol type = "A"> <li>Minimálne požiadavky</li> <ol> <li>Testované na Windows 10,</li> <li>Testované na macOS Mojave 10.14.6</li> <li>Linux (Desktop) - podporované, netestované</li> </ol> <li>Príprava vašeho prostredia</li> <ol> <li>Stiahnite si balíček z <a href = "https://apps.scholtz.sk/QesadilaAuth/win/publish.zip" >/publish.zip (pre Windows) alebo<br /></a><a href = "https://apps.scholtz.sk/QesadilaAuth/osx/publish.zip" >/publish.zip (pre macOS) alebo<br /></a><a href = "https://apps.scholtz.sk/QesadilaAuth/linux/publish.zip" >/publish.zip&nbsp (pre Linux) <br />a rozbalíme ju. Spúšťač aplikácií: </a> </li> <li>Spustiť aplikáciu</li> <ol> <li>Windows: QesadilaAvaloniaSigner.exe</li> <li>Linux, Mac: QesadilaAvaloniaSigner</li> </ol> <li>Použité technológie:</li> <ol> <li>napísané v NET core 3</li> <li>Avalonia</li> <li>SignalR hostiteľ</li> </ol> <li>Licencie: GNU GPL v3</li> <li>Zdrojový kód: <a href = "https://dev.azure.com/Qesadila/_git/QesadilaAuth" >https://dev.azure.com/Qesadila/_git/QesadilaAuth </a> </li> </ol> </ol> <br /> <h2>7. Qesadila Backend</h2> <ol type = "A"> <li>Minimálne požadavky</li> <ol> <li>Beh pomocou Docker kontajneru</li> <li>Môže byť spustené v kubernetes, ako AZURE - webová aplikácia alebo vlastná hostovaná v Docker kontejneru </li> <ol> <li>Testované ako Azure web aplikácia</li> </ol> <li>Databáza: možnosť konfigurácie medzi MsSQL, CosmosDB, MariaDB, MySQL, PostgreSQL, InMemory </li> <ol> <li>Testované s InMemory a CosmosDB</li> <li>Východzie úložisko súborového systému</li>. <li>Zaznamenali sme technické problémy pri vytváraní MsSQL serveru ako Azure novú serverovú službu. </li> </ol> <li>E-maily s templating: V súčasnej dobe podporuje len Sendgrid dynamické šablóny </li> <ol> <li>Výchozí žiadny e-mail, bez potvrdenia e-mailu</li> </ol> <li>Ukladanie dát: Azure storage blob alebo ukladanie do súborového systému</li> <ol> <li>Testované na Azure blob storage, defaultné: system file storage</li> </ol> </ol> <li>Objektový model <a href="https://app.quickdatabasediagrams.com/%23/d/5Meb4N">https://app.quickdatabasediagrams.com/#/d/5Meb4N  </a> </li> <li>Licencia: GNU GPL v3</li> <li>Zdrojový kód: <a href="https://dev.azure.com/Qesadila/QesadilaBackend">https://dev.azure.com/Qesadila/QesadilaBackend  </a> </li> <li>CI / CD: Devops Pipelines, Testing: Deploy interval 3 minuty <a href="https://hub.docker.com/r/qesadila/qesadila-backend">docker hub </a> </li> </ol> <br /> <h2>8. Hlavné scenáre</h2> <p>Predpoklady: Zaregistrovali ste sa na <a href = "http://www.qesadila.com" >http://www.qesadila.com potvrdili ste e-mail a prihlásili ste sa na https://www.qesadila.com </a> </p> <ol type = "A"> <li>scénár &ldquo;Pred hlasovaním &ldquo;</li> <ol> <li>Prihláste sa na <a href="http://www.qesadila.com">http://www.qesadila.com.</a> </li> <li>Prepnite sa do role Manažér zoznamov hlasujúcich.</li> <li>Vytvorte zoznam hlasujúcich a pridajte hlasujúceho (Váš e-mail a tento dokument podpísaný napríklad na <a href = "https://zep.disig.sk/Portal" >https://zep.disig.sk/Portal website). </a> </li> <li>Prepnite sa do role Manažéra hlasovacích formulárov.</li> <li>Vytvorte Hlasovací formulár a priraďte zoznam hlasujúcich k tomuto formuláru </li> </ol> <li>scénář &ldquo;Hlasovanie&rdquo;</li> <ol> <li>Predpoklad:</li> <ol> <li>Už ste si nainštalovali aplikáciu Qesadila Auth do svojho počítača a aplikácia je spustená. </li> <li>Na <a href="http://www.qesadila.com">http: //www.qesadila.com </a> </li> <ol> <li>Prihláste sa na <a href="http://www.qesadila.com">http://www.qesadila.com.</a> </li> <li>Prepnite sa do role hlasujúceho.</li> <li>Vyberte hlasovanie, ktorého sa chcete zúčastniť</li> <li>Qesadila vás požiada o overenie:</li> <p><img width = "100%" src = "/images/image1.png"/></p> </ol> <li>Pripojte vašu čítačku s eID k vašemu stolnému počítaču / notebooku.</li> <li>Prejdite do desktopovej aplikácie</li> <li>V desktopovej aplikácii sa autentifikujte k použitiu aplikácie Qesadila. </li> <li>V desktopovej aplikácii kliknite na PKCS11 pre overenie vašej identity. </li> <p><img width = "100%" src = "/images/image3.png"/></p> <li>Zadajte eID BOK kód:</li> <p><img width = "100%" src = "/images/image2.png"/></p> <li>Po niekoľkých sekundách uvidíte v desktopovej aplikácii, že vaša identita bola overená: </li> <p><img width = "100%" src = "/images/image4.png"/></p> <li>Na stránkach <a href="http://www.qesadila.com">http://www.qesadila.com:</a> </li> <li>Vo webovom rozhraní aplikacie si môžete overiť, že ste oprávnení k hlasovaniu: </li> <p><img width = "100%" src = "/images/image8.png"/></p> <li>Vyberte odpoveď a odešlite hlasovací lístok.</li> <li>V desktopovej aplikácii, môžete skontrolovať svoje rozhodnutie pred podpísaním a odosláním hlasu: <p><img width = "100%" src = "/images/image6.png"/></p> <li>Kliknite na tlačítko &ldquo;Podpísať dokument&rdquo;.</li> <li>Aplikácia vás vyzve k zadaniu PIN kódu eID</li> <p><img width = "100%" src = "/images/image7.png"/></p> <li>Po zadání PIN kódu a kliknutí na "Podpísat" počkajte niekoľko sekúnd a kliknite na tlačítko &ldquo;Odoslať&rdquo;:</li> <p><img width = "100%" src = "/images/image5.png"/></p> <li>Prejdite späť na stránky Qesadila a overte, že Váš hlas bol prijatý. </li> </ol> </ol> </ol> <br /> <h2>9. Technický pohľad na proof of concept</h2> <ol type = "A"> <li>Všetky hlasovania sú v súčasnej dobe verejné. Nepublikujte žiadne neverejné data. </li> <li>Hlasujúci vyplní hlasovací formulář na webovéj aplikácie. JSON je vytvorený. </li> <li>Vzhľadom k tomu, že hlasujúcí už zvolil svoju totožnosť certifikátom, desktopovou aplikáciou prijíma od webovej aplikácie vyplnený hlasovací formulár. </li> <li>Komunikácia medzi webovou stránkou a signal r serverom v desktopovej aplikácii neopúšťa počítač. To znamená, že webová stránka Qesadila komunikuje s desktopovou aplikácia v rámci počítača a táto komunikácia neprechádza cez internet. </li> <li>Hlasujúci skontroluje v desktopovej aplikácii hlasovací lístok zobrazený vo formátu JSON<br /><br />Hlasujúci vidí niečo podobného: </li> <br /> <P style = "font-family: Courier;"> {<br /> &ldquo;VotingForm&rdquo;: &ldquo;Donation for citizens initiatives - participative budget&rdquo;,<br />&ldquo;Answers&rdquo;: {<br />&ldquo;Choose the donation fot the Central park reconstruction?&rdquo;: &ldquo;20 000 CZK&rdquo;,<br /> },<br />&ldquo;Time&rdquo;:&rdquo;date and time&rdquo;<br />&ldquo;VotinfFormId&rdquo;:&rdquo;GUID-OF-voting-form&rdquo;<br /> } </p> <br /> <p>Hlasujúci uvidí, za aké rozhodnutia hlasoval (elektronicky podpísal).</p> <li>Hlasujúci kľikne na tlačítko Sign a zadá eID PIN v případě, že bude vyzvaný. </li> <li>Hlasujúci vidí originální dokument, formátovaný pôvodný dokument, podpísaný dokument a hash kód podpísaného dokumentu. <li>Hlasujúci odosiel informáciu do webovej aplikácie. Webová aplikácia odošle zprávu na backend. </li> <li>Spojenie mezi desktopovou aplikáciou, webovou aplikáciou a backend-om nie je považovaný za dôvěryhodné. </li> <li>Qesadila backend prijala súbor s hlasom hlasujúceho.</li> <ol> <li>Najprv skontroluje, či bola prijatá akákoľvek správa a či je možné ju přečítať. </li> <li>Identifikuje hlasovací formulár z poskytnutého identifikátora.</li> <li>Nájde hlasujúceho a získa jeho verejný kľúč uložený v databázi. </li> <li>Zistí, či je hlasujúcí oprávnený hlasovať v tomto hlasovaní (v hlasovacom formulári).</li> <li>Overenie podpisu v dokumente s verejným kľúčom hlasujúceho. </li> <li>Zvýšenie počtu hlasujúcich v Hlasovacom formulári (Voting Form).</li> <li>Návrat do webovej aplikácie s kontro.</li> <li>Užívatelia môžu kontrolovať - hash souboru, ktorý má byť uložený v hlasovaní, že je zhodný s hashom v desktopovej aplikácii (a že s hlasovacím lístkom nebolo manipulované). Hlas aj počet hlasujúcich je možné overiť aj pozdajšie. </li> <li>Za rozhodujúci sa považuje čas na strane serveru.</li> <Li>V budúcnosti môžu byť ukladané hash-e hlasov do blockchain-u pre overenie, že s hlasom v systéme neolo manipulované. </li> </ol> <li>Hlasovanie je dokončené:</li> <li>Zdrojový kód: <a section „https://dev.azure.com/Qesadila/_git/QesadilaBackend?path%3D%252FQesadilaBackend%252FControllers%252FAPI%252FVotingResultController.cs“ >https://dev.azure.com/Qesadila/_git/QesadilaBackend?path=%2FQesadilaBackend%2FControllers%2FAPI%2FVotingResultController.cs </a> </li> <ol></ol>'
  }
}
