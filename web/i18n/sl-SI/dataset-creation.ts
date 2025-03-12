const translation = {
  steps: {
    header: {
      creation: "Ustvari Znanje",
      update: "Dodaj podatke",
      fallbackRoute: "Znanje",
    },
    one: "Izberi vir podatkov",
    two: "Predobdelava in čiščenje besedila",
    three: "Izvedi in zaključi",
  },
  error: {
    unavailable: "To Znanje ni na voljo",
  },
  firecrawl: {
    configFirecrawl: "Nastavi 🔥Firecrawl",
    apiKeyPlaceholder: "API ključ od firecrawl.dev",
    getApiKeyLinkText: "Pridobi API ključ na firecrawl.dev",
  },
  jinaReader: {
    configJinaReader: "Nastavi Jina Reader",
    apiKeyPlaceholder: "API ključ od jina.ai",
    getApiKeyLinkText: "Pridobi brezplačni API ključ na jina.ai",
  },
  stepOne: {
    filePreview: "Predogled datoteke",
    pagePreview: "Predogled strani",
    dataSourceType: {
      file: "Uvozi iz datoteke",
      notion: "Sinhroniziraj z Notion",
      web: "Sinhroniziraj s spletno stranjo",
    },
    uploader: {
      title: "Naloži datoteko",
      button: "Povleci in spusti datoteko ali",
      browse: "Prebrskaj",
      tip: "Podprti tipi datotek: {{supportTypes}}. Največ {{size}}MB na datoteko.",
      validation: {
        typeError: "Tip datoteke ni podprt",
        size: "Datoteka je prevelika. Največja dovoljena velikost je {{size}}MB",
        count: "Podprta je le ena datoteka",
        filesNumber:
          "Dosegli ste omejitev za pošiljanje {{filesNumber}} datotek.",
      },
      cancel: "Prekliči",
      change: "Zamenjaj",
      failed: "Nalaganje ni uspelo",
    },
    notionSyncTitle: "Notion ni povezan",
    notionSyncTip:
      "Za sinhronizacijo z Notion je najprej potrebno vzpostaviti povezavo.",
    connect: "Pojdi na povezavo",
    button: "Naprej",
    emptyDatasetCreation: "Želim ustvariti prazno Znanje",
    modal: {
      title: "Ustvari prazno Znanje",
      tip: "Prazno Znanje ne bo vsebovalo dokumentov, dokumente pa lahko naložite kadarkoli.",
      input: "Ime Znanja",
      placeholder: "Vnesite ime",
      nameNotEmpty: "Ime ne sme biti prazno",
      nameLengthInvalid: "Ime mora imeti od 1 do 40 znakov",
      cancelButton: "Prekliči",
      confirmButton: "Ustvari",
      failed: "Ustvarjanje ni uspelo",
    },
    website: {
      chooseProvider: "Izberi ponudnika",
      fireCrawlNotConfigured: "Firecrawl ni nastavljen",
      fireCrawlNotConfiguredDescription:
        "Nastavite Firecrawl z API ključem, da ga lahko uporabite.",
      jinaReaderNotConfigured: "Jina Reader ni nastavljen",
      jinaReaderNotConfiguredDescription:
        "Nastavite Jina Reader z vnosom brezplačnega API ključa.",
      configure: "Nastavi",
      run: "Zaženi",
      firecrawlTitle: "Izvleci spletno vsebino z 🔥Firecrawl",
      firecrawlDoc: "Firecrawl dokumentacija",
      firecrawlDocLink:
        "https://idx-solutions.com/guides/knowledge-base/sync-from-website",
      jinaReaderTitle: "Pretvori celotno stran v Markdown",
      jinaReaderDoc: "Več o Jina Reader",
      jinaReaderDocLink: "https://jina.ai/reader",
      useSitemap: "Uporabi sitemap",
      useSitemapTooltip:
        "Sledi zemljevidu spletne strani (sitemap) za iskanje strani. Če ne, bo Jina Reader iterativno iskal strani na podlagi pomembnosti, kar bo prineslo manj, a bolj relevantnih strani.",
      options: "Možnosti",
      crawlSubPage: "Išči podstrani",
      limit: "Omejitev",
      maxDepth: "Največja globina",
      excludePaths: "Izključi poti",
      includeOnlyPaths: "Vključi le poti",
      extractOnlyMainContent:
        "Izvleci le glavno vsebino (brez glav, navigacij, nog itd.)",
      exceptionErrorTitle: "Med izvajanjem iskanja je prišlo do izjeme:",
      unknownError: "Neznana napaka",
      totalPageScraped: "Skupaj preiskanih strani:",
      selectAll: "Izberi vse",
      resetAll: "Ponastavi vse",
      scrapTimeInfo: "Skupaj preiskanih {{total}} strani v {{time}}s",
      preview: "Predogled",
      maxDepthTooltip:
        "Največja globina iskanja glede na vneseni URL. Globina 0 bo iskala le stran z vnesenim URL-jem, globina 1 bo iskala URL in vse za tem, dodano z enim /, in tako naprej.",
    },
    cancel: "Odpovedati",
  },
  stepTwo: {
    segmentation: "Nastavitve razdeljevanja",
    auto: "Samodejno",
    autoDescription:
      "Samodejno nastavi pravila za razdeljevanje in predobdelavo besedila. Neizkušenim uporabnikom priporočamo to možnost.",
    custom: "Po meri",
    customDescription:
      "Prilagodi pravila za razdeljevanje, dolžino delcev in pravila za predobdelavo besedila itd.",
    separator: "Ločilo",
    separatorTip:
      "Ločilo je znak, ki se uporablja za ločevanje besedila. \\n\\n in \\n sta pogosto uporabljeni ločili za ločevanje odstavkov in vrstic. V kombinaciji z vejicami (\\n\\n,\\n) bodo odstavki razdeljeni po vrsticah, ko bo presežena največja dolžina delcev. Uporabite lahko tudi posebna ločila, ki jih sami določite (npr. ***).",
    separatorPlaceholder:
      "\\n\\n za ločevanje odstavkov; \\n za ločevanje vrstic",
    maxLength: "Največja dolžina delca",
    overlap: "Prekrivanje delcev",
    overlapTip:
      "Nastavitev prekrivanja delcev lahko ohrani semantično povezavo med njimi, kar izboljša učinkovitost iskanja. Priporočamo nastavitev 10%-25% največje dolžine delca.",
    overlapCheck:
      "Prekrivanje delca ne sme biti večje od največje dolžine delca",
    rules: "Pravila predobdelave besedila",
    removeExtraSpaces: "Zamenjaj zaporedne presledke, vrstice in zavihke",
    removeUrlEmails: "Izbriši vse URL-je in e-poštne naslove",
    removeStopwords: 'Odstrani neuporabne besede kot so "a", "an", "the"',
    preview: "Potrdi in predogled",
    reset: "Ponastavi",
    indexMode: "Način indeksiranja",
    qualified: "Visoka kakovost",
    recommend: "Priporočeno",
    qualifiedTip:
      "Za obdelavo se uporabi privzeti sistemski vmesnik za vdelavo, ki zagotavlja višjo natančnost pri poizvedbah uporabnikov.",
    warning: "Najprej nastavite API ključ za model ponudnika.",
    click: "Pojdi na nastavitve",
    economical: "Ekonomsko",
    economicalTip:
      "Uporablja lokalne vektorske pogone, ključne besede, itd., kar zmanjša natančnost brez porabe žetonov.",
    QATitle: "Razdeljevanje v obliki Vprašanje & Odgovor",
    QATip: "Omogočanje te možnosti bo porabilo več žetonov",
    QALanguage: "Razdelitev z uporabo",
    estimateCost: "Ocena stroškov",
    estimateSegment: "Ocenjeno število delcev",
    segmentCount: "delci",
    calculating: "Izračunavam...",
    fileSource: "Predobdelava dokumentov",
    notionSource: "Predobdelava strani",
    websiteSource: "Predobdelava spletne strani",
    other: "in drugi ",
    fileUnit: " dokumenti",
    notionUnit: " strani",
    webpageUnit: " strani",
    previousStep: "Prejšnji korak",
    nextStep: "Shrani in obdela",
    save: "Shrani in obdela",
    cancel: "Prekliči",
    sideTipTitle: "Zakaj razdeljevanje in predobdelava?",
    sideTipP1:
      "Pri obdelavi besedilnih podatkov sta razdeljevanje in čiščenje dve pomembni fazi predobdelave.",
    sideTipP2:
      "Razdeljevanje dolga besedila na odstavke omogoča modelom boljše razumevanje. To izboljša kakovost in relevantnost rezultatov modela.",
    sideTipP3:
      "Čiščenje odstranjuje nepotrebne znake in formate, kar Znanje naredi bolj čisto in lažje obdeljivo.",
    sideTipP4:
      "Pravilno razdeljevanje in čiščenje izboljšata delovanje modela, kar zagotavlja bolj natančne in dragocene rezultate.",
    previewTitle: "Predogled",
    previewTitleButton: "Predogled",
    previewButton: "Preklop v obliko Vprašanje & Odgovor",
    previewSwitchTipStart:
      "Trenutni predogled delcev je v obliki besedila, preklop na predogled v obliki vprašanj in odgovorov bo",
    previewSwitchTipEnd: " porabil dodatne žetone",
    characters: "znaki",
    indexSettingTip:
      "Če želite spremeniti način indeksiranja in model vdelave, pojdite na ",
    retrievalSettingTip: "Če želite spremeniti nastavitve iskanja, pojdite na ",
    datasetSettingLink: "nastavitve Znanja.",
    maxLengthCheck: "Največja dolžina kosa mora biti manjša od {{limit}}",
    fullDoc: "Celoten dokument",
    parentChildChunkDelimiterTip:
      "Ločilo je znak, ki se uporablja za ločevanje besedila. \\n je priporočljivo za razdelitev starševskih kosov na majhne otroške koščke. Uporabite lahko tudi posebne ločila, ki ste jih določili sami.",
    highQualityTip:
      "Ko končate vdelavo v načinu visoke kakovosti, vrnitev v ekonomični način ni na voljo.",
    parentChildTip:
      "Ko uporabljate način nadreje-podrejenega, se podrejeni kos uporablja za pridobivanje, nadrejeni kos pa se uporablja za odpoklic kot kontekst.",
    paragraph: "Odstavek",
    qaSwitchHighQualityTipTitle:
      "Oblika zapisa vprašanj in odgovorov zahteva visokokakovostno metodo indeksiranja",
    paragraphTip:
      "Ta način razdeli besedilo na odstavke na podlagi ločil in največje dolžine kosa, pri čemer se razdeljeno besedilo uporabi kot nadrejeni kos za pridobivanje.",
    parentChildDelimiterTip:
      "Ločilo je znak, ki se uporablja za ločevanje besedila. \\n\\n je priporočljivo za razdelitev izvirnega dokumenta na velike nadrejene dele. Uporabite lahko tudi posebne ločila, ki ste jih določili sami.",
    notAvailableForQA: "Ni na voljo za indeks vprašanj in odgovorov",
    parentChild: "Starš-otrok",
    parentChunkForContext: "Nadrejeni kos za kontekst",
    notAvailableForParentChild:
      "Ni na voljo za indeks nadrejenega in podrejenega",
    previewChunk: "Predogled kosa",
    previewChunkCount: "{{štetje}} Ocenjeni kosi",
    previewChunkTip:
      "Kliknite gumb »Predogled kosa« na levi, da naložite predogled",
    fullDocTip:
      "Celoten dokument je uporabljen kot nadrejeni kos in pridobljen neposredno. Upoštevajte, da bo zaradi uspešnosti besedilo, ki presega 10000 žetonov, samodejno prikrajšano.",
    childChunkForRetrieval: "Otroški kos za pridobivanje",
    qaSwitchHighQualityTipContent:
      "Trenutno samo visokokakovostna metoda indeksa podpira deljenje v obliki vprašanj in odgovorov. Želite preklopiti na kakovosten način?",
    generalTip:
      "Splošni način deljenja besedila, pridobljeni in odpoklicani kosi so enaki.",
    useQALanguage: "Delček z obliko zapisa vprašanj in odgovorov v",
    general: "Splošno",
    switch: "Stikalo",
  },
  stepThree: {
    creationTitle: "🎉 Znanje ustvarjeno",
    creationContent:
      "Samodejno smo poimenovali Znanje, ime lahko kadarkoli spremenite.",
    label: "Ime Znanja",
    additionTitle: "🎉 Dokument naložen",
    additionP1: "Dokument je bil naložen v Znanje",
    additionP2: ", lahko ga najdete v seznamu dokumentov Znanja.",
    stop: "Ustavi obdelavo",
    resume: "Nadaljuj obdelavo",
    navTo: "Pojdi na dokument",
    sideTipTitle: "Kaj sledi",
    sideTipContent:
      "Ko je dokument končan z indeksiranjem, lahko Znanje vključite v aplikacijo kot kontekst, nastavitve konteksta najdete na strani za orkestracijo ukazov. Prav tako ga lahko ustvarite kot samostojni vtičnik za indeksiranje ChatGPT in ga izdate.",
    modelTitle: "Ali ste prepričani, da želite ustaviti vdelavo?",
    modelContent:
      "Če boste morali nadaljevati obdelavo kasneje, se bo ta nadaljevala tam, kjer ste končali.",
    modelButtonConfirm: "Potrdi",
    modelButtonCancel: "Prekliči",
  },
  otherDataSource: {
    learnMore: "Izvedi več",
    title: "Vzpostavite povezavo z drugimi viri podatkov?",
    description:
      "Trenutno ima baza znanja IDX le omejene vire podatkov. Prispevanje vira podatkov v bazo znanja IDX je fantastičen način za izboljšanje prilagodljivosti in moči platforme za vse uporabnike. Naš vodnik za prispevke olajša začetek. Če želite izvedeti več, kliknite spodnjo povezavo.",
  },
};

export default translation;
