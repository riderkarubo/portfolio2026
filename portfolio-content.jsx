
// ============================================================
// Portfolio — Content & i18n
// 読み込み順: portfolio-content.jsx → portfolio-components.jsx
// このファイルはコンテンツと文言のみを持つ。表示ロジックは components 側。
// ============================================================

const LANG_STORAGE_KEY = 'portfolio-lang';

function detectInitialLang() {
  try {
    const q = new URLSearchParams(window.location.search).get('lang');
    if (q === 'en' || q === 'ja') return q;
    const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (saved === 'en' || saved === 'ja') return saved;
    const nav = (window.navigator.language || 'ja').toLowerCase();
    return nav.startsWith('ja') ? 'ja' : 'en';
  } catch (e) {
    return 'ja';
  }
}

const LangContext = React.createContext({ lang: 'ja', setLang: () => {} });

function LangProvider({ children }) {
  const [lang, setLangState] = React.useState(detectInitialLang);

  const setLang = React.useCallback((next) => {
    setLangState(next);
    try { window.localStorage.setItem(LANG_STORAGE_KEY, next); } catch (e) {}
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', next);
      window.history.replaceState({}, '', url);
    } catch (e) {}
  }, []);

  React.useEffect(() => {
    const ui = lang === 'en' ? UI_EN : UI_JA;
    document.documentElement.lang = lang;
    document.title = ui.meta.title;
    const set = (sel, attr, val) => {
      const el = document.querySelector(sel);
      if (el) el.setAttribute(attr, val);
    };
    set('meta[name="description"]', 'content', ui.meta.description);
    set('meta[property="og:title"]', 'content', ui.meta.title);
    set('meta[property="og:description"]', 'content', ui.meta.description);
    set('meta[property="og:locale"]', 'content', lang === 'en' ? 'en_US' : 'ja_JP');
    set('meta[name="twitter:title"]', 'content', ui.meta.title);
    set('meta[name="twitter:description"]', 'content', ui.meta.description);
  }, [lang]);

  const value = React.useMemo(() => ({ lang, setLang }), [lang, setLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

function useLang() {return React.useContext(LangContext);}
function useUI() {return useLang().lang === 'en' ? UI_EN : UI_JA;}
function useData() {return useLang().lang === 'en' ? DATA_EN : DATA_JA;}

// ── UI STRINGS ──────────────────────────────────────────────

const UI_JA = {
  meta: {
    title: '石島慎也 ポートフォリオ2026 [v.B]',
    description: '石島慎也のポートフォリオ2026。テレビ制作からライブ配信・ライブコマースまで、15年以上にわたる映像プロデューサーの実績・経歴・代表作をまとめています。'
  },
  // Nav / SideNav は言語ごとにセクション構成が違うため、ラベルと遷移先をセットで持つ。
  // sideNav は必ず DOM の出現順に並べる（スクロールスパイが順序に依存するため）。
  nav: [
  { label: 'Profile', href: '#about' },
  { label: 'Career', href: '#statement' },
  { label: 'Skills', href: '#skills' },
  { label: 'Private', href: '#private' }],

  sideNav: [
  { id: 'hero', label: 'Top' },
  { id: 'about', label: 'Profile' },
  { id: 'statement', label: 'Career' },
  { id: 'skills', label: 'Skills' },
  { id: 'private', label: 'Private' }],

  sideNavAria: 'セクションナビゲーション',
  // パネル実測幅115px（右端135px）。本文左端が155pxを超えるのに必要な幅は約1510px
  sideNavMinWidth: 1520,
  langToggle: { to: 'EN', label: '英語版に切り替え' },
  hero: { greetLead: 'はじめまして、', greetTail: 'と申します。' },
  statement: { line1: 'クリエイティブと事業成長、二刀流で挑む', line2: 'コンテンツビジネスプロデューサー' },
  about: {
    photoAlt: '石島慎也',
    hobbies: '趣味',
    specialties: '特技',
    facts: [
    { label: '現職', value: 'Firework Japan株式会社\nDirector of Creative Strategy / 事業責任者' },
    { label: 'キャリア', value: '映像制作 16年目（2011年新卒）' }]

  },
  career: {
    heading: 'キャリア', clients: 'SUPPORTING CLIENTS（一部）', worksUnit: '件', castOther: '/ 他',
    // work.urlKind に対応するラベル。url があるカードだけ表示される
    linkKind: { video: '動画を見る', channel: '公式チャンネル', news: '公式ニュース', page: '公式ページ' },
    linkLegend: '↗ の付いた作品はクリックで公式ページ・チャンネルをご覧いただけます'
  },
  skills: { heading: 'スキル・経験', certAlt: 'DMM 生成AI CAMP 認定証' },
  privateWorks: { officialDefault: '公式ページ' },
  thanks: { message: '最後までご覧いただきありがとうございました。' },
  footer: { copyright: '© 2026 石島慎也 Shinya Ishijima' },
  next: { originCaption: 'キャリアの北極星' }
};

const UI_EN = {
  meta: {
    title: 'Shinya Ishijima — Creative Director / Portfolio 2026',
    description: 'Creative leader with 16 years across TV production, live streaming, and video commerce. Brand and IP campaigns for Starbucks, Samsung, MUJI, Star Wars and more. Scaled a creative business 3.6x year over year with a +15% gross margin improvement.'
  },
  nav: [
  { label: 'Work', href: '#selected-work' },
  { label: 'Experience', href: '#career' },
  { label: 'Leadership', href: '#skills' },
  { label: 'About', href: '#about' }],

  sideNav: [
  { id: 'hero', label: 'Top' },
  { id: 'selected-work', label: 'Work' },
  { id: 'career', label: 'Experience' },
  { id: 'skills', label: 'Leadership' },
  { id: 'about', label: 'About' }],

  sideNavAria: 'Section navigation',
  // 英語はラベルが長くパネル実測幅142px（右端162px）。必要な幅は約1564px
  sideNavMinWidth: 1580,
  langToggle: { to: 'JA', label: 'Switch to Japanese' },
  hero: { greetLead: 'Creative Director,', greetTail: '' },
  statement: { line1: 'Creative craft and business ownership,', line2: 'run as one discipline.' },
  about: {
    photoAlt: 'Shinya Ishijima',
    hobbies: 'Off the clock',
    specialties: 'Also good at',
    facts: [
    { label: 'Current role', value: 'Firework Japan\nCreative Director / Head of Creative Team' },
    { label: 'Experience', value: '16 years in video production\n(since 2011)' }]

  },
  career: {
    heading: 'Experience', clients: 'SELECTED CLIENTS', worksUnit: 'projects', castOther: '/ and others',
    linkKind: { video: 'Watch', channel: 'Official channel', news: 'Announcement', page: 'Official page' },
    linkLegend: '↗ marks a card you can click through to its official page or channel'
  },
  skills: { heading: 'Creative Leadership & AI', certAlt: 'DMM Generative AI CAMP certificate' },
  selectedWork: { linkLegend: '↗ marks a card you can click through to its official page or channel' },
  privateWorks: { officialDefault: 'Official page' },
  thanks: { message: 'Thank you for taking the time to read through my work.' },
  footer: { copyright: '© 2026 Shinya Ishijima' },
  next: { originCaption: 'The north star of my career' }
};

// ── CONTENT ─────────────────────────────────────────────────

const DATA_JA = {
  name: '石島 慎也',
  nameEn: 'Shinya Ishijima',
  title: 'Director of Creative Strategy / 事業責任者',
  tagline: '映像で、人を動かす。',
  taglineSub: 'テレビ制作から始まり、ライブ配信・ライブコマースまで。\n16年間、コンテンツの最前線に立ち続ける映像プロデューサー。',

  profile: {
    target: 'プロデューサー職（映像・ライブ配信）',
    bio: '日本大学芸術学部を卒業後、テレビ番組制作会社に入社。バラエティ番組のADやディレクターを務める。\n2015年より動画系ベンチャーの株式会社Candeeに参画。ライブ配信の番組制作プロデューサーとして、自社コンテンツや広告案件、自社アプリのライブコマース事業を牽引。\nその後、ワーナーミュージック・ジャパンでのアーティストのYouTube番組制作や、BitStarでの大手企業のYouTubeチャンネル運用・コンサルティングを経験。\n2021年にFirework Japanへ入社し、動画マーケティング（ショート動画・ライブ配信）の戦略設計からコンテンツ制作、コンサルティングまで幅広く従事。\n2024年、Creative Teamの事業責任者に就任。',
    hobbies: [
    { emoji: '♨️', label: 'サウナ' },
    { emoji: '🎤', label: 'カラオケ' },
    { emoji: '🎹', label: 'DTM' },
    { emoji: '⚽', label: 'サッカー観戦' },
    { emoji: '🎸', label: '音楽ライブ鑑賞' }],

    skills_personal: [
    { emoji: '🎤', label: 'カラオケ' },
    { emoji: '🎾', label: 'テニス' },
    { emoji: '📹', label: '動画編集' }],


    tags: [
    '#事業責任者', '#クリエイティブディレクター', '#プロデューサー', '#ディレクター',
    '#番組制作', '#ライブ配信', '#ショート動画', '#動画コマース', '#ライブコマース',
    '#動画編集', '#生成AI活用', '#ビジネス英語（B1+・向上中）']

  },

  career: [
  {
    id: 'works',
    period: '2011.4 — 2015.8',
    company: '株式会社 ザ・ワークス',
    role: 'AD / ディレクター',
    category: 'テレビ制作',
    color: '#4ea8de',
    team: '正社員',
    logo: 'assets/logos/the-works.webp',
    logoFit: 'contain',
    logoBg: '#ffffff',
    highlights: [
    '日テレ系・TBS系・テレビ東京・TOKYO MX など複数局を担当',
    '深夜バラエティ番組でディレクターデビュー',
    '社内MVP「ザ・ワークス賞」受賞'],

    desc: 'テレビ番組制作会社にてAD・ディレクターとして従事。民放各局のバラエティ番組を担当。AD3年目で深夜番組においてディレクターデビューを果たし、社内MVP「ザ・ワークス賞」を受賞。',
    works: [
    { title: '謎解きバトル TORE!', platform: '日テレ系', role: 'AD', thumb: 'assets/works/tore.png' },
    { title: 'ショーバト！', platform: '日テレ系', role: 'AD', thumb: 'assets/works/sho-bato.jpeg' },
    { title: 'リアルロボットバトル日本一決定戦', platform: '日テレ系', role: 'ディレクター', thumb: 'assets/works/robot-battle.png' },
    { title: 'それゆけ！ゲームパンサー！', platform: '日テレ系', role: 'AD/ディレクター', thumb: 'assets/works/game-panser.webp' },
    { title: 'スッキリ', platform: '日テレ系', role: 'AD', thumb: 'assets/works/sukkiri.jpeg' },
    { title: '池上彰の地震特番', platform: 'TBS系', role: 'AD', thumb: 'assets/works/ikegami.webp' },
    { title: 'おしかけスピリチュアル', platform: 'テレビ東京', role: 'AD / ディレクター', thumb: 'assets/works/oshikake.webp' },
    { title: 'バナナ炎', platform: 'TOKYO MX', role: 'ディレクター', thumb: 'assets/works/banana-fire.jpeg' }]

  },
  {
    id: 'candee',
    period: '2015.9 — 2018.7',
    company: '株式会社 Candee',
    role: 'プロデューサー / ディレクター',
    category: 'ライブ配信・動画',
    color: '#38bdf8',
    team: '正社員',
    logo: 'assets/logos/candee.webp',
    logoFit: 'contain',
    logoBg: '#ffffff',
    highlights: [
    'LINE LIVE 公式・自社チャンネルの番組を企画〜制作まで統括',
    'Jリーグルヴァンカップ Facebook Live — 3社協業プロジェクト',
    'ライブコマースアプリ「LiveShop!」をゼロから立ち上げ、最大月間30〜60本を制作',
    '最大13名のチームをマネジメント'],

    desc: 'スマホ特化の動画・ライブ配信ベンチャーにてプロデューサーとして参画。LINE LIVEやFacebook Liveなどで各公式・自社チャンネル番組、広告案件、ライブコマースアプリ「LiveShop!」の立ち上げまで幅広く担当。',
    works: [
    { title: 'らいぶおやすみ！添い寝観察天気予報', platform: 'LINE LIVE', role: 'プロデューサー', thumb: 'assets/works/konno.webp' },
    { title: '今野杏南と１万人の彼氏', platform: 'LINE LIVE', role: 'プロデューサー', thumb: 'assets/works/okubo.webp' },
    { title: '大久保佳代子のお悩み相談', platform: 'LINE LIVE', role: 'プロデューサー' },
    { title: 'おじさんモンスターバトル「おじモン」', platform: 'LINE LIVE', role: 'プロデューサー / 総合演出', cast: 'トータルテンボス、タケト', thumb: 'assets/works/line-live-studio.webp' },
    { title: 'スター・ウォーズ イベント特番', platform: 'LINE LIVE（広告）', role: 'プロデューサー', thumb: 'assets/works/starwars.png' },
    { title: '映画「バイオハザードファイナル」配信特番', platform: 'LINE LIVE（広告）', role: 'プロデューサー', cast: 'ミラ・ジョボビッチ', thumb: 'assets/works/biohazard.webp' },
    { title: 'Jリーグルヴァンカップ チャンピオンシップ Live', platform: 'Facebook Live', role: 'プロデューサー', thumb: 'assets/works/jleague.webp' },
    { title: 'Sportsnavi「スポレー」', platform: 'スマホ動画', role: 'プロデューサー', thumb: 'assets/works/spore.webp' },
    { title: 'サンリオ「シンカイゾク」PR動画', platform: 'スマホ動画', role: 'プロデューサー', thumb: 'assets/works/sanrio.webp' },
    { title: 'ザッパラス占い動画', platform: 'スマホ動画', role: 'プロデューサー', thumb: 'assets/works/zappallas.webp' },
    { title: '＆GIRLS（ASOBISYSTEMと協業）', platform: 'LiveShop!', role: 'プロデューサー', thumb: 'assets/works/and-girls.webp' },
    { title: '監禁男子〜24時間監禁Live〜', platform: 'LiveShop!', role: 'プロデューサー / 総合演出', thumb: 'assets/works/kankin-danshi.webp', thumbFit: 'contain', thumbBg: '#0d1b2a' }]

  },
  {
    id: 'warner',
    period: '2018.8 — 2019.1',
    company: '株式会社 ワーナーミュージック・ジャパン',
    role: 'プロデューサー / ディレクター',
    category: '音楽 × YouTube',
    color: '#a78bfa',
    team: '正社員',
    logo: 'assets/logos/warner.webp',
    logoFit: 'contain',
    logoBg: '#ffffff',
    highlights: [
    'アーティスト主導のオリジナルYouTube番組をワンオペで制作',
    '企画立案からプロデュース・撮影・編集まで全工程を1名で完結'],

    desc: 'アーティストのオリジナルYouTube番組シリーズを1名で企画・制作。プロデュースから撮影・編集まで全工程を担当し、アーティストの世界観に寄り添ったコンテンツを継続制作。',
    works: [
    { title: 'ちゃんみな「PRINCESS PROJECT」', platform: 'YouTube', role: '企画・撮影・編集（1名）', thumb: 'assets/works/chanmina.webp?v=2', url: 'https://www.youtube.com/channel/UConh1BwKagscq7EAP2Vng-g', urlKind: 'channel' }]

  },
  {
    id: 'freelance',
    period: '2019.2 — 2019.11',
    company: 'フリーランス 動画クリエイター',
    role: 'プロデューサー / ディレクター',
    category: '動画制作・コンサル',
    color: '#fb923c',
    team: 'フリーランス',
    logo: 'assets/logos/freelance.webp',
    logoFit: 'cover',
    highlights: [
    '株式会社東北新社、ギークピクチュアズ、シロップ、Gunosy などと取引',
    '企業・メディア向け動画制作',
    'YouTubeチャンネルの企画提案・コンサルティング'],

    desc: '企業やメディアでの動画制作、YouTubeの企画提案・コンサルティングを担当。東北新社、ギークピクチュアズ、シロップ、Gunosyなど複数社と取引。',
    works: [
    { title: '企業・メディア向け動画制作', platform: '各種', role: 'ディレクター', thumb: 'assets/works/freelance-video.webp' },
    { title: 'YouTubeチャンネル企画提案・コンサル', platform: 'YouTube', role: 'コンサルタント' }]

  },
  {
    id: 'bitstar',
    period: '2019.12 — 2021.10',
    company: '株式会社 BitStar',
    role: 'プロデューサー / ディレクター',
    category: 'YouTube / 生配信',
    color: '#facc15',
    team: '正社員',
    logo: 'assets/logos/bitstar.webp',
    logoFit: 'cover',
    highlights: [
    '17Live・バンダイナムコ・タカラトミーなど大手企業の番組・YouTubeChを担当',
    'ゲームアプリ公式生配信の企画〜制作〜運用・分析まで一貫担当',
    'クリエイタープロダクション・インフルエンサーマーケティング事業に従事'],

    desc: 'クリエイタープロダクション兼インフルエンサーマーケティング会社にてプロデューサーとして従事。大手企業のYouTubeチャンネル運用・オリジナル番組制作を担当。',
    works: [
    { title: '17Live 公式番組（バラエティ中心）', platform: '17Live', role: 'プロデューサー', thumb: 'assets/works/17live.png', url: 'https://jp.17.live/', urlKind: 'page' },
    { title: 'バンダイナムコ「アイドルマスターch」オリジナル番組', platform: 'YouTube', role: 'プロデューサー', url: 'https://www.youtube.com/@imas-official', urlKind: 'channel', thumb: 'assets/works/idolmaster.webp' },
    { title: 'Rise of Kingdoms 公式生配信', platform: 'YouTube/生配信', role: 'プロデューサー', thumb: 'assets/works/rise-of-kingdoms.webp' },
    { title: 'タカラトミー リカちゃん公式CH', platform: 'YouTube', role: 'プロデューサー', url: 'https://www.youtube.com/@Licca-chan_official', urlKind: 'channel', thumb: 'assets/works/rika-chan.jpeg', thumbFit: 'contain', thumbBg: '#ffffff' },
    { title: 'ニューギン公式チャンネル', platform: 'YouTube', role: 'プロデューサー', url: 'https://www.youtube.com/channel/UCxKotcGd9oH5uyJECN-ZRnw', urlKind: 'channel', thumb: 'assets/works/newgin.webp' },
    { title: '映画「賭ケグルイ」番宣動画', platform: 'YouTube', role: 'プロデューサー', thumb: 'assets/works/kakegurui.webp' }]

  },
  {
    id: 'firework',
    period: '2021.11 — 現在',
    company: 'Firework Japan 株式会社',
    role: 'Director of Creative Strategy / 事業責任者',
    category: 'ライブコマース・動画コマース',
    color: '#4ade80',
    team: '正社員',
    logo: 'assets/logos/firework.webp',
    logoFit: 'contain',
    logoBg: '#000000',
    logoPadding: '0px',
    highlights: [
    'ヤマダデンキ・マツキヨココカラ・Starbucks Japan・Samsung Japan ほか大手リテール／グローバルブランドを担当',
    'ライブ配信・ショート動画によるコンサルティング・制作・内製化支援',
    '2024年〜Creative Team事業責任者として、クリエイティブに加え事業計画・営業・売上責任を担当',
    '売上を前年比3.6倍に拡大、粗利+15%、NewBiz構成比33%を実現',
    'AI活用により同時並行で運用するプロジェクト数を平均5.3件→10.2件に拡大'],

    desc: 'ライブ配信・ショート動画を活用した「動画コマース」領域でCreative Strategistとして従事。2024年にCreative Teamの事業責任者に就任後、事業計画・営業・クリエイティブを統括し、売上を前年比3.6倍に拡大。AI活用による業務効率化・新サービス（コンサル・内製化支援）の開発・制作パートナーとの単価交渉により、粗利+15%も同時に実現。',

    // IMPACT — 数値ハイライト（CareerDetailで描画）
    impact: {
      caption: '2024 → 2025 事業成長',
      items: [
      { value: '×3.6', label: '売上成長', sub: '前年比' },
      { value: '+15%', label: '粗利改善', sub: '粗利率' },
      { value: '33%', label: 'NewBiz構成比', sub: 'Japan Team 全体売上における比率' }]

    },
    clients: [
    { name: 'Starbucks Japan', logo: 'assets/clients/starbucks.png', url: 'https://www.starbucks.co.jp/onlinestore/live/' },
    { name: 'Samsung Japan', logo: 'assets/clients/samsung.webp', url: 'https://www.samsung.com/jp/offer/samsung-live-shop/' },
    { name: 'マツキヨココカラ&カンパニー', logo: 'assets/clients/matsukiyo.webp' },
    { name: 'ヤマダデンキ', logo: 'assets/clients/yamada.webp' },
    { name: 'イオンリテール', logo: 'assets/clients/aeon.png' },
    { name: '無印良品', logo: 'assets/clients/muji.png' }],

    works: []
  }],


  stats: [
  { num: 16, suffix: '年目', label: '映像制作キャリア' },
  { num: 6, suffix: '社', label: 'TV → Web → Music\n→ LiveCommerce' },
  { num: 3.6, suffix: '倍', label: '現職 売上成長\n(前年比・FY24→FY25)' },
  { num: 15, suffix: '%', label: '現職 粗利改善\n(同期間)' }],


  skills: {
    'プロジェクトマネジメント': ['企画立案', 'プロデュース', 'チームマネジメント', 'クライアントワーク', '番組制作', 'ライブ配信演出', '台本制作', 'ディレクション', '撮影・編集', 'キャスティング'],
    '事業・グロース': ['事業計画策定', '予算管理', '予実管理', 'KPI設計', 'P/L管理', 'マネタイズ設計', 'グロース戦略', 'データドリブン施策'],
    'ツール・技術': ['Premiere Pro', 'Photoshop', 'OBS Studio', 'Google Apps Script', 'Word / Excel / PowerPoint'],
    '資格・その他': ['普通自動車免許', '英語 B1+（CEFR）・ビジネス英語習得中', 'DMM生成AI CAMP スキル習得認定(2026.1)'],
    '生成AIツール': ['Claude Code (Cowork)', 'Gemini', 'NotebookLM', 'AI Studio']
  },

  aiImpact: {
    caption: '大手企業・大型提案を主戦場に、AIをワークフロー統合し業務再設計まで踏み込む',
    items: [
    { value: '15h → 2h', label: '配信分析の効率化', sub: '大手リテール月次配信レポート。delivery-analysisスキル化で再利用' },
    { value: '30h → 8h', label: '大型提案資料の生成', sub: '大手企業向け提案・年次報告レベル。リサーチ→構成→HTML/スライドまでAI並走' },
    { value: '5.3件 → 10.2件', label: '同時並行プロジェクト数', sub: '月平均（AI前→Claude期・+92%）' },
    { value: 'DMM認定', label: '生成AI CAMP スキル習得認定', sub: '2026.1取得 / 修了証あり' }],

    certificate: {
      pdf: 'assets/certificates/dmm-generative-ai-camp-certificate.pdf',
      image: 'assets/certificates/dmm-generative-ai-camp-certificate.png'
    },

    tags: [
    '#提案資料をAIで即時生成', '#見積もりシート自動化(GAS+Claude)',
    '#配信分析-87%効率化', '#KPI分析をスキル化',
    '#バイブコーディングする事業責任者', '#AIエージェント並列運用',
    '#Chrome拡張で業務ハック', '#業務再設計まで踏み込む',
    '#9業界同時並行のAI活用',
    '#生成AI CAMP認定(DMM)', '#AI×映像プロデュース']

  },

  selfAnalysis: {
    label: 'STRENGTHS & GROWTH',
    caption: '自己×他者評価で見える、強みと成長領域',
    note: '社内Annual Feedback（カントリーマネージャー＋同僚Peer Review）と、長年の関係者からの言葉を統合して5軸化（max 5.0）',
    axes: [
    { name: '推進力・実行力', score: 4.0, type: 'strength', desc: '得意領域では「他の追随を許さない」推進力。労働倫理 4/5・強い推進力 3.5/5（Annual Feedback）。' },
    { name: '好奇心・学習', score: 4.5, type: 'strength', desc: '好奇心・成長マインド 4.5/5（Annual Feedback）。素直さ・新領域への越境（6社16年・DMM AI CAMP修了）。' },
    { name: '情熱・コミットメント', score: 4.5, type: 'strength', desc: '「熱い気持ち・情熱」「まじめすぎる」と評される姿勢。マインドセット 4/5（Annual Feedback）。' },
    { name: '適応力・関係構築', score: 4.0, type: 'strength', desc: '「世渡り上手・環境適応能力高い」。9業界×大手企業同時並行・クライアントワーク評価。' },
    { name: '創造的解決・突破力', score: 3.0, type: 'growth', desc: '不得意領域では沼ることがある。創造的な解決 3/5（Annual Feedback）→ 伸びしろとして次サイクルで4.0目標。' }]

  },

  next: {
    label: 'NEXT',
    caption: 'これから作りたいもの',
    origin: {
      title: 'コンテンツは、誰かの人生のスイッチを押せる',
      body: 'Candee「監禁男子」を配信していた頃、ある不登校の女子学生がTwitterで「監禁男子を見て元気をもらえた。少しずつ登校を再開してみようかな」とつぶやいているのを見つけた。仕事で一番嬉しかった瞬間。コンテンツが、見ず知らずの誰かの人生のスイッチを押せる——それが今もキャリアの北極星。同じ感情を、もっと大きなスケールで、もっと多くの人に届け続けたい。'
    },
    goals: [
    {
      timeframe: '3年後',
      title: 'リアリティーショー・ドキュメンタリー領域で企画・制作に携わる',
      benchmarks: ['SASUKE', '白と黒のスプーン', 'あいの里', 'マネーの虎', '愛の貧乏脱出大作戦'],
      desc: 'いずれも「熱狂的なファンを生むコンテンツ」「誰かの人生に良い影響を与える」の代表例。'
    },
    {
      timeframe: '10年後',
      title: '海外でも通用する日本発のコンテンツ／後世に語り継がれるコンテンツを作る',
      benchmarks: ['トリビアの泉', 'とんねるずのみなさんのおかげでした'],
      desc: '単に視聴数を取るだけでなく、カルト的熱狂・信者ができるコンテンツを作る。AI時代の超合理化が進むほど、人間の非合理・非効率・意味不明さ・ムダこそが価値になる。'
    }]

  },

  privateWorks: {
    label: 'PRIVATE WORKS',
    caption: '個人活動（趣味）',
    items: [
    {
      title: '第一回 三池崇史監督主催「26秒のカーニバル」入賞',
      year: '入賞',
      desc: '映画監督 三池崇史氏が主催した「26秒」の超短編映像コンペで入賞。',
      youtubeId: 'wrHmlWsqhoo',
      officialUrl: 'https://www.miiketakashi.com/26/results01.html',
      officialLabel: '公式リザルトを見る'
    },
    {
      title: 'タモリ倶楽部「空耳アワー」オンエア（評価：手ぬぐい）',
      year: '2021',
      desc: 'テレビ朝日「タモリ倶楽部」名物コーナー「空耳アワー」に視聴者投稿でオンエア採用。評価：手ぬぐい。番組25年以上の歴史を持つ人気コーナー。',
      videoSrc: 'assets/private-works/soramimi-2021.mp4'
    }]

  }
};

// 英語版。DATA_JA と同じキー構造を保つ。アセットパス・色・id は共有。
// 逐語訳ではなく、英語圏の職務記述として書き直している。
const DATA_EN = {
  name: 'Shinya Ishijima',
  nameEn: 'Shinya Ishijima', // name と同一なら About のローマ字行は表示されない
  title: 'Creative Director / Head of Creative Team',
  tagline: 'Content that moves people.',
  taglineSub: 'Sixteen years at the front line of content —\nfrom network television to live streaming and video commerce.',

  profile: {
    target: 'Creative Director / Executive Producer',
    bio: 'I have spent sixteen years making content that moves people, following the audience as it moved — from Japanese network television, to live streaming, to commerce.\nI started as an assistant director and then director at a TV production house, working across Nippon TV, TBS, TV Tokyo and TOKYO MX. In 2015 I joined Candee, a mobile-video startup, where I produced original live programming and launched a live-commerce app from zero. After producing an artist-led YouTube series at Warner Music Japan and running branded channels at BitStar, I joined Firework Japan in 2021.\nSince 2024 I have led the Creative Team as its business owner — accountable for the creative work, the plan, and the P&L. In that first year we grew revenue 3.6x, improved gross margin by 15%, and rebuilt how the team works around AI.',
    hobbies: [
    { emoji: '♨️', label: 'Sauna' },
    { emoji: '🎤', label: 'Karaoke' },
    { emoji: '🎹', label: 'Making music' },
    { emoji: '⚽', label: 'Football' },
    { emoji: '🎸', label: 'Live music' }],


    skills_personal: [
    { emoji: '🎤', label: 'Karaoke' },
    { emoji: '🎾', label: 'Tennis' },
    { emoji: '📹', label: 'Video editing' }],


    tags: [
    '#CreativeDirector', '#HeadOfCreative', '#ExecutiveProducer', '#BrandCampaigns',
    '#TVProduction', '#LiveStreaming', '#ShortForm', '#VideoCommerce',
    '#AgencyManagement', '#BudgetOwnership', '#GenerativeAI', '#WorkflowAutomation']

  },

  career: [
  {
    id: 'works',
    period: '2011.4 — 2015.8',
    company: 'The Works Inc.',
    role: 'Assistant Director / Director',
    category: 'Broadcast TV',
    color: '#4ea8de',
    team: 'Full-time',
    logo: 'assets/logos/the-works.webp',
    logoFit: 'contain',
    logoBg: '#ffffff',
    highlights: [
    'Worked across Nippon TV, TBS, TV Tokyo and TOKYO MX — four of Japan’s major networks',
    'Promoted to director in my third year, on a late-night variety show',
    'Named internal MVP with the company’s "The Works Award"'],


    desc: 'Began my career at a television production house, working on variety programming for Japan’s national commercial networks. Moved from assistant director to director within three years and was recognized as the company’s internal MVP.',
    works: [
    { title: 'Nazotoki Battle TORE!', platform: 'Nippon TV (national network)', role: 'Assistant Director', thumb: 'assets/works/tore.png' },
    { title: 'Sho-Bato!', platform: 'Nippon TV', role: 'Assistant Director', thumb: 'assets/works/sho-bato.jpeg' },
    { title: 'Real Robot Battle: Japan Championship', platform: 'Nippon TV', role: 'Director', thumb: 'assets/works/robot-battle.png' },
    { title: 'Soreyuke! Game Panther!', platform: 'Nippon TV', role: 'AD / Director', thumb: 'assets/works/game-panser.webp' },
    { title: 'Sukkiri (weekday morning show)', platform: 'Nippon TV', role: 'Assistant Director', thumb: 'assets/works/sukkiri.jpeg' },
    { title: 'Akira Ikegami Earthquake Special', platform: 'TBS (national network)', role: 'Assistant Director', thumb: 'assets/works/ikegami.webp' },
    { title: 'Oshikake Spiritual', platform: 'TV Tokyo (national network)', role: 'AD / Director', thumb: 'assets/works/oshikake.webp' },
    { title: 'Banana-en', platform: 'TOKYO MX', role: 'Director', thumb: 'assets/works/banana-fire.jpeg' }]


  },
  {
    id: 'candee',
    period: '2015.9 — 2018.7',
    company: 'Candee Inc.',
    role: 'Producer / Director',
    category: 'Live Streaming & Social Video',
    color: '#38bdf8',
    team: 'Full-time',
    logo: 'assets/logos/candee.webp',
    logoFit: 'contain',
    logoBg: '#ffffff',
    highlights: [
    'Owned original programming for LINE LIVE, Japan’s leading live-streaming platform at the time',
    'Produced the J.League Levain Cup final live on Facebook Live — a three-company partnership',
    'Launched LiveShop!, a live-commerce app, from zero to 30–60 shows a month',
    'Built and managed a team of up to 13'],


    desc: 'Joined a mobile-first video and live-streaming startup as a producer. Ran original and branded programming across LINE LIVE and Facebook Live, then launched the company’s live-commerce app end to end — format, talent, operations and volume.',
    works: [
    { title: 'Live Oyasumi! Bedtime Weather Forecast', platform: 'LINE LIVE', role: 'Producer', thumb: 'assets/works/konno.webp' },
    { title: 'Anna Konno and 10,000 Boyfriends', platform: 'LINE LIVE', role: 'Producer', thumb: 'assets/works/okubo.webp' },
    { title: 'Kayoko Okubo’s Advice Hour', platform: 'LINE LIVE', role: 'Producer' },
    { title: 'Ojimon: Middle-Aged Monster Battle', platform: 'LINE LIVE', role: 'Producer / Showrunner', cast: 'Total Tenbosch, Taketo', thumb: 'assets/works/line-live-studio.webp' },
    { title: 'Star Wars — Event Live Special', platform: 'LINE LIVE (branded)', role: 'Producer', thumb: 'assets/works/starwars.png' },
    { title: 'Resident Evil: The Final Chapter — Live Special', platform: 'LINE LIVE (branded)', role: 'Producer', cast: 'Milla Jovovich', thumb: 'assets/works/biohazard.webp' },
    { title: 'J.League Levain Cup Final — Live', platform: 'Facebook Live', role: 'Producer', thumb: 'assets/works/jleague.webp' },
    { title: 'Sportsnavi "Sporay"', platform: 'Mobile video', role: 'Producer', thumb: 'assets/works/spore.webp' },
    { title: 'Sanrio "Shinkaizoku" promo', platform: 'Mobile video', role: 'Producer', thumb: 'assets/works/sanrio.webp' },
    { title: 'Zappallas fortune-telling series', platform: 'Mobile video', role: 'Producer', thumb: 'assets/works/zappallas.webp' },
    { title: '&GIRLS (with ASOBISYSTEM)', platform: 'LiveShop!', role: 'Producer', thumb: 'assets/works/and-girls.webp' },
    { title: 'Kankin Danshi — 24-Hour Confinement Live', platform: 'LiveShop!', role: 'Producer / Showrunner', thumb: 'assets/works/kankin-danshi.webp', thumbFit: 'contain', thumbBg: '#0d1b2a' }]


  },
  {
    id: 'warner',
    period: '2018.8 — 2019.1',
    company: 'Warner Music Japan',
    role: 'Producer / Director',
    category: 'Music × YouTube',
    color: '#a78bfa',
    team: 'Full-time',
    logo: 'assets/logos/warner.webp',
    logoFit: 'contain',
    logoBg: '#ffffff',
    highlights: [
    'Produced an artist-led original YouTube series single-handedly',
    'Owned every stage — concept, production, shooting and edit'],


    desc: 'Created and produced an original YouTube series for a signed artist as a team of one, covering concept through shooting and edit, with the artist’s world-view as the brief.',
    works: [
    { title: 'CHANMINA — PRINCESS PROJECT', platform: 'YouTube', role: 'Concept, shooting and edit (solo)', thumb: 'assets/works/chanmina.webp?v=2', url: 'https://www.youtube.com/channel/UConh1BwKagscq7EAP2Vng-g', urlKind: 'channel' }]


  },
  {
    id: 'freelance',
    period: '2019.2 — 2019.11',
    company: 'Freelance — Video Creator',
    role: 'Producer / Director',
    category: 'Production & Consulting',
    color: '#fb923c',
    team: 'Freelance',
    logo: 'assets/logos/freelance.webp',
    logoFit: 'cover',
    highlights: [
    'Clients included Tohokushinsha Film, Geek Pictures, Syrup and Gunosy',
    'Branded and editorial video production',
    'YouTube channel strategy and consulting'],


    desc: 'Worked directly with production houses and media companies on branded and editorial video, alongside channel strategy and consulting engagements for YouTube.',
    works: [
    { title: 'Branded and editorial video production', platform: 'Various', role: 'Director', thumb: 'assets/works/freelance-video.webp' },
    { title: 'YouTube channel strategy and consulting', platform: 'YouTube', role: 'Consultant' }]


  },
  {
    id: 'bitstar',
    period: '2019.12 — 2021.10',
    company: 'BitStar Inc.',
    role: 'Producer / Director',
    category: 'YouTube / Live',
    color: '#facc15',
    team: 'Full-time',
    logo: 'assets/logos/bitstar.webp',
    logoFit: 'cover',
    highlights: [
    'Ran channels and original programming for 17LIVE, Bandai Namco and Takara Tomy',
    'Owned official game-title livestreams end to end — concept, production, operations and analytics',
    'Worked across creator management and influencer marketing'],


    desc: 'Producer at a creator-management and influencer-marketing company, responsible for enterprise-owned YouTube channels and original programming for major entertainment and toy brands.',
    works: [
    { title: '17LIVE official programming (variety)', platform: '17LIVE', role: 'Producer', thumb: 'assets/works/17live.png', url: 'https://jp.17.live/', urlKind: 'page' },
    { title: 'Bandai Namco — THE IDOLM@STER Channel originals', platform: 'YouTube', role: 'Producer', url: 'https://www.youtube.com/@imas-official', urlKind: 'channel', thumb: 'assets/works/idolmaster.webp' },
    { title: 'Rise of Kingdoms official livestreams', platform: 'YouTube / Live', role: 'Producer', thumb: 'assets/works/rise-of-kingdoms.webp' },
    { title: 'Takara Tomy — Licca-chan official channel', platform: 'YouTube', role: 'Producer', url: 'https://www.youtube.com/@Licca-chan_official', urlKind: 'channel', thumb: 'assets/works/rika-chan.jpeg', thumbFit: 'contain', thumbBg: '#ffffff' },
    { title: 'Newgin official channel', platform: 'YouTube', role: 'Producer', url: 'https://www.youtube.com/channel/UCxKotcGd9oH5uyJECN-ZRnw', urlKind: 'channel', thumb: 'assets/works/newgin.webp' },
    { title: 'Kakegurui (film) promotional series', platform: 'YouTube', role: 'Producer', thumb: 'assets/works/kakegurui.webp' }]


  },
  {
    id: 'firework',
    period: '2021.11 — Present',
    company: 'Firework Japan',
    role: 'Creative Director / Head of Creative Team',
    category: 'Video Commerce',
    color: '#4ade80',
    team: 'Full-time',
    logo: 'assets/logos/firework.webp',
    logoFit: 'contain',
    logoBg: '#000000',
    logoPadding: '0px',
    highlights: [
    'Lead creative for Yamada Denki, Matsukiyococokara, Starbucks Japan and Samsung Japan',
    'Consulting, production and in-house enablement across live streaming and short-form video',
    'Business owner of the Creative Team since 2024 — accountable for planning, sales and P&L alongside creative',
    'Grew revenue 3.6x year over year, improved gross margin by 15%, and brought new business to 33% of Japan Team revenue',
    'Nearly doubled concurrent project throughput — 5.3 to 10.2 per month (+92%) — by rebuilding workflows around AI'],


    desc: 'Creative lead in video commerce — live streaming and short-form video for major retail and global brands. Took over the Creative Team as business owner in 2024, and now own the plan, the pipeline and the creative output as a single remit. Growth came from three levers at once: new services (consulting and in-house enablement), AI-driven operating efficiency, and renegotiated production partner rates.',

    impact: {
      caption: 'Business growth, FY2024 → FY2025',
      items: [
      { value: '3.6×', label: 'Revenue growth', sub: 'Year over year' },
      { value: '+15%', label: 'Gross margin', sub: 'Improvement over the same period' },
      { value: '33%', label: 'New business', sub: 'Share of total Japan Team revenue' }]


    },
    clients: [
    { name: 'Starbucks Japan', logo: 'assets/clients/starbucks.png', url: 'https://www.starbucks.co.jp/onlinestore/live/' },
    { name: 'Samsung Japan', logo: 'assets/clients/samsung.webp', url: 'https://www.samsung.com/jp/offer/samsung-live-shop/' },
    { name: 'Matsukiyococokara & Co.', logo: 'assets/clients/matsukiyo.webp' },
    { name: 'Yamada Denki', logo: 'assets/clients/yamada.webp' },
    { name: 'AEON Retail', logo: 'assets/clients/aeon.png' },
    { name: 'MUJI', logo: 'assets/clients/muji.png' }],


    works: []
  }],


  // ── SELECTED WORK (英語版のみ) ──
  selectedWork: {
    label: 'SELECTED WORK',
    caption: 'Brand and IP campaigns across broadcast, streaming, social and commerce',
    note: 'A cross-section of sixteen years — national broadcast, global IP, artist content and retail live commerce. Roles range from hands-on director to creative lead accountable for the budget.',
    items: [
    { brand: 'Matsukiyococokara & Co.', title: 'Live shopping programming for Japan’s largest drugstore group', platform: 'Live commerce', role: 'Creative lead', year: '2021–2025', url: 'https://www.matsukiyococokara-online.com/special_lp/MatsukiyoCocokaraLive/', urlKind: 'page', thumb: 'assets/clients/matsukiyo.webp', thumbFit: 'contain', thumbBg: '#ffffff' },
    { brand: 'Starbucks Japan', title: 'Short-form and live video for brand and product moments', platform: 'Short-form / Live', role: 'Creative lead', year: '2021–2025', thumb: 'assets/clients/starbucks.png', thumbFit: 'contain', thumbBg: '#ffffff', url: 'https://www.starbucks.co.jp/onlinestore/live/', urlKind: 'page' },
    { brand: 'Samsung Japan', title: 'Product launch live streams and campaign video', platform: 'Live / Short-form', role: 'Creative lead', year: '2021–2025', thumb: 'assets/clients/samsung.webp', thumbFit: 'contain', thumbBg: '#ffffff', url: 'https://www.samsung.com/jp/offer/samsung-live-shop/', urlKind: 'page' },
    { brand: 'Star Wars', title: 'Event live special', platform: 'LINE LIVE (branded)', role: 'Producer', year: '2016', thumb: 'assets/works/starwars.png' },
    { brand: 'Resident Evil', title: 'The Final Chapter — live special with Milla Jovovich', platform: 'LINE LIVE (branded)', role: 'Producer', year: '2016', thumb: 'assets/works/biohazard.webp' },
    { brand: 'Bandai Namco', title: 'THE IDOLM@STER Channel — original programming', platform: 'YouTube', role: 'Producer', year: '2020–2021', url: 'https://www.youtube.com/@imas-official', urlKind: 'channel', thumb: 'assets/works/idolmaster.webp' },
    { brand: 'J.League', title: 'Levain Cup final, streamed live', platform: 'Facebook Live', role: 'Producer', year: '2017', thumb: 'assets/works/jleague.webp' },
    { brand: 'Rise of Kingdoms', title: 'Official livestream series', platform: 'YouTube / Live', role: 'Producer', year: '2020–2021', thumb: 'assets/works/rise-of-kingdoms.webp' },
    { brand: 'Takara Tomy', title: 'Licca-chan official channel', platform: 'YouTube', role: 'Producer', year: '2020–2021', url: 'https://www.youtube.com/@Licca-chan_official', urlKind: 'channel', thumb: 'assets/works/rika-chan.jpeg', thumbFit: 'contain', thumbBg: '#ffffff' },
    { brand: 'Kakegurui', title: 'Promotional series for the feature film', platform: 'YouTube', role: 'Producer', year: '2019', thumb: 'assets/works/kakegurui.webp' },
    { brand: 'Warner Music Japan', title: 'CHANMINA — PRINCESS PROJECT', platform: 'YouTube', role: 'Solo: concept, shoot, edit', year: '2018', thumb: 'assets/works/chanmina.webp?v=2', url: 'https://www.youtube.com/channel/UConh1BwKagscq7EAP2Vng-g', urlKind: 'channel' },
    { brand: 'LiveShop!', title: 'Kankin Danshi — 24-hour confinement live', platform: 'Live commerce', role: 'Producer / Showrunner', year: '2017', thumb: 'assets/works/kankin-danshi.webp', thumbFit: 'contain', thumbBg: '#0d1b2a' }]


  },

  stats: [
  { num: 16, suffix: ' yrs', label: 'in video production' },
  { num: 6, suffix: '', label: 'companies\nTV → Web → Music\n→ Live Commerce' },
  { num: 3.6, suffix: '×', label: 'revenue growth\n(FY24 → FY25)' },
  { num: 15, suffix: '%', label: 'gross margin improvement\n(same period)' }],


  skills: {
    'Production & Creative Leadership': ['Concept development', 'Producing', 'Team management', 'Client partnership', 'Show production', 'Live direction', 'Scriptwriting', 'Creative direction', 'Shooting & editing', 'Casting'],
    'Business & Growth': ['Business planning', 'Budget ownership', 'Forecast vs. actual', 'KPI design', 'P&L management', 'Monetization design', 'Growth strategy', 'Data-driven planning'],
    'Tools': ['Premiere Pro', 'Photoshop', 'OBS Studio', 'Google Apps Script', 'Word / Excel / PowerPoint'],
    'Certifications & Languages': ['Japanese: Native', 'English: Conversational (CEFR B1+), actively working toward business fluency', 'Driver’s license (Japan)', 'DMM Generative AI CAMP — Certified (Jan 2026)'],
    'Generative AI': ['Claude Code (Cowork)', 'Gemini', 'NotebookLM', 'AI Studio']
  },

  aiImpact: {
    caption: 'AI integrated into the workflow — not as a demo, but as how the team now runs',
    items: [
    { value: '15h → 2h', label: 'Monthly performance reporting', sub: 'Live-stream analytics for a major retailer. Packaged as a reusable skill.' },
    { value: '30h → 8h', label: 'Large-scale pitch decks', sub: 'Enterprise proposals and annual reviews — research, structure and build, with AI in the loop.' },
    { value: '5.3 → 10.2', label: 'Concurrent projects per month', sub: 'Monthly average, before AI vs. after (+92%).' },
    { value: 'Certified', label: 'DMM Generative AI CAMP', sub: 'Completed January 2026 / certificate available.' }],


    certificate: {
      pdf: 'assets/certificates/dmm-generative-ai-camp-certificate.pdf',
      image: 'assets/certificates/dmm-generative-ai-camp-certificate.png'
    },

    tags: [
    '#PitchDecksBuiltWithAI', '#QuotingAutomated(GAS+Claude)',
    '#87%FasterReporting', '#AnalyticsPackagedAsSkills',
    '#ABusinessLeadWhoShipsCode', '#ParallelAIAgents',
    '#ChromeExtensionsForOps', '#ProcessRedesignNotJustSpeed',
    '#NineIndustriesInParallel',
    '#GenerativeAICertified', '#AIxVideoProduction']


  },

  selfAnalysis: DATA_JA.selfAnalysis // 英語版では描画しない（死にコード互換のため参照のみ）

  // next / privateWorks は英語版から削除済み（2026-08-16 Issy指示）。
  // What's Next（3年後・10年後のビジョン）と Personal Craft は不採用。
};
