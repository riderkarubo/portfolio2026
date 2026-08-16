
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
  langToggle: { to: 'EN', label: '英語版に切り替え' },
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
  { id: 'about', label: 'About' },
  { id: 'next', label: 'Next' },
  { id: 'private', label: 'Craft' }],

  sideNavAria: 'Section navigation',
  langToggle: { to: 'JA', label: 'Switch to Japanese' },
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
    { emoji: '📹', label: '動画編集' }]

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
    '最大14名のチームをマネジメント'],

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
    { title: 'ちゃんみな「PRINCESS PROJECT」', platform: 'YouTube', role: '企画・撮影・編集（1名）', thumb: 'assets/works/chanmina.webp?v=2' }]

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
    { title: '17Live 公式番組（バラエティ中心）', platform: '17Live', role: 'プロデューサー', thumb: 'assets/works/17live.png' },
    { title: 'バンダイナムコ「アイドルマスターch」オリジナル番組', platform: 'YouTube', role: 'プロデューサー', thumb: 'assets/works/idolmaster.webp' },
    { title: 'Rise of Kingdoms 公式生配信', platform: 'YouTube/生配信', role: 'プロデューサー', thumb: 'assets/works/rise-of-kingdoms.webp' },
    { title: 'タカラトミー リカちゃん公式CH', platform: 'YouTube', role: 'プロデューサー', thumb: 'assets/works/rika-chan.jpeg', thumbFit: 'contain', thumbBg: '#ffffff' },
    { title: 'ニューギン公式チャンネル', platform: 'YouTube', role: 'プロデューサー', thumb: 'assets/works/newgin.webp' },
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
    { name: 'Starbucks Japan', logo: 'assets/clients/starbucks.png' },
    { name: 'Samsung Japan', logo: 'assets/clients/samsung.webp' },
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
    '資格・その他': ['普通自動車免許', '英語 A2〜B1（CEFR）', 'DMM生成AI CAMP スキル習得認定(2026.1)'],
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

// Task 3 で英文に差し替える。それまでは日本語版と同一。
const DATA_EN = DATA_JA;
