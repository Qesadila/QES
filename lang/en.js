export default {
  general: {
    langCode: 'en',
    shortTitle: 'Qesadila',
    longTitle: 'Qesadila the e-voting system',
    description:
      'Qesadila is open source e-voting software system, offered under licence: GNU GPLv3. By e-voting we mean the participation on making decisions of any group of voters, where is necessery to autorize the voters (using qualified electronic signature, or generated certificate).',
    welcome: 'Welcome',
    signIn: 'Sign in',
    logout: 'Logout',
    signUp: 'Sign up',
    forgotPassword: 'Forgotten password',
    language: 'Language',
    role: 'Role',
    resetPassword: 'Reset password',
    sendResetLink: 'Resend password reset',
    signInForm: 'Sign in form',
    signUpForm: 'Sign up form',
    enterNewPasswordTitle: 'Enter new password',
    acceptCheckbox: 'Souhlasím s ',
    acceptComercialMessages: 'Souhlasím se zasíláním reklamních sdělení.',
    labelName: 'full name',
    labelPassword: 'password',
    labelPasswordAgain: 'repeat your password',
    verifyEmail: 'Verify e-mail address',
    resendToken: 'Resend verification email',
    verifyEmailAction: 'Verify',
    backToVerification: 'Back to verification',
    verifyMail: 'Verify email',
    verifyVoterMail: "Verify voter's email",
    contentNeedsLoginMessage: 'You have to be logged in to see this content',
    htmlPokus: '<h1 style="font-size:20px;">EN</h1> ',
    yes: 'Yes',
    no: 'No'
  },
  navigation: {
    home: 'Home',
    votingResults: 'Voting results',
    termsAndConditions: 'Terms and conditions',
    verifyMail: 'Verify email',
    listOfCurrentVotings: 'List of current votings',
    listOfPastVotings: 'List of past votings',
    listOfForms: 'List of forms',
    createNewVoterForm: 'Create new voter form',
    createNewVoterList: 'Create new voter list',
    voterLists: 'Voter lists',
    lastSubmission: 'Last vote submission',
    FAQ: 'FAQ',
    qesAuth: 'Qesadila Auth'
  },
  anonym: {
    title: 'List of public votings',
    showResults: 'Show results',
    fundRaising: 'Fund raising'
  },
  voter: {
    title: 'List of votings',
    showResults: 'Show results',
    vote: 'Vote',
    question: 'Question ', // otázka 1 -> Question 1
    labelDoNotWantToAnswer: 'I do not want to answer',
    submitForm: 'Sign form in Qesadila Auth',
    signVoteInApp: 'Sign your vote in desktop application',
    signAppNotFound: 'Sign application was not found',
    startSignAppForProceed:
      'Sign your vote in our desktop application to proceed.',
    backButton: 'Back',
    table: {
      formListName: 'Form name',
      openFrom: 'Open since',
      openUntil: 'Open until',
      voterList: 'Voters list',
      actions: 'Actions'
    }
  },
  votingFormManager: {
    title: 'Voting form managment',
    showResults: 'Show results',
    edit: 'Edit',
    show: 'Show',
    questionText: 'Question', // 1. otázka -> 1. question
    possibleAnswers: 'Possible answers:',
    addNewPossibleAnswer: 'Add option',
    saveQuestion: 'Save question',
    removeQuestion: 'Remove question',
    createFormTitleText: 'Create new Voting Form',
    formName: 'Form name',
    placeholderFormName: 'Enter form name here',
    formOpenUntil: 'Form open until',
    voterListId: 'Voter list ID',
    placeholderVoterListId: 'Enter voter list ID',
    questions: 'Questions:',
    addNewQuestion: 'Add new question',
    saveForm: 'Save form',
    table: {
      formListName: 'Form name',
      openFrom: 'Open since',
      openUntil: 'Open until',
      isPublic: 'Public',
      voterList: 'Voter list',
      actions: 'Actions'
    },
    AutoClosingWhenAllHasVoted: 'Auto Closing When All Voters Has Voted',
    TimeoutOnly: 'Timeout Only',
    VoterManagerCanCloseAnyTime: 'Voter Manager Can Close Any Time',
    VoterManagerCanCloseIfAllHasVoted:
      'Voter Manager Can Close If All Voters Has Voted',
    stopVoting: 'End voting',
    endingType: 'Close voting:'
  },
  voterListManager: {
    title: 'Voter Lists',
    showDetails: 'Show details',
    createNewVoterList: 'Create new Voter List',
    labelListName: 'Name of Voter List',
    labelIsPublic: 'Voter list is public',
    continue: 'Continue',
    voters: 'Voters',
    voterListDetail: 'Voter list details',
    addVoter: 'Add voter',
    labelVoterEmail: 'E-mail',
    labelVoterSubmittedGDPR: 'Voter accepted GDPR consent',
    labelSingFile: 'Sign file',
    labelIsQes: 'Is QES?',
    published: 'Public',
    unpublished: 'Private',
    indexTable: {
      voterListName: 'Voter list name',
      actions: 'Actions'
    },
    votersTable: {
      voterName: 'Voters name',
      voterEmail: 'E-mail',
      voterQes: 'Qualified electronic signature',
      actions: 'Actions',
      time: 'Time added',
      identities: 'List of crypto identities'
    }
  },
  errorPage: {
    getMeOut: 'Get me out of here!'
  },
  htmlCode: {
    vimeoExplanationVideo:
      '<iframe src="https://player.vimeo.com/video/411919240?byline=0&portrait=0" width="100%" height="400" frameborder="0" allow="autoplay; fullscreen" allowfullscreen ></iframe>',
    fundRaising:
      '<p>Please <b>donate money</b> to support this project to transparent account <a href="https://ib.fio.sk/ib/transparent?a=2901594765&amp;l=ENGLISH" >SK3783300000002901594765/FIOZSKBAXXX</a> owned by Srdcom Doma NGO.</p>' +
      '<ul>' +
      '<li>With 1 EUR donation we cover our daily expanses for azure cloud services</li>' +
      '<li>With 1.000 - 5.000 EUR donation we can order penetration tests</li>' +
      '<li>With 10.000 - 100.000 EUR we can hire other developers and improve app for users specific needs</li>' +
      '</ul>',
    f6sComFollowWidget:
      '<a href="https://www.f6s.com/qesadila?follow=1" target="_blank" title="Follow Qesadila on F6S"><img src="https://www.f6s.com/images/f6s-follow-white.png" border="0" width="78" height="22 " alt="Follow Qesadila on F6S" style="width: 78px; height: 22px; padding: 0px; margin: 0px;" /></a><br/><p>Contact us on: qesadila.com@gmail.com</p>',
    acknowledgment:
      '<h1>Acknowledgment</h1><p>We are very grateful for the support of our partners:</p>    <ul style="list-style: none"><li style="margin:20px 0; "><a href="https://inezis.sk/" target="_blank"><img src="/images/partners/SK-Inezis.png" width="200"> Inezis s.r.o. SK</a></li>    <li style="margin:20px 0; "><a href="https://www.czechinvest.org/cz" target="_blank"><img src="/images/partners/CZ-Czechinvest.png" width="200"> CzechInvest CZ</a></li>    <li style="margin:20px 0; "><a href="https://www.srdcomdoma.sk" target="_blank"><img src="/images/partners/Srdcomdoma_logo_horizontal_RGB_no_margin.jpg" width="200"> Srdcom doma o.z. SK</a></li></ul>',
    projectOverview:
      '<h1>Qesadila e-voting system</h1> <p>(proof of concept)</p> <p>Version of the document: 0.2 Draft</p> <p>Date: 2020-04-29</p> <h2>1. Scope</h2> <p>Qesadila is open source e-voting software system,  offered under licence: GNU GPLv3. By e-voting we mean the participation on making decisions of any group of voters, where is necessery to autorize the voters (using qualified electronic signature, or generated certificate) and to check, if only autorized voters participated and how: </p> <ul> <li>city council meetings of elected representatives of the city,</li> <li>citizens voting in participatory budget,</li> <li>members of the company executive boards</li> <li>members or volunters of th NGO</li> </ul> <p>The system is developed by volunteers and formaly provided by NGO Srdcom doma o.z. registered in Slovakia and engaged in election legislative changes. We take seriously the possibility to participate on democratic rights so as elections. </p> <br/> <h2>2. Disclaimer</h2> <p>Please note, that this is not a final application and we are not responsible for any incidencies. If you decide to test application, you should be careful and you should know, what you are doing. To be familiar with using desktop computer is just good supposition. </p> <p>The simplest approach to test Qesadila is to sign-up on the site <a href="https://www.qesadila.com">https://www.qesadila.com</a>. After e-mail confirmation you can sign-in and switch between roles: Anonymous, Voter List Manager, Voting Form Manager and Voter. To participate on Voting, You will need to to use our desktop application (Windows, macOS, Linux currently supported - see below) and to confirm our Terms and conditions. </p> <br/> <h2>3. Solution</h2> <h3>Qesadila e-voting system consists of three parts:</h3> <ol type="A"> <li><a href="https://dev.azure.com/Qesadila/_git/QesadilaAuth">Desktop authentication and signing tool </a>  - <a href="/qesadila-auth">Description and download link is available from left menu Qesadila Auth</a> </li> <li><a href="https://dev.azure.com/Qesadila/QesadilaBackend">Qesadila Backend: </a ><a href="https://qesadila.azurewebsites.net/swagger/index.html">https://qesadila.azurewebsites.net/swagger/index.html </a> </li> <li><a href="https://github.com/Qesadila/QES/">Frontend web application: </a ><a href="https://www.qesadila.com/">https://www.qesadila.com </a> </li> </ol> <br /> <h2>4. What it does and what it doesn&rsquo;t</h2> <ol type="1"> <li>Qesadila is currently for testing purposes and is not dedicated for using in production yet. </li> <li>Please note, that to test voting using qualified electronic signature you have to use </li> <ol> <li>class 3 certificate at smart card using PKCS11 driver</li> <ol> <li>Tested using slovak identity card</li> </ol> <li>or if user does not have eID he / she can use certificate from system store or custom certificate </li> <ol> <li>Custom certificate can be <a href="https://github.com/Qesadila/QES/blob/master/cert/script" >generated using openssl library </a> </li> </ol> </ol> <li>In the Qesadila web app we distinguish four roles. To make proof of concept easier to test, any registered User can switch between roles on the website <a href="https://www.qesadila.com">https://www.qesadila.com</a >using select in the header. (In real life some person can be authorized to manage voters, another to create a voting and another to vote.) </li> <ol> <li>Anonymous</li> <ol> <li>any visitor on the website without sign-in</li> <li>can display voting results</li> </ol> <li>Voter List Manager</li> <ol> <li>user signed-up on the website registered</li> <li>can create / edit / delete Lists of Voters created by him/her</li> </ol> <li>Voting Form Manager</li> <ol> <li>can create / edit / delete Voting Forms created by him/her</li> </ol> <li>Voter</li> <ol> <li>can vote in all Voting Forms, connected with Voter List, which the Voter is member. </li> </ol> </ol> </ol> <br /> <h2>5. Qesadila frontend</h2> <ol type="A"> <li>Recommended / tested on:</li> <ol> <li>Internet Browser Chrome 80.0.3987.163, and Safari 13.1</li> </ol> <li>What id does</li> <ol> <li>Web app allows</li> <ol> <li>manage (create / edit / delete) Voter List,</li> <li>to create Voter by seting e-mail and uploading his / her voter.xml.asice signed gdpr consent, </li> <li>to assign Voter to Voter List,</li> <li>to create Voting Form,</li> <li>allows Voter to initiate voting process - sends request through backend to desktop application to sign the ballot using eID, or certificate in the desktop application, </li> <li>to display Voting results.</li> </ol> </ol> <li>Technology used:</li> <ol> <li>Vue.js, SignalR, Axios</li> </ol> <li>Licence: GNU GPL v3</li> <li>Source code: <a href="https://github.com/Qesadila/QES">https://github.com/Qesadila/QES </a> </li> <li>CI/CD: Github Actions. Deploy time from commit to master: 3min</li> </ol> <br /> <h2>6. QesadilaAuth - desktop application</h2> <ol type="A"> <li>Minimum requirements</li> <ol> <li>Tested on Windows 10,</li> <li>Tested on macOS Mojave 10.14.6</li> <li>Linux (Desktop) - supported, not tested</li> </ol> <li>Setup your environment</li> <ol> <li>Download the package from <a href="https://apps.scholtz.sk/QesadilaAuth/win/publish.zip" >/publish.zip (for Windows) or<br /></a><a href="https://apps.scholtz.sk/QesadilaAuth/osx/publish.zip" >/publish.zip (for macOS) or<br /></a><a href="https://apps.scholtz.sk/QesadilaAuth/linux/publish.zip" >/publish.zip (for Linux)   <br />and unpack it. Application launcher: </a> </li> <li>Run the application</li> <ol> <li>Windows: QesadilaAvaloniaSigner.exe</li> <li>Linux, Mac: QesadilaAvaloniaSigner</li> </ol> <li>Technology used:</li> <ol> <li>written in .net core 3</li> <li>Avalonia</li> <li>SignalR host</li> </ol> <li>Licence: GNU GPL v3</li> <li>Source code: <a href="https://dev.azure.com/Qesadila/_git/QesadilaAuth" >https://dev.azure.com/Qesadila/_git/QesadilaAuth </a> </li> </ol> </ol> <br /> <h2>7. Qesadila Backend</h2> <ol type="A"> <li>Minimum requirements</li> <ol> <li>Running using docker container</li> <li>Can be run in kubernetes, as azure web app or self hosted docker container </li> <ol> <li>Tested as azure web app</li> </ol> <li>Database: Configuration option between MsSQL, CosmosDB, MariaDB, MySQL, PostgreSQL, InMemory </li> <ol> <li>Tested with InMemory and CosmosDB</li> <li>Default system file storage</li> <li>We had technical issues creating MsSQL server as azure new server services were blocked at the time being. </li> </ol> <li>Emailing with templating: Currently supports only Sendgrid dynamic templates </li> <ol> <li>Default no emailing, with no email validation</li> </ol> <li>Data storage: Azure blob storage or System file storage</li> <ol> <li>Tested in azure blob storage, default is system file storage</li> </ol> </ol> <li>Class diagram: <a href="https://app.quickdatabasediagrams.com/%23/d/5Meb4N">https://app.quickdatabasediagrams.com/#/d/5Meb4N  </a> </li> <li>Licence: GNU GPL v3</li> <li>Source code: <a href="https://dev.azure.com/Qesadila/QesadilaBackend">https://dev.azure.com/Qesadila/QesadilaBackend  </a> </li> <li>CI/CD: Devops Pipelines, Testing: Deploy time 3 mins, docker image is pushed also to public <a href="https://hub.docker.com/r/qesadila/qesadila-backend">docker hub </a> </li> </ol> <br /> <h2>8. Main scenarios</h2> <p>Presamption: You signed-up on the <a href="http://www.qesadila.com" >http://www.qesadila.com, confirmed e-mail and you are signed-in  </a> </p> <ol type="A"> <li>Scenario &ldquo;Before voting&ldquo;</li> <ol> <li>Sign-in on the <a href="http://www.qesadila.com">http://www.qesadila.com. </a> </li> <li>Change your rolle to Voter List Manager.</li> <li>Create Voter List and add a Voter (your e-mail and this document signed for example on the <a href="https://zep.disig.sk/Portal" >https://zep.disig.sk/Portal website). </a> </li> <li>Change your rolle to Voting Form Manager.</li> <li>Create Voting Form and asociate the form with Voter List, you created before. </li> </ol> <li>Scenario &ldquo;Vote&rdquo;</li> <ol> <li>Presamtion:</li> <ol> <li>You already installed Qesadila desktop application on your desktop computer and application is running. </li> <li>On the <a href="http://www.qesadila.com">http://www.qesadila.com  </a> </li> <ol> <li> Sign-in on the <a href="http://www.qesadila.com">http://www.qesadila.com. </a> </li> <li>Change your rolle to Voter.</li> <li>Choose the voting, you&rsquo;d like to participate</li> <li>Qesadila will ask you for authentication:</li> <p><img width="100%"  src="/images/image1.png"  /></p> </ol> <li>Connect your reader with eID to your desktop computer.</li> <li>Switch to desktop application</li> <li>In the desktop application authenticate your self to Qesadila system. </li> <li>In the desktop application click on type PKCS11 Authentication and authorize, if you are asked. </li> <p><img width="100%"  src="/images/image3.png"  /></p> <li>Enter your eID BOK code:</li> <p><img width="100%"  src="/images/image2.png"  /></p> <li>After few seconds you will see in the desktop application, you are authenticated: </li> <p><img width="100%"  src="/images/image4.png"  /></p> <li>On the website <a href="http://www.qesadila.com">http://www.qesadila.com: </a> </li> <li>Check the web aplication to see, you are authorized to vote: </li> <p><img width="100%"  src="/images/image8.png"  /></p> <li>Choose your answer and submit your voting ballot.</li> <li>In the desktop application you can check your decision before signing and sending the ballot: <p><img width="100%"  src="/images/image6.png"  /></p> <li>Click on the &ldquo;Sign document&rdquo; button.</li> <li>Application will ask you to enter the eID PIN code</li> <p><img width="100%"  src="/images/image7.png"  /></p> <li>Wait few seconds and click on &ldquo;Send&rdquo; button:</li> <p><img width="100%"  src="/images/image5.png"  /></p> <li>Go back to Qesadila website and check, your ballot was accepted. </li> </ol> </ol> </ol> <br /> <h2>9. Technical proof of concept</h2> <ol type="A"> <li>All voting is currently public, so we do not consider insecure network traffic as an issue. </li> <li>Voter fills in voting form in the web application. Json is created. </li> <li>Considering voter has already chosen his identity by selecting certificate he is going to sign documents, he receives the filled in voting form from web app. </li> <li>Communication between website and signal r server in desktop application does not leave computer. </li> <li>Voter reviews the json in desktop application.<br />Signing applications shows him the raw data as well as json formatted data.<br />Signer sees something like: </li> <br /> <p style="font-family:Courier;"> {<br /> &ldquo;VotingForm&rdquo;: &ldquo;Donation for citizens initiatives - participative budget&rdquo;,<br />&ldquo;Answers&rdquo;: {<br />&ldquo;Choose the donation fot the Central park reconstruction?&rdquo;: &ldquo;20 000 CZK&rdquo;,<br /> },<br />&ldquo;Time&rdquo;:&rdquo;date and time&rdquo;<br />&ldquo;VotinfFormId&rdquo;:&rdquo;GUID-OF-voting-form&rdquo;<br /> } </p> <br /> <p>Voter can see what he signs for.</p> <li>Voter clicks Sign and enters the eID PIN if asked. </li> <li>Voter can see now the original document, formatted original document, signed document and hash code of signed document. Because of shortage of time, we did not parse the original document from the signed document back, but this is something that should be done before going to production mode. </li> <li>He sends this information to the web app. Web app sends it to the backend. </li> <li>The connection between desktop app, web app and backend is considered not trusted. </li> <li>Qesadila backend received the file width Voters ballot.</li> <ol> <li>Source code: Method SubmitVote <a href="https://dev.azure.com/Qesadila/_git/QesadilaBackend?path%3D%252FQesadilaBackend%252FControllers%252FAPI%252FVoterController.cs" >https://dev.azure.com/Qesadila/_git/QesadilaBackend?path=%2FQesadilaBackend%2FControllers%2FAPI%2FVoterController.cs </a> </li> <li>First check if any message was received and if is it possible to parse it. </li> <li>Identifies the voting form from the identifier provided.</li> <li>Look up the voter and gets his public key stored in the database </li> <li>Checks if the voter can cast votes in this voting.</li> <li>Verify the signature in the document with the voter&rsquo;s public key </li> <li>Increase increment number in the VotingForm</li> <li>Return to the web app the VoterBallot and show it to user</li> <li>User can check - hash of the file to be stored in the voting to be same as he had in the desktop app (with the vote has not been manipulated). He can check this also after voting with accounted votes. </li> <li>The increase of increment number in form voting as well global voting </li> <li>Time is decided by the server.</li> <li>In the future, can be implemented hash saving of the voter ballot to blockchain to verify that with the voterballot stored in the system has not been manipulated. </li> </ol> <li>After time comes up, the voting is finalized:</li> <ol> <li>Source code: <a href="https://dev.azure.com/Qesadila/_git/QesadilaBackend?path%3D%252FQesadilaBackend%252FControllers%252FAPI%252FVotingResultController.cs" >https://dev.azure.com/Qesadila/_git/QesadilaBackend?path=%2FQesadilaBackend%2FControllers%2FAPI%2FVotingResultController.cs </a> </li> </ol> </ol>'
  }
}
