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
      '<a href="https://www.f6s.com/qesadila?follow=1" target="_blank" title="Follow Qesadila on F6S"><img src="https://www.f6s.com/images/f6s-follow-white.png" border="0" width="78" height="22 " alt="Follow Qesadila on F6S" style="width: 78px; height: 22px; padding: 0px; margin: 0px;" /></a><br/><p>Contact us on: qesadila.com@gmail.com</p>',
    projectOverview:
      '<h1>Qesadila e-hlasovací systém</h1> <p>(proof of concept)</p> <p>Verze dokumentu: 0.3 Návrh</p> <p>Dne: 13.5.2020</p> <h2>1. Rozsah</h2> <p>Qesadila je open source e-hlasovací systém - software, nabízen pod licencí: GNU GPLv3. Pod e-hlasováním máme na mysli účast na rozhodování pro jakoukoliv skupinu hlasujících, kde je nezbytná autorizace hlasujícího (s využitím kvalifikovaného elektronického podpisu, nebo vygenerovaného certifikátu) a kde se vyžaduje možnost kontroly, jestli hlasovali pouze autorizovaní hlasující a také jak hlasovali. Tedy zejména hlasování: </p> <ul> <li>městské / obecní rady volených zástupců,</li> <li>členů výkoných orgánů společností</li> <li>členů a dobrovolníků v iniciativách a neziskových organizacích</li> </ul><br/> <p>Tento systém vyvinuli dobrovolnící a formálně jej poskytuje sdružení Srdcom doma o.z. registrovaná na Slovensku, které mobilizuje občany k angažovanosti na správě věcí veřejných také ze zahraničí.</p> <br/> <h2>2. Omezení odpovědnosti</h2> <p>Vezměte prosím na vědomí, že se nejedná o finální aplikaci a nejsme zodpovědní za jakékoli škody. Pokud se rozhodnete pro testovací aplikace, měli byste být opatrní a měli byste vědět, co děláte. Minimální předpoklad je znalost práce s počítačem a eID. </p> <p>Nejjednodušší cestou jak začít s testováním systému Qesadila je zaregistrovat se na <a href="https://www.qesadila.com">https://www.qesadila.com</a>. Po potvrzení e-mailu se můžete přihlásit na stránce a přepínat mezi rolemi: anonymní uživatel, Hlasující, Manager seznamů oprávněných hlasujících, Manažer hlasovacích formulářů. Pro možnost hlasování budete muset použít naší desktopovou aplikaci (Windows, MacOS, Linux - viz níže) a potvrdit naše smluvní podmínky. </p> <br/> <h2>3. Řešení</h2> <h3>Qesadila e-hlasovací systém  se skládá ze tří částí:</h3> <ol type = "A"> <li><a href="https://dev.azure.com/Qesadila/_git/QesadilaAuth">Desktopová aplikace</a> - <a href="/qesadila-auth">Popis a link ke stažení je na osobitné stránce v menu QesadilaAuth</a></li><li><a href="https://dev.azure.com/Qesadila/QesadilaBackend">Qesadila backend:</a ><a href="https://qesadila.azurewebsites.net/swagger/index.html">https://qesadila.azurewebsites.net/swagger/index.html </a> </li> <li><a webové aplikace href="https://github.com/Qesadila/QES/">frontend:</a ><a href="https://www.qesadila.com/">https://www.qesadila.com</a> </li> </ol> <br /> <h2>4. Co Qesadila umožňuje a co ne</h2> <ol type = "1"> <li>Qesadila je prozatím určena na testovací účely a není určena pro použití v praxi. </li> <li>Vezměte prosím na vědomí, že do testovacího hlasování pomocí kvalifikovaného elektronického podpisu budete muset použít </li> <ol> <li>class 3 certifikát na čipové kartě za použití ovladače PKCS11</li> <ol> <li>Testováno pomocí slovenský občanský průkaz</li> </ol> <li>nebo pokud uživatel nemá eID může použít certifikát z úložiště v počítači nebo vlastní certifikát </li> <ol> <li>Vlastní certifikát může být <a href = "https://github.com/Qesadila/QES/blob/master/cert/script" >Generovaný  pomocí openssl knihovny </a> </li> </ol> </ol> <li>U webové aplikace Qesadila rozeznáváme čtyři role. Abychom umožnili ověření konceptu řešení jednodušší, kterýkoli registrovaný uživatel může přepínat mezi rolemi na webových stránkách <a href="https://www.qesadila.com">https://www.qesadila.com</a >pomocí výběru z roletky v záhlaví. (V reálném životě spíše jedna nebo více osob bude mít povoleno manažovat hlasující, jiná vytvářet hlasovací formuláře a jiné osoby budou hlasovat.) </li> <ol> <li>Anonymní uživatel</li> <ol> <li>jakýkoli návštěvník na internetových stránkách bez registrace na stránkách a bez přihlášení</li> <li>může zobrazit výsledky hlasování</li> </ol> <li>Manažer seznamů oprávněných hlasujících</li> <ol> <li>uživatel registrovaný a přihlášený na stránkách</li> <li>může vytvářet / editovat / mazat své seznamy oprávněných hlasujících</li> </ol> <li>Manažer hlasovacích formulářů</li> <ol> <li>může vytvářet / editovat / mazat hlasovací formuláře jím vytvořené</li> </ol> <li>Hlasující</li> <ol> <li>může hlasovat v každém hlasovacím formuláři, propojeném se seznamem hlasujících, ve kterém je uživatel uveden. </li> </ol> </ol> </ol> <br /> <h2>5. Qesadila webové uživatelské rozhraní</h2> <ol type = "A"> <li>Doporučená / testován na:</li> <ol> <li>internetový prohlížeč Chrome 80.0.3987.163 a Safari 13,1</li> </ol> <li>Co umí</li> <ol> <li>Web aplikace umožňuje</li> <ol> <li>řídit (vytvářet / editovat / mazat) seznam hlasujících,</li> <li>přidat hlasujícího zadáním e-mailu a nahráním elektronicky podpesaného souhlasu s pravidly používání: voter.xml.asice, </li> <li>přiřadit uživatela do seznamu hlasujících,</li> <li>vytvořit Hlasovací formulář,</li> <li>umožňuje hlasujícímu zahájit proces hlasování - odesláním požadavku přes backend pro desktopové aplikace a podepsat hlasování pomocí eID, nebo certifikátem v desktopové aplikace, </li> <li>zobrazit výsledky hlasování.</li> </ol> </ol> <li>Použitá technologie:</li> <ol> <li>Vue.js, SignalR, Axios</li> </ol> <li>Licence: GNU GPL v3</li> <li>Zdrojový kód: <a href="https://github.com/Qesadila/QES">https://github.com/Qesadila/QES </a> </li> <li>CI / CD: GitHub Actions. Interval pro nasazení změn do master-u: 3min</li> </ol> <br /> <h2>6. QesadilaAuth - desktopová aplikace</h2> <ol type = "A"> <li>Minimální požadavky</li> <ol> <li>Testováno na Windows 10,</li> <li>Testováno na macOS Mojave 10.14.6</li> <li>Linux (Desktop) - podporováno, netestováno</li> </ol> <li>Příprava vašeho prostředí</li> <ol> <li>Stáhněte balíček z <a href = "https://apps.scholtz.sk/QesadilaAuth/win/publish.zip" >/publish.zip (pro Windows) nebo<br /></a><a href = "https://apps.scholtz.sk/QesadilaAuth/osx/publish.zip" >/publish.zip (pro macOS) nebo<br /></a><a href = "https://apps.scholtz.sk/QesadilaAuth/linux/publish.zip" >/publish.zip&nbsp (pro Linux) <br />a rozbalíme ji. Spouštěč aplikací: </a> </li> <li>Spustit aplikaci</li> <ol> <li>Windows: QesadilaAvaloniaSigner.exe</li> <li>Linux, Mac: QesadilaAvaloniaSigner</li> </ol> <li>Použité technologie:</li> <ol> <li>napsáno v NET core 3</li> <li>Avalonia</li> <li>SignalR hostitel</li> </ol> <li>Licence: GNU GPL v3</li> <li>Zdrojový kód: <a href = "https://dev.azure.com/Qesadila/_git/QesadilaAuth" >https://dev.azure.com/Qesadila/_git/QesadilaAuth </a> </li> </ol> </ol> <br /> <h2>7. Qesadila Backend</h2> <ol type = "A"> <li>Minimální požadavky</li> <ol> <li>Běh pomocí Docker kontejneru</li> <li>Může být spuštěn v kubernetes, jako AZURE - webová aplikace nebo vlastní hostované v Docker kontejneru </li> <ol> <li>Testováno jako Azure web aplikace</li> </ol> <li>Database: možnost konfigurace mezi MsSQL, CosmosDB, MariaDB, MySQL, PostgreSQL, InMemory </li> <ol> <li>Testováno s InMemory a CosmosDB</li> <li>Výchozí úložiště souborového systému</li> <li>Zaznamenali jsme technické potíže při vytváření MsSQL serveru jako azure novou serverovou službu. </li> </ol> <li>Emaily s templating: V současné době podporuje pouze Sendgrid dynamické šablony </li> <ol> <li>Výchozí žádný e-mail, bez potvrzení e-mailu</li> </ol> <li>Ukládání dat: Azure storage blob nebo ukládání souborů systému</li> <ol> <li>Testováno na Azure blob storage, defaultní je system file storage</li> </ol> </ol> <li>Objektový model <a href="https://app.quickdatabasediagrams.com/%23/d/5Meb4N">https://app.quickdatabasediagrams.com/#/d/5Meb4N  </a> </li> <li>Licence: GNU GPL v3</li> <li>Zdrojový kód: <a href="https://dev.azure.com/Qesadila/QesadilaBackend">https://dev.azure.com/Qesadila/QesadilaBackend  </a> </li> <li>CI / CD: Devops Pipelines, Testing: Deploy interval 3 minuty <a href="https://hub.docker.com/r/qesadila/qesadila-backend">docker hub </a> </li> </ol> <br /> <h2>8. Hlavní scénáře</h2> <p>Presamption: Zaregistrovali jste se na <a href = "http://www.qesadila.com" >http://www.qesadila.com potvrdili jste e-mail a přihlásili jste se na https://www.qesadila.com </a> </p> <ol type = "A"> <li>scénář &ldquo;Před hlasování &ldquo;</li> <ol> <li>Přihlaste se na <a href="http://www.qesadila.com">http://www.qesadila.com.</a> </li> <li>Přepněte se do role Manažer seznamů hlasujících.</li> <li>Vytvořte Seznam hlasujících a přidejte hlasujícího (Váš e-mail a tento dokument podepsán například na <a href = "https://zep.disig.sk/Portal" >https://zep.disig.sk/Portal website). </a> </li> <li>Přepněte se do role Manažera hlasovacích formulářů.</li> <li>Vytvořte Hlasovací formulář a přiřaďte seznam hlasujících tomuto formuláři </li> </ol> <li>scénář &ldquo;Vote&rdquo;</li> <ol> <li>Presamtion:</li> <ol> <li>Již jste nainstalovali aplikaci Qesadila do svého počítače počítač a aplikace jsou spuštěné. </li> <li>Na <a href="http://www.qesadila.com">http: //www.qesadila.com </a> </li> <ol> <li>Přihlaste se na <a href="http://www.qesadila.com">http://www.qesadila.com.</a> </li> <li>Přepněte se do role hlasující.</li> <li>Vyberte hlasování, kterého se chcete zúčastnit</li> <li>Qesadila vás požádá o ověření:</li> <p><img width = "100%" src = "/images/image1.png"/></p> </ol> <li>Připojte vaši čtečku s eID k vašemu stolnímu počítači / notebooku.</li> <li>Přejděte do desktopové aplikace</li> <li>V desktopové aplikaci se autentifikujte k použití aplikace Qesadila. </li> <li>V desktopové aplikaci klikněte na PKCS11 pro ověření vaší identity. </li> <p><img width = "100%" src = "/images/image3.png"/></p> <li>Zadejte eID BOK kód:</li> <p><img width = "100%" src = "/images/image2.png"/></p> <li>Po několika sekundách uvidíte v desktopové aplikace, že vaše identita byla ověřena: </li> <p><img width = "100%" src = "/images/image4.png"/></p> <li>Na stránkách <a href="http://www.qesadila.com">http://www.qesadila.com:</a> </li> <li>Ve webovém rozhraní aplikaci si můžete ověřit, že jste oprávněni k hlasování: </li> <p><img width = "100%" src = "/images/image8.png"/></p> <li>Vyberte odpověď a odešlete hlasovací lístek.</li> <li>V desktopové aplikace, můžete zkontrolovat své rozhodnutí před podepsáním a odesláním hlasu: <p><img width = "100%" src = "/images/image6.png"/></p> <li>Klikněte na tlačítko &ldquo;Podepsat dokument&rdquo;.</li> <li>Aplikace vás vyzve k zadání PIN kódu eID</li> <p><img width = "100%" src = "/images/image7.png"/></p> <li>Po zadání PIN kódu a kliknutí na "Podpesat" počkejte několik sekund a klikněte na tlačítko &ldquo;Odeslat&rdquo;:</li> <p><img width = "100%" src = "/images/image5.png"/></p> <li>Přejděte zpět na stránky Qesadila a ověřte, že Váš hlas byl přijat. </li> </ol> </ol> </ol> <br /> <h2>9. Technický pohled na proof of concept</h2> <ol type = "A"> <li>Všechna hlasování jsou v současné době veřejné. Nepublikujte žádné neveřejné data. </li> <li>Hlasující vyplní hlasovací formulář na webové aplikace. JSON je vytvořen. </li> <li>Vzhledem k tomu, že hlasující již zvolil svou totožnost certifikátem, desktopová aplikace přijímá od webové aplikace vyplněný hlasovací formulář. </li> <li>Komunikace mezi webovou stránkou a signal r serverem v desktopové aplikaci neopouští počítač. To znamená, že webová stránka Qesadila komunikuje s desktopovou aplikací vrámci počítače a tato komunikace nepřechází přes internet. </li> <li>Hlasující skontroluje v desktopové aplikaci hlasovací lístek zobrazený ve formátu JSON<br /><br />Hlasující vidí něco podobného: </li> <br /> <P style = "font-family: Courier;"> {<br /> &ldquo;VotingForm&rdquo;: &ldquo;Donation for citizens initiatives - participative budget&rdquo;,<br />&ldquo;Answers&rdquo;: {<br />&ldquo;Choose the donation fot the Central park reconstruction?&rdquo;: &ldquo;20 000 CZK&rdquo;,<br /> },<br />&ldquo;Time&rdquo;:&rdquo;date and time&rdquo;<br />&ldquo;VotinfFormId&rdquo;:&rdquo;GUID-OF-voting-form&rdquo;<br /> } </p> <br /> <p>Hlasující uvidí, za jaké rozhodnutí hlasoval (elektronicky podepsal).</p> <li>Hlasující klikne na tlačítko Sign a zadá eID PIN v případě, že bude vyzván. </li> <li>Hlasující vidí originální dokument, formátovaný původní dokument, podepsaný dokument a hash kód podepsaného dokumentu. Vzhledem k nedostatku času, jsme neměli analyzovat původní dokument z podepsaného dokumentu, ale to je něco, co by mělo být implementováno před přechodem do produkčního módu. </li> <li>Hlasující odesílá informaci do webové aplikace. Webová aplikace odešle zprávu na backend. </li> <li>Spojení mezi desktopovou aplikací, webovou aplikací a backend-em není považováno za důvěryhodné. </li> <li>Qesadila backend přijala soubor s hlasem hlasujícího.</li> <ol> <li>Zdrojový kód: Metoda SubmitVote  <a href = "https://dev.azure.com/Qesadila/_git/QesadilaBackend?path%3D%252FQesadilaBackend%252FControllers%252FAPI%252FVoterController.cs" >https://dev.azure.com/Qesadila/_git/QesadilaBackend?path=%2FQesadilaBackend%2FControllers%2FAPI%2FVoterController.cs </a> </li> <li>První zkontrolujte, zda byla přijata jakákoliv zpráva a je-li možné ji přečíst. </li> <li>Identifikuje hlasovací formulář z poskytnutého identifikátoru.</li> <li>Nalezne hlasujícího a získá jeho veřejný klíč uložený v databázi </li> <li>Zjistí, zda-li je hlasující oprávněný hlasovat v tomto hlasování (v hlasovacím formuláři).</li> <li>Ověření podpisu v dokumentu s veřejným klíčem hlasujícího </li> <li>Zvýšení počtu hlasujících u Hlasovacího formuláře (Voting Form)</li> <li>Návrat do webové aplikace s kontrolou hlasování</li> <li>Uživatelé mohou kontrolovat - hash souboru, který má být uložen v hlasování, že je stejný jako ten v desktopové aplikaci (a že s hlasem nebylo manipulováno). Hlas i počet hlasujících je možné ověřit i později. </li> <li>Zvýšení počtu přírůstku v podobě hlasování stejně celosvětové hlasování </li> <li>Za rozhodující se bere čas na straně serveru.</li> <Li>V budoucnu mohou být ukládány hash-e hlasů do blockchain-u pro ověření, že s hlasem v systému nebylo manipulováno. </li> </ol> <li>Hlasování je dokončeno:</li> <ol> <li>Zdrojový kód: <a section „https://dev.azure.com/Qesadila/_git/QesadilaBackend?path%3D%252FQesadilaBackend%252FControllers%252FAPI%252FVotingResultController.cs“ >https://dev.azure.com/Qesadila/_git/QesadilaBackend?path=%2FQesadilaBackend%2FControllers%2FAPI%2FVotingResultController.cs </a> </li> </ol> </ol> '
  }
}
