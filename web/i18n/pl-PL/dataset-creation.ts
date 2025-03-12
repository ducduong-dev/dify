const translation = {
  steps: {
    header: {
      creation: "Utwórz Wiedzę",
      update: "Dodaj dane",
      fallbackRoute: "Wiedza",
    },
    one: "Wybierz źródło danych",
    two: "Przetwarzanie i Czyszczenie Tekstu",
    three: "Wykonaj i zakończ",
  },
  error: {
    unavailable: "Ta Wiedza nie jest dostępna",
  },
  stepOne: {
    filePreview: "Podgląd pliku",
    pagePreview: "Podgląd strony",
    dataSourceType: {
      file: "Importuj z pliku tekstowego",
      notion: "Synchronizuj z Notion",
      web: "Synchronizuj z witryny",
    },
    uploader: {
      title: "Prześlij plik tekstowy",
      button: "Przeciągnij i upuść plik lub",
      browse: "Przeglądaj",
      tip: "Obsługuje {{supportTypes}}. Maksymalnie {{size}}MB każdy.",
      validation: {
        typeError: "Nieobsługiwany typ pliku",
        size: "Plik jest za duży. Maksymalnie {{size}}MB",
        count: "Nieobsługiwane przesyłanie wielu plików",
        filesNumber: "Osiągnąłeś limit przesłania partii {{filesNumber}}.",
      },
      cancel: "Anuluj",
      change: "Zmień",
      failed: "Przesyłanie nie powiodło się",
    },
    notionSyncTitle: "Notion nie jest podłączony",
    notionSyncTip:
      "Aby synchronizować z Notion, najpierw trzeba ustanowić połączenie z Notion.",
    connect: "Przejdź do połączenia",
    button: "dalej",
    emptyDatasetCreation: "Chcę utworzyć pustą Wiedzę",
    modal: {
      title: "Utwórz pustą Wiedzę",
      tip: "Pusta Wiedza nie będzie zawierała żadnych dokumentów, a można przesyłać dokumenty w dowolnym momencie.",
      input: "Nazwa Wiedzy",
      placeholder: "Proszę wpisz",
      nameNotEmpty: "Nazwa nie może być pusta",
      nameLengthInvalid: "Nazwa musi zawierać od 1 do 40 znaków",
      cancelButton: "Anuluj",
      confirmButton: "Utwórz",
      failed: "Utworzenie nie powiodło się",
    },
    website: {
      limit: "Ograniczać",
      firecrawlDocLink:
        "https://idx-solutions.com/guides/knowledge-base/sync-from-website",
      firecrawlDoc: "Dokumentacja Firecrawl",
      unknownError: "Nieznany błąd",
      fireCrawlNotConfiguredDescription:
        "Skonfiguruj Firecrawl z kluczem API, aby z niego korzystać.",
      run: "Biegać",
      configure: "Konfigurować",
      resetAll: "Zresetuj wszystko",
      preview: "Prapremiera",
      exceptionErrorTitle:
        "Wystąpił wyjątek podczas uruchamiania zadania Firecrawl:",
      maxDepth: "Maksymalna głębokość",
      crawlSubPage: "Przeszukiwanie podstron",
      options: "Opcje",
      scrapTimeInfo: "Zeskrobano {{total}} stron w sumie w ciągu {{time}}s",
      totalPageScraped: "Łączna liczba zeskrobanych stron:",
      extractOnlyMainContent:
        "Wyodrębnij tylko główną zawartość (bez nagłówków, nawigacji, stopek itp.)",
      excludePaths: "Wykluczanie ścieżek",
      includeOnlyPaths: "Uwzględnij tylko ścieżki",
      selectAll: "Zaznacz wszystko",
      firecrawlTitle: "Wyodrębnij zawartość internetową za pomocą 🔥Firecrawl",
      fireCrawlNotConfigured: "Firecrawl nie jest skonfigurowany",
      maxDepthTooltip:
        "Maksymalna głębokość przeszukiwania względem wprowadzonego adresu URL. Głębokość 0 po prostu zeskrobuje stronę z wprowadzonego adresu URL, głębokość 1 zeskrobuje adres URL i wszystko po wprowadzeniuURL+ jeden / i tak dalej.",
      useSitemap: "Użyj mapy witryny",
      useSitemapTooltip:
        "Postępuj zgodnie z mapą witryny, aby zindeksować witrynę. Jeśli nie, Jina Reader będzie indeksować iteracyjnie w oparciu o trafność strony, dając mniej stron, ale o wyższej jakości.",
      chooseProvider: "Wybierz dostawcę",
      jinaReaderDocLink: "https://jina.ai/reader",
      jinaReaderNotConfigured: "Czytnik Jina nie jest skonfigurowany",
      jinaReaderDoc: "Dowiedz się więcej o Jina Reader",
      jinaReaderTitle: "Konwertowanie całej witryny na język Markdown",
      jinaReaderNotConfiguredDescription:
        "Skonfiguruj Jina Reader, wprowadzając bezpłatny klucz API, aby uzyskać dostęp.",
    },
    cancel: "Anuluj",
  },
  stepTwo: {
    segmentation: "Ustawienia bloków tekstu",
    auto: "Automatycznie",
    autoDescription:
      "Automatyczne ustawianie bloków i reguł preprocessingu. Nieużytkownicy są zaleceni do wyboru tej opcji.",
    custom: "Niestandardowo",
    customDescription:
      "Dostosuj reguły bloków, długość bloków i reguły preprocessingu itp.",
    separator: "Separator bloków",
    separatorPlaceholder:
      'Na przykład nowa linia (\\n) lub specjalny separator (np. "***")',
    maxLength: "Maksymalna długość bloku",
    overlap: "Nakładka bloków",
    overlapTip:
      "Ustawienie nakładki bloków pozwala zachować semantyczną zgodność między nimi, poprawiając efekt pobierania. Zaleca się ustawienie 10%-25% maksymalnej długości bloku.",
    overlapCheck:
      "nakładka bloków nie powinna być większa niż maksymalna długość bloku",
    rules: "Reguły preprocessingu tekstu",
    removeExtraSpaces: "Zastąp kolejne spacje, nowe linie i tabulatory",
    removeUrlEmails: "Usuń wszystkie adresy URL i e-maile",
    removeStopwords: 'Usuń słowa powszechne takie jak "a", "an", "the"',
    preview: "Potwierdź i Podgląd",
    reset: "Reset",
    indexMode: "Tryb indeksowania",
    qualified: "Wysoka jakość",
    recommend: "Polecać",
    qualifiedTip:
      "Wywołaj domyślne interfejsy wbudowania systemu do przetwarzania, zapewniając wyższą dokładność podczas zapytań przez użytkowników.",
    warning: "Proszę najpierw skonfigurować klucz API dostawcy modelu.",
    click: "Przejdź do ustawień",
    economical: "Ekonomiczny",
    economicalTip:
      "Użyj offline'owych silników wektorowych, indeksów słów kluczowych itp., aby zmniejszyć dokładność bez wydawania tokenów",
    QATitle: "Segmentacja w formacie pytania i odpowiedzi",
    QATip: "Włączenie tej opcji spowoduje zużycie większej liczby tokenów",
    QALanguage: "Segmentacja przy użyciu",
    estimateCost: "Oszacowanie",
    estimateSegment: "Oszacowane bloki",
    segmentCount: "bloki",
    calculating: "Obliczanie...",
    fileSource: "Przetwarzaj dokumenty",
    notionSource: "Przetwarzaj strony",
    other: "i inne ",
    fileUnit: " plików",
    notionUnit: " stron",
    previousStep: "Poprzedni krok",
    nextStep: "Zapisz & Przetwarzaj",
    save: "Zapisz & Przetwarzaj",
    cancel: "Anuluj",
    sideTipTitle: "Dlaczego blok i preprocess?",
    sideTipP1:
      "Podczas przetwarzania danych tekstowych, blok i czyszczenie są dwoma ważnymi krokami preprocessingu.",
    sideTipP2:
      "Segmentacja dzieli długi tekst na akapity, dzięki czemu modele są w stanie lepiej zrozumieć. Poprawia to jakość i trafność wyników modelu.",
    sideTipP3:
      "Czyszczenie usuwa zbędne znaki i formatowanie, sprawiając, że Wiedza jest czystsza i łatwiejsza do analizy.",
    sideTipP4:
      "Odpowiednie blok i czyszczenie poprawiają wydajność modelu, zapewniając bardziej dokładne i wartościowe wyniki.",
    previewTitle: "Podgląd",
    previewTitleButton: "Podgląd",
    previewButton: "Przełącz do formatu pytania i odpowiedzi",
    previewSwitchTipStart:
      "Aktulany podgląd bloku jest w formacie tekstu, przełączenie na podgląd w formacie pytania i odpowiedzi spowoduje",
    previewSwitchTipEnd: " dodatkowe zużycie tokenów",
    characters: "znaki",
    indexSettingTip: "Aby zmienić metodę indeksowania, przejdź do ",
    retrievalSettingTip: "Aby zmienić metodę indeksowania, przejdź do ",
    datasetSettingLink: "ustawień Wiedzy.",
    webpageUnit: "Stron",
    websiteSource: "Witryna internetowa przetwarzania wstępnego",
    separatorTip:
      "Ogranicznik to znak używany do oddzielania tekstu. \\n\\n i \\n są powszechnie używanymi ogranicznikami do oddzielania akapitów i wierszy. W połączeniu z przecinkami (\\n\\n,\\n), akapity będą segmentowane wierszami po przekroczeniu maksymalnej długości fragmentu. Możesz również skorzystać ze zdefiniowanych przez siebie specjalnych ograniczników (np. ***).",
    maxLengthCheck:
      "Maksymalna długość porcji powinna być mniejsza niż {{limit}}",
    parentChunkForContext: "Fragment nadrzędny dla kontekstu",
    generalTip:
      "Ogólny tryb fragmentowania tekstu, fragmenty pobierane i odwoływane są takie same.",
    parentChildDelimiterTip:
      "Ogranicznik to znak używany do oddzielania tekstu. \\n\\n jest zalecane do dzielenia oryginalnego dokumentu na duże fragmenty nadrzędne. Możesz również użyć specjalnych ograniczników zdefiniowanych przez siebie.",
    switch: "Przełącznik",
    parentChildChunkDelimiterTip:
      "Ogranicznik to znak używany do oddzielania tekstu. \\n jest zalecane do dzielenia fragmentów nadrzędnych na małe fragmenty podrzędne. Możesz również użyć specjalnych ograniczników zdefiniowanych przez siebie.",
    paragraphTip:
      "W tym trybie tekst jest dzielony na akapity na podstawie ograniczników i maksymalnej długości fragmentu, używając podzielonego tekstu jako fragmentu nadrzędnego do pobierania.",
    general: "Ogólne",
    notAvailableForQA:
      "Niedostępne dla indeksu pytań i odpowiedziNot available for Q&A Index",
    childChunkForRetrieval: "Fragment podrzędny do pobrania",
    fullDoc: "Pełna wersja dokumentu",
    fullDocTip:
      "Cały dokument jest używany jako fragment nadrzędny i pobierany bezpośrednio. Należy pamiętać, że ze względu na wydajność, tekst przekraczający 10000 tokenów zostanie automatycznie obcięty.",
    previewChunkCount: "{{liczba}} Szacowane porcje",
    paragraph: "Akapit",
    parentChild: "Rodzic-dziecko",
    previewChunk: "Fragment podglądu",
    notAvailableForParentChild: "Niedostępne dla indeksu nadrzędny-podrzędny",
    highQualityTip:
      "Po zakończeniu osadzania w trybie wysokiej jakości powrót do trybu ekonomicznego nie jest dostępny.",
    previewChunkTip:
      'Kliknij przycisk "Podgląd fragmentu" po lewej stronie, aby załadować podgląd',
    qaSwitchHighQualityTipContent:
      "Obecnie tylko metoda indeksu wysokiej jakości obsługuje fragmentowanie formatu pytań i odpowiedzi. Czy chcesz przełączyć się w tryb wysokiej jakości?",
    useQALanguage: "Fragment przy użyciu formatu Q&A w",
    parentChildTip:
      "W przypadku korzystania z trybu nadrzędny-podrzędny fragment podrzędny jest używany do pobierania, a fragment nadrzędny jest używany do przywoływania jako kontekstu.",
    qaSwitchHighQualityTipTitle:
      "Format Q&A wymaga metody indeksowania wysokiej jakości",
  },
  stepThree: {
    creationTitle: "🎉 Utworzono Wiedzę",
    creationContent:
      "Automatycznie nadaliśmy nazwę Wiedzy, możesz ją dowolnie zmienić w każdej chwili",
    label: "Nazwa Wiedzy",
    additionTitle: "🎉 Przesłano dokument",
    additionP1: "Dokument został przesłany do Wiedzy",
    additionP2: ", możesz go znaleźć na liście dokumentów Wiedzy.",
    stop: "Zatrzymaj przetwarzanie",
    resume: "Wznów przetwarzanie",
    navTo: "Przejdź do dokumentu",
    sideTipTitle: "Co dalej",
    sideTipContent:
      "Po zakończeniu indeksowania dokumentu, Wiedza może być zintegrowana z aplikacją jako kontekst, można znaleźć ustawienie kontekstu na stronie orkiestracji. Można również stworzyć ją jako niezależny plugin indeksowania ChatGPT do wydania.",
    modelTitle: "Czy na pewno chcesz zatrzymać embedded?",
    modelContent:
      "Jeśli będziesz potrzebować wznowić przetwarzanie później, będziesz kontynuować od miejsca, w którym przerwałeś.",
    modelButtonConfirm: "Potwierdź",
    modelButtonCancel: "Anuluj",
  },
  firecrawl: {
    apiKeyPlaceholder: "Klucz API od firecrawl.dev",
    configFirecrawl: "Konfiguracja 🔥Firecrawla",
    getApiKeyLinkText: "Pobierz klucz API z firecrawl.dev",
  },
  jinaReader: {
    getApiKeyLinkText: "Odbierz darmowy klucz API na jina.ai",
    apiKeyPlaceholder: "Klucz API od jina.ai",
    configJinaReader: "Konfiguracja czytnika Jina",
  },
  otherDataSource: {
    learnMore: "Dowiedz się więcej",
    title: "Połączyć się z innymi źródłami danych?",
    description:
      "Obecnie baza wiedzy IDX ma tylko ograniczone źródła danych. Dodanie źródła danych do bazy wiedzy IDX to fantastyczny sposób na zwiększenie elastyczności i możliwości platformy dla wszystkich użytkowników. Nasz przewodnik po wkładach ułatwia rozpoczęcie pracy. Kliknij poniższy link, aby dowiedzieć się więcej.",
  },
};

export default translation;
