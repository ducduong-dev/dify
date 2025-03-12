const translation = {
  steps: {
    header: {
      creation: "Crear conocimiento",
      update: "Agregar datos",
      fallbackRoute: "Conocimiento",
    },
    one: "Elegir fuente de datos",
    two: "Preprocesamiento y limpieza de texto",
    three: "Ejecutar y finalizar",
  },
  error: {
    unavailable: "Este conocimiento no está disponible",
  },
  firecrawl: {
    configFirecrawl: "Configurar 🔥Firecrawl",
    apiKeyPlaceholder: "Clave de API de firecrawl.dev",
    getApiKeyLinkText: "Obtener tu clave de API de firecrawl.dev",
  },
  stepOne: {
    filePreview: "Vista previa del archivo",
    pagePreview: "Vista previa de la página",
    dataSourceType: {
      file: "Importar desde archivo",
      notion: "Sincronizar desde Notion",
      web: "Sincronizar desde sitio web",
    },
    uploader: {
      title: "Cargar archivo",
      button: "Arrastra y suelta el archivo, o",
      browse: "Buscar",
      tip: "Soporta {{supportTypes}}. Máximo {{size}}MB cada uno.",
      validation: {
        typeError: "Tipo de archivo no soportado",
        size: "Archivo demasiado grande. El máximo es {{size}}MB",
        count: "No se admiten varios archivos",
        filesNumber:
          "Has alcanzado el límite de carga por lotes de {{filesNumber}}.",
      },
      cancel: "Cancelar",
      change: "Cambiar",
      failed: "Error al cargar",
    },
    notionSyncTitle: "Notion no está conectado",
    notionSyncTip:
      "Para sincronizar con Notion, primero se debe establecer la conexión con Notion.",
    connect: "Ir a conectar",
    button: "Siguiente",
    emptyDatasetCreation: "Quiero crear un conocimiento vacío",
    modal: {
      title: "Crear un conocimiento vacío",
      tip: "Un conocimiento vacío no contendrá documentos y podrás cargar documentos en cualquier momento.",
      input: "Nombre del conocimiento",
      placeholder: "Por favor ingresa",
      nameNotEmpty: "El nombre no puede estar vacío",
      nameLengthInvalid: "El nombre debe tener entre 1 y 40 caracteres",
      cancelButton: "Cancelar",
      confirmButton: "Crear",
      failed: "Error al crear",
    },
    website: {
      fireCrawlNotConfigured: "Firecrawl no está configurado",
      fireCrawlNotConfiguredDescription:
        "Configura Firecrawl con la clave de API para poder utilizarlo.",
      configure: "Configurar",
      run: "Ejecutar",
      firecrawlTitle: "Extraer contenido web con 🔥Firecrawl",
      firecrawlDoc: "Documentación de Firecrawl",
      firecrawlDocLink:
        "https://idx-solutions.com/guides/knowledge-base/sync-from-website",
      options: "Opciones",
      crawlSubPage: "Rastrear subpáginas",
      limit: "Límite",
      maxDepth: "Profundidad máxima",
      excludePaths: "Excluir rutas",
      includeOnlyPaths: "Incluir solo rutas",
      extractOnlyMainContent:
        "Extraer solo el contenido principal (sin encabezados, navegación, pies de página, etc.)",
      exceptionErrorTitle:
        "Se produjo una excepción al ejecutar el trabajo de Firecrawl:",
      unknownError: "Error desconocido",
      totalPageScraped: "Total de páginas extraídas:",
      selectAll: "Seleccionar todo",
      resetAll: "Restablecer todo",
      scrapTimeInfo: "Se extrajeron {{total}} páginas en total en {{time}}s",
      preview: "Vista previa",
      maxDepthTooltip:
        "Profundidad máxima para rastrear en relación con la URL ingresada. La profundidad 0 solo extrae la página de la URL ingresada, la profundidad 1 extrae la URL y todo lo después de la URL ingresada + una /, y así sucesivamente.",
      jinaReaderDocLink: "https://jina.ai/reader",
      jinaReaderNotConfigured: "Jina Reader no está configurado",
      useSitemap: "Usar el mapa del sitio",
      jinaReaderTitle: "Convertir todo el sitio a Markdown",
      jinaReaderNotConfiguredDescription:
        "Configura Jina Reader introduciendo tu clave API gratuita para acceder.",
      useSitemapTooltip:
        "Siga el mapa del sitio para rastrear el sitio. De lo contrario, Jina Reader rastreará de forma iterativa en función de la relevancia de la página, lo que producirá menos páginas pero de mayor calidad.",
      chooseProvider: "Seleccione un proveedor",
      jinaReaderDoc: "Más información sobre Jina Reader",
    },
    cancel: "Cancelar",
  },
  stepTwo: {
    segmentation: "Configuración de fragmentos",
    auto: "Automático",
    autoDescription:
      "Configura automáticamente las reglas de fragmentación y preprocesamiento. Se recomienda seleccionar esto para usuarios no familiarizados.",
    custom: "Personalizado",
    customDescription:
      "Personaliza las reglas de fragmentación, longitud de fragmentos y reglas de preprocesamiento, etc.",
    separator: "Identificador de segmento",
    separatorPlaceholder:
      'Por ejemplo, salto de línea (\\\\n) o separador especial (como "***")',
    maxLength: "Longitud máxima del fragmento",
    overlap: "Superposición de fragmentos",
    overlapTip:
      "Configurar la superposición de fragmentos puede mantener la relevancia semántica entre ellos, mejorando el efecto de recuperación. Se recomienda configurar el 10%-25% del tamaño máximo del fragmento.",
    overlapCheck:
      "La superposición de fragmentos no debe ser mayor que la longitud máxima del fragmento",
    rules: "Reglas de preprocesamiento de texto",
    removeExtraSpaces:
      "Reemplazar espacios, saltos de línea y tabulaciones consecutivas",
    removeUrlEmails:
      "Eliminar todas las URL y direcciones de correo electrónico",
    removeStopwords: 'Eliminar palabras vacías como "un", "una", "el"',
    preview: "Confirmar y vista previa",
    reset: "Restablecer",
    indexMode: "Modo de índice",
    qualified: "Alta calidad",
    recommend: "Recomendado",
    qualifiedTip:
      "Llama a la interfaz de incrustación del sistema por defecto para proporcionar una mayor precisión cuando los usuarios realizan consultas.",
    warning:
      "Por favor, configura primero la clave de API del proveedor del modelo.",
    click: "Ir a configuración",
    economical: "Económico",
    economicalTip:
      "Utiliza motores de vector sin conexión, índices de palabras clave, etc. para reducir la precisión sin gastar tokens",
    QATitle: "Segmentación en formato de pregunta y respuesta",
    QATip: "Habilitar esta opción consumirá más tokens",
    QALanguage: "Segmentar usando",
    estimateCost: "Estimación",
    estimateSegment: "Fragmentos estimados",
    segmentCount: "fragmentos",
    calculating: "Calculando...",
    fileSource: "Preprocesar documentos",
    notionSource: "Preprocesar páginas",
    websiteSource: "Preprocesar sitio web",
    other: "y otros ",
    fileUnit: " archivos",
    notionUnit: " páginas",
    webpageUnit: " páginas",
    previousStep: "Paso anterior",
    nextStep: "Guardar y procesar",
    save: "Guardar y procesar",
    cancel: "Cancelar",
    sideTipTitle: "¿Por qué fragmentar y preprocesar?",
    sideTipP1:
      "Al procesar datos de texto, la fragmentación y la limpieza son dos pasos de preprocesamiento importantes.",
    sideTipP2:
      "La segmentación divide el texto largo en párrafos para que los modelos puedan entenderlo mejor. Esto mejora la calidad y relevancia de los resultados del modelo.",
    sideTipP3:
      "La limpieza elimina caracteres y formatos innecesarios, haciendo que el conocimiento sea más limpio y fácil de analizar.",
    sideTipP4:
      "Una fragmentación y limpieza adecuadas mejoran el rendimiento del modelo, proporcionando resultados más precisos y valiosos.",
    previewTitle: "Vista previa",
    previewTitleButton: "Vista previa",
    previewButton: "Cambiar a formato de pregunta y respuesta",
    previewSwitchTipStart:
      "La vista previa actual del fragmento está en formato de texto, cambiar a una vista previa en formato de pregunta y respuesta",
    previewSwitchTipEnd: " consumirá tokens adicionales",
    characters: "caracteres",
    indexSettingTip: "Para cambiar el método de índice, por favor ve a la ",
    retrievalSettingTip: "Para cambiar el método de índice, por favor ve a la ",
    datasetSettingLink: "configuración del conocimiento.",
    separatorTip:
      "Un delimitador es el carácter que se utiliza para separar el texto. \\n\\n y \\n son delimitadores comúnmente utilizados para separar párrafos y líneas. Combinado con comas (\\n\\n,\\n), los párrafos se segmentarán por líneas cuando excedan la longitud máxima del fragmento. También puede utilizar delimitadores especiales definidos por usted mismo (por ejemplo, ***).",
    maxLengthCheck:
      "La longitud máxima del fragmento debe ser inferior a {{limit}}",
    previewChunkTip:
      "Haga clic en el botón 'Vista previa de fragmento' a la izquierda para cargar la vista previa",
    parentChildChunkDelimiterTip:
      "Un delimitador es el carácter que se utiliza para separar el texto. \\n se recomienda para dividir fragmentos primarios en fragmentos secundarios pequeños. También puede utilizar delimitadores especiales definidos por usted mismo.",
    parentChildTip:
      "Cuando se utiliza el modo padre-hijo, el fragmento secundario se utiliza para la recuperación y el fragmento primario se utiliza para la recuperación como contexto.",
    switch: "Interruptor",
    parentChild: "Padre-hijo",
    childChunkForRetrieval: "Fragmento secundario para la recuperación",
    previewChunk: "Fragmento de vista previa",
    notAvailableForParentChild:
      "No disponible para el índice de elementos primarios y secundarios",
    paragraph: "Párrafo",
    parentChunkForContext: "Fragmento primario para contexto",
    fullDoc: "Documento completo",
    parentChildDelimiterTip:
      "Un delimitador es el carácter que se utiliza para separar el texto. \\n\\n se recomienda para dividir el documento original en grandes fragmentos principales. También puede utilizar delimitadores especiales definidos por usted mismo.",
    generalTip:
      "Modo de fragmentación de texto general, los fragmentos recuperados y recuperados son los mismos.",
    qaSwitchHighQualityTipContent:
      "Actualmente, solo el método de índice de alta calidad admite la fragmentación en formato de preguntas y respuestas. ¿Le gustaría cambiar al modo de alta calidad?",
    useQALanguage: "Fragmento usando el formato de preguntas y respuestas en",
    fullDocTip:
      "Todo el documento se utiliza como fragmento principal y se recupera directamente. Tenga en cuenta que, por razones de rendimiento, el texto que supere los 10000 tokens se trunqueará automáticamente.",
    paragraphTip:
      "Este modo divide el texto en párrafos en función de los delimitadores y la longitud máxima del fragmento, utilizando el texto dividido como fragmento principal para la recuperación.",
    highQualityTip:
      "Una vez finalizada la incrustación en el modo de alta calidad, no está disponible volver al modo económico.",
    notAvailableForQA: "No disponible para el índice de preguntas y respuestas",
    qaSwitchHighQualityTipTitle:
      "El formato de preguntas y respuestas requiere un método de indexación de alta calidad",
    previewChunkCount: "{{conteo}} Fragmentos estimados",
    general: "General",
  },
  stepThree: {
    creationTitle: "🎉 Conocimiento creado",
    creationContent:
      "Hemos asignado automáticamente un nombre al conocimiento, puedes modificarlo en cualquier momento",
    label: "Nombre del conocimiento",
    additionTitle: "🎉 Documento cargado",
    additionP1: "El documento se ha cargado en el conocimiento",
    additionP2:
      ", puedes encontrarlo en la lista de documentos del conocimiento.",
    stop: "Detener procesamiento",
    resume: "Reanudar procesamiento",
    navTo: "Ir al documento",
    sideTipTitle: "¿Qué sigue?",
    sideTipContent:
      "Después de que el documento termine de indexarse, el conocimiento se puede integrar en la aplicación como contexto. Puedes encontrar la configuración de contexto en la página de orquestación de indicaciones. También puedes crearlo como un plugin de indexación ChatGPT independiente para su lanzamiento.",
    modelTitle: "¿Estás seguro de detener la incrustación?",
    modelContent:
      "Si necesitas reanudar el procesamiento más tarde, continuarás desde donde lo dejaste.",
    modelButtonConfirm: "Confirmar",
    modelButtonCancel: "Cancelar",
  },
  jinaReader: {
    configJinaReader: "Configurar Jina Reader",
    apiKeyPlaceholder: "Clave de API de jina.ai",
    getApiKeyLinkText: "Obtén tu clave API gratuita en jina.ai",
  },
  otherDataSource: {
    learnMore: "Aprende más",
    description:
      "Actualmente, la base de conocimientos de Ifiy solo tiene fuentes de datos limitadas. Contribuir con una fuente de datos a la base de conocimientos de IDX es una manera fantástica de ayudar a mejorar la flexibilidad y el poder de la plataforma para todos los usuarios. Nuestra guía de contribuciones hace que sea fácil comenzar. Haga clic en el enlace a continuación para obtener más información.",
    title: "¿Conectarse a otras fuentes de datos?",
  },
};

export default translation;
