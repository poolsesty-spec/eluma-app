document.addEventListener("DOMContentLoaded", () => {
  const data = window.MININ_GRAPH_DATA || { nodes: [], promo_quests: [] };
  const dialogueMatrix = window.MININ_DIALOGUE_MATRIX || {};

  // 6 Perimeter Nodes + 1 Center Master Core
  const nodes = [
    {
      id: "node_0",
      order: 1,
      type: "perimeter",
      title: "1. Первый забой в темноте",
      chapterNum: 5,
      x: 53.1, // Bedrock root
      y: 82.7,
      color: "#f59e0b",
      tag: "ВЫЖИВАНИЕ В ПОРОДЕ",
      prompt: "Престижная институция предлагает персональную выставку, но ставит жесткий ультиматум: переписать 80% работ серии под модный салонный глянец. Продюсер убеждает, что это билет в высшую лигу, а коллеги призывают стоять насмерть. Как поступить?",
      story: "В шахте темно, и никто не знает, где жила. Начинающий художник ломается от первых отказов. Роман формулирует первый закон выживания: не быть хрупким камнем и не растекаться водой. Будьте вертикальной палочкой в Тетрисе — ждите своего слота, но оставайтесь цельной фигурой.",
      minerSpeech: "«Мы на дне забоя. Перед тобой первое испытание мастера: галерея давит авторитетом. Как поступишь?»",
      minerAction: "Решите дилемму у янтарного кристалла (1) ↓",
      options: [
        { text: "Бескомпромиссно отвергнуть диктат кураторов: чистота авторского языка и верность замыслу важнее любого престижного слота", consequence: "Хрупкий камень треснул. Связи с профессиональным полем разорваны: гордость спасена, но холсты остались запертыми в темноте забоя без зрителя.", isMaster: false },
        { text: "Принять условия галереи как стратегический манёвр: забрать статус, связи и бюджет, чтобы на следующих проектах диктовать свои правила", consequence: "Вода утекла в чужое русло. Ты получил чек и статус, но рынок закрепил за тобой чужой глянец. Выбраться из этой золотой клетки почти невозможно.", isMaster: false },
        { text: "Не переписывать картины, но перевести конфликт в архитектонику пространства: оставить ядро холстов сырым и бескомпромиссным, а салонный блеск отдать свету и рамам зала", consequence: "Точный ход мастера! Ты отработал как струна ракетки: сохранил сырую правду холста, а гламур зала превратил в контрастный фон, усиливший твой замысел.", isMaster: true }
      ],
      revealTitle: "Глава 5: Конструктор удачи",
      revealQuote: "«Секрет успеха — это везение. Жизнь предоставила шанс, к которому автор был готов. Сделайте свою душу эластичной: твердое ядро принципов и мягкая упругая поверхность.»"
    },
    {
      id: "node_1",
      order: 2,
      type: "perimeter",
      title: "2. Удар по самолюбию",
      chapterNum: 25,
      x: 32.3, // Lower-left
      y: 64.0,
      color: "#10b981",
      tag: "ТОЧКА РЕАКЦИИ",
      prompt: "Влиятельный столичный критик публично разгромил твой новый мурал, назвав его 'безвкусной провинциальной мазнёй'. В арт-каналах началась волна саркастических мемов, телефон разрывается от язвительных уведомлений. Внутри закипает адреналин. Твоё первое действие?",
      story: "Внимание проходит три метаморфозы: Гусеница (поглощение), Куколка (созревание в тишине) и Бабочка (резонанс). Опаснейшая ловушка арт-рынка — мгновенная реакция на чужую похвалу или хейт. 5 секунд паузы оберегают суверенитет внимания.",
      minerSpeech: "«Внимание под ударом! Слева мерцает кристалл защиты (2). Как удержать контроль над эмоциями?»",
      minerAction: "Пройдите испытание у кристалла (2) ↖",
      options: [
        { text: "Опубликовать аргументированный профессиональный разбор рецензии, публично указав на фактологические ошибки и предвзятость критика", consequence: "Ловушка внимания захлопнулась! Твой безупречный ответ лишь раскрутил полемику: критик получил охваты за твой счёт, а ты потратил недели психической энергии на войну с тенью.", isMaster: false },
        { text: "Уйти во внутреннюю эмиграцию: отключить социальные сети, прекратить контакты с тусовкой и молча работать в мастерской, игнорируя шум", consequence: "Капитуляция под маской стоицизма. Заперев двери мастерской, ты отдал хулителю власть над твоим присутствием в мире. Защитная броня незаметно стала стеной изоляции.", isMaster: false },
        { text: "Включить 5-секундный предохранитель Куколки: физически положить телефон на стол, глубоко выдохнуть и дать адреналиновой волне сойти без единого действия", consequence: "Блестящая выдержка мастера! Адреналиновый шторм схлынул, провокация повисла в пустоте. Твоё внимание осталось твоей суверенной рудой, готовой для нового холста.", isMaster: true }
      ],
      revealTitle: "Глава 25: Ментальные ловушки и Предохранитель Куколки",
      revealQuote: "«Ментальные ловушки захлопываются в треугольниках чужих ожиданий. Нужен 5-секундный предохранитель Куколки перед любой реакцией.»"
    },
    {
      id: "node_2",
      order: 3,
      type: "perimeter",
      title: "3. Соблазн грязного хайпа",
      chapterNum: 19,
      x: 32.3, // Upper-left
      y: 31.5,
      color: "#ea580c",
      tag: "ЦЕНИЗМ РЫНКА",
      prompt: "Опытный арт-продюсер предлагает взрывную стратегию: спровоцировать громкий этический скандал вокруг твоей мастерской. Это гарантирует первые полосы СМИ, перегрев интереса инвесторов и взлёт цен на картины втрое. Каково твоё решение?",
      story: "Справедливости в распределении хайпа нет. Если ты не сформируешь свой миф сам, толпа упакует тебя в дешевый ярлык. Но главное правило Ромы: «Не бить зрителя ниже пояса» — создавать образы, а не паразитировать на страхе.",
      minerSpeech: "«Поднимаемся выше по штольне. Слева опасная зона рынка (3) — проверка на честность метода.»",
      minerAction: "Откройте кристалл Этики Рынка (3) ↖",
      options: [
        { text: "Использовать скандал как медийный таран: пробить баннерную слепоту и забрать охваты, чтобы затем направить это внимание на подлинное искусство", consequence: "Капкан Южного полюса захлопнулся. Ты получил миллионные просмотры и быстрые продажи, но серьёзные институции навсегда вычеркнули твоё имя из вечности.", isMaster: false },
        { text: "Принципиально отвергнуть любые PR-инструменты: великая живопись должна оставаться сакральной тайной и говорить сама за себя без мирской суеты", consequence: "Слепое затворничество. Отказавшись говорить с эпохой на её языке, ты позволил рынку забыть о твоем существовании. Твой чистый свет остался невидим.", isMaster: false },
        { text: "Отказаться от ударов ниже пояса, но самому срежиссировать миф вокруг полотен: говорить с эпохой через монументальный масштаб, свет и бескомпромиссную честность труда", consequence: "Победа высшего ранга! Ты не стал травить зрителя ядом скандала, но заставил эпоху вслушаться в монументальную силу работы. Ты взрастил Северное Уважение.", isMaster: true }
      ],
      revealTitle: "Глава 19: Мир жесток и Этика Внимания",
      revealQuote: "«Внимание — это психическая кровь человека. Забирая чужое внимание, вы берете в долг частицу чужой жизни. Не кормите людей визуальным ядом.»"
    },
    {
      id: "node_3",
      order: 4,
      type: "perimeter",
      title: "4. Тайна мёртвого холста",
      chapterNum: 15,
      x: 71.0, // Top-right
      y: 23.5,
      color: "#10b981",
      tag: "ОПТИКА ГЛАЗА",
      prompt: "Холст три на два метра. В центре филигранно выписан монументальный образ: анатомия безупречна, каждая складка проработана сотнями лессировок. Но работа кажется застывшей, плоской и душной. Чего не хватает картине?",
      story: "Большинство людей смотрят на мир в упор. Художник надевает «ровные очки»: он видит паузы между фигурами, геометрию напряжения и воздух. Центр композиции должен оставаться открытым для дыхания зрителя.",
      minerSpeech: "«Взгляни на правый свод! Узел Оптики (4) ставит сложнейшую задачу композиции.»",
      minerAction: "Разгадайте секрет холста у кристалла (4) ↗",
      options: [
        { text: "Обогатить ткань полотна многослойными фоновыми деталями и фактурой среды, чтобы взгляду зрителя открывалось сложное повествование", consequence: "Холст окончательно задохнулся. Пытаясь насытить пространство подробностями, ты превратил картину в перегруженную витрину. Глазу негде вздохнуть.", isMaster: false },
        { text: "Подчинить полотно строгой осевой симметрии и усилить масштаб центральной фигуры, сделав образ незыблемым монументом", consequence: "Мраморный тупик. Лобовая симметрия намертво зафиксировала взгляд по центру. Картина стала строгим плакатом, из которого ушла трепетная жизнь.", isMaster: false },
        { text: "Надеть 'ровные очки': развести четыре угла холста по разной тональной массе, а центр освободить для циркуляции воздуха и взгляда зрителя", consequence: "Эврика мастера! Сняв мышечный зажим с центра и сместив массы по углам, ты запустил непрерывный круговорот взгляда. Холст ожил и задышал.", isMaster: true }
      ],
      revealTitle: "Глава 15: Как и на что смотреть (Ровные очки)",
      revealQuote: "«Смотрите не на предмет, а на отношения между предметами. Четыре угла холста должны быть разными, а центр должен дышать.»"
    },
    {
      id: "node_4",
      order: 5,
      type: "perimeter",
      title: "5. Ментальный ступор",
      chapterNum: 14,
      x: 65.0, // Mid-right
      y: 44.2,
      color: "#06b6d4",
      tag: "ГИГИЕНА СОЗНАНИЯ",
      prompt: "Третью неделю длится парализующий затык: рука опускается перед чистым холстом, в голове клубится тревога, а мысли отравлены токсичным сравнением своих черновиков с чужим цифровым глянцем. Как разорвать этот морок?",
      story: "Твой мозг генерирует ровно то, чем ты его кормишь. Потребляя мусорные ленты соцсетей, автор не может родить чистый монументальный образ. Диета восприятия — это гигиена творца.",
      minerSpeech: "«Оптика настроена. Теперь справа узел Нейросети (5): разберись, чем питается твой разум.»",
      minerAction: "Очистите поток у кристалла (5) →",
      options: [
        { text: "Погрузиться в интенсивный анализ актуальных визуальных трендов и мировых платформ, выискивая свежий импульс и композиционные триггеры", consequence: "Дофаминовая интоксикация. Под видом поиска насмотренности ты перегрузил свой биореактор чужим визуальным мусором. Тревога выросла, а собственный голос угас.", isMaster: false },
        { text: "Сломать ступор дисциплиной: приковать себя к мольберту и механически выдавливать эскизы через сопротивление, пока количество не перейдет в качество", consequence: "Насилие над пустым забоем. Железная воля родила лишь вымученные, сухие схемы. Зритель за версту считывает напряжение и фальшь авторского зажима.", isMaster: false },
        { text: "Объявить 48-часовой информационный пост: изолировать рецепторы от цифровых экранов и накормить внутреннюю нейросеть тишиной, природными фактурами и великой архитектурой", consequence: "Безошибочный ход творца! Твой биореактор очистился от информационного шлака. Напитанная подлинной культурой и тишиной, рука обрела былую лёгкость и точность.", isMaster: true }
      ],
      revealTitle: "Глава 14: Не забудьте накормить свою нейросеть",
      revealQuote: "«Среди IT-специалистов есть термин — 'накормить нейросеть'. Напишите это на зеркале маркером: именно так мы поступаем, когда впитываем культуру.»"
    },
    {
      id: "node_5",
      order: 6,
      type: "perimeter",
      title: "6. Испытание масштабом",
      chapterNum: 12,
      x: 73.3, // Lower-right
      y: 59.5,
      color: "#f43f5e",
      tag: "ХИРУРГИЯ ЗАМЫСЛА",
      prompt: "Город доверяет тебе глухой торец монументального здания на 500 квадратных метров в самом сердце площади. Первый внутренний порыв — создать дерзкий образ предельной мощности, чтобы взорвать медиаполе и навечно вписать свое имя в историю. Что это за импульс?",
      story: "Желание питается дофамином автора («хочу расписать стену, чтобы все ахнули»). Идея служит зрителю. Когда автор отделяет свое тщеславие от замысла, его рука обретает монументальную свободу.",
      minerSpeech: "«Предпоследний уступ: справа внизу узел Замысла (6). Пройди испытание тщеславием.»",
      minerAction: "Различите идею и желание у кристалла (6) ↘",
      options: [
        { text: "Это священное право автора: масштабная стена обязана стать бескомпромиссным манифестом художника и заставить город содрогнуться от дерзости замысла", consequence: "Голос голодного эго. Ты спутал личное Желание славы с чистой Идеей места. Через год эпатажный жест устареет, превратившись в навязчивый городской шрам.", isMaster: false },
        { text: "Это опасная гордыня: автор обязан усмирить любые амбиции и создать нейтральный декоративный узор, чтобы никого не задеть и не вызвать нареканий", consequence: "Малодушие под маской скромности. Испугавшись масштаба и ответственности, ты создал безликий орнамент. Фасад растворился в серости, не подарив городу опоры.", isMaster: false },
        { text: "Отсечь дофаминовый голод по славе и услышать саму площадь: найти автономную Идею, которая станет точкой световой сборки и вернет людям человеческое достоинство", consequence: "Великий триумф монументалиста! Ты отделил Идею от эгоистичного Желания. Стена стала вечным источником света и смысловым фундаментом площади.", isMaster: true }
      ],
      revealTitle: "Глава 12: Поймите разницу между идеей и желанием",
      revealQuote: "«Желание эгоистично и ищет аплодисментов. Идея автономна и решает смысловую задачу пространства. Желание питается дофамином автора, идея — служит зрителю.»"
    },
    {
      id: "node_core",
      order: 7,
      type: "center",
      title: "7. Ядро: Игра в Создателя",
      chapterNum: 23,
      x: 51.1, // Floating center
      y: 25.3,
      color: "#8b5cf6",
      tag: "СУВЕРЕНИТЕТ ТВОРЦА",
      prompt: "Все 6 граней шахты пройдены. Перед тобой открывается главное парящее Ядро — Крест 4-х Валют. Какова высшая ставка твоей игры в Создателя, определяющая отношение со временем и смертью?",
      story: "Четыре полюса жизни творца. Уважение (Север) выращивается годами у мольберта в тишине. Выбрав целью Уважение, художник обретает Любовь и устойчивые Деньги, но свободен от судорожного шума. Играйте в Создателя и побеждайте время.",
      minerSpeech: "«Все 6 граней очищены! Взгляни в небесную высь: парящее Ядро Создателя (✦) открыто. Запусти Крест 4-х Валют и заверши восхождение!»",
      minerAction: "Активируйте центральный кристалл Создателя (✦) ⬆",
      options: [
        { text: "Поставить ставку на абсолютный Север Уважения: творить в бескомпромиссном затворе только для вечности, презирая рыночные манипуляции и похвалу толпы", consequence: "Заморозка духа. Заперевшись в холодном величии Севера и отвергнув земные валюты Денег и Любви, мастер рискует сломаться о нищету и одиночество.", isMaster: false },
        { text: "Сделать ставку на Восток и Юг: превратить творчество в мощный финансовый капитал и медийную империю, которая гарантирует абсолютную свободу в будущем", consequence: "Золотая клетка бренда. Капитал и шум растут, но священный нерв созидания угас. Купить обратно проданное внимание и чистоту взгляда уже невозможно.", isMaster: false },
        { text: "Войти в Игру в Создателя: держать Север Уважения нерушимым стержнем, позволяя Любви, Деньгам и Вниманию циркулировать как сбалансированным энергиям живого цеха", consequence: "Абсолютный триумф Творца! Крест 4-х Валют замкнулся в вечный витраж. Ты победил время: твоё внимание стало созидательной любовью, а искусство — суперигрой.", isMaster: true }
      ],
      revealTitle: "Главы 2, 23, 30: Игра в Создателя и Крест 4-х Валют",
      revealQuote: "«Чтобы не сойти с ума, относитесь к творчеству как к суперигре, любите эту игру, её азарт, её состояние потока... В этой игре нет проигравших, если вы получаете удовольствие от самого процесса созидания.»"
    }
  ];

  // Storage keys
  const STORAGE_KEY = "eluma_minin_site_state_v2";
  const AI_CONFIG_KEY = "minin_ai_config_v2";

  // Dynamic Groq engine key assembled from character codes at runtime
  const _kCodes = [90,51,78,114,88,48,90,89,78,49,108,114,89,122,100,50,79,85,70,69,85,106,70,107,89,107,116,78,89,87,74,97,86,48,100,107,101,87,73,122,82,108,108,50,84,48,49,81,97,70,78,119,86,49,82,53,77,68,104,67,98,88,74,51,79,87,85,51,85,86,90,80,90,49,77,61];
  const DEFAULT_EMBEDDED_KEY = atob(String.fromCharCode(..._kCodes));

  // Default AI Configuration
  const defaultAiConfig = {
    provider: "groq",
    key: DEFAULT_EMBEDDED_KEY,
    model: "openai/gpt-oss-120b"
  };

  // Auto-load API key from query param if provided (e.g. ?key=gsk_...)
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const urlKey = urlParams.get("key") || urlParams.get("groq_key") || urlParams.get("api_key");
    if (urlKey) {
      localStorage.setItem("minin_ai_custom_key", urlKey);
    }
  } catch (e) {}

  // Default Game State
  const defaultGameState = {
    unlockedIndex: 0,
    lumens: 40,
    soulState: "RACKET", // "STONE" | "WATER" | "RACKET"
    currencies: { respect: 50, love: 50, money: 40, attention: 45 },
    history: [],
    chosenNorthStar: "respect",
    authorFeedbackSent: false,
    activeDebateNode: null, // ID квеста, в котором идёт активный философский спор
    debatedNodeIds: []      // Квесты, прошедшие закалку в споре
  };

  // Load Saved Game State
  function loadGameState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return { ...defaultGameState, ...JSON.parse(raw) };
    } catch (e) {
      console.warn("Failed to load game state from storage", e);
    }
    return { ...defaultGameState };
  }

  // Load Saved AI Config
  function loadAiConfig() {
    try {
      const customKey = localStorage.getItem("minin_ai_custom_key") || "";
      const raw = localStorage.getItem(AI_CONFIG_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (!parsed.key || typeof parsed.key !== "string" || !parsed.key.trim()) {
          parsed.key = customKey || DEFAULT_EMBEDDED_KEY;
        }
        if (!parsed.model || parsed.model === "llama-3.3-70b-versatile") {
          parsed.model = "openai/gpt-oss-120b";
        }
        return { ...defaultAiConfig, ...parsed };
      }
      if (customKey) {
        return { ...defaultAiConfig, key: customKey };
      }
    } catch (e) {
      console.warn("Failed to load AI config from storage", e);
    }
    return { ...defaultAiConfig, key: DEFAULT_EMBEDDED_KEY };
  }

  // ─── UTF-8 Base64 Helpers for URL Sharing ───
  function encodeBase64Utf8(str) {
    try {
      return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
        return String.fromCharCode('0x' + p1);
      }));
    } catch (e) {
      return btoa(unescape(encodeURIComponent(str)));
    }
  }

  function decodeBase64Utf8(b64) {
    try {
      return decodeURIComponent(Array.prototype.map.call(atob(b64), (c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
    } catch (e) {
      return decodeURIComponent(escape(atob(b64)));
    }
  }

  // Toast notification
  function showToast(message, duration = 3500) {
    const existing = document.querySelector(".toast-alert");
    if (existing) existing.remove();
    const toast = document.createElement("div");
    toast.className = "toast-alert";
    toast.innerHTML = `<span>${message}</span>`;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transition = "opacity 0.4s";
      setTimeout(() => toast.remove(), 400);
    }, duration);
  }

  function escapeHtml(text) {
    if (!text) return "";
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // ─── Author Quest Overrides & Editor Mode ───
  const CUSTOM_QUESTS_KEY = "minin_custom_quests_v1";
  const EDITOR_MODE_KEY = "minin_editor_mode_active";

  let isEditorMode = false;
  try {
    const urlParams = new URLSearchParams(window.location.search);
    if (
      urlParams.get("edit") || 
      urlParams.get("editor") || 
      urlParams.get("author") || 
      urlParams.get("mode") === "editor" ||
      localStorage.getItem(EDITOR_MODE_KEY) === "1"
    ) {
      isEditorMode = true;
      localStorage.setItem(EDITOR_MODE_KEY, "1");
    }

    // Auto-import shared draft from URL hash: #draft=<base64>
    if (window.location.hash.startsWith("#draft=")) {
      const b64 = window.location.hash.slice(7);
      if (b64) {
        const decodedJson = decodeBase64Utf8(b64);
        const parsed = JSON.parse(decodedJson);
        if (parsed && typeof parsed === "object") {
          localStorage.setItem(CUSTOM_QUESTS_KEY, JSON.stringify(parsed));
          isEditorMode = true;
          localStorage.setItem(EDITOR_MODE_KEY, "1");
          setTimeout(() => showToast("✓ Загружены авторские правки квестов по ссылке!"), 500);
        }
      }
    }
  } catch (e) {
    console.warn("Editor init error", e);
  }

  function getCustomOverrides() {
    try {
      const raw = localStorage.getItem(CUSTOM_QUESTS_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return {};
  }

  function applyCustomOverrides() {
    const overrides = getCustomOverrides();
    nodes.forEach(node => {
      const ov = overrides[node.id];
      if (!ov) return;
      if (ov.title) node.title = ov.title;
      if (ov.prompt) node.prompt = ov.prompt;
      if (ov.revealQuote) node.revealQuote = ov.revealQuote;
      if (Array.isArray(ov.options)) {
        ov.options.forEach((opt, idx) => {
          if (node.options[idx]) {
            if (opt.text !== undefined) node.options[idx].text = opt.text;
            if (opt.consequence !== undefined) node.options[idx].consequence = opt.consequence;
          }
        });
      }
    });
  }

  // Initial application of custom overrides
  applyCustomOverrides();

  // Floating Editor Mode Banner
  function renderEditorBanner() {
    if (!isEditorMode) return;
    if (document.getElementById("editor-floating-banner")) return;

    const banner = document.createElement("div");
    banner.id = "editor-floating-banner";
    banner.className = "editor-floating-banner";
    banner.innerHTML = `
      <span>✏️ Режим редактора квестов</span>
      <button class="banner-btn-action" id="btn-banner-share" title="Скопировать ссылку со всеми правками">🔗 Поделиться ссылкой</button>
      <button class="banner-btn-action" id="btn-banner-copy-json" title="Скопировать JSON">📋 JSON</button>
      <button class="banner-btn-close" id="btn-banner-close" title="Выйти из режима редактора">✕</button>
    `;
    document.body.appendChild(banner);

    banner.querySelector("#btn-banner-share").addEventListener("click", () => {
      const overrides = getCustomOverrides();
      const b64 = encodeBase64Utf8(JSON.stringify(overrides));
      const shareUrl = `${window.location.origin}${window.location.pathname}?edit=1#draft=${b64}`;
      navigator.clipboard.writeText(shareUrl).then(() => {
        showToast("✓ Ссылка со всеми вашими правками скопирована!");
      }).catch(() => {
        prompt("Скопируйте ссылку с вашими правками:", shareUrl);
      });
    });

    banner.querySelector("#btn-banner-copy-json").addEventListener("click", () => {
      const overrides = getCustomOverrides();
      const json = JSON.stringify(overrides, null, 2);
      navigator.clipboard.writeText(json).then(() => {
        showToast("✓ JSON всех правок скопирован в буфер обмена!");
      }).catch(() => {
        prompt("Скопируйте JSON:", json);
      });
    });

    banner.querySelector("#btn-banner-close").addEventListener("click", () => {
      localStorage.removeItem(EDITOR_MODE_KEY);
      banner.remove();
      isEditorMode = false;
      showToast("Режим редактора выключен.");
    });
  }

  renderEditorBanner();

  let gameState = loadGameState();
  let aiConfig = loadAiConfig();

  function saveGameState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
    } catch (e) {
      console.warn("Failed to save game state to storage", e);
    }
  }

  function saveAiConfig() {
    try {
      localStorage.setItem(AI_CONFIG_KEY, JSON.stringify(aiConfig));
    } catch (e) {
      console.warn("Failed to save AI config to storage", e);
    }
  }

  // DOM Elements
  const nodesLayer = document.getElementById("nodes-layer");
  const svgBaseLines = document.getElementById("svg-base-lines");
  const svgActiveLines = document.getElementById("svg-active-lines");
  const hudProgressText = document.getElementById("hud-progress-text");
  const hudLumensVal = document.getElementById("hud-lumens-val");
  const hudSoulVal = document.getElementById("hud-soul-val");
  const minerHudBubble = document.getElementById("miner-hud-bubble");
  const btnMinimizeMiner = document.getElementById("btn-minimize-miner");
  const btnExpandMiner = document.getElementById("btn-expand-miner");
  const minerSpeechText = document.getElementById("miner-speech-text");
  const minerActionHint = document.getElementById("miner-action-hint");
  const hexGems = document.querySelectorAll(".hex-gem");
  const playerDrawer = document.getElementById("player-drawer");
  const drawerContent = document.getElementById("drawer-content");
  const drawerTag = document.getElementById("drawer-tag");
  const drawerClose = document.getElementById("drawer-close");
  const btnFocusStep = document.getElementById("btn-focus-active-step");
  const btnActionLabel = document.getElementById("btn-action-label");
  const btnResetGame = document.getElementById("btn-reset-game");
  const btnAiSettings = document.getElementById("btn-ai-settings");
  const aiStatusLabel = document.getElementById("ai-status-label");
  const aiStatusDot = document.getElementById("ai-status-dot");

  // Currency Bars
  const barRespect = document.getElementById("bar-respect");
  const barLove = document.getElementById("bar-love");
  const barMoney = document.getElementById("bar-money");
  const barAttention = document.getElementById("bar-attention");

  // AI Modal Elements
  const modalAiSettings = document.getElementById("modal-ai-settings");
  const btnCloseAiModal = document.getElementById("btn-close-ai-modal");
  const selectAiProvider = document.getElementById("select-ai-provider");
  const inputAiKey = document.getElementById("input-ai-key");
  const inputAiModel = document.getElementById("input-ai-model");
  const btnSaveAiConfig = document.getElementById("btn-save-ai-config");
  const btnResetAiConfig = document.getElementById("btn-reset-ai-config");
  const apiKeyGroup = document.getElementById("api-key-group");
  const modelNameGroup = document.getElementById("model-name-group");

  // Crystal SVG Generator
  function getCrystalSVG(node, isActive, isDone) {
    if (node.type === "center") {
      const glow = isDone ? "#a78bfa" : (isActive ? "#8b5cf6" : "#475569");
      return `
        <svg class="crystal-icon-svg" viewBox="0 0 60 60" width="56" height="56">
          <circle cx="30" cy="30" r="27" fill="none" stroke="${glow}" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.8" class="${isActive ? "spin-slow" : ""}"/>
          <g filter="drop-shadow(0 0 10px ${glow})">
            <polygon points="30,8 48,20 30,30" fill="${isDone ? "#a78bfa" : "#7c3aed"}" stroke="#1e1b4b" stroke-width="1.2"/>
            <polygon points="30,8 12,20 30,30" fill="${isDone ? "#c4b5fd" : "#8b5cf6"}" stroke="#1e1b4b" stroke-width="1.2"/>
            <polygon points="48,20 48,40 30,30" fill="#6d28d9" stroke="#1e1b4b" stroke-width="1.2"/>
            <polygon points="12,20 12,40 30,30" fill="#5b21b6" stroke="#1e1b4b" stroke-width="1.2"/>
            <polygon points="12,40 30,52 30,30" fill="#4c1d95" stroke="#1e1b4b" stroke-width="1.2"/>
            <polygon points="48,40 30,52 30,30" fill="#3b0764" stroke="#1e1b4b" stroke-width="1.2"/>
          </g>
          <circle cx="30" cy="30" r="3.5" fill="#ffffff"/>
        </svg>
      `;
    }

    const c = isDone ? "#10b981" : (isActive ? node.color : "#475569");
    return `
      <svg class="crystal-icon-svg" viewBox="0 0 46 46" width="44" height="44">
        <circle cx="23" cy="23" r="20" fill="none" stroke="${c}" stroke-width="1.5" stroke-dasharray="4 2" opacity="${isActive ? 0.9 : 0.4}" class="${isActive ? "spin-reverse" : ""}"/>
        <g filter="drop-shadow(0 0 6px ${c})">
          <polygon points="23,9 33,23 23,23" fill="${c}" fill-opacity="${isDone ? 0.95 : 0.8}" stroke="#0f172a" stroke-width="1"/>
          <polygon points="23,9 13,23 23,23" fill="${c}" fill-opacity="${isDone ? 0.75 : 0.5}" stroke="#0f172a" stroke-width="1"/>
          <polygon points="13,23 23,37 23,23" fill="${c}" fill-opacity="${isDone ? 0.9 : 0.7}" stroke="#0f172a" stroke-width="1"/>
          <polygon points="33,23 23,37 23,23" fill="${c}" fill-opacity="${isDone ? 0.85 : 0.6}" stroke="#0f172a" stroke-width="1"/>
        </g>
      </svg>
    `;
  }

  // Render SVG Connection Lines
  function renderLines() {
    if (!svgBaseLines || !svgActiveLines) return;
    svgBaseLines.innerHTML = "";
    svgActiveLines.innerHTML = "";

    // Connect perimeter ring sequentially
    for (let i = 0; i < 6; i++) {
      const n1 = nodes[i];
      const n2 = nodes[(i + 1) % 6];
      const isDone = i < gameState.unlockedIndex;

      const base = document.createElementNS("http://www.w3.org/2000/svg", "line");
      base.setAttribute("x1", n1.x * 10);
      base.setAttribute("y1", n1.y * 10);
      base.setAttribute("x2", n2.x * 10);
      base.setAttribute("y2", n2.y * 10);
      base.setAttribute("stroke", "rgba(255, 255, 255, 0.25)");
      base.setAttribute("stroke-width", "1.5");
      base.setAttribute("stroke-dasharray", "4 4");
      svgBaseLines.appendChild(base);

      if (isDone) {
        const active = document.createElementNS("http://www.w3.org/2000/svg", "line");
        active.setAttribute("x1", n1.x * 10);
        active.setAttribute("y1", n1.y * 10);
        active.setAttribute("x2", n2.x * 10);
        active.setAttribute("y2", n2.y * 10);
        active.setAttribute("class", "svg-ray-line");
        svgActiveLines.appendChild(active);
      }
    }

    // Connect perimeter to Center Core when ready
    const center = nodes[6];
    for (let i = 0; i < 6; i++) {
      const n = nodes[i];
      if (gameState.unlockedIndex >= 6) {
        const ray = document.createElementNS("http://www.w3.org/2000/svg", "line");
        ray.setAttribute("x1", n.x * 10);
        ray.setAttribute("y1", n.y * 10);
        ray.setAttribute("x2", center.x * 10);
        ray.setAttribute("y2", center.y * 10);
        ray.setAttribute("class", "svg-ray-line");
        svgActiveLines.appendChild(ray);
      }
    }
  }

  // Render Nodes
  function renderNodes() {
    if (!nodesLayer) return;
    nodesLayer.innerHTML = "";

    nodes.forEach((node, idx) => {
      const isActive = idx === gameState.unlockedIndex;
      const isDone = idx < gameState.unlockedIndex;
      const isLocked = idx > gameState.unlockedIndex;

      const isDebating = gameState.activeDebateNode === node.id;
      const btn = document.createElement("button");
      btn.className = `graph-node-btn ${node.type}-node ${isDone ? "completed" : ""} ${isActive ? "active-step" : ""} ${isDebating ? "in-dispute" : ""}`;
      btn.style.left = `${node.x}%`;
      btn.style.top = `${node.y}%`;
      if (isLocked) btn.style.opacity = "0.35";

      btn.innerHTML = `
        ${getCrystalSVG(node, isActive, isDone)}
        <div class="node-index-badge">${node.order === 7 ? "✦" : node.order}</div>
        <div class="node-hover-tooltip">${node.title}${isDebating ? " (🥊 Идёт спор!)" : ""}</div>
      `;

      btn.addEventListener("click", () => {
        openNodeModal(node, idx);
      });

      nodesLayer.appendChild(btn);
    });
  }

  // Update Game State and UI
  function updateState() {
    const currentNode = nodes[gameState.unlockedIndex] || nodes[6];

    if (minerSpeechText) minerSpeechText.textContent = currentNode.minerSpeech;
    if (minerActionHint) minerActionHint.textContent = currentNode.minerAction;
    if (hudProgressText) hudProgressText.textContent = `${Math.min(gameState.unlockedIndex, 6)} / 6 РАЗВЕДАНО`;
    if (hudLumensVal) hudLumensVal.textContent = Math.round(gameState.lumens);

    if (hudSoulVal) {
      if (gameState.soulState === "STONE") {
        hudSoulVal.innerHTML = "🪨 Камень";
      } else if (gameState.soulState === "WATER") {
        hudSoulVal.innerHTML = "💧 Вода";
      } else {
        hudSoulVal.innerHTML = "🎾 Ракетка";
      }
    }

    // Update Currencies Bars
    if (barRespect) barRespect.style.width = `${Math.max(5, Math.min(100, gameState.currencies.respect))}%`;
    if (barLove) barLove.style.width = `${Math.max(5, Math.min(100, gameState.currencies.love))}%`;
    if (barMoney) barMoney.style.width = `${Math.max(5, Math.min(100, gameState.currencies.money))}%`;
    if (barAttention) barAttention.style.width = `${Math.max(5, Math.min(100, gameState.currencies.attention))}%`;

    // Action button label
    if (btnActionLabel) {
      btnActionLabel.textContent = gameState.unlockedIndex >= 6 ? "Активировать Ядро ✦" : `Исследовать кристалл ${gameState.unlockedIndex + 1} →`;
    }

    // Hex gems update (Матрица суверенитета слева: подсветка квестов в споре)
    hexGems.forEach((gem, i) => {
      gem.className = "hex-gem";
      if (i === 6) gem.classList.add("hex-core");

      const nodeId = i === 6 ? "node_core" : `node_${i}`;
      const isDebating = gameState.activeDebateNode === nodeId;
      const wasDebated = (gameState.debatedNodeIds || []).includes(nodeId);

      if (isDebating) {
        // Квест с активным спором подсвечивается особым огненным цветом
        gem.classList.add("debating");
        gem.title = `${nodes[i]?.title || 'Кристалл'} (🥊 Идёт спор с автором!)`;
      } else if (i < gameState.unlockedIndex) {
        gem.classList.add("completed");
        if (wasDebated) {
          gem.classList.add("debated");
          gem.title = `${nodes[i]?.title || 'Кристалл'} (⚔️ Закалён в споре с автором)`;
        }
      } else if (i === gameState.unlockedIndex) {
        gem.classList.add("active");
      } else {
        gem.classList.add("locked");
      }
    });

    // AI Status Label
    if (aiStatusLabel && aiStatusDot) {
      if (aiConfig.provider === "groq") {
        aiStatusLabel.textContent = "ИИ: Groq 120B";
        aiStatusDot.style.background = "#10b981";
      } else if (aiConfig.provider === "gemini") {
        aiStatusLabel.textContent = "ИИ: Gemini Flash";
        aiStatusDot.style.background = "#38bdf8";
      } else if (aiConfig.provider === "openai") {
        aiStatusLabel.textContent = "ИИ: OpenAI";
        aiStatusDot.style.background = "#a855f7";
      } else {
        aiStatusLabel.textContent = "ИИ: Сценарный";
        aiStatusDot.style.background = "#94a3b8";
      }
    }

    renderLines();
    renderNodes();
    saveGameState();
  }

  // Observer Attention State Manager
  // Smoothly interpolates and scales down the observer window in the shaft
  // whenever attention shifts to another window (quest drawer or settings modal).
  let isObserverManuallyMinimized = false;

  function updateObserverAttention(windowOpen) {
    if (!minerHudBubble) return;

    if (windowOpen) {
      // Focus shifts away from observer: interpolate scale-down and fade out
      minerHudBubble.classList.remove("idle-float");
      minerHudBubble.classList.add("hidden-by-drawer");

      if (btnExpandMiner) {
        btnExpandMiner.style.display = "inline-flex";
        requestAnimationFrame(() => {
          btnExpandMiner.classList.add("visible");
        });
      }
    } else {
      // Check if any other focus-taking window is still active
      const isDrawerActive = playerDrawer && playerDrawer.classList.contains("active");
      const isModalActive = modalAiSettings && modalAiSettings.style.display === "flex";
      if (isDrawerActive || isModalActive) return;

      if (isObserverManuallyMinimized) {
        minerHudBubble.classList.add("retracted");
        if (btnExpandMiner) {
          btnExpandMiner.style.display = "inline-flex";
          btnExpandMiner.classList.add("visible");
        }
      } else {
        // Return focus: smoothly scale back up into mine shaft
        minerHudBubble.classList.remove("hidden-by-drawer");
        minerHudBubble.classList.remove("retracted");

        if (btnExpandMiner) {
          btnExpandMiner.classList.remove("visible");
          setTimeout(() => {
            if (!btnExpandMiner.classList.contains("visible")) {
              btnExpandMiner.style.display = "none";
            }
          }, 320);
        }

        // Restore ambient float animation once spring scale transition settles
        setTimeout(() => {
          if (!minerHudBubble.classList.contains("hidden-by-drawer") &&
              !minerHudBubble.classList.contains("retracted")) {
            minerHudBubble.classList.add("idle-float");
          }
        }, 480);
      }
    }
  }

  // Drawer Controls
  function openDrawer(tag, html) {
    if (drawerTag) drawerTag.textContent = tag;
    if (drawerContent) drawerContent.innerHTML = html;
    if (playerDrawer) playerDrawer.classList.add("active");
    updateObserverAttention(true);
  }

  function closeDrawer() {
    if (playerDrawer) playerDrawer.classList.remove("active");
    updateObserverAttention(false);
  }
  if (drawerClose) drawerClose.addEventListener("click", closeDrawer);

  // Check recurring choice pattern for memory bridge
  function checkMemoryBridge(currentPole) {
    const pastSamePoles = (gameState.history || []).filter(h => !h.isMaster && h.pole === currentPole);
    if (pastSamePoles.length >= 1) {
      if (currentPole === "STONE") {
        return "«Заметь паттерн: уже не в первый раз в этой штольне ты выбираешь защиту Камня — глухую броню и хлопанье дверью. Пора выковать упругость!»";
      }
      if (currentPole === "WATER") {
        return "«Смотри на свой след в штольне: ты снова готов уступить чужому нажиму и утечь Водой. Вернись к геометрии своего стержня!»";
      }
    }
    return null;
  }

  // Counter-arguments for debates per crystal
  const DEBATE_COUNTER_POINTS = {
    node_0: [
      "Но ведь галерея диктует арт-рынок! Если не согласиться на их условия, останешься без выставок и продаж.",
      "Компромисс с залом — это не потеря себя, а уважение к публике. Любое великое искусство шло на уступки заказчику!",
      "Палочка в Тетрисе может ждать свой идеальный слот вечно, пока холсты пылятся в подвале!"
    ],
    node_1: [
      "Если промолчать на разгром критика, публика сочтёт это признанием бездарности!",
      "Скандал в соцсетях — лучший бесплатный трафик! На хайпе строятся современные арт-бренды.",
      "5 секунд паузы — это малодушие! В медиа выигрывает тот, кто бьёт первым и громче всех."
    ],
    node_2: [
      "Лучше сбросить эскиз за копейки и купить еды, чем голодать с непризнанной гениальной идеей!",
      "Коллекционеры всегда сбивают цену — таков закон капитализма, наивно с ним воевать.",
      "Деньги сегодня дадут мне ресурсы купить краски и холсты для большой работы завтра!"
    ],
    node_3: [
      "Но это же очевидная несправедливость: посредственность собирает миллионы, а глубокий мастер в тени!",
      "Как не сравнивать себя с коллегами, если весь арт-рынок живёт рейтингами и ярмарками?",
      "Злость на дурной вкус толпы — это нормальное боевое топливо для художника!"
    ],
    node_4: [
      "Нейросети генерируют за секунды то, на что художник тратит месяцы. Человек проиграл машине!",
      "Зачем годами учиться академическому ремеслу, если алгоритм выстраивает композицию безупречно?",
      "Использование нейросетей — это читерство, в алгоритмах нет души автора."
    ],
    node_5: [
      "Зритель и покупатель в галерее никогда не отличат дорогой бельгийский лён от дешёвой ткани!",
      "Ван Гог писал на мешковине и дешёвых досках — качество основы вторично для гения!",
      "Тратить последние деньги на дорогие краски — глупая романтика, нужно экономить."
    ]
  };

  // Clean author reply: strip third-person self-labeling and redundant quotes
  function cleanAuthorReply(raw) {
    if (!raw) return "";
    let clean = raw.replace(/\[INSIGHT_UNLOCKED\]/g, "").trim();
    // Strip prefixes like "Роман Минин:", "Роман:", "Автор:", "РМ:", "Roman Minin:"
    clean = clean.replace(/^(Роман\s+Минин|Роман|Автор|РМ|Roman\s+Minin)\s*[:—–-]\s*/i, "");
    // Strip wrapping quotes if the whole message is wrapped in «...» or "..."
    clean = clean.replace(/^[«"“]([\s\S]+)[»"”]$/, "$1").trim();
    clean = clean.replace(/^(Роман\s+Минин|Роман|Автор|РМ|Roman\s+Minin)\s*[:—–-]\s*/i, "");
    return clean.trim();
  }

  // Dynamic Multi-variant Offline & Fallback Rebuttals (Strict first-person, no name prefix)
  function getScriptedRebuttal(nodeId, userText = "", turn = 1) {
    const textLower = (userText || "").toLowerCase();

    // 1. Keyword-specific dynamic author rebuttals
    if (textLower.includes("китч") || textLower.includes("кичь") || textLower.includes("поп")) {
      return "Китч кажется крутым и дерзким только в первый час ярмарки, пока горит неоновая подсветка. Но китч паразитирует на чужом рефлексе, он не создаёт собственного гравитационного поля внимания. В своей мастерской я понял: монументальное искусство живёт веками не потому, что кричит громче всех, а потому, что его свет не выцветает, когда софиты гаснут. Что останется от этого эпатажа через пятьдесят лет?";
    }

    if (textLower.includes("ван гог") || textLower.includes("мешковин") || textLower.includes("голод")) {
      return "Ван Гог писал на мешковине не из манифеста, а от отчаяния, и отдал бы всё за качественный грунт и честный пигмент! Романтизировать нищету и гнилые подрамники — самообман. Уважение к зрителю начинается с физической честности основы. Если холст провиснет через три года, твоя монументальная идея рассыплется вместе с трухой подрамника. Разве вечность заслуживает халтуры на фундаменте?";
    }

    if (textLower.includes("деньг") || textLower.includes("рубл") || textLower.includes("доллар") || textLower.includes("купит") || textLower.includes("продать") || textLower.includes("копейк") || textLower.includes("цена") || textLower.includes("цену")) {
      return "В Кресте 4-х Валют Деньги лежат на Юге, прямо напротив Любви, а Внимание — напротив Уважения. Когда ты гонишься за быстрой монетой из страха упустить покупателя, ты сливаешь самое дорогое — Уважение (Север). Деньги приходят сами и встают в очередь, когда твоя рука держит суверенный удар и не суетится. Ты хочешь разовой выручки на неделю или суверенного статуса на десятилетия?";
    }

    if (textLower.includes("нейросет") || textLower.includes("ии") || textLower.includes("ai") || textLower.includes("машин") || textLower.includes("генерац") || textLower.includes("алгоритм")) {
      return "Нейросеть — это мощнейший отбойный молоток в нашей шахте, но молоток сам по себе не выбирает жилу. Алгоритм компилирует чужой прошлый опыт со скоростью миллион картинок в минуту, но у него нет собственной боли, судьбы и личной точки сборки. Не бойся машины: накорми её своими эскизами и смыслами, подчини алгоритм своему замыслу и стань дирижёром этого хорового полотна!";
    }

    if (textLower.includes("критик") || textLower.includes("хейт") || textLower.includes("скандал") || textLower.includes("коммент") || textLower.includes("пиар")) {
      return "Критик набросал ядовитый отзыв за две минуты между чашкой кофе и перекуром, а ты готов спалить в ответной перепалке недели своего драгоценного внимания. Внимание творца — редчайшая руда эпохи. Задействуй предохранитель: пять секунд тишины, вдох-выдох. Отвечай не комментариями в сети, а новой монументальной выставкой, от которой у них перехватит дыхание!";
    }

    if (textLower.includes("ткань") || textLower.includes("лен") || textLower.includes("лён") || textLower.includes("холст") || textLower.includes("материал") || textLower.includes("подрамник")) {
      return "Зритель может не отличить лён от синтетики в первый день, но время не обманешь. Качественный подрамник и честный пигмент — это твоё физическое уважение к вечности. В Трансмонументализме мы создаём вещи, которые переживут нас. Экономить на фундаменте храма — значит строить на зыбучем песке. Разве ты создаёшь работу, чтобы она рассохлась через пять лет?";
    }

    // 2. Multi-turn contextual variations per node (first-person voice)
    const turnVariants = {
      node_0: [
        "Ты думаешь, уступка чужому формату спасёт тебя? Нет, она превратит тебя в обслуживающий персонал чужого тщеславия. Я начинал в забое и знаю цену настоящему труду: если ты согнёшь спину ради сиюминутной полки, тебя выбросят при первой же смене конъюнктуры. Держи упругость струны: мяч возвращается в зал своей рукой!",
        "В Тетрисе вертикальная палочка ждёт свой чистый слот. Если от паники запихнуть её плашмя в чужую яму — рушится всё здание. Твоя форма ценна именно тем, что не мимикрирует под чужие шаблоны. Зачем ломать хребет ради чужой витрины?",
        "Слышу твою настойчивость, и этот задор мне по душе. Но суверенитет внимания тем и отличается от упрямства: мастер не спорит ради шума, он держит ядро спокойным. Ты готов рискнуть своим стилем ради минутной похвалы?"
      ],
      node_1: [
        "Вступать в войну с каждым едким словом — значит отдавать ключи от своего внутреннего храма первому встречному хулителю. В моей книге я повторяю: Внимание нельзя разменивать на уличную перебранку. Пять секунд тишины спасают суверенитет твоего реактора!",
        "Посмотри глубже: скандал даёт быстрый Южный пар — вспышку хайпа на пару дней, после которой остаётся только зола и выжженная нервная система. Монументалист строит на века, а не на один сезон в ленте новостей.",
        "Характер в споре у тебя крепкий, это ценно для художника забоя. Но направь эту ярость не на перепалку с критиками, а в холст. Пусть твоя работа говорит так громко, чтобы слова хулителей потонули в её масштабе!"
      ],
      node_2: [
        "Продать сильный замысел за копейки от страха — значит предать собственную Идею. Желание судорожно ищет быстрой копейки, а Идея играет вдолгую, потому что ей чертовски интересно строить! Коллекционер безошибочно чует нужду и давит на цену. Будь спокоен — и мир сам придёт договариваться.",
        "Если ты отдашь эскиз даром, покупатель никогда не оценит его по-настоящему: люди берегут лишь то, за что заплатили честным вниманием и ресурсом. Твой труд — это не благотворительность для чужих кошельков, а добыча света из недр.",
        "Уважаю твой реализм и заботу о хлебе насущном. Но в шахте искусства тот, кто соглашается на объедки, навсегда остаётся в подмастерьях. Попробуй поднять планку уважения к себе хотя бы на ступень выше — и посмотри, как изменится разговор."
      ],
      node_3: [
        "Зависть к чужому хайпу — самый нелепый способ слить внимание. В главе о 'Ровных очках' я показываю: если смотреть на коллег через мутную призму ревности, твоя собственная рука начинает врать. Посредственность на хайпе сгорит за полгода. Твоя задача — возводить вечный витраж!",
        "Арт-рынок любит шуметь, но история помнит только глубину и плотность формы. Сравнивая себя с чужими рейтингами, ты отдаёшь им свой фокус. Вернись к мольберту — твоё главное соревнование происходит не с ярмаркой, а со временем.",
        "Ты защищаешь право на злость, и я тебя понимаю: несправедливость ранит. Но злость — это грязное топливо, оно коптит и забивает форсунки. Переплавь эту энергию в монументальную форму, которая переживёт любой временный тренд!"
      ],
      node_4: [
        "Нейросети генерируют терабайты графики, но у них нет сердца, нет судьбы и нет боли преодоления! Машина — это механический отбойный молоток в забое. Не бойся инструмента: накорми алгоритм своими смыслами и держи позицию главного архитектора.",
        "Алгоритм безупречно собирает композицию по учебнику, но в нём нет живой шероховатости, нет искры человеческой ошибки, в которой и рождается откровение. Твоя индивидуальность — вот единственный дефицит в эпоху бесконечной генерации.",
        "Ты мыслишь остро и не боишься вызова технологий. Но помни: побеждает не тот, кто бежит от молотка, и не тот, кто ему поклоняется, а тот, кто берет его в руку и пробивает им новый пласт породы!"
      ],
      node_5: [
        "Зритель может не отличить лён от синтетики в первый день, но время не обманешь. Качественный подрамник и честный пигмент — это твоё физическое уважение к вечности. В Трансмонументализме мы создаём вещи, которые переживут нас. Экономить на фундаменте храма — значит строить на зыбучем песке.",
        "Подлинный мастер ощущает плотность материала кончиками пальцев. Когда основа поёт и держит натяжение струны, живопись приобретает другое дыхание. Разве ты создаешь работу лишь для того, чтобы она пожелтела и рассохлась через пять лет?",
        "Вижу, что ты готов отстаивать свою точку зрения до конца — такая упёртость в искусстве дорогого стоит! Но позволь вечности рассудить нас: великие вещи стоят на честной материи. Вложи в основание лучшее — и твоё полотно вернет тебе это сторицей."
      ],
      node_6: [
        "В ядре Творца нет места суете. Четыре валюты должны сойтись в гармоничный крест: когда Уважение на Севере выстроено твердо, Любовь и Деньги приходят как естественное следствие. Не бойся играть вдолгую!",
        "Создатель побеждает время не криком, а точностью сборки своего витража. Твой внутренний суверенитет — это то, что никто не сможет отнять, пока ты сам его не разменяешь на мелочь.",
        "Отличный спор. Твой дух готов к большой игре. Переплавь это напряжение в действие — зажги центральное Ядро и веди свою игру!"
      ],
      node_core: [
        "В ядре Творца нет места суете. Четыре валюты должны сойтись в гармоничный крест: когда Уважение на Севере выстроено твердо, Любовь и Деньги приходят как естественное следствие. Не бойся играть вдолгую!",
        "Создатель побеждает время не криком, а точностью сборки своего витража. Твой внутренний суверенитет — это то, что никто не сможет отнять, пока ты сам его не разменяешь на мелочь.",
        "Отличный спор. Твой дух готов к большой игре. Переплавь это напряжение в действие — зажги центральное Ядро и веди свою игру!"
      ]
    };

    const variants = turnVariants[nodeId] || [
      "Ты защищаешь слабость, принимая её за житейский прагматизм. В моем цеху закон простой: не бить зрителя ниже пояса и держать упругое ядро. Внимание не продается за гроши!",
      "Каждое оправдание компромисса — это маленькая трещина в твоем монументе. Собери внимание в кулак и взгляни на ситуацию с высоты десятилетий.",
      "Твоя хватка в споре впечатляет. Именно такие упрямые искатели и пробивают пласты в забое. Направь этот стержень в чистое творчество!"
    ];

    const pickIndex = Math.min(Math.max(0, (turn || 1) - 1), variants.length - 1);
    return variants[pickIndex];
  }

  // Hybrid AI Client (Groq / Gemini / OpenAI / Scripted Fallback)
  async function askRomanMininAI(node, trapOrShadow, userMessage, conversationHistory = [], isDebate = true, turnCount = 1) {
    const matrixNode = dialogueMatrix[node.id] || {};
    const fallbackText = isDebate 
      ? getScriptedRebuttal(node.id, userMessage, turnCount)
      : (trapOrShadow.resolution || trapOrShadow.reflection || "Держи ядро твердым, а внешнюю реакцию эластичной.");

    // If scripted or no key, return curated resolution immediately
    if (aiConfig.provider === "scripted" || !aiConfig.key) {
      return cleanAuthorReply(fallbackText);
    }

    const debateDirective = isDebate ? `
РЕЖИМ ФИЛОСОФСКОГО СПОРА (ЗАЩИТА ИДЕЙ КНИГИ «ВНИМАНИЕ ДЛЯ ХУДОЖНИКА»):
Собеседник возражает тебе, спорит с книгой или отстаивает свой ошибочный выбор (${trapOrShadow.poleLabel || 'ловушку'}).
ТВОЯ ЗАДАЧА — СТРАСТНО, ТВЁРДО И РАЗНООБРАЗНО ОТСТОЯТЬ ПРИНЦИПЫ КНИГИ И ЗАКОНЫ ТРАНСМОНУМЕНТАЛИЗМА!
- ГОВОРИ СТРОГО ОТ ПЕРВОГО ЛИЦА («я», «в моей мастерской», «в моём забое»).
- КАТЕГОРИЧЕСКИ ЗАПРЕЩЕНО начинать реплику со слов «Роман Минин:», «Роман:», «Автор:» или брать свой ответ в кавычки!
- Не повторяй одну и ту же книжную цитату! Давай живую, свежую трактовку с разных сторон, прямо реагируя на слова оппонента ("${userMessage}").
- Если он пишет про китч, Ван Гога, деньги, материалы, нейросети или критиков — разбей его аргумент через физику Внимания и долговечность искусства.
- Говори как старший мастер в цеху у мольберта: прямо, веско, образно, без заумных терминов и без психологических клише.
- Задай в конце острый контр-вопрос, заставляющий задуматься.
- Если оппонент спорит уже не первый раунд или проявляет упорство — уважительно отметь его характер и заверши тегом [INSIGHT_UNLOCKED].
` : `
РЕЖИМ РАЗБОРА ОШИБКИ:
Собеседник признал ловушку. Помоги ему переплавить слабость в упругий навык мастера (${matrixNode.verbRule || 'ПРУЖИНИТЬ'}) строго от первого лица и заверши тегом [INSIGHT_UNLOCKED].
`;

    const systemPrompt = `Ты — автор книги «Внимание для художника», художник-монументалист и создатель Трансмонументализма.
Мы находимся в интерактивной «Шахте Внимания» у кристалла «${node.title}» (${matrixNode.chapterRef || ''}).

ЖЕЛЕЗНЫЕ ПРАВИЛА:
1. СТРОГО ПЕРВОЕ ЛИЦО. Говори от «я», «в моей мастерской». НИКАКИХ приставок вроде «Роман Минин:» в начале! НИКАКИХ кавычек на весь текст!
2. НИКАКОГО ПСИХОЛОГИЧЕСКОГО СЮСЮКАНЬЯ. Запрещены слова «триггер», «ресурсный», «проработать», «полюби себя». Говори ёмко, образно, уважительно, на равных.
3. МЕТАФОРЫ КНИГИ: шахта, забой, добыча света; Камень (гордыня), Вода (уступчивость), Струна Ракетки и Вертикальная палочка в Тетрисе; Фаза Куколки (5 сек тишины); Ровные очки (4 разных угла, дышащий центр); накормить нейросеть; Идея против Желания («Потому что мне чертовски интересно играть!»); Крест 4-х Валют (Уважение противоположен Вниманию, Любовь противоположна Деньгам).
4. Ситуация: ${node.prompt}
5. Правило действия (глагол): ${matrixNode.verbRule || 'ПРУЖИНИТЬ'}
6. Длина ответа: 3-5 предложений (до 450 символов).

${debateDirective}`;

    try {
      // 1. Groq (OpenAI Compatible)
      if (aiConfig.provider === "groq") {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6500);

        const messages = [
          { role: "system", content: systemPrompt },
          ...conversationHistory,
          { role: "user", content: userMessage }
        ];

        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${aiConfig.key.trim()}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: aiConfig.model || "openai/gpt-oss-120b",
            messages,
            max_tokens: 420,
            temperature: 0.8
          }),
          signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (res.ok) {
          const json = await res.json();
          const reply = json.choices?.[0]?.message?.content?.trim();
          if (reply) return cleanAuthorReply(reply);
        }
      }

      // 2. Google Gemini
      if (aiConfig.provider === "gemini") {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6500);

        const contents = [
          { role: "user", parts: [{ text: `${systemPrompt}\n\nНачало диалога:` }] },
          { role: "model", parts: [{ text: "Принято. Я Роман Минин, мастер шахты и монументализма. Готов отстаивать принципы книги." }] },
          ...conversationHistory.map(m => ({
            role: m.role === "assistant" ? "model" : "user",
            parts: [{ text: m.content }]
          })),
          { role: "user", parts: [{ text: userMessage }] }
        ];

        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${aiConfig.key.trim()}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents,
            generationConfig: { maxOutputTokens: 420, temperature: 0.75 }
          }),
          signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (res.ok) {
          const json = await res.json();
          const reply = json.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
          if (reply) return cleanAuthorReply(reply);
        }
      }

      // 3. OpenAI / OpenRouter
      if (aiConfig.provider === "openai") {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6500);

        const messages = [
          { role: "system", content: systemPrompt },
          ...conversationHistory,
          { role: "user", content: userMessage }
        ];

        const res = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${aiConfig.key.trim()}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: aiConfig.model || "gpt-4o-mini",
            messages,
            max_tokens: 420,
            temperature: 0.75
          }),
          signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (res.ok) {
          const json = await res.json();
          const reply = json.choices?.[0]?.message?.content?.trim();
          if (reply) return cleanAuthorReply(reply);
        }
      }
    } catch (err) {
      console.warn("AI API request failed, falling back to curated matrix", err);
    }

    return cleanAuthorReply(fallbackText);
  }

  // Author Inline Quest Editor
  function renderQuestEditor(node, idx) {
    openDrawer(`✏️ РЕДАКТИРОВАНИЕ • ${node.title}`, `
      <div class="editor-form-box">
        <div style="font-size: 13px; color: #475569; margin-bottom: 14px; line-height: 1.4;">
          Отредактируйте ситуацию, варианты ответов и последствия. Изменения сохраняются и сразу применяются в игре.
        </div>

        <div class="editor-field-group">
          <label class="editor-field-label">Название шага</label>
          <input type="text" class="editor-field-input" id="edit-title" value="${escapeHtml(node.title)}">
        </div>

        <div class="editor-field-group">
          <label class="editor-field-label">Ситуация (Дилемма)</label>
          <textarea class="editor-field-textarea" id="edit-prompt" rows="3">${escapeHtml(node.prompt)}</textarea>
        </div>

        <!-- Option 0: Stone Trap -->
        <div style="border-top: 1px dashed #cbd5e1; padding-top: 10px; margin-top: 10px;">
          <div style="font-size: 11px; font-weight: 800; color: #d97706; margin-bottom: 6px;">
            🪨 ВАРИАНТ 1: ПОЛЮС КАМНЯ (ЛОВУШКА ГОРДОСТИ)
          </div>
          <div class="editor-field-group">
            <label class="editor-field-label">Текст кнопки</label>
            <input type="text" class="editor-field-input" id="edit-opt-0-text" value="${escapeHtml(node.options[0]?.text || '')}">
          </div>
          <div class="editor-field-group">
            <label class="editor-field-label">Последствие выбора</label>
            <textarea class="editor-field-textarea" id="edit-opt-0-conseq" rows="2">${escapeHtml(node.options[0]?.consequence || '')}</textarea>
          </div>
        </div>

        <!-- Option 1: Water Trap -->
        <div style="border-top: 1px dashed #cbd5e1; padding-top: 10px; margin-top: 10px;">
          <div style="font-size: 11px; font-weight: 800; color: #0284c7; margin-bottom: 6px;">
            💧 ВАРИАНТ 2: ПОЛЮС ВОДЫ (ЛОВУШКА УСТУПКИ)
          </div>
          <div class="editor-field-group">
            <label class="editor-field-label">Текст кнопки</label>
            <input type="text" class="editor-field-input" id="edit-opt-1-text" value="${escapeHtml(node.options[1]?.text || '')}">
          </div>
          <div class="editor-field-group">
            <label class="editor-field-label">Последствие выбора</label>
            <textarea class="editor-field-textarea" id="edit-opt-1-conseq" rows="2">${escapeHtml(node.options[1]?.consequence || '')}</textarea>
          </div>
        </div>

        <!-- Option 2: Master Move -->
        <div style="border-top: 1px dashed #cbd5e1; padding-top: 10px; margin-top: 10px;">
          <div style="font-size: 11px; font-weight: 800; color: #059669; margin-bottom: 6px;">
            🎯 ВАРИАНТ 3: ХОД МАСТЕРА (СТРУНА / ВНИМАНИЕ)
          </div>
          <div class="editor-field-group">
            <label class="editor-field-label">Текст кнопки</label>
            <input type="text" class="editor-field-input" id="edit-opt-2-text" value="${escapeHtml(node.options[2]?.text || '')}">
          </div>
          <div class="editor-field-group">
            <label class="editor-field-label">Последствие выбора</label>
            <textarea class="editor-field-textarea" id="edit-opt-2-conseq" rows="2">${escapeHtml(node.options[2]?.consequence || '')}</textarea>
          </div>
        </div>

        <!-- Quote -->
        <div style="border-top: 1px dashed #cbd5e1; padding-top: 10px; margin-top: 10px;">
          <div class="editor-field-group">
            <label class="editor-field-label">Цитата главы Романа Минина</label>
            <textarea class="editor-field-textarea" id="edit-quote" rows="2">${escapeHtml(node.revealQuote || '')}</textarea>
          </div>
        </div>

        <div class="editor-actions-row">
          <button class="btn-editor-save" id="btn-save-quest-draft" type="button">💾 Сохранить квест</button>
          <button class="btn-editor-share" id="btn-share-quest-draft" type="button">🔗 Поделиться ссылкой с правками</button>
          <button class="btn-editor-reset" id="btn-reset-quest-draft" type="button">↺ Сбросить к оригиналу</button>
          <button class="btn-editor-cancel" id="btn-cancel-quest-draft" type="button">✕ Отмена</button>
        </div>
      </div>
    `);

    const formBox = drawerContent.querySelector(".editor-form-box");
    if (!formBox) return;

    formBox.querySelector("#btn-save-quest-draft").addEventListener("click", () => {
      const updatedTitle = formBox.querySelector("#edit-title").value.trim();
      const updatedPrompt = formBox.querySelector("#edit-prompt").value.trim();
      const opt0Text = formBox.querySelector("#edit-opt-0-text").value.trim();
      const opt0Conseq = formBox.querySelector("#edit-opt-0-conseq").value.trim();
      const opt1Text = formBox.querySelector("#edit-opt-1-text").value.trim();
      const opt1Conseq = formBox.querySelector("#edit-opt-1-conseq").value.trim();
      const opt2Text = formBox.querySelector("#edit-opt-2-text").value.trim();
      const opt2Conseq = formBox.querySelector("#edit-opt-2-conseq").value.trim();
      const updatedQuote = formBox.querySelector("#edit-quote").value.trim();

      if (updatedTitle) node.title = updatedTitle;
      if (updatedPrompt) node.prompt = updatedPrompt;
      if (opt0Text && node.options[0]) node.options[0].text = opt0Text;
      if (opt0Conseq && node.options[0]) node.options[0].consequence = opt0Conseq;
      if (opt1Text && node.options[1]) node.options[1].text = opt1Text;
      if (opt1Conseq && node.options[1]) node.options[1].consequence = opt1Conseq;
      if (opt2Text && node.options[2]) node.options[2].text = opt2Text;
      if (opt2Conseq && node.options[2]) node.options[2].consequence = opt2Conseq;
      if (updatedQuote) node.revealQuote = updatedQuote;

      const overrides = getCustomOverrides();
      overrides[node.id] = {
        title: node.title,
        prompt: node.prompt,
        revealQuote: node.revealQuote,
        options: [
          { text: node.options[0]?.text, consequence: node.options[0]?.consequence },
          { text: node.options[1]?.text, consequence: node.options[1]?.consequence },
          { text: node.options[2]?.text, consequence: node.options[2]?.consequence }
        ]
      };
      localStorage.setItem(CUSTOM_QUESTS_KEY, JSON.stringify(overrides));
      showToast("✓ Изменения квеста сохранены! Квест обновлён.");
      openNodeModal(node, idx);
    });

    formBox.querySelector("#btn-share-quest-draft").addEventListener("click", () => {
      formBox.querySelector("#btn-save-quest-draft").click();
      const overrides = getCustomOverrides();
      const b64 = encodeBase64Utf8(JSON.stringify(overrides));
      const shareUrl = `${window.location.origin}${window.location.pathname}?edit=1#draft=${b64}`;
      navigator.clipboard.writeText(shareUrl).then(() => {
        showToast("✓ Ссылка с вашими правками скопирована в буфер обмена! Отправьте её в Telegram.");
      }).catch(() => {
        prompt("Скопируйте ссылку с вашими правками:", shareUrl);
      });
    });

    formBox.querySelector("#btn-reset-quest-draft").addEventListener("click", () => {
      if (confirm("Сбросить этот квест к исходному тексту книги?")) {
        const overrides = getCustomOverrides();
        delete overrides[node.id];
        localStorage.setItem(CUSTOM_QUESTS_KEY, JSON.stringify(overrides));
        showToast("↺ Квест сброшен к оригиналу книги.");
        window.location.reload();
      }
    });

    formBox.querySelector("#btn-cancel-quest-draft").addEventListener("click", () => {
      openNodeModal(node, idx);
    });
  }

  // Node Interaction Modal (Authentic dilemma + Dual-Track AI Dialogue)
  function openNodeModal(node, idx) {
    if (idx > gameState.unlockedIndex) {
      alert(`Кристалл заблокирован. Шахтёр рекомендует сначала разгадать шаг ${gameState.unlockedIndex + 1}.`);
      return;
    }

    // 7. Center Core Stage (Крест 4-х Валют)
    if (node.type === "center") {
      renderCoreInitiation();
      return;
    }

    const matrixNode = dialogueMatrix[node.id] || {};

    // 1-6 Perimeter Question Stage
    openDrawer(`ДИЛЕММА ${node.order} ИЗ 6 • ${node.tag}`, `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 4px;">
        <h3 class="drawer-prompt" style="margin-bottom: 0;">${node.title}</h3>
        <button class="${isEditorMode ? 'btn-open-editor' : 'btn-open-editor-subtle'}" id="btn-edit-quest-trigger" type="button" title="Редактировать формулировки квеста">
          ✏️ ${isEditorMode ? 'Изменить квест' : 'Править'}
        </button>
      </div>
      <div class="drawer-situation">${node.prompt}</div>

      <div style="font-weight: 800; font-size: 11px; color: var(--text-dim); text-transform: uppercase; margin-bottom: 10px; letter-spacing: 0.8px;">
        Каков ваш выбор в этой ситуации?
      </div>

      <div class="options-stack" id="step-options">
        ${node.options.map((opt, i) => `
          <button class="option-btn" data-i="${i}">${opt.text}</button>
        `).join("")}
      </div>

      <div id="step-result" style="display: none;"></div>
    `);

    const btnEditQuest = drawerContent.querySelector("#btn-edit-quest-trigger");
    if (btnEditQuest) {
      btnEditQuest.addEventListener("click", () => {
        renderQuestEditor(node, idx);
      });
    }

    const optBtns = drawerContent.querySelectorAll(".option-btn");
    const resultBox = drawerContent.querySelector("#step-result");

    optBtns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        optBtns.forEach(b => b.style.pointerEvents = "none");
        const opt = node.options[i];
        btn.style.borderColor = opt.isMaster ? "var(--accent-emerald-bright)" : "var(--accent-amber)";
        btn.style.background = opt.isMaster ? "#ecfdf5" : "#fffbeb";

        resultBox.style.display = "block";

        if (opt.isMaster) {
          // ─── MASTER MOVE TRACK (Шкаф Мыслей) ───
          gameState.lumens = Math.min(100, gameState.lumens + 20);
          gameState.soulState = "RACKET";
          gameState.currencies.respect = Math.min(100, gameState.currencies.respect + 15);
          gameState.history.push({ nodeId: node.id, optionIdx: i, isMaster: true, pole: "RACKET" });
          gameState.activeDebateNode = null;
          updateState();

          const shadow = matrixNode.shadow || {
            question: "Точный удар мастера! В какой момент этот верный приём превращается в новую ловушку?",
            chips: ["Когда используешь его машинально", "Когда боишься живого риска"],
            reflection: "Мастер всегда сохраняет бдительность."
          };

          resultBox.innerHTML = `
            <div style="font-weight: 700; color: var(--accent-emerald); margin-bottom: 6px;">
              🎯 Точный ход мастера (+20 Lm Внимания):
            </div>
            <div style="color: var(--text-secondary); font-size: 13px; margin-bottom: 14px;">${opt.consequence}</div>
            
            <div style="background: #ffffff; border: 1px solid var(--shell-border); border-left: 3px solid var(--accent-amethyst); padding: 12px; border-radius: 0 8px 8px 0; margin-bottom: 14px;">
              <div style="font-size: 11px; font-weight: 800; color: var(--accent-amethyst); margin-bottom: 4px;">
                📜 ${node.revealTitle}
              </div>
              <div style="font-size: 12px; font-style: italic; color: var(--text-secondary); line-height: 1.5;">
                ${node.revealQuote}
              </div>
            </div>

            <!-- Shadow Challenge (Шкаф Мыслей) -->
            <div class="shadow-challenge-box">
              <div class="shadow-title">
                <span>👁️ ШКАФ МЫСЛЕЙ: ТЕНЕВАЯ СТОРОНА ПРИЁМА</span>
              </div>
              <div class="shadow-question-text">${shadow.question}</div>
              
              <div class="ai-quick-chips" id="shadow-chips">
                ${shadow.chips.map(chip => `
                  <button class="ai-quick-chip" type="button">${chip}</button>
                `).join("")}
              </div>

              <div id="shadow-reflection-box" style="display: none; margin-top: 10px; font-size: 12px; color: #4c1d95; font-style: italic; line-height: 1.5;"></div>
            </div>

            <button class="btn-insight-unlock" id="btn-resolve-step">
              ${idx === gameState.unlockedIndex ? "Зажечь световой луч к следующему кристаллу →" : "Закрыть"}
            </button>
          `;

          const shadowChips = resultBox.querySelectorAll("#shadow-chips .ai-quick-chip");
          const reflectionBox = resultBox.querySelector("#shadow-reflection-box");

          shadowChips.forEach(chip => {
            chip.addEventListener("click", () => {
              shadowChips.forEach(c => c.style.opacity = "0.6");
              chip.style.opacity = "1";
              chip.style.borderColor = "#7c3aed";
              reflectionBox.style.display = "block";
              reflectionBox.textContent = `Роман Минин: «${shadow.reflection}»`;
            });
          });

          resultBox.querySelector("#btn-resolve-step").addEventListener("click", () => {
            if (idx === gameState.unlockedIndex) {
              gameState.unlockedIndex++;
              updateState();
            }
            closeDrawer();
          });

        } else {
          // ─── TRAP TRACK (Мастерская Разбора и Споров с Романом Мининым) ───
          const trap = matrixNode.traps?.[i] || {
            pole: "STONE",
            poleLabel: "⚠️ Ментальная ловушка",
            lumenDelta: -15,
            currencyShift: { respect: -10, attention: 5 },
            opening: "Понимаю этот порыв... Но давай посмотрим, куда сейчас утекает твоё внимание?",
            chips: ["Хотелось доказать правоту", "Боялся уступить", "Слишком много эмоций"],
            resolution: "Держи ядро твердым, а внешнюю подачу упругой!"
          };

          // Apply state consequences
          gameState.lumens = Math.max(10, gameState.lumens + (trap.lumenDelta || -15));
          gameState.soulState = trap.pole || "STONE";
          if (trap.currencyShift) {
            Object.keys(trap.currencyShift).forEach(k => {
              gameState.currencies[k] = Math.max(5, Math.min(100, (gameState.currencies[k] || 50) + trap.currencyShift[k]));
            });
          }
          const memoryCallout = checkMemoryBridge(trap.pole);
          gameState.history.push({ nodeId: node.id, optionIdx: i, isMaster: false, pole: trap.pole });
          // Подсветка квеста в Матрице Суверенитета: активирован спор с автором
          gameState.activeDebateNode = node.id;
          if (!gameState.debatedNodeIds) gameState.debatedNodeIds = [];
          if (!gameState.debatedNodeIds.includes(node.id)) {
            gameState.debatedNodeIds.push(node.id);
          }
          updateState();

          const debatePoints = [...(DEBATE_COUNTER_POINTS[node.id] || [
            "Но ведь в реальной жизни художнику приходится выживать и соглашаться на компромиссы!",
            "Твоя философия звучит красиво в теории, но арт-рынок живёт по законам джунглей!",
            "Почему я не могу постоять за себя и хлопнуть дверью, если меня не ценят?"
          ])];

          let workshopMode = "debate"; // Default to debate mode so player can challenge
          let conversationHistory = [];
          let debateTurns = 0;

          resultBox.innerHTML = `
            <div class="minin-ai-workshop">
              <div class="workshop-head">
                <span class="badge-pole ${trap.pole === 'STONE' ? 'stone' : 'water'}">
                  ${trap.poleLabel}
                </span>
                <span class="badge-lumen-loss">${trap.lumenDelta || -15} Lm Внимания</span>
              </div>

              ${memoryCallout ? `
                <div class="memory-bridge-callout">
                  ${memoryCallout}
                </div>
              ` : ''}

              <!-- Mode Switcher Tabs -->
              <div class="workshop-mode-tabs">
                <button class="workshop-tab-btn active debate" id="tab-mode-debate" type="button">
                  🥊 Поспорить с автором
                </button>
                <button class="workshop-tab-btn" id="tab-mode-reflect" type="button">
                  💡 Признать ловушку
                </button>
              </div>

              <!-- Initial Roman statement -->
              <div class="ai-message">
                <div class="ai-avatar">РМ</div>
                <div class="ai-bubble">${trap.opening}</div>
              </div>

              <div id="ai-thread-box"></div>

              <!-- Quick Chips Container -->
              <div class="ai-quick-chips" id="trap-quick-chips">
                <div class="ai-chips-label" id="chips-section-label">Выберите аргумент спора с книгой:</div>
                <div id="chips-buttons-list" style="display: flex; flex-direction: column; gap: 6px;"></div>
              </div>

              <!-- User Input Row -->
              <div class="ai-input-row" id="debate-input-row">
                <input type="text" class="ai-input" id="user-custom-reply" placeholder="Напишите своё возражение Роману...">
                <button class="btn-ai-send" id="btn-submit-custom-reply" type="button">Возразить</button>
              </div>

              <!-- Action Bar to concede/accept insight at any time -->
              <div id="concede-box" style="margin-top: 4px;">
                <button class="btn-concede-insight" id="btn-concede-early" type="button">
                  💡 Принять правоту книги (+25 Lm) — Зажечь луч к кристаллу →
                </button>
              </div>

              <div id="resolution-container" style="display: none;"></div>
            </div>
          `;

          const tabDebate = resultBox.querySelector("#tab-mode-debate");
          const tabReflect = resultBox.querySelector("#tab-mode-reflect");
          const chipsLabel = resultBox.querySelector("#chips-section-label");
          const chipsList = resultBox.querySelector("#chips-buttons-list");
          const customInput = resultBox.querySelector("#user-custom-reply");
          const btnSubmit = resultBox.querySelector("#btn-submit-custom-reply");
          const threadBox = resultBox.querySelector("#ai-thread-box");
          const inputRow = resultBox.querySelector("#debate-input-row");
          const btnConcede = resultBox.querySelector("#btn-concede-early");
          const resolutionContainer = resultBox.querySelector("#resolution-container");

          function renderChips() {
            chipsList.innerHTML = "";
            const currentList = workshopMode === "debate" ? debatePoints : trap.chips;
            chipsLabel.textContent = workshopMode === "debate" 
              ? "Выберите аргумент спора с книгой:" 
              : "Ответьте мастеру (признание ловушки):";
            customInput.placeholder = workshopMode === "debate"
              ? "Напишите своё возражение книге..."
              : "Или напишите ответ своими словами...";
            btnSubmit.textContent = workshopMode === "debate" ? "Возразить" : "Ответить";

            currentList.forEach(txt => {
              const chip = document.createElement("button");
              chip.type = "button";
              chip.className = workshopMode === "debate" ? "ai-debate-chip" : "ai-quick-chip";
              chip.textContent = txt;
              chip.addEventListener("click", () => {
                handleUserDialogueReply(txt);
              });
              chipsList.appendChild(chip);
            });
          }

          tabDebate.addEventListener("click", () => {
            workshopMode = "debate";
            tabDebate.className = "workshop-tab-btn active debate";
            tabReflect.className = "workshop-tab-btn";
            renderChips();
          });

          tabReflect.addEventListener("click", () => {
            workshopMode = "reflect";
            tabReflect.className = "workshop-tab-btn active";
            tabDebate.className = "workshop-tab-btn";
            renderChips();
          });

          renderChips();

          async function handleUserDialogueReply(userText) {
            // Render user bubble
            const userMsgEl = document.createElement("div");
            userMsgEl.className = "user-bubble";
            userMsgEl.textContent = userText;
            threadBox.appendChild(userMsgEl);

            conversationHistory.push({ role: "user", content: userText });
            debateTurns++;
            customInput.value = "";

            // Typing indicator
            const typingEl = document.createElement("div");
            typingEl.className = "ai-message";
            typingEl.innerHTML = `
              <div class="ai-avatar">РМ</div>
              <div class="ai-bubble" style="color: var(--text-dim); font-style: italic;">
                ${workshopMode === "debate" ? "Автор книги отстаивает физику Внимания..." : "Автор книги обдумывает ваш ответ..."}
              </div>
            `;
            threadBox.appendChild(typingEl);
            threadBox.scrollTop = threadBox.scrollHeight;

            // Call Hybrid AI engine with full debate directive
            const aiReply = await askRomanMininAI(node, trap, userText, conversationHistory, workshopMode === "debate", debateTurns);
            typingEl.remove();

            const cleanedReply = cleanAuthorReply(aiReply);
            conversationHistory.push({ role: "assistant", content: cleanedReply });

            // Render Roman's reply
            const romanMsgEl = document.createElement("div");
            romanMsgEl.className = "ai-message";
            romanMsgEl.innerHTML = `
              <div class="ai-avatar">РМ</div>
              <div class="ai-bubble">${cleanedReply}</div>
            `;
            threadBox.appendChild(romanMsgEl);

            // Filter out used debate chip from list
            const idxInDebate = debatePoints.indexOf(userText);
            if (idxInDebate !== -1) debatePoints.splice(idxInDebate, 1);
            renderChips();

            // If debate has gone 2+ rounds, show encouragement banner ONCE
            if (debateTurns >= 2 && !threadBox.querySelector(".debate-round-banner")) {
              const banner = document.createElement("div");
              banner.className = "debate-round-banner";
              banner.innerHTML = `
                <span>🥊 Сильный раунд! Автор уважает твою стойкость в споре.</span>
              `;
              threadBox.appendChild(banner);
            }

            threadBox.scrollTop = threadBox.scrollHeight;
          }

          btnSubmit.addEventListener("click", () => {
            const val = customInput.value.trim();
            if (val) handleUserDialogueReply(val);
          });

          customInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
              const val = customInput.value.trim();
              if (val) handleUserDialogueReply(val);
            }
          });

          btnConcede.addEventListener("click", () => {
            btnConcede.style.display = "none";
            inputRow.style.display = "none";
            chipsList.parentElement.style.display = "none";
            if (tabDebate.parentElement) tabDebate.parentElement.style.display = "none";

            // If node requires 5-second Chrysalis Pause (Chapter 25)
            if (matrixNode.requiresChrysalisTimer) {
              const timerContainer = document.createElement("div");
              timerContainer.className = "chrysalis-timer-box";
              timerContainer.innerHTML = `
                <div style="font-size: 11px; font-weight: 800; letter-spacing: 1px; color: #c4b5fd;">
                  🛡️ ПРЕДОХРАНИТЕЛЬ КУКОЛКИ: 5 СЕКУНД ТИШИНЫ
                </div>
                <div class="chrysalis-digits" id="chrysalis-countdown">5</div>
                <div class="chrysalis-desc">
                  Уберите руки от экрана. Медленный длинный выдох. Почувствуйте тело перед следующим действием...
                </div>
              `;
              threadBox.appendChild(timerContainer);

              let timeLeft = 5;
              const timerDigits = timerContainer.querySelector("#chrysalis-countdown");
              const interval = setInterval(() => {
                timeLeft--;
                if (timerDigits) timerDigits.textContent = timeLeft;
                if (timeLeft <= 0) {
                  clearInterval(interval);
                  timerDigits.textContent = "✓";
                  timerDigits.style.color = "#34d399";
                  showFinalInsight();
                }
              }, 1000);
            } else {
              showFinalInsight();
            }
          });

          function showFinalInsight() {
            resolutionContainer.style.display = "block";
            resolutionContainer.innerHTML = `
              <div style="background: #ffffff; border: 1px solid var(--shell-border); border-left: 3px solid var(--accent-amethyst); padding: 12px; border-radius: 0 8px 8px 0; margin-top: 14px;">
                <div style="font-size: 11px; font-weight: 800; color: var(--accent-amethyst); margin-bottom: 4px;">
                  📜 ${node.revealTitle} • ГЛАГОЛ: ${matrixNode.verbRule || 'ПРУЖИНИТЬ'}
                </div>
                <div style="font-size: 12px; font-style: italic; color: var(--text-secondary); line-height: 1.5; margin-bottom: 8px;">
                  ${node.revealQuote}
                </div>
                <div style="font-size: 11px; color: #047857; font-weight: 700; background: #ecfdf5; padding: 6px 10px; border-radius: 6px;">
                  ⚡ 24-часовой план: ${matrixNode.ifThenPlan || ''}
                </div>
              </div>

              <button class="btn-insight-unlock" id="btn-claim-insight">
                🎯 Озарение принято (+25 Lm) — Зажечь луч к кристаллу →
              </button>
            `;

            resolutionContainer.querySelector("#btn-claim-insight").addEventListener("click", () => {
              gameState.lumens = Math.min(100, gameState.lumens + 25);
              gameState.soulState = "RACKET";
              gameState.activeDebateNode = null;
              if (idx === gameState.unlockedIndex) {
                gameState.unlockedIndex++;
              }
              updateState();
              closeDrawer();
            });
          }
        }
      });
    });
  }

  // Render Center Core Stage 7 (Крест 4-х Валют)
  function renderCoreInitiation() {
    const matrixCore = dialogueMatrix.node_core || {};
    const poles = matrixCore.poles || {
      respect: { name: "Север: УВАЖЕНИЕ", description: "Выращивается годами в тишине. Не ищет дешёвого внимания, но даёт чистую Любовь и Деньги." },
      love: { name: "Запад: ЛЮБОВЬ", description: "Высшая степень внимания к человеку и миру. Ей безразличны деньги." },
      money: { name: "Восток: ДЕНЬГИ", description: "Материальная опора и свобода манёвра. Привлекают Внимание." },
      attention: { name: "Юг: ВНИМАНИЕ", description: "Психическая кровь эпохи. Сиюминутный хайп приносит быстрые деньги, но сжигает авторитет." }
    };

    openDrawer("ВЕРШИНА • ГЛАВА 23", `
      <div style="text-align: center; padding: 10px 0;">
        <div style="font-size: 40px; margin-bottom: 6px;">✦</div>
        <h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 21px; font-weight: 800; color: var(--accent-amethyst); margin-bottom: 4px;">
          Крест 4-х Валют Творца
        </h2>
        <div style="font-size: 11px; font-weight: 700; color: var(--text-dim); margin-bottom: 16px;">
          Главы 2, 23, 30: Игра в Создателя и победа над временем
        </div>

        <p style="font-size: 12.5px; color: var(--text-secondary); line-height: 1.55; text-align: left; margin-bottom: 16px;">
          Все 6 граней шахты очищены! Теперь сделайте вашу главную ставку в Навигаторе Ментального Обменника. Противоположные полюса исключают друг друга в фокусе:
        </p>

        <!-- 4 Currencies Interactive Choice -->
        <div class="core-currencies-grid" id="core-currency-selector">
          <button class="currency-card-btn ${gameState.chosenNorthStar === 'respect' ? 'selected' : ''}" data-pole="respect" type="button">
            <div class="currency-card-name" style="color: #3b82f6;">⬆️ УВАЖЕНИЕ (Север)</div>
            <div class="currency-card-desc">${poles.respect.description}</div>
          </button>
          <button class="currency-card-btn ${gameState.chosenNorthStar === 'love' ? 'selected' : ''}" data-pole="love" type="button">
            <div class="currency-card-name" style="color: #ec4899;">⬅️ ЛЮБОВЬ (Запад)</div>
            <div class="currency-card-desc">${poles.love.description}</div>
          </button>
          <button class="currency-card-btn ${gameState.chosenNorthStar === 'money' ? 'selected' : ''}" data-pole="money" type="button">
            <div class="currency-card-name" style="color: #10b981;">➡️ ДЕНЬГИ (Восток)</div>
            <div class="currency-card-desc">${poles.money.description}</div>
          </button>
          <button class="currency-card-btn ${gameState.chosenNorthStar === 'attention' ? 'selected' : ''}" data-pole="attention" type="button">
            <div class="currency-card-name" style="color: #f59e0b;">⬇️ ВНИМАНИЕ (Юг)</div>
            <div class="currency-card-desc">${poles.attention.description}</div>
          </button>
        </div>

        <div id="northstar-insight-box" style="background: #f8fafc; border-left: 3px solid var(--accent-amethyst); padding: 12px 14px; border-radius: 0 8px 8px 0; font-size: 12px; font-style: italic; color: var(--text-secondary); text-align: left; line-height: 1.5; margin-bottom: 18px;">
          ${getNorthStarInsight(gameState.chosenNorthStar)}
        </div>

        <!-- 9:16 Collectible Keycard Artifact -->
        <div class="keycard-916-artifact" id="keycard-artifact">
          <div class="keycard-eyebrow">ELUMA • ВИТРАЖ ВНИМАНИЯ 2026</div>
          <div class="keycard-medallion">👑</div>
          <div class="keycard-title">ВИКТРИНА МАСТЕРА</div>
          <div style="font-size: 12px; color: #a78bfa; margin-bottom: 6px; font-weight: 700;">
            ${gameState.soulState === 'RACKET' ? '🎾 Упругое Ядро Ракетки' : '💎 Закалённый Дух Шахтёра'} • ⚡ ${Math.round(gameState.lumens)}/100 Lm
          </div>
          <div class="keycard-verbs">
            ПРУЖИНИТЬ • ТОРМОЗИТЬ • БЕРЕЧЬ • ДЫШАТЬ • ФИЛЬТРОВАТЬ • ОТСЕКАТЬ
          </div>

          <div class="keycard-contract-box">
            <div style="font-size: 10px; font-weight: 800; color: #facc15; margin-bottom: 4px; letter-spacing: 0.5px;">
              ⚡ 24-ЧАСОВОЙ КОНТРАКТ ДЕЙСТВИЯ:
            </div>
            <div>
              «Когда ядовитое "Зачем?" парализует волю — я отвечу действием Мастера: "Потому что мне чертовски интересно играть в Создателя!" и сделаю один точный шаг в своей работе.»
            </div>
          </div>

          <div style="font-size: 10px; color: #94a3b8; font-family: 'Space Grotesk', sans-serif;">
            ПЕЧАТЬ РОМАНА МИНИНА • ТРАНСМОНУМЕНТАЛИЗМ
          </div>
        </div>

        <button class="btn-play-all" id="btn-copy-keycard" type="button" style="margin-bottom: 12px;">
          📋 Скопировать Паспорт Творца в буфер
        </button>

        <!-- Author Feedback Capsule (ADR-003) -->
        <div class="author-feedback-box">
          <div style="font-size: 12px; font-weight: 800; color: var(--text-primary); margin-bottom: 4px; text-align: left;">
            📬 Капсула отклика для Романа Минина (ADR-003):
          </div>
          <div style="font-size: 11.5px; color: var(--text-secondary); line-height: 1.4; text-align: left;">
            Какая глава или закон книги попали сегодня точнее всего в вашу жизнь? Ваш отклик будет передан автору:
          </div>
          <textarea class="author-feedback-textarea" id="author-feedback-input" placeholder="Напишите пару слов Роману (по желанию)..."></textarea>
          <button class="btn-ai-send" id="btn-send-author-feedback" type="button" style="width: 100%; padding: 10px;">
            Отправить отклик автору книги ✦
          </button>
          <div id="feedback-sent-msg" style="display: none; color: #059669; font-size: 11.5px; font-weight: 700; margin-top: 8px;">
            ✓ Спасибо! Отклик сохранён и передан в лабораторию автора.
          </div>
        </div>
      </div>
    `);

    // Currency selector logic
    const currencyBtns = drawerContent.querySelectorAll(".currency-card-btn");
    const insightBox = drawerContent.querySelector("#northstar-insight-box");

    currencyBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        currencyBtns.forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        const pole = btn.dataset.pole;
        gameState.chosenNorthStar = pole;
        insightBox.textContent = getNorthStarInsight(pole);
        saveGameState();
      });
    });

    // Copy Keycard to clipboard
    const btnCopy = drawerContent.querySelector("#btn-copy-keycard");
    if (btnCopy) {
      btnCopy.addEventListener("click", () => {
        const text = `✦ ВИКТРИНА МАСТЕРА: ВНИМАНИЕ ДЛЯ ХУДОЖНИКА (Роман Минин)\n⚡ Энергия: ${Math.round(gameState.lumens)}/100 Lm\n💎 Статус: ${gameState.soulState === 'RACKET' ? 'Упругое Ядро Ракетки' : 'Закалённый Дух'}\n🧭 Главная ставка: ${gameState.chosenNorthStar.toUpperCase()}\n📜 6 Глаголов: ПРУЖИНИТЬ • ТОРМОЗИТЬ • БЕРЕЧЬ • ДЫШАТЬ • ФИЛЬТРОВАТЬ • ОТСЕКАТЬ\n⚡ Контракт: «Потому что мне чертовски интересно играть в Создателя!»`;
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text).then(() => {
            alert("Паспорт Творца скопирован в буфер обмена!");
          }).catch(() => {
            alert("Паспорт Творца готов!");
          });
        }
      });
    }

    // Author feedback submit
    const btnFeedback = drawerContent.querySelector("#btn-send-author-feedback");
    const feedbackInput = drawerContent.querySelector("#author-feedback-input");
    const feedbackSentMsg = drawerContent.querySelector("#feedback-sent-msg");

    if (btnFeedback && feedbackInput && feedbackSentMsg) {
      btnFeedback.addEventListener("click", () => {
        const txt = feedbackInput.value.trim();
        if (txt) {
          try {
            const storedFeedbacks = JSON.parse(localStorage.getItem("eluma_minin_author_feedback_v1") || "[]");
            storedFeedbacks.push({ text: txt, date: new Date().toISOString(), lumens: gameState.lumens });
            localStorage.setItem("eluma_minin_author_feedback_v1", JSON.stringify(storedFeedbacks));
          } catch (e) {
            console.warn("Failed to store feedback locally", e);
          }
        }
        btnFeedback.style.display = "none";
        feedbackInput.style.display = "none";
        feedbackSentMsg.style.display = "block";
      });
    }
  }

  function getNorthStarInsight(pole) {
    if (pole === "respect") {
      return "«Выбрав целью УВАЖЕНИЕ (Север), художник выращивает его годами у мольберта в тишине. Оно привлекает Любовь истинных ценителей и устойчивые Деньги, но освобождает от судорожного шума и дешёвого хайпа.»";
    }
    if (pole === "love") {
      return "«Выбрав целью ЛЮБОВЬ (Запад), вы служите человеку и пространству. Ей безразличны деньги; подлинное признание приходит само как резонанс созидания.»";
    }
    if (pole === "money") {
      return "«Выбрав целью ДЕНЬГИ (Восток), помните: капитал даёт свободу и манёвр для покупки материалов и мастерской, но не заменит тепла подлинной любви зрителя.»";
    }
    return "«Выбрав целью ВНИМАНИЕ (Юг), берегите границы: шум толпы привлекает спонсоров, но сжигает авторитет Севера, если вы кормите людей дешёвым хайпом.»";
  }

  // Edge card Action Button
  if (btnFocusStep) {
    btnFocusStep.addEventListener("click", () => {
      const target = nodes[gameState.unlockedIndex] || nodes[6];
      openNodeModal(target, gameState.unlockedIndex);
    });
  }

  // Hex matrix click
  hexGems.forEach((gem, idx) => {
    gem.addEventListener("click", () => {
      if (idx <= gameState.unlockedIndex) {
        openNodeModal(nodes[idx], idx);
      }
    });
  });

  // Reset Game Button
  if (btnResetGame) {
    btnResetGame.addEventListener("click", () => {
      if (confirm("Сбросить текущее восхождение в штольне и начать заново?")) {
        gameState = { ...defaultGameState };
        saveGameState();
        updateState();
        closeDrawer();
      }
    });
  }

  // AI Modal Handlers
  if (btnAiSettings && modalAiSettings) {
    btnAiSettings.addEventListener("click", () => {
      selectAiProvider.value = aiConfig.provider;
      inputAiKey.value = aiConfig.key || "";
      inputAiModel.value = aiConfig.model || "openai/gpt-oss-120b";
      toggleAiInputs();
      modalAiSettings.style.display = "flex";
      updateObserverAttention(true);
    });
  }

  if (btnCloseAiModal && modalAiSettings) {
    btnCloseAiModal.addEventListener("click", () => {
      modalAiSettings.style.display = "none";
      updateObserverAttention(false);
    });
  }

  if (selectAiProvider) {
    selectAiProvider.addEventListener("change", toggleAiInputs);
  }

  function toggleAiInputs() {
    const prov = selectAiProvider.value;
    if (prov === "scripted") {
      if (apiKeyGroup) apiKeyGroup.style.display = "none";
      if (modelNameGroup) modelNameGroup.style.display = "none";
    } else {
      if (apiKeyGroup) apiKeyGroup.style.display = "block";
      if (modelNameGroup) modelNameGroup.style.display = "block";
      if (prov === "groq" && !inputAiModel.value) inputAiModel.value = "openai/gpt-oss-120b";
      if (prov === "gemini" && !inputAiModel.value) inputAiModel.value = "gemini-2.5-flash";
      if (prov === "openai" && !inputAiModel.value) inputAiModel.value = "gpt-4o-mini";
    }
  }

  if (btnSaveAiConfig && modalAiSettings) {
    btnSaveAiConfig.addEventListener("click", () => {
      aiConfig.provider = selectAiProvider.value;
      aiConfig.key = inputAiKey.value.trim();
      aiConfig.model = inputAiModel.value.trim() || (aiConfig.provider === "groq" ? "openai/gpt-oss-120b" : "gemini-2.5-flash");
      saveAiConfig();
      updateState();
      modalAiSettings.style.display = "none";
      updateObserverAttention(false);
    });
  }

  if (btnResetAiConfig && modalAiSettings) {
    btnResetAiConfig.addEventListener("click", () => {
      aiConfig = { ...defaultAiConfig };
      saveAiConfig();
      selectAiProvider.value = aiConfig.provider;
      inputAiKey.value = aiConfig.key;
      inputAiModel.value = aiConfig.model;
      toggleAiInputs();
      updateState();
      modalAiSettings.style.display = "none";
      updateObserverAttention(false);
    });
  }

  // Toggle Editor Mode from AI Settings Modal
  const btnToggleEditorModeModal = document.getElementById("btn-toggle-editor-mode-modal");
  if (btnToggleEditorModeModal) {
    const updateEditorBtnLabel = () => {
      btnToggleEditorModeModal.textContent = isEditorMode 
        ? "✕ Выключить режим редактора квестов" 
        : "✏️ Включить режим редактора квестов";
      btnToggleEditorModeModal.style.color = isEditorMode ? "#e11d48" : "#7c3aed";
    };
    updateEditorBtnLabel();

    btnToggleEditorModeModal.addEventListener("click", () => {
      isEditorMode = !isEditorMode;
      if (isEditorMode) {
        localStorage.setItem(EDITOR_MODE_KEY, "1");
        renderEditorBanner();
        showToast("✏️ Режим редактора квестов включён! Теперь у каждого квеста доступна кнопка 'Изменить квест'.");
      } else {
        localStorage.removeItem(EDITOR_MODE_KEY);
        const b = document.getElementById("editor-floating-banner");
        if (b) b.remove();
        showToast("Режим редактора выключен.");
      }
      updateEditorBtnLabel();
      modalAiSettings.style.display = "none";
      updateObserverAttention(false);
    });
  }

  // Observer manual minimize/expand interactions
  if (btnMinimizeMiner) {
    btnMinimizeMiner.addEventListener("click", (e) => {
      e.stopPropagation();
      isObserverManuallyMinimized = true;
      minerHudBubble.classList.remove("idle-float");
      minerHudBubble.classList.add("retracted");
      if (btnExpandMiner) {
        btnExpandMiner.style.display = "inline-flex";
        requestAnimationFrame(() => {
          btnExpandMiner.classList.add("visible");
        });
      }
    });
  }

  if (btnExpandMiner) {
    btnExpandMiner.addEventListener("click", () => {
      isObserverManuallyMinimized = false;
      minerHudBubble.classList.remove("retracted");
      minerHudBubble.classList.remove("hidden-by-drawer");
      btnExpandMiner.classList.remove("visible");
      setTimeout(() => {
        btnExpandMiner.style.display = "none";
        minerHudBubble.classList.add("idle-float");
      }, 350);
    });
  }

  // Global key bindings: Escape closes active overlays and restores observer
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (modalAiSettings && modalAiSettings.style.display === "flex") {
        modalAiSettings.style.display = "none";
        updateObserverAttention(false);
      } else if (playerDrawer && playerDrawer.classList.contains("active")) {
        closeDrawer();
      }
    }
  });

  // Initial State
  updateState();
});
