const translation = {
  steps: {
    header: {
      creation: "Creați Cunoștințe",
      update: "Adăugați date",
      fallbackRoute: "Cunoaștere",
    },
    one: "Alegeți sursa de date",
    two: "Prelucrarea și curățarea textului",
    three: "Executați și finalizați",
  },
  error: {
    unavailable: "Această Cunoștință nu este disponibilă",
  },
  stepOne: {
    filePreview: "Previzualizare fișier",
    pagePreview: "Previzualizare pagină",
    dataSourceType: {
      file: "Importați din fișier text",
      notion: "Sincronizați din Notion",
      web: "Sincronizați din site web",
    },
    uploader: {
      title: "Încărcați fișier text",
      button: "Trageți și fixați fișierul, sau",
      browse: "Răsfoire",
      tip: "Acceptă {{supportTypes}}. Maxim {{size}}MB fiecare.",
      validation: {
        typeError: "Tipul de fișier nu este acceptat",
        size: "Fișierul este prea mare. Maximul este de {{size}}MB",
        count: "Nu se acceptă mai multe fișiere",
        filesNumber:
          "Ați atins limita de încărcare în lot de {{filesNumber}} fișiere.",
      },
      cancel: "Anulează",
      change: "Schimbă",
      failed: "Încărcarea a eșuat",
    },
    notionSyncTitle: "Notion nu este conectat",
    notionSyncTip:
      "Pentru a sincroniza cu Notion, trebuie mai întâi să se stabilească o conexiune la Notion.",
    connect: "Mergi la conectare",
    button: "următorul",
    emptyDatasetCreation: "Vreau să creez o Cunoștință goală",
    modal: {
      title: "Creați o Cunoștință goală",
      tip: "O Cunoștință goală nu va conține niciun document, iar dvs. puteți încărca documente în orice moment.",
      input: "Numele Cunoștinței",
      placeholder: "Vă rugăm să introduceți",
      nameNotEmpty: "Numele nu poate fi gol",
      nameLengthInvalid: "Numele trebuie să fie între 1 și 40 de caractere",
      cancelButton: "Anulează",
      confirmButton: "Creează",
      failed: "Crearea a eșuat",
    },
    website: {
      crawlSubPage: "Accesarea cu crawlere a subpaginilor",
      limit: "Limită",
      selectAll: "Selectează tot",
      configure: "Configura",
      preview: "Previzualizare",
      run: "Alerga",
      maxDepth: "Adâncime maximă",
      firecrawlDoc: "Documente Firecrawl",
      options: "Opțiuni",
      exceptionErrorTitle:
        "A apărut o excepție în timpul rulării lucrării Firecrawl:",
      firecrawlTitle: "Extrageți conținut web cu 🔥Firecrawl",
      unknownError: "Eroare necunoscută",
      scrapTimeInfo: "Pagini răzuite {{total}} în total în {{timp}}s",
      firecrawlDocLink:
        "https://idx-solutions.com/guides/knowledge-base/sync-from-website",
      excludePaths: "Excluderea căilor",
      resetAll: "Resetați toate",
      extractOnlyMainContent:
        "Extrageți doar conținutul principal (fără anteturi, navigări, subsoluri etc.)",
      fireCrawlNotConfiguredDescription:
        "Configurați Firecrawl cu cheia API pentru a-l utiliza.",
      fireCrawlNotConfigured: "Firecrawl nu este configurat",
      includeOnlyPaths: "Includeți numai căi",
      totalPageScraped: "Total pagini răzuite:",
      maxDepthTooltip:
        "Adâncimea maximă de accesat cu crawlere în raport cu adresa URL introdusă. Adâncimea 0 doar răzuiește pagina URL-ului introdus, adâncimea 1 răzuiește url-ul și tot ceea ce după ce a introdusURL + un / și așa mai departe.",
      jinaReaderDocLink: "https://jina.ai/reader",
      chooseProvider: "Selectați un furnizor",
      jinaReaderNotConfiguredDescription:
        "Configurați Jina Reader introducând cheia API gratuită pentru acces.",
      useSitemap: "Utilizarea hărții site-ului",
      jinaReaderDoc: "Aflați mai multe despre Jina Reader",
      jinaReaderTitle: "Convertiți întregul site în Markdown",
      jinaReaderNotConfigured: "Jina Reader nu este configurat",
      useSitemapTooltip:
        "Urmați harta site-ului pentru a accesa cu crawlere site-ul. Dacă nu, Jina Reader va accesa cu crawlere iterativ în funcție de relevanța paginii, producând mai puține pagini, dar de calitate superioară.",
    },
    cancel: "Anula",
  },
  stepTwo: {
    segmentation: "Setări de segmentare",
    auto: "Automat",
    autoDescription:
      "Setează automat regulile de segmentare și prelucrare. Utilizatorilor necunoscuți li se recomandă să selecteze această opțiune.",
    custom: "Personalizat",
    customDescription:
      "Personalizați regulile de segmentare, lungimea segmentelor și regulile de prelucrare, etc.",
    separator: "Identificator de segment",
    separatorPlaceholder:
      'De exemplu, linie nouă (\\\\n) sau separator special (cum ar fi "***")',
    maxLength: "Lungimea maximă a segmentului",
    overlap: "Suprapunerea segmentelor",
    overlapTip:
      "Setarea suprapunerii segmentelor poate menține relevanța semantică între ele, îmbunătățind efectul de recuperare. Se recomandă să setați 10%-25% din dimensiunea maximă a segmentului.",
    overlapCheck:
      "suprapunerea segmentului nu ar trebui să fie mai mare decât lungimea maximă a segmentului",
    rules: "Reguli de prelucrare a textului",
    removeExtraSpaces:
      "Înlocuiește spațiile consecutive, liniile noi și taburile",
    removeUrlEmails: "Șterge toate adresele URL și e-mailurile",
    removeStopwords:
      'Eliminați cuvintele de umplere, cum ar fi "a", "an", "the"',
    preview: "Confirmă și previzualizează",
    reset: "Resetează",
    indexMode: "Mod de indexare",
    qualified: "Calitate ridicată",
    recommend: "Recomandă",
    qualifiedTip:
      "Apelează interfața de încorporare a sistemului implicit pentru a procesa și a oferi o precizie mai mare atunci când utilizatorii interoghează.",
    warning: "Vă rugăm să setați mai întâi cheia API a furnizorului de modele.",
    click: "Mergi la setări",
    economical: "Economic",
    economicalTip:
      "Utilizați motoare de vectori offline, indexuri de cuvinte cheie etc. pentru a reduce precizia fără a cheltui jetoane",
    QATitle: "Segmentarea în format Întrebare și Răspuns",
    QATip: "Activarea acestei opțiuni va consuma mai multe jetoane",
    QALanguage: "Segmentează folosind",
    estimateCost: "Estimare",
    estimateSegment: "Segmente estimate",
    segmentCount: "segmente",
    calculating: "Se calculează...",
    fileSource: "Prelucrează documente",
    notionSource: "Prelucrează pagini",
    other: "și alte ",
    fileUnit: " fișiere",
    notionUnit: " pagini",
    previousStep: "Pasul anterior",
    nextStep: "Salvează și Procesează",
    save: "Salvează și Procesează",
    cancel: "Anulează",
    sideTipTitle: "De ce segmentare și prelucrare?",
    sideTipP1:
      "Atunci când se prelucrează date text, segmentarea și curățarea sunt două etape importante de pre-procesare.",
    sideTipP2:
      "Segmentarea împarte textul lung în paragrafe, astfel încât modelele să poată înțelege mai bine. Acest lucru îmbunătățește calitatea și relevanța rezultatelor modelului.",
    sideTipP3:
      "Curățarea elimină caracterele și formatele inutile, făcând Cunoștințele mai curate și mai ușor de analizat.",
    sideTipP4:
      "O segmentare și curățare adecvată îmbunătățesc performanța modelului, oferind rezultate mai precise și valoroase.",
    previewTitle: "Previzualizare",
    previewTitleButton: "Previzualizare",
    previewButton: "Comutare la format întrebare și răspuns",
    previewSwitchTipStart:
      "Previzualizarea curentă a segmentului este în format text, comutarea la o previzualizare în format întrebare și răspuns va",
    previewSwitchTipEnd: " consuma jetoane suplimentare",
    characters: "caractere",
    indexSettingTip:
      "Pentru a modifica metoda de indexare, vă rugăm să mergeți la ",
    retrievalSettingTip:
      "Pentru a modifica metoda de indexare, vă rugăm să mergeți la ",
    datasetSettingLink: "setările Cunoștinței.",
    webpageUnit: "Pagini",
    websiteSource: "Site-ul web de preprocesare",
    separatorTip:
      "Un delimitator este caracterul folosit pentru a separa textul. \\n\\n și \\n sunt delimitatori utilizați în mod obișnuit pentru separarea paragrafelor și liniilor. Combinate cu virgule (\\n\\n,\\n), paragrafele vor fi segmentate pe linii atunci când depășesc lungimea maximă a bucății. De asemenea, puteți utiliza delimitatori speciali definiți de dumneavoastră (de exemplu, ***).",
    maxLengthCheck:
      "Lungimea maximă a bucății trebuie să fie mai mică de {{limit}}",
    notAvailableForQA:
      "Nu este disponibil pentru Indexul de întrebări și răspunsuri",
    generalTip:
      "Modul general de fragmentare a textului, bucățile recuperate și rechemate sunt aceleași.",
    previewChunk: "Previzualizare bucată",
    previewChunkTip:
      'Faceți clic pe butonul "Previzualizare bucată" din stânga pentru a încărca previzualizarea',
    fullDoc: "Documentul complet",
    parentChildDelimiterTip:
      "Un delimitator este caracterul folosit pentru a separa textul. \\n\\n este recomandat pentru împărțirea documentului original în bucăți părinte mari. De asemenea, puteți utiliza delimitatori speciali definiți de dvs.",
    fullDocTip:
      "Întregul document este folosit ca bucată părinte și preluat direct. Vă rugăm să rețineți că, din motive de performanță, textul care depășește 10000 de jetoane va fi trunchiat automat.",
    switch: "Comutator",
    previewChunkCount: "{{număr}} Bucăți estimate",
    parentChunkForContext: "Părinte-bucată pentru context",
    paragraph: "Paragraf",
    childChunkForRetrieval: "Child-chunk pentru recuperare",
    parentChild: "Părinte-copil",
    parentChildTip:
      "Când utilizați modul părinte-copil, fragmentul copil este utilizat pentru recuperare, iar fragmentul părinte este utilizat pentru reamintire ca context.",
    highQualityTip:
      "După terminarea încorporarii în modul Înaltă calitate, revenirea la modul Economic nu este disponibilă.",
    qaSwitchHighQualityTipTitle:
      "Formatul de întrebări și răspunsuri necesită o metodă de indexare de înaltă calitate",
    paragraphTip:
      "Acest mod împarte textul în paragrafe pe baza delimitatorilor și a lungimii maxime a bucății, folosind textul împărțit ca bucată părinte pentru recuperare.",
    general: "General",
    notAvailableForParentChild:
      "Nu este disponibil pentru Indexul părinte-copil",
    qaSwitchHighQualityTipContent:
      "În prezent, numai metoda de index de înaltă calitate acceptă fragmentarea formatului de întrebări și răspunsuri. Doriți să treceți la modul de înaltă calitate?",
    parentChildChunkDelimiterTip:
      "Un delimitator este caracterul folosit pentru a separa textul. \\n este recomandat pentru împărțirea bucăților părinte în bucăți copii mici. De asemenea, puteți utiliza delimitatori speciali definiți de dvs.",
    useQALanguage: "Fragmentați folosind formatul Întrebări și răspunsuri în",
  },
  stepThree: {
    creationTitle: "🎉 Cunoștință creată",
    creationContent:
      "Am denumit automat Cunoștința, o puteți modifica în orice moment",
    label: "Numele Cunoștinței",
    additionTitle: "🎉 Document încărcat",
    additionP1: "Documentul a fost încărcat în Cunoștință",
    additionP2: ", îl puteți găsi în lista de documente a Cunoștinței.",
    stop: "Oprește procesarea",
    resume: "Reia procesarea",
    navTo: "Mergi la document",
    sideTipTitle: "Ce urmează",
    sideTipContent:
      "După ce documentul a terminat indexarea, Cunoștința poate fi integrată în aplicație ca context, puteți găsi setările contextuale în pagina de orchestrare a prompturilor. De asemenea, o puteți crea ca un plugin de indexare ChatGPT independent pentru a o publica.",
    modelTitle: "Sunteți sigur că doriți să opriți încorporarea?",
    modelContent:
      "Dacă trebuie să reluați procesarea mai târziu, veți continua de unde ați rămas.",
    modelButtonConfirm: "Confirmă",
    modelButtonCancel: "Anulează",
  },
  firecrawl: {
    configFirecrawl: "Configurați 🔥Firecrawl",
    getApiKeyLinkText: "Obțineți cheia API de la firecrawl.dev",
    apiKeyPlaceholder: "Cheie API de la firecrawl.dev",
  },
  jinaReader: {
    configJinaReader: "Configurați Jina Reader",
    apiKeyPlaceholder: "Cheie API de la jina.ai",
    getApiKeyLinkText: "Obțineți cheia API gratuită la jina.ai",
  },
  otherDataSource: {
    title: "Conectați-vă la alte surse de date?",
    description:
      "În prezent, baza de cunoștințe a IDX are doar surse de date limitate. Contribuția cu o sursă de date la baza de cunoștințe IDX este o modalitate fantastică de a ajuta la îmbunătățirea flexibilității și puterii platformei pentru toți utilizatorii. Ghidul nostru de contribuție vă ajută să începeți. Vă rugăm să faceți clic pe linkul de mai jos pentru a afla mai multe.",
    learnMore: "Află mai multe",
  },
};

export default translation;
