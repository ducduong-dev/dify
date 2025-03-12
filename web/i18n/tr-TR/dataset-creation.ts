const translation = {
  steps: {
    header: {
      creation: "Bilgi Oluştur",
      update: "Veri ekle",
      fallbackRoute: "Bilgi",
    },
    one: "Veri kaynağı seçin",
    two: "Metin Ön İşleme ve Temizleme",
    three: "Çalıştır ve Bitir",
  },
  error: {
    unavailable: "Bu Bilgi kullanılamıyor",
  },
  firecrawl: {
    configFirecrawl: "🔥Firecrawl'ı Yapılandır",
    apiKeyPlaceholder: "firecrawl.dev'den API anahtarı",
    getApiKeyLinkText: "API anahtarınızı firecrawl.dev'den alın",
  },
  stepOne: {
    filePreview: "Dosya Önizleme",
    pagePreview: "Sayfa Önizleme",
    dataSourceType: {
      file: "Dosyadan içe aktar",
      notion: "Notion'dan senkronize et",
      web: "Web sitesinden senkronize et",
    },
    uploader: {
      title: "Dosya yükle",
      button: "Dosyayı sürükleyip bırakın veya",
      browse: "Göz atın",
      tip: "Destekler {{supportTypes}}. Her biri en fazla {{size}}MB.",
      validation: {
        typeError: "Dosya tipi desteklenmiyor",
        size: "Dosya çok büyük. Maksimum {{size}} MB",
        count: "Birden fazla dosya desteklenmiyor",
        filesNumber: "Toplu yükleme sınırına ulaştınız, {{filesNumber}} dosya.",
      },
      cancel: "İptal",
      change: "Değiştir",
      failed: "Yükleme başarısız",
    },
    notionSyncTitle: "Notion bağlı değil",
    notionSyncTip:
      "Notion ile senkronize etmek için önce Notion'a bağlanılmalıdır.",
    connect: "Bağlanmaya git",
    button: "Sonraki",
    emptyDatasetCreation: "Boş bir bilgi oluşturmak istiyorum",
    modal: {
      title: "Boş bir bilgi oluştur",
      tip: "Boş bir bilgi hiçbir belge içermeyecektir ve dilediğiniz zaman belge yükleyebilirsiniz.",
      input: "Bilgi adı",
      placeholder: "Lütfen girin",
      nameNotEmpty: "Ad boş olamaz",
      nameLengthInvalid: "Ad 1 ile 40 karakter arasında olmalıdır",
      cancelButton: "İptal",
      confirmButton: "Oluştur",
      failed: "Oluşturma başarısız",
    },
    website: {
      fireCrawlNotConfigured: "Firecrawl yapılandırılmamış",
      fireCrawlNotConfiguredDescription:
        "Firecrawl'ı kullanmak için API anahtarı ile yapılandırın.",
      configure: "Yapılandır",
      run: "Çalıştır",
      firecrawlTitle: "🔥Firecrawl ile web içeriğini çıkarın",
      firecrawlDoc: "Firecrawl dokümanları",
      firecrawlDocLink:
        "https://idx-solutions.com/guides/knowledge-base/sync-from-website",
      options: "Seçenekler",
      crawlSubPage: "Alt sayfaları tarayın",
      limit: "Sınır",
      maxDepth: "Maksimum derinlik",
      excludePaths: "Yolları hariç tut",
      includeOnlyPaths: "Yalnızca yolları dahil et",
      extractOnlyMainContent:
        "Sadece ana içeriği çıkar (başlıklar, navigasyonlar, altbilgiler vb. yok)",
      exceptionErrorTitle:
        "Firecrawl işi çalıştırılırken bir istisna meydana geldi:",
      unknownError: "Bilinmeyen hata",
      totalPageScraped: "Toplam kazınan sayfa:",
      selectAll: "Hepsini Seç",
      resetAll: "Hepsini Sıfırla",
      scrapTimeInfo: "Toplam {{total}} sayfa {{time}}s içinde kazındı",
      preview: "Önizleme",
      maxDepthTooltip:
        "Girilen URL'ye göre tarama için maksimum derinlik. Derinlik 0 sadece girilen url sayfasını kazır, derinlik 1 url ve girilen URL + bir / 'dan sonraki her şeyi kazır ve böyle devam eder.",
      jinaReaderTitle: "Tüm siteyi Markdown'a dönüştürün",
      useSitemap: "Site haritasını kullan",
      useSitemapTooltip:
        "Siteyi taramak için site haritasını takip edin. Aksi takdirde, Jina Reader sayfa alaka düzeyine göre yinelemeli olarak tarar ve daha az ancak daha yüksek kaliteli sayfalar verir.",
      jinaReaderNotConfiguredDescription:
        "Erişim için ücretsiz API anahtarınızı girerek Jina Reader'ı kurun.",
      chooseProvider: "Bir sağlayıcı seçin",
      jinaReaderDoc: "Jina Reader hakkında daha fazla bilgi edinin",
      jinaReaderNotConfigured: "Jina Reader yapılandırılmadı",
      jinaReaderDocLink: "https://jina.ai/reader",
    },
    cancel: "İptal",
  },
  stepTwo: {
    segmentation: "Parçalanma ayarları",
    auto: "Otomatik",
    autoDescription:
      "Parçalanma ve ön işleme kurallarını otomatik olarak ayarlayın. Bilgisiz kullanıcıların bunu seçmesi önerilir.",
    custom: "Özel",
    customDescription:
      "Parçalanma kurallarını, parçalanma uzunluğunu ve ön işleme kurallarını kişiselleştirin.",
    separator: "Parçalanma belirleyicisi",
    separatorPlaceholder:
      'Örneğin, yeni satır (\\\\n) veya özel ayırıcı (örn. "***")',
    maxLength: "Maksimum parça uzunluğu",
    overlap: "Parça örtüşmesi",
    overlapTip:
      "Parça örtüşmesini ayarlamak, aralarındaki anlamsal bağı koruyabilir, geri alım etkisini artırır. Maksimum parça boyutunun %10-%25'ini ayarlamanız önerilir.",
    overlapCheck:
      "parça örtüşmesi maksimum parça uzunluğundan büyük olmamalıdır",
    rules: "Metin ön işleme kuralları",
    removeExtraSpaces:
      "Art arda gelen boşlukları, yeni satırları ve sekmeleri değiştirin",
    removeUrlEmails: "Tüm URL'leri ve e-posta adreslerini silin",
    removeStopwords: '"a", "an", "the" gibi durdurma kelimelerini silin',
    preview: "Onayla ve Önizleme",
    reset: "Sıfırla",
    indexMode: "Dizin modu",
    qualified: "Yüksek Kalite",
    recommend: "Önerilen",
    qualifiedTip:
      "Kullanıcılar sorguladığında daha yüksek doğruluk sağlamak için varsayılan sistem yerleştirme arayüzünü çağırır.",
    warning: "Lütfen önce model sağlayıcı API anahtarını ayarlayın.",
    click: "Ayarlara git",
    economical: "Ekonomik",
    economicalTip:
      "Doğruluğu azaltmak için çevrimdışı vektör motorlarını, anahtar kelime dizinlerini vb. kullanın, token harcamadan",
    QATitle: "Soru ve Yanıt formatında parçalama",
    QATip: "Bu seçeneği etkinleştirmek daha fazla token tüketecektir",
    QALanguage: "Kullanarak parçalara ayır",
    estimateCost: "Tahmin",
    estimateSegment: "Tahmini parçalar",
    segmentCount: "parçalar",
    calculating: "Hesaplanıyor...",
    fileSource: "Belgeleri ön işleme",
    notionSource: "Sayfaları ön işleme",
    websiteSource: "Web sitesini ön işleme",
    other: "ve diğer",
    fileUnit: " dosyalar",
    notionUnit: " sayfalar",
    webpageUnit: " sayfalar",
    previousStep: "Önceki adım",
    nextStep: "Kaydet ve İşle",
    save: "Kaydet ve İşle",
    cancel: "İptal",
    sideTipTitle: "Neden parçalanma ve ön işleme?",
    sideTipP1:
      "Metin verileri işlerken, parçalama ve temizleme iki önemli ön işleme adımıdır.",
    sideTipP2:
      "Parçalanma, uzun metinleri paragraflara böler, böylece modeller daha iyi anlayabilir. Bu, model sonuçlarının kalitesini ve alaka düzeyini artırır.",
    sideTipP3:
      "Temizleme, gereksiz karakterleri ve formatları kaldırarak Bilginin daha temiz ve daha kolay analiz edilmesini sağlar.",
    sideTipP4:
      "Uygun parçalama ve temizleme, model performansını iyileştirir, daha doğru ve değerli sonuçlar sağlar.",
    previewTitle: "Önizleme",
    previewTitleButton: "Önizleme",
    previewButton: "Q&A formatına geçiş",
    previewSwitchTipStart:
      "Geçerli parça önizlemesi metin formatındadır, soru ve yanıt formatına geçiş ek tüketir",
    previewSwitchTipEnd: "token",
    characters: "karakterler",
    indexSettingTip: "Dizin yöntemini değiştirmek için, lütfen",
    retrievalSettingTip: "Dizin yöntemini değiştirmek için, lütfen",
    datasetSettingLink: "Bilgi ayarlarına gidin.",
    separatorTip:
      "Sınırlayıcı, metni ayırmak için kullanılan karakterdir. \\n\\n ve \\n, paragrafları ve satırları ayırmak için yaygın olarak kullanılan sınırlayıcılardır. Virgüllerle (\\n\\n,\\n) birleştirildiğinde, paragraflar maksimum öbek uzunluğunu aştığında satırlarla bölünür. Kendiniz tarafından tanımlanan özel sınırlayıcıları da kullanabilirsiniz (örn.",
    maxLengthCheck: "Maksimum yığın uzunluğu {{limit}}'den az olmalıdır",
    paragraph: "Paragraf",
    parentChildDelimiterTip:
      "Sınırlayıcı, metni ayırmak için kullanılan karakterdir. \\n\\n orijinal belgeyi büyük üst parçalara bölmek için önerilir. Kendiniz tarafından tanımlanan özel sınırlayıcıları da kullanabilirsiniz.",
    parentChild: "Ebeveyn-çocuk",
    previewChunkCount: "{{sayı}} Tahmini parçalar",
    parentChildChunkDelimiterTip:
      "Sınırlayıcı, metni ayırmak için kullanılan karakterdir. \\n Üst parçaları küçük alt parçalara bölmek için önerilir. Kendiniz tarafından tanımlanan özel sınırlayıcıları da kullanabilirsiniz.",
    qaSwitchHighQualityTipContent:
      "Şu anda, yalnızca yüksek kaliteli dizin yöntemi Soru-Cevap biçimi öbeklerini destekler. Yüksek kalite moduna geçmek ister misiniz?",
    previewChunkTip:
      "Önizlemeyi yüklemek için soldaki 'Önizleme Parçası' düğmesini tıklayın",
    qaSwitchHighQualityTipTitle:
      "Soru-Cevap Formatı Yüksek Kaliteli İndeksleme Yöntemi Gerektirir",
    notAvailableForQA: "Soru-Cevap Dizini için kullanılamaz",
    generalTip:
      "Genel metin parçalama modu, alınan ve geri çağrılan parçalar aynıdır.",
    paragraphTip:
      "Bu mod, metni sınırlayıcılara ve maksimum öbek uzunluğuna göre paragraflara böler ve bölünmüş metni almak için üst öbek olarak kullanır.",
    parentChildTip:
      "Üst-alt modu kullanılırken, alt öbek alma için kullanılır ve üst öbek bağlam olarak geri çağırma için kullanılır.",
    fullDocTip:
      "Belgenin tamamı üst yığın olarak kullanılır ve doğrudan alınır. Performans nedenleriyle, 10000 jetonu aşan metnin otomatik olarak kesileceğini lütfen unutmayın.",
    fullDoc: "Tam Doküman",
    useQALanguage: "Soru-Cevap biçimini kullanarak parçalama",
    general: "Genel",
    switch: "Şalter",
    notAvailableForParentChild: "Üst-alt Dizini için kullanılamaz",
    previewChunk: "Önizleme Parçası",
    highQualityTip:
      "Yüksek Kalite modunda yerleştirme işlemi tamamlandıktan sonra, Ekonomik moda geri dönülemez.",
    childChunkForRetrieval: "Alma için alt yığın",
    parentChunkForContext: "Bağlam için üst yığın",
  },
  stepThree: {
    creationTitle: "🎉 Bilgi oluşturuldu",
    creationContent:
      "Bilginin adını otomatik olarak belirledik, dilediğiniz zaman değiştirebilirsiniz",
    label: "Bilgi adı",
    additionTitle: "🎉 Belge yüklendi",
    additionP1: "Belge Bilgi'ye yüklendi",
    additionP2: ", bilgi listesinden bulabilirsiniz.",
    stop: "İşlemeyi durdur",
    resume: "İşlemeye devam et",
    navTo: "Belgeye git",
    sideTipTitle: "Sırada ne var",
    sideTipContent:
      "Belge dizine ekleme işlemi bittikten sonra Bilgi, bağlam olarak uygulamaya entegre edilebilir. Prompt düzenleme sayfasında bağlam ayarlarını bulabilirsiniz. Ayrıca bağımsız bir ChatGPT dizinleme eklentisi olarak yayınlamak için de oluşturabilirsiniz.",
    modelTitle: "Yerleştirmeyi durdurmak istediğinize emin misiniz?",
    modelContent:
      "İşlemeye daha sonra devam etmeniz gerekirse, kaldığınız yerden devam edeceksiniz.",
    modelButtonConfirm: "Onayla",
    modelButtonCancel: "İptal",
  },
  jinaReader: {
    apiKeyPlaceholder: "jina.ai'dan API anahtarı",
    configJinaReader: "Jina Reader'ı Yapılandırma",
    getApiKeyLinkText: "Ücretsiz API anahtarınızı hemen jina.ai alın",
  },
  otherDataSource: {
    learnMore: "Daha fazla bilgi edinin",
    description:
      "Şu anda, Dify'ın bilgi tabanı yalnızca sınırlı veri kaynaklarına sahiptir. IDX bilgi tabanına bir veri kaynağına katkıda bulunmak, tüm kullanıcılar için platformun esnekliğini ve gücünü artırmaya yardımcı olmanın harika bir yoludur. Katkı kılavuzumuz, başlamanızı kolaylaştırır. Daha fazla bilgi edinmek için lütfen aşağıdaki bağlantıya tıklayın.",
    title: "Diğer veri kaynaklarına bağlanılıyor mu?",
  },
};

export default translation;
