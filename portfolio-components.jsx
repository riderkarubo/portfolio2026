
// ============================================================
// 石島慎也 Portfolio — Components  (v2 — 職務経歴書準拠)
// ============================================================

const DATA = {
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
    { title: 'おじさんモンスターバトル「おじモン」', platform: 'LINE LIVE', role: 'プロデューサー / 総合演出', thumb: 'assets/works/line-live-studio.webp' },
    { title: 'スター・ウォーズ イベント特番', platform: 'LINE LIVE（広告）', role: 'プロデューサー', thumb: 'assets/works/starwars.png' },
    { title: '映画「バイオハザードファイナル」配信特番', platform: 'LINE LIVE（広告）', role: 'プロデューサー', thumb: 'assets/works/biohazard.webp' },
    { title: 'Jリーグルヴァンカップ チャンピオンシップ Live', platform: 'Facebook Live', role: 'プロデューサー', thumb: 'assets/works/jleague.webp' },
    { title: 'Sportsnavi「スポレー」', platform: 'スマホ動画', role: 'プロデューサー', thumb: 'assets/works/spore.webp' },
    { title: 'サンリオ「シンカイゾク」PR動画', platform: 'スマホ動画', role: 'プロデューサー', thumb: 'assets/works/sanrio.webp' },
    { title: 'ザッパラス占い動画', platform: 'スマホ動画', role: 'プロデューサー', thumb: 'assets/works/zappallas.webp' },
    { title: '＆GIRLS（ASOBISYSTEMと協業）', platform: 'LiveShop!', role: 'プロデューサー', thumb: 'assets/works/and-girls.webp' },
    { title: '監禁男子〜24時間監禁Live〜', platform: 'LiveShop!', role: 'プロデューサー / 総合演出', thumb: 'assets/works/kankin-danshi.webp' }]

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
    '「ちゃんみな」YouTubeシリーズ「PRINCESS PROJECT」を担当',
    '企画・プロデュース・撮影・編集をワンオペで完結'],

    desc: '「ちゃんみな」のオリジナルYouTube番組シリーズ「PRINCESS PROJECT」を一人で企画・制作。プロデュースから撮影・編集まで全工程を担当。',
    works: [
    { title: 'ちゃんみな「PRINCESS PROJECT」', platform: 'YouTube', role: '企画・撮影・編集（1名）', thumb: 'assets/works/chanmina.webp' }]

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
    '就任1年で売上を前年比3.6倍に拡大、粗利+15%、NewBiz構成比33%を実現'],

    desc: 'ライブ配信・ショート動画を活用した「動画コマース」領域でCreative Strategistとして従事。2024年にCreative Teamの事業責任者に就任後、事業計画・営業・クリエイティブを統括し、就任1年で売上を前年比3.6倍に拡大。AI活用による業務効率化・新サービス（コンサル・内製化支援）の開発・制作パートナーとの単価交渉により、粗利+15%も同時に実現。',

    // IMPACT — 数値ハイライト（CareerDetailで描画）
    impact: {
      caption: '2024 → 2025 事業成長',
      items: [
      { value: '×3.6', label: '売上成長', sub: '前年比' },
      { value: '+15%', label: '粗利改善', sub: '粗利額' },
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
    '資格・その他': ['普通自動車免許', '英語 B1〜B2（CEFR）', 'DMM生成AI CAMP スキル習得認定(2026.1)'],
    '生成AIツール': ['Claude Code (Cowork)', 'Gemini', 'NotebookLM', 'AI Studio']
  },

  aiImpact: {
    caption: '大手企業・大型提案を主戦場に、AIをワークフロー統合し業務再設計まで踏み込む',
    items: [
    { value: '15h → 2h', label: '配信分析の効率化', sub: '大手リテール月次配信レポート。delivery-analysisスキル化で再利用' },
    { value: '30h → 8h', label: '大型提案資料の生成', sub: '大手企業向け提案・年次報告レベル。リサーチ→構成→HTML/スライドまでAI並走' },
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
    label: 'SELF ANALYSIS',
    caption: '自己評価 × 他者評価のマージで描く5軸チャート',
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
    caption: '業務外の個人活動',
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

// ── HOOKS ────────────────────────────────────────────────────

function useInView(threshold = 0.12) {
  const [inView, setInView] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) {setInView(true);obs.disconnect();}},
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function useCountUp(target, inView, duration = 1400) {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    if (!inView) return;
    // 小数を含む値（例: 3.6）は小数1桁まで表示、整数はそのまま
    const isDecimal = !Number.isInteger(target);
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const raw = eased * target;
      setValue(isDecimal ? Math.round(raw * 10) / 10 : Math.floor(raw));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);
  return value;
}

// ── NAV ─────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
  { label: 'Profile', href: '#about' },
  { label: 'Career', href: '#career' },
  { label: 'Self Analysis', href: '#self-analysis' },
  { label: 'Skills', href: '#skills' },
  { label: 'Private', href: '#private' }];


  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 300,
      height: '56px', padding: '0 clamp(20px, 5vw, 60px)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(8,15,26,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(78,168,222,0.1)' : 'none',
      transition: 'all 0.4s var(--ease-out)'
    }}>
      <div></div>
      <div style={{ display: 'flex', gap: '28px', alignItems: 'center', padding: scrolled ? '0' : '6px 16px', borderRadius: scrolled ? '0' : 'var(--radius-full)', background: scrolled ? 'transparent' : 'rgba(8,15,26,0.55)', backdropFilter: scrolled ? 'none' : 'blur(10px)', border: scrolled ? 'none' : '1px solid rgba(78,168,222,0.12)', transition: 'all 0.4s var(--ease-out)' }}>
        {links.map((l) => <NavLink key={l.label} href={l.href}>{l.label}</NavLink>)}
      </div>
    </nav>);

}

function NavLink({ href, children }) {
  const [hov, setHov] = React.useState(false);
  return (
    <a href={href}
    onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    style={{
      fontFamily: 'var(--font-number)', fontSize: '13px', fontWeight: 600,
      letterSpacing: '0.07em', textDecoration: 'none',
      color: hov ? 'var(--accent)' : 'var(--fg-secondary)',
      transition: 'color 0.2s'
    }}>{children}</a>);

}

// ── SIDE NAV (vertical dots) ────────────────────────────────

function SideNav() {
  const sections = React.useMemo(() => [
    { id: 'hero',          label: 'Top' },
    { id: 'about',         label: 'Profile' },
    { id: 'career',        label: 'Career' },
    { id: 'self-analysis', label: 'Self Analysis' },
    { id: 'skills',        label: 'Skills' },
    { id: 'private',       label: 'Private' }
  ], []);

  const [activeId, setActiveId] = React.useState('hero');
  const [visible, setVisible]   = React.useState(false);
  const [isWide, setIsWide]     = React.useState(true);

  // モバイル(<768px)では非表示
  React.useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = () => setIsWide(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // スクロール位置から「いま見ているセクション」を判定
  // - スクロール位置 + Nav高さ + マージン より上にある最も下のセクションをアクティブにする
  // - ページ末尾に到達したら最後のセクションを強制的にアクティブに（短いフッター対策）
  React.useEffect(() => {
    const NAV_OFFSET = 56 + 24; // Nav高さ + 余白
    let raf = 0;

    const compute = () => {
      raf = 0;
      const scrollY = window.scrollY;

      // 左ナビは最初から常時表示
      setVisible(true);

      // ページ最下部判定（下端まで来たら最後のセクションを優先）
      const nearBottom = scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8;
      if (nearBottom) {
        setActiveId(sections[sections.length - 1].id);
        return;
      }

      // 各セクションの上端 absolute 位置を取得
      const offsets = sections
        .map((s) => {
          const el = document.getElementById(s.id);
          if (!el) return null;
          return { id: s.id, top: el.getBoundingClientRect().top + scrollY };
        })
        .filter(Boolean);

      const cursor = scrollY + NAV_OFFSET;
      // 「cursor <= 各セクション上端」を満たす最初のものの直前がアクティブ
      let current = offsets[0]?.id ?? 'hero';
      for (const o of offsets) {
        if (o.top <= cursor) current = o.id;
        else break;
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [sections]);

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 56 - 16;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  };

  return (
    <aside
      aria-label="セクションナビゲーション"
      style={{
        position: 'fixed', left: '20px', top: '50%', transform: 'translateY(-50%)',
        zIndex: 250,
        display: isWide ? 'flex' : 'none',
        flexDirection: 'column', gap: '6px',
        padding: '14px 14px',
        background: 'rgba(8,15,26,0.72)',
        backdropFilter: 'blur(14px)',
        border: '1px solid rgba(78,168,222,0.16)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.4s var(--ease-out)'
      }}>
      <div style={{
        fontFamily: 'var(--font-number)', fontSize: '10px', fontWeight: 700,
        letterSpacing: '0.14em', color: 'var(--fg-muted)',
        padding: '0 8px 6px', marginBottom: '2px',
        borderBottom: '1px solid rgba(78,168,222,0.12)'
      }}>JUMP TO</div>
      {sections.map((s) =>
        <SideNavItem key={s.id} section={s} active={activeId === s.id} onClick={handleClick} />
      )}
    </aside>);
}

function SideNavItem({ section, active, onClick }) {
  const [hov, setHov] = React.useState(false);
  return (
    <a
      href={`#${section.id}`}
      onClick={(e) => onClick(e, section.id)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-label={section.label}
      style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        padding: '8px 10px', borderRadius: 'var(--radius-md)',
        textDecoration: 'none',
        background: active ? 'rgba(78,168,222,0.10)' : hov ? 'rgba(255,255,255,0.04)' : 'transparent',
        border: `1px solid ${active ? 'rgba(78,168,222,0.30)' : 'transparent'}`,
        cursor: 'pointer',
        transition: 'all 0.18s var(--ease-out)'
      }}>
      <span style={{
        width: '8px', height: '8px', borderRadius: '50%',
        background: active ? 'var(--accent)' : 'var(--fg-muted)',
        boxShadow: active ? '0 0 10px var(--accent-glow)' : 'none',
        flexShrink: 0,
        transition: 'all 0.2s var(--ease-out)'
      }} />
      <span style={{
        fontFamily: 'var(--font-number)', fontSize: '12px',
        fontWeight: active ? 700 : 500, letterSpacing: '0.06em',
        color: active ? 'var(--fg-primary)' : hov ? 'var(--fg-primary)' : 'var(--fg-muted)',
        whiteSpace: 'nowrap',
        transition: 'color 0.18s var(--ease-out)'
      }}>{section.label}</span>
    </a>);
}

// ── HERO ─────────────────────────────────────────────────────

function Hero() {
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => {const t = setTimeout(() => setVis(true), 80);return () => clearTimeout(t);}, []);

  const anim = (delay) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? 'none' : 'translateY(22px)',
    transition: `opacity 0.75s var(--ease-out) ${delay}s, transform 0.75s var(--ease-out) ${delay}s`
  });

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      background: 'var(--bg-base)',
      padding: '80px clamp(20px, 5vw, 60px) 60px'
    }}>
      {/* Hero photo - right half of screen */}
      <div style={{
        position: 'absolute', top: '8%', right: '4%', bottom: '8%',
        width: '42%', overflow: 'hidden', pointerEvents: 'none',
        borderRadius: 'var(--radius-xl)'
      }}>
        <img src="assets/hero.webp" alt="" style={{
          position: 'absolute', top: 0, left: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: '20% 30%',
          filter: 'brightness(0.78) contrast(1.12) saturate(1.15)'
        }}
        onError={(e) => {e.target.style.display = 'none';}} />
        {/* Left edge fade so photo blends with dark side */}
        <div style={{
          position: 'absolute', top: 0, left: 0, bottom: 0, width: '35%',
          background: 'linear-gradient(90deg, var(--bg-base) 0%, rgba(13,27,42,0.7) 40%, rgba(13,27,42,0.15) 75%, transparent 100%)'
        }} />
        {/* Bottom subtle fade */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(8,15,26,0.25) 0%, transparent 25%, transparent 70%, rgba(8,15,26,0.55) 100%)'
        }} />
      </div>
      {/* Grid texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.6,
        backgroundImage: 'linear-gradient(rgba(78,168,222,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(78,168,222,0.035) 1px, transparent 1px)',
        backgroundSize: '64px 64px'
      }} />
      {/* Glow accent */}
      <div style={{
        position: 'absolute', top: '-10%', right: '20%',
        width: '500px', height: '500px', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(78,168,222,0.08) 0%, transparent 65%)'
      }} />
      {/* Grid texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.6,
        backgroundImage: 'linear-gradient(rgba(78,168,222,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(78,168,222,0.035) 1px, transparent 1px)',
        backgroundSize: '64px 64px'
      }} />
      {/* Glow accent */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: '600px', height: '600px', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(78,168,222,0.08) 0%, transparent 65%)'
      }} />

      <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Small intro label */}
        <div style={{ ...anim(0.1), display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <div style={{ width: '32px', height: '1px', background: 'var(--accent)' }} />
          <span style={{
            fontFamily: 'var(--font-number)', fontSize: '12px', fontWeight: 700,
            letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--accent)'
          }}>PORTFOLIO 2026</span>
        </div>

        {/* Welcome message */}
        <h1 style={{
          ...anim(0.22),
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'clamp(36px, 6.5vw, 76px)',
          lineHeight: 1.15, letterSpacing: '-0.025em',
          color: 'var(--fg-primary)', marginBottom: '56px',
          maxWidth: '900px'
        }}>
          はじめまして、<br /><span style={{ color: 'var(--accent)' }}>石島 慎也</span>と申します。
        </h1>

      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        opacity: vis ? 0.6 : 0, transition: 'opacity 1s 1s'
      }}>
        <span style={{ fontFamily: 'var(--font-number)', fontSize: '11px', letterSpacing: '0.22em', color: 'var(--fg-muted)', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{
          width: '1px', height: '44px',
          background: 'linear-gradient(var(--fg-muted), transparent)',
          animation: 'scrollPulse 2s ease-in-out infinite'
        }} />
      </div>
    </section>);

}

// ── STATEMENT ────────────────────────────────────────────────

function Statement() {
  const [ref, inView] = useInView();
  const fade = (d = 0) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'none' : 'translateY(18px)',
    transition: `opacity 0.8s var(--ease-out) ${d}s, transform 0.8s var(--ease-out) ${d}s`
  });

  return (
    <section id="statement" ref={ref} style={{
      padding: 'var(--section-gap) clamp(20px, 5vw, 60px)',
      background: 'var(--bg-base)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      minHeight: '60vh', position: 'relative', overflow: 'hidden'
    }}>
      {/* Subtle grid texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.4,
        backgroundImage: 'linear-gradient(rgba(78,168,222,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(78,168,222,0.03) 1px, transparent 1px)',
        backgroundSize: '64px 64px'
      }} />
      {/* Glow accent */}
      <div style={{
        position: 'absolute', top: '50%', left: '15%', transform: 'translateY(-50%)',
        width: '500px', height: '500px', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(78,168,222,0.06) 0%, transparent 65%)'
      }} />

      <div style={{ position: 'relative', maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        {/* Small label */}
        <div style={{ ...fade(0), display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
          <div style={{ width: '32px', height: '1px', background: 'var(--accent)' }} />
          <span style={{
            fontFamily: 'var(--font-number)', fontSize: '12px', fontWeight: 700,
            letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--accent)'
          }}>WHO I AM</span>
        </div>

        {/* Statement (2行構成) */}
        <h2 style={{
          ...fade(0.15),
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'clamp(26px, 4.6vw, 52px)',
          lineHeight: 1.3, letterSpacing: '-0.02em',
          color: 'var(--fg-primary)', margin: 0
        }}>
          クリエイティブと事業成長、二刀流で挑む<br />
          <span style={{ color: 'var(--accent)' }}>コンテンツビジネスプロデューサー</span>
        </h2>
      </div>
    </section>);

}

// ── ABOUT ────────────────────────────────────────────────────

function About() {
  const [ref, inView] = useInView();
  const fade = (d = 0) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'none' : 'translateY(18px)',
    transition: `opacity 0.7s var(--ease-out) ${d}s, transform 0.7s var(--ease-out) ${d}s`
  });

  return (
    <section id="about" ref={ref} style={{ padding: 'var(--section-gap) clamp(20px, 5vw, 60px)', background: 'var(--bg-deep)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '280px 1fr', gap: '64px', alignItems: 'start' }}>
        {/* Photo */}
        <div style={fade(0)}>
          <div style={{
            aspectRatio: '1/1', borderRadius: 'var(--radius-xl)',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border)', position: 'relative', overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <img src="assets/profile.webp" alt="石島慎也" style={{
              width: '100%', height: '100%', objectFit: 'cover'
            }}
            onError={(e) => {e.target.src = 'assets/profile.webp';}} />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px',
              background: 'linear-gradient(90deg, var(--accent), var(--accent-glow))'
            }} />
          </div>

          {/* Name card */}
          <div style={{
            marginTop: '16px', padding: '16px 20px', borderRadius: 'var(--radius-lg)',
            background: 'var(--bg-surface)', border: '1px solid var(--border)'
          }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: '2px' }}>石島 慎也</div>
            <div style={{ fontFamily: 'var(--font-number)', fontSize: '13px', color: 'var(--fg-muted)', letterSpacing: '0.05em' }}>Shinya Ishijima</div>
          </div>

          {/* Hobbies card */}
          <div style={{
            marginTop: '12px', padding: '16px 20px', borderRadius: 'var(--radius-lg)',
            background: 'var(--bg-surface)', border: '1px solid var(--border)'
          }}>
            <div style={{ fontFamily: 'var(--font-number)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '10px' }}>趣味</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {DATA.profile.hobbies.map((h) =>
              <span key={h.label} style={{
                padding: '4px 10px', borderRadius: 'var(--radius-full)',
                background: 'rgba(78,168,222,0.08)', border: '1px solid rgba(78,168,222,0.18)',
                fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--fg-primary)',
                display: 'inline-flex', alignItems: 'center', gap: '5px', whiteSpace: 'nowrap'
              }}>
                  <span style={{ fontSize: '15px' }}>{h.emoji}</span>{h.label}
                </span>
              )}
            </div>
            <div style={{ fontFamily: 'var(--font-number)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginTop: '16px', marginBottom: '10px' }}>特技</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {DATA.profile.skills_personal.map((s) =>
              <span key={s.label} style={{
                padding: '4px 10px', borderRadius: 'var(--radius-full)',
                background: 'rgba(78,168,222,0.08)', border: '1px solid rgba(78,168,222,0.18)',
                fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--fg-primary)',
                display: 'inline-flex', alignItems: 'center', gap: '5px', whiteSpace: 'nowrap'
              }}>
                  <span style={{ fontSize: '15px' }}>{s.emoji}</span>{s.label}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <SectionLabel inView={inView}>ABOUT</SectionLabel>
          <p style={{ ...fade(0.25), fontFamily: 'var(--font-body)', fontSize: '17px', color: 'var(--fg-secondary)', lineHeight: 1.95, marginBottom: '32px', whiteSpace: 'pre-line' }}>
            {DATA.profile.bio}
          </p>

          {/* Profile grid */}
          <div style={{ ...fade(0.35), display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '28px' }}>
            {[
            { label: '現職', value: 'Firework Japan株式会社\nDirector of Creative Strategy / 事業責任者' },
            { label: 'キャリア', value: '映像制作 16年目（2011年新卒）' }].
            map((item) =>
            <div key={item.label} style={{
              padding: '14px 16px', borderRadius: 'var(--radius-md)',
              background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)'
            }}>
                <div style={{ fontFamily: 'var(--font-number)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '4px' }}>{item.label}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--fg-primary)', fontWeight: 500, whiteSpace: 'pre-line', lineHeight: 1.55 }}>{item.value}</div>
              </div>
            )}
          </div>

          {/* Tags */}
          <div style={{ ...fade(0.45), display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['#事業責任者', '#クリエイティブディレクター', '#プロデューサー', '#ディレクター', '#番組制作', '#ライブ配信', '#ショート動画', '#動画コマース', '#ライブコマース', '#動画編集', '#生成AI活用', '#ビジネス英語（中級）'].map((t) =>
            <span key={t} style={{
              padding: '5px 14px', borderRadius: 'var(--radius-full)',
              background: 'rgba(78,168,222,0.08)', border: '1px solid rgba(78,168,222,0.2)',
              fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--accent)',
              whiteSpace: 'nowrap'
            }}>{t}</span>
            )}
          </div>
        </div>
      </div>
    </section>);

}

// ── CAREER ───────────────────────────────────────────────────

function Career() {
  const [ref, inView] = useInView(0.05);
  const [active, setActive] = React.useState('works');
  const activeItem = DATA.career.find((c) => c.id === active);
  const detailRef = React.useRef(null);
  const isFirstRender = React.useRef(true);

  // active変更時、CareerDetail のヘッダー位置までスクロール（初回マウントは除外）
  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!detailRef.current) return;
    const navHeight = 56;
    const top = detailRef.current.getBoundingClientRect().top + window.scrollY - navHeight - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  }, [active]);

  return (
    <section id="career" ref={ref} style={{ padding: 'var(--section-gap) clamp(20px, 5vw, 60px)', background: 'var(--bg-base)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionLabel inView={inView}>CAREER</SectionLabel>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 900,
          color: 'var(--fg-primary)', marginBottom: '48px', letterSpacing: '-0.02em',
          opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(16px)',
          transition: 'all 0.7s var(--ease-out) 0.15s'
        }}>キャリア</h2>

        <div style={{
          display: 'grid', gridTemplateColumns: '240px 1fr', gap: '28px',
          opacity: inView ? 1 : 0, transition: 'opacity 0.7s var(--ease-out) 0.3s'
        }}>
          {/* Timeline */}
          <div style={{ position: 'sticky', top: '80px', alignSelf: 'start', maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}>
            <div style={{ position: 'relative' }}>
            <div style={{
                position: 'absolute', left: '15px', top: '20px', bottom: '20px',
                width: '1px', background: 'var(--border)'
              }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {DATA.career.map((item) =>
                <CareerTab key={item.id} item={item} active={active === item.id} onClick={() => setActive(item.id)} />
                )}
            </div>
            </div>
          </div>

          {activeItem && <div ref={detailRef}><CareerDetail item={activeItem} /></div>}
        </div>
      </div>
    </section>);

}

function CareerTab({ item, active, onClick }) {
  const [hov, setHov] = React.useState(false);
  return (
    <button onClick={onClick}
    onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    style={{
      position: 'relative', padding: '12px 14px 12px 40px',
      borderRadius: 'var(--radius-md)', textAlign: 'left', cursor: 'pointer',
      background: active ? 'rgba(78,168,222,0.07)' : hov ? 'rgba(255,255,255,0.02)' : 'transparent',
      border: active ? `1px solid ${item.color}40` : '1px solid transparent',
      transition: 'all 0.22s var(--ease-out)'
    }}>
      <div style={{
        position: 'absolute', left: '10px', top: '16px',
        width: '11px', height: '11px', borderRadius: '50%',
        border: `2px solid ${item.color}`,
        background: active ? item.color : 'var(--bg-base)',
        boxShadow: active ? `0 0 10px ${item.color}80` : 'none',
        transition: 'all 0.22s'
      }} />
      <div style={{ fontFamily: 'var(--font-number)', fontSize: '12px', color: item.color, fontWeight: 600, marginBottom: '2px' }}>{item.period}</div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 700, color: active ? 'var(--fg-primary)' : 'var(--fg-secondary)', marginBottom: '1px', transition: 'color 0.2s' }}>{item.company}</div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--fg-muted)' }}>{item.role}</div>
    </button>);

}

function CareerDetail({ item }) {
  const companyShort = item.company.replace(/株式会社 ?/g, '').replace(/ ?株式会社/g, '').trim();

  return (
    <div style={{
      background: 'var(--bg-surface)', border: '1px solid var(--border)',
      borderRadius: 'var(--radius-xl)', overflow: 'hidden',
      boxShadow: 'var(--shadow-md)',
      animation: 'fadeSlideIn 0.3s var(--ease-out)'
    }}>
      {/* HERO LOGO BAND - full bleed */}
      <div style={{
        position: 'relative', height: '240px', overflow: 'hidden',
        background: item.logoBg || `linear-gradient(135deg, ${item.color}22 0%, ${item.color}0a 60%, var(--bg-elevated) 100%)`,
        borderBottom: `1px solid ${item.color}40`
      }}>
        {/* Decorative grid (only when no logoBg fill) */}
        {!item.logoBg &&
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.4,
          backgroundImage: `linear-gradient(${item.color}12 1px, transparent 1px), linear-gradient(90deg, ${item.color}12 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        }

        {/* The logo / image */}
        {item.logo ?
        <img src={item.logo} alt={item.company} style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: item.logoFit || 'contain',
          padding: item.logoFit === 'cover' ? 0 : item.logoPadding || '20px 40px'
        }} /> :

        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          alignItems: 'center', justifyContent: 'center', padding: '20px 40px',
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'clamp(38px, 6vw, 64px)',
          color: item.color, letterSpacing: '-0.02em', lineHeight: 1,
          textShadow: `0 0 30px ${item.color}55`,
          textAlign: 'center'
        }}>{companyShort}</div>
        }

        {/* Period (top-right) with strong contrast */}
        <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
          <div style={{
            padding: '6px 14px', borderRadius: 'var(--radius-full)',
            background: 'rgba(8,15,26,0.78)', backdropFilter: 'blur(10px)',
            border: `1px solid ${item.color}66`,
            fontFamily: 'var(--font-number)', fontSize: '13px', color: item.color, fontWeight: 700,
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
          }}>{item.period}</div>
        </div>
      </div>

      {/* HEADER INFO ROW (below hero) */}
      <div style={{
        padding: '20px 32px 8px',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <span style={{
            padding: '4px 12px', borderRadius: 'var(--radius-full)',
            background: `${item.color}18`, border: `1px solid ${item.color}45`,
            fontFamily: 'var(--font-number)', fontSize: '12px', fontWeight: 700,
            letterSpacing: '0.1em', color: item.color, whiteSpace: 'nowrap'
          }}>{item.category}</span>
          <span style={{
            padding: '4px 12px', borderRadius: 'var(--radius-full)',
            background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-subtle)',
            fontFamily: 'var(--font-number)', fontSize: '12px', color: 'var(--fg-muted)', whiteSpace: 'nowrap'
          }}>{item.team}</span>
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: '4px' }}>{item.company}</h3>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: item.color, fontWeight: 500, marginBottom: '16px' }}>{item.role}</div>
      </div>

      {/* BODY */}
      <div style={{ padding: '24px 32px 32px' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--fg-secondary)', lineHeight: 1.9, marginBottom: '24px' }}>{item.desc}</p>

        {/* IMPACT — 数値ハイライト */}
        {item.impact &&
        <div style={{
          marginBottom: '28px',
          padding: '20px 22px',
          background: `linear-gradient(135deg, ${item.color}14 0%, ${item.color}06 100%)`,
          border: `1px solid ${item.color}33`,
          borderRadius: 'var(--radius-lg)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ fontFamily: 'var(--font-number)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: item.color }}>IMPACT</div>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--fg-muted)' }} />
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--fg-muted)' }}>{item.impact.caption}</div>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${item.impact.items.length}, 1fr)`,
              gap: '14px'
            }}>
              {item.impact.items.map((m, i) =>
            <div key={i} style={{
              padding: '12px 8px',
              borderLeft: i === 0 ? 'none' : '1px solid var(--border-subtle)',
              textAlign: 'center'
            }}>
                  <div style={{
                fontFamily: 'var(--font-number)', fontSize: 'clamp(22px, 3vw, 30px)',
                fontWeight: 800, color: item.color, letterSpacing: '-0.02em',
                lineHeight: 1.1, marginBottom: '6px'
              }}>{m.value}</div>
                  <div style={{
                fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600,
                color: 'var(--fg-primary)', marginBottom: '2px'
              }}>{m.label}</div>
                  {m.sub &&
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: '10px',
                color: 'var(--fg-muted)', lineHeight: 1.4
              }}>{m.sub}</div>
              }
                </div>
            )}
            </div>
          </div>
        }

        {/* Highlights */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{ fontFamily: 'var(--font-number)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '10px' }}>HIGHLIGHTS</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {item.highlights.map((h, i) =>
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: item.color, marginTop: '7px', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--fg-primary)', lineHeight: 1.6 }}>{h}</span>
              </div>
            )}
          </div>
        </div>

        {/* Works — Image-first card grid OR Clients logo grid */}
        {item.clients ?
        <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '14px' }}>
              <div style={{ fontFamily: 'var(--font-number)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)' }}>SUPPORTING CLIENTS（一部）</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', alignItems: 'center', justifyItems: 'center' }}>
              {item.clients.map((c, i) =>
            <ClientLogo key={i} client={c} color={item.color} />
            )}
            </div>
          </div> :

        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <div style={{ fontFamily: 'var(--font-number)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)' }}>WORKS</div>
              <div style={{ fontFamily: 'var(--font-number)', fontSize: '12px', color: 'var(--fg-muted)' }}>{item.works.length} 件</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
              {item.works.map((w, i) => <WorkCard key={i} work={w} color={item.color} />)}
            </div>
          </div>
        }
      </div>
    </div>);

}

function ClientLogo({ client, color }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative', height: '90px', width: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '8px 12px',
        transition: 'all 0.3s var(--ease-out)',
        cursor: 'default'
      }}>
      <img src={client.logo} alt={client.name} title={client.name} style={{
        maxWidth: '100%', maxHeight: '100%', objectFit: 'contain',
        opacity: hov ? 1 : 0.78,
        transform: hov ? 'scale(1.06)' : 'none',
        transition: 'all 0.3s var(--ease-out)'
      }} />
      <div style={{
        position: 'absolute', bottom: '-18px', left: 0, right: 0,
        fontFamily: 'var(--font-number)', fontSize: '10px',
        color: color, letterSpacing: '0.04em',
        opacity: hov ? 1 : 0,
        transform: hov ? 'translateY(0)' : 'translateY(4px)',
        transition: 'all 0.3s var(--ease-out)',
        textAlign: 'center', fontWeight: 700
      }}>{client.name}</div>
    </div>);

}

function WorkCard({ work, color }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: 'var(--bg-elevated)',
        border: `1px solid ${hov ? color + '55' : 'var(--border-subtle)'}`,
        borderRadius: 'var(--radius-lg)', overflow: 'hidden',
        transform: hov ? 'translateY(-3px)' : 'none',
        boxShadow: hov ? `0 12px 28px rgba(0,0,0,0.45), 0 0 0 1px ${color}30` : 'var(--shadow-sm)',
        transition: 'all 0.25s var(--ease-out)', cursor: 'default'
      }}>
      <div style={{
        position: 'relative', aspectRatio: '16/10', overflow: 'hidden',
        background: work.thumbBg || (work.thumb ? '#fff' : `${color}10`)
      }}>
        {work.thumb ?
        <img src={work.thumb} alt={work.title} style={{
          width: '100%', height: '100%', objectFit: work.thumbFit || 'cover',
          transform: hov ? 'scale(1.05)' : 'none',
          transition: 'transform 0.4s var(--ease-out)'
        }} /> :

        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          background: `linear-gradient(135deg, ${color}14, ${color}06)`
        }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.2" opacity="0.55">
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
          </div>
        }
        <span style={{
          position: 'absolute', top: '10px', right: '10px',
          padding: '3px 10px', borderRadius: 'var(--radius-full)',
          background: 'rgba(8,15,26,0.85)', backdropFilter: 'blur(6px)',
          border: `1px solid ${color}55`,
          fontFamily: 'var(--font-number)', fontSize: '12px', color: color, fontWeight: 700,
          whiteSpace: 'nowrap'
        }}>{work.platform}</span>
      </div>
      <div style={{ padding: '12px 14px 14px' }}>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--fg-primary)', fontWeight: 600, lineHeight: 1.45, marginBottom: '4px' }}>{work.title}</div>
        <div style={{ fontFamily: 'var(--font-number)', fontSize: '12px', color: 'var(--fg-muted)', letterSpacing: '0.02em' }}>{work.role}</div>
      </div>
    </div>);

}

// ── STATS ────────────────────────────────────────────────────

function Stats() {
  const [ref, inView] = useInView(0.2);

  return (
    <section ref={ref} style={{ padding: '80px clamp(20px, 5vw, 60px)', background: 'var(--bg-deep)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px',
          opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)',
          transition: 'all 0.7s var(--ease-out) 0.1s'
        }}>
          {DATA.stats.map((s, i) => <StatCard key={i} stat={s} inView={inView} delay={i * 80} />)}
        </div>
      </div>
    </section>);

}

function StatCard({ stat, inView, delay }) {
  const count = useCountUp(stat.num, inView, 1200 + delay);
  return (
    <div style={{
      background: 'var(--bg-surface)', border: '1px solid var(--border)',
      borderRadius: 'var(--radius-xl)', padding: '28px 16px', textAlign: 'center',
      boxShadow: 'var(--shadow-md)',
      opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(16px)',
      transition: `opacity 0.6s var(--ease-out) ${delay}ms, transform 0.6s var(--ease-out) ${delay}ms`
    }}>
      <div style={{ fontFamily: 'var(--font-number)', fontSize: '40px', fontWeight: 700, color: 'var(--fg-primary)', lineHeight: 1, marginBottom: '4px' }}>
        {count}<span style={{ fontSize: '18px', color: 'var(--accent)', marginLeft: '2px' }}>{stat.suffix}</span>
      </div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--fg-secondary)', lineHeight: 1.65, whiteSpace: 'pre-line', marginTop: '8px' }}>{stat.label}</div>
    </div>);

}

// ── SELF ANALYSIS (Pentagon Chart) ───────────────────────────

function SelfAnalysis() {
  const [ref, inView] = useInView(0.1);

  if (!DATA.selfAnalysis) return null;

  const axes = DATA.selfAnalysis.axes;
  const N = axes.length;
  const MAX = 5;

  // Geometry
  const SIZE = 420;
  const CX = SIZE / 2;
  const CY = SIZE / 2;
  const R = 150; // outer radius

  const angle = (i) => (Math.PI * 2 * i) / N - Math.PI / 2; // start at top

  const point = (i, radius) => {
    const a = angle(i);
    return [CX + radius * Math.cos(a), CY + radius * Math.sin(a)];
  };

  // Grid polygons (1〜5)
  const gridPolys = [1, 2, 3, 4, 5].map((level) => {
    const pts = axes.map((_, i) => point(i, R * (level / MAX)).join(',')).join(' ');
    return pts;
  });

  // Data polygon
  const dataPts = axes.map((a, i) => point(i, R * (a.score / MAX)).join(',')).join(' ');

  // Axis lines
  const axisLines = axes.map((_, i) => point(i, R));

  // Axis labels (slightly outside)
  const labelPoints = axes.map((_, i) => point(i, R + 36));

  return (
    <section id="self-analysis" ref={ref} style={{
      padding: 'var(--section-gap) clamp(20px, 5vw, 60px)',
      background: 'var(--bg-deep)',
      scrollMarginTop: '80px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionLabel inView={inView}>{DATA.selfAnalysis.label}</SectionLabel>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 900,
          color: 'var(--fg-primary)', marginBottom: '8px', letterSpacing: '-0.02em',
          opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(16px)',
          transition: 'all 0.7s var(--ease-out) 0.15s'
        }}>{DATA.selfAnalysis.caption}</h2>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '13px',
          color: 'var(--fg-muted)', marginBottom: '40px', lineHeight: 1.7,
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.7s var(--ease-out) 0.25s'
        }}>{DATA.selfAnalysis.note}</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 420px) minmax(0, 1fr)',
          gap: '40px',
          alignItems: 'center',
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(12px)',
          transition: 'all 0.8s var(--ease-out) 0.35s'
        }}>
          {/* SVG Pentagon Chart */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '420px', margin: '0 auto' }}>
            <svg viewBox={`0 0 ${SIZE} ${SIZE}`} style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
              {/* Grid polygons */}
              {gridPolys.map((pts, i) =>
              <polygon key={i} points={pts}
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1" />
              )}

              {/* Axis lines */}
              {axisLines.map(([x, y], i) =>
              <line key={i} x1={CX} y1={CY} x2={x} y2={y}
                stroke="rgba(255,255,255,0.10)"
                strokeWidth="1" />
              )}

              {/* Data polygon (strength color) */}
              <polygon points={dataPts}
                fill="rgba(74,222,128,0.18)"
                stroke="#4ade80"
                strokeWidth="2.5"
                strokeLinejoin="round" />

              {/* Data points */}
              {axes.map((a, i) => {
                const [px, py] = point(i, R * (a.score / MAX));
                const color = a.type === 'growth' ? '#fbbf24' : '#4ade80';
                return (
                  <g key={i}>
                    <circle cx={px} cy={py} r="6"
                    fill={color}
                    stroke="var(--bg-deep)"
                    strokeWidth="2.5" />
                  </g>);

              })}

              {/* Axis labels */}
              {axes.map((a, i) => {
                const [lx, ly] = labelPoints[i];
                const color = a.type === 'growth' ? '#fbbf24' : '#a7f3d0';
                return (
                  <g key={i}>
                    <text x={lx} y={ly}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="12"
                    fontWeight="700"
                    fontFamily="var(--font-body)"
                    fill={color}
                    style={{ letterSpacing: '0.02em' }}>
                      {a.name}
                    </text>
                    <text x={lx} y={ly + 16}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="14"
                    fontWeight="800"
                    fontFamily="var(--font-number)"
                    fill={color}>
                      {a.score.toFixed(1)}
                    </text>
                  </g>);

              })}
            </svg>
          </div>

          {/* 凡例 + 説明テキスト */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Legend */}
            <div style={{ display: 'flex', gap: '20px', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '12px', height: '12px', background: '#4ade80', borderRadius: '50%' }} />
                <span style={{ fontFamily: 'var(--font-number)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', color: '#a7f3d0' }}>STRENGTH</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '12px', height: '12px', background: '#fbbf24', borderRadius: '50%' }} />
                <span style={{ fontFamily: 'var(--font-number)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', color: '#fcd34d' }}>GROWTH</span>
              </div>
            </div>

            {axes.map((a, i) => {
              const color = a.type === 'growth' ? '#fbbf24' : '#4ade80';
              const tintBg = a.type === 'growth' ? 'rgba(251,191,36,0.08)' : 'rgba(74,222,128,0.08)';
              const tintBorder = a.type === 'growth' ? 'rgba(251,191,36,0.25)' : 'rgba(74,222,128,0.25)';
              return (
                <div key={i} style={{
                  padding: '14px 16px',
                  background: tintBg,
                  border: `1px solid ${tintBorder}`,
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex', flexDirection: 'column', gap: '6px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width: '8px', height: '8px', background: color, borderRadius: '50%' }} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 700, color: 'var(--fg-primary)', flex: 1 }}>
                      {a.name}
                    </span>
                    <span style={{ fontFamily: 'var(--font-number)', fontSize: '15px', fontWeight: 800, color: color }}>
                      {a.score.toFixed(1)} <span style={{ fontSize: '10px', color: 'var(--fg-muted)', fontWeight: 600 }}>/ {MAX}</span>
                    </span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--fg-secondary)', lineHeight: 1.6 }}>
                    {a.desc}
                  </div>
                </div>);

            })}
          </div>
        </div>
      </div>
    </section>);

}

// ── SKILLS ───────────────────────────────────────────────────

function Skills() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="skills" ref={ref} style={{ padding: 'var(--section-gap) clamp(20px, 5vw, 60px)', background: 'var(--bg-base)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionLabel inView={inView}>SKILLS</SectionLabel>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 900,
          color: 'var(--fg-primary)', marginBottom: '32px', letterSpacing: '-0.02em',
          opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(16px)',
          transition: 'all 0.7s var(--ease-out) 0.15s'
        }}>スキル・経験</h2>

        <div style={{ marginBottom: '32px',
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px',
          opacity: inView ? 1 : 0, transition: 'opacity 0.7s var(--ease-out) 0.3s'
        }}>
          {Object.entries(DATA.skills).map(([cat, tags]) =>
          <div key={cat} style={{
            background: 'var(--bg-surface)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)', padding: '22px'
          }}>
              <div style={{
              fontFamily: 'var(--font-number)', fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px'
            }}>{cat}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                {tags.map((t) =>
              <span key={t} style={{
                padding: '5px 12px', borderRadius: 'var(--radius-full)',
                background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-subtle)',
                fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--fg-secondary)',
                whiteSpace: 'nowrap'
              }}>{t}</span>
              )}
              </div>
            </div>
          )}
        </div>

        {/* AI × WORK Impact Block */}
        {DATA.aiImpact &&
        <div style={{
          marginBottom: '32px',
          padding: '24px 26px',
          background: 'linear-gradient(135deg, rgba(74,222,128,0.10) 0%, rgba(74,222,128,0.04) 100%)',
          border: '1px solid rgba(74,222,128,0.28)',
          borderRadius: 'var(--radius-xl)',
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(12px)',
          transition: 'all 0.7s var(--ease-out) 0.2s'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <div style={{ fontFamily: 'var(--font-number)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#4ade80' }}>AI × WORK</div>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--fg-muted)' }} />
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--fg-secondary)' }}>{DATA.aiImpact.caption}</div>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${DATA.aiImpact.items.length}, 1fr)`,
              gap: '14px',
              alignItems: 'stretch'
            }}>
              {DATA.aiImpact.items.map((m, i) =>
            <div key={i} style={{
              padding: '14px 10px',
              borderLeft: i === 0 ? 'none' : '1px solid var(--border-subtle)',
              textAlign: 'center',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'
            }}>
                  <div style={{
                fontFamily: 'var(--font-number)',
                fontSize: 'clamp(22px, 2.8vw, 30px)',
                fontWeight: 800, color: '#4ade80', letterSpacing: '-0.02em',
                lineHeight: 1.1, marginBottom: '8px', whiteSpace: 'nowrap'
              }}>{m.value}</div>
                  <div style={{
                fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600,
                color: 'var(--fg-primary)', marginBottom: '4px', lineHeight: 1.4
              }}>{m.label}</div>
                  {m.sub &&
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: '11px',
                color: 'var(--fg-muted)', lineHeight: 1.5
              }}>{m.sub}</div>
              }
                </div>
            )}
            </div>
            {DATA.aiImpact.tags &&
          <div style={{
            marginTop: '22px', paddingTop: '20px',
            borderTop: '1px solid rgba(74,222,128,0.18)'
          }}>
              <div style={{
              fontFamily: 'var(--font-number)', fontSize: '10px', fontWeight: 700,
              letterSpacing: '0.22em', color: '#4ade80',
              textAlign: 'center', marginBottom: '14px'
            }}>KEYWORDS</div>
              <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '9px', justifyContent: 'center'
            }}>
                {DATA.aiImpact.tags.map((t) =>
              <span key={t} style={{
                padding: '7px 14px', borderRadius: 'var(--radius-full)',
                background: 'rgba(74,222,128,0.16)', border: '1px solid rgba(74,222,128,0.42)',
                fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600,
                color: '#a7f3d0', whiteSpace: 'nowrap',
                boxShadow: '0 2px 8px rgba(74,222,128,0.10)'
              }}>{t}</span>
              )}
              </div>
            </div>
          }
            {DATA.aiImpact.certificate &&
          <div style={{
            marginTop: '20px', paddingTop: '20px',
            borderTop: '1px solid rgba(74,222,128,0.18)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'
          }}>
              <div style={{
              fontFamily: 'var(--font-number)', fontSize: '10px', fontWeight: 700,
              letterSpacing: '0.22em', color: '#4ade80'
            }}>CERTIFICATE</div>
              <a href={DATA.aiImpact.certificate.pdf} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              borderRadius: 'var(--radius-md)', overflow: 'hidden',
              border: '1px solid rgba(74,222,128,0.35)',
              boxShadow: '0 6px 18px rgba(0,0,0,0.30)',
              transition: 'transform 0.2s var(--ease-out), box-shadow 0.2s var(--ease-out)',
              cursor: 'pointer', textDecoration: 'none',
              maxWidth: '420px', width: '100%'
            }}
            onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-3px)';e.currentTarget.style.boxShadow = '0 12px 28px rgba(74,222,128,0.28)';}}
            onMouseLeave={(e) => {e.currentTarget.style.transform = 'none';e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.30)';}}>
                <img src={DATA.aiImpact.certificate.image} alt="DMM 生成AI CAMP 認定証"
              style={{ display: 'block', width: '100%', height: 'auto' }} />
                <div style={{
                padding: '8px 12px', fontSize: '11px',
                fontFamily: 'var(--font-number)', letterSpacing: '0.1em',
                color: '#4ade80', textAlign: 'center',
                background: 'rgba(0,0,0,0.5)'
              }}>VIEW FULL PDF ↗</div>
              </a>
            </div>
          }
          </div>
        }

      </div>
    </section>);

}

// ── NEXT ─────────────────────────────────────────────────────

function Next() {
  const [ref, inView] = useInView(0.1);

  if (!DATA.next) return null;

  return (
    <section id="next" ref={ref} style={{
      padding: 'var(--section-gap) clamp(20px, 5vw, 60px)',
      background: 'var(--bg-deep)',
      scrollMarginTop: '80px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionLabel inView={inView}>{DATA.next.label}</SectionLabel>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 900,
          color: 'var(--fg-primary)', marginBottom: '8px', letterSpacing: '-0.02em',
          opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(16px)',
          transition: 'all 0.7s var(--ease-out) 0.15s'
        }}>{DATA.next.caption}</h2>

        {/* 原点：監禁男子エピソード */}
        <div style={{
          marginTop: '32px', marginBottom: '32px',
          padding: '26px 30px',
          background: 'linear-gradient(135deg, rgba(74,222,128,0.10) 0%, rgba(74,222,128,0.04) 100%)',
          border: '1px solid rgba(74,222,128,0.32)',
          borderRadius: 'var(--radius-xl)',
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(12px)',
          transition: 'all 0.7s var(--ease-out) 0.25s'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{ fontFamily: 'var(--font-number)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#4ade80' }}>ORIGIN</div>
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--fg-muted)' }} />
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--fg-secondary)' }}>キャリアの北極星</div>
          </div>
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.4vw, 28px)', fontWeight: 800,
            color: '#a7f3d0', letterSpacing: '-0.01em', lineHeight: 1.4, marginBottom: '14px'
          }}>{DATA.next.origin.title}</div>
          <div style={{
            fontFamily: 'var(--font-body)', fontSize: '14.5px',
            color: 'var(--fg-secondary)', lineHeight: 1.85
          }}>{DATA.next.origin.body}</div>
        </div>

        {/* 3年後・10年後ゴール */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '20px',
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(12px)',
          transition: 'all 0.7s var(--ease-out) 0.35s'
        }}>
          {DATA.next.goals.map((g, i) =>
          <div key={i} style={{
            padding: '24px 26px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)'
          }}>
              <div style={{
              display: 'inline-block', padding: '4px 12px', marginBottom: '14px',
              background: 'rgba(78,168,222,0.12)',
              border: '1px solid rgba(78,168,222,0.35)',
              borderRadius: 'var(--radius-full)',
              fontFamily: 'var(--font-number)', fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.18em', color: 'var(--accent)', textTransform: 'uppercase'
            }}>{g.timeframe}</div>
              <div style={{
              fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 700,
              color: 'var(--fg-primary)', lineHeight: 1.55, marginBottom: '14px'
            }}>{g.title}</div>
              <div style={{ marginBottom: '14px' }}>
                <div style={{
                fontFamily: 'var(--font-number)', fontSize: '10px', fontWeight: 700,
                letterSpacing: '0.18em', color: 'var(--fg-muted)', marginBottom: '8px'
              }}>BENCHMARKS</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {g.benchmarks.map((b) =>
                <span key={b} style={{
                  padding: '4px 10px', borderRadius: 'var(--radius-full)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border-subtle)',
                  fontFamily: 'var(--font-body)', fontSize: '12px',
                  color: 'var(--fg-secondary)', whiteSpace: 'nowrap'
                }}>{b}</span>
                )}
                </div>
              </div>
              <div style={{
              fontFamily: 'var(--font-body)', fontSize: '13px',
              color: 'var(--fg-muted)', lineHeight: 1.7
            }}>{g.desc}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ── PRIVATE WORKS ────────────────────────────────────────────

function Private() {
  const [ref, inView] = useInView(0.1);

  if (!DATA.privateWorks) return null;

  return (
    <section id="private" ref={ref} style={{
      padding: 'var(--section-gap) clamp(20px, 5vw, 60px)',
      background: 'var(--bg-base)',
      scrollMarginTop: '80px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionLabel inView={inView}>{DATA.privateWorks.label}</SectionLabel>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 900,
          color: 'var(--fg-primary)', marginBottom: '32px', letterSpacing: '-0.02em',
          opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(16px)',
          transition: 'all 0.7s var(--ease-out) 0.15s'
        }}>{DATA.privateWorks.caption}</h2>

        <div style={{
          display: 'flex', flexDirection: 'column', gap: '20px',
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(12px)',
          transition: 'all 0.7s var(--ease-out) 0.3s'
        }}>
          {DATA.privateWorks.items.map((w, i) =>
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
            gap: '24px',
            padding: '22px',
            background: 'var(--bg-surface)',
            border: '1px solid rgba(244,114,182,0.22)',
            borderRadius: 'var(--radius-xl)',
            alignItems: 'start'
          }}>
              <div style={{ minWidth: 0 }}>
                <div style={{
                display: 'inline-block',
                padding: '4px 12px', marginBottom: '12px',
                background: 'rgba(244,114,182,0.16)',
                border: '1px solid rgba(244,114,182,0.4)',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-number)', fontSize: '11px', fontWeight: 700,
                letterSpacing: '0.18em', color: '#f9a8d4', textTransform: 'uppercase'
              }}>{w.year}</div>
                <div style={{
                fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 700,
                color: 'var(--fg-primary)', lineHeight: 1.5, marginBottom: '12px'
              }}>{w.title}</div>
                <div style={{
                fontFamily: 'var(--font-body)', fontSize: '13.5px',
                color: 'var(--fg-secondary)', lineHeight: 1.75, marginBottom: '16px'
              }}>{w.desc}</div>
                {w.officialUrl &&
              <a href={w.officialUrl} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontFamily: 'var(--font-number)', fontSize: '11px', fontWeight: 700,
                letterSpacing: '0.14em', color: '#f9a8d4', textDecoration: 'none',
                padding: '7px 14px',
                border: '1px solid rgba(244,114,182,0.35)',
                borderRadius: 'var(--radius-full)',
                transition: 'background 0.2s var(--ease-out)'
              }}
              onMouseEnter={(e) => {e.currentTarget.style.background = 'rgba(244,114,182,0.12)';}}
              onMouseLeave={(e) => {e.currentTarget.style.background = 'transparent';}}>
                    {w.officialLabel || '公式ページ'} ↗
                  </a>
              }
              </div>
              {(w.youtubeId || w.videoSrc) &&
            <div style={{
              position: 'relative', width: '100%',
              aspectRatio: '16 / 9',
              borderRadius: 'var(--radius-md)', overflow: 'hidden',
              border: '1px solid rgba(244,114,182,0.25)',
              boxShadow: '0 6px 18px rgba(0,0,0,0.30)',
              background: '#000'
            }}>
                  {w.youtubeId ?
              <iframe
                src={`https://www.youtube.com/embed/${w.youtubeId}`}
                title={w.title}
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }} /> :

              <video
                src={w.videoSrc}
                controls
                playsInline
                preload="metadata"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', background: '#000' }} />
              }
                </div>
            }
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ── CONTACT ──────────────────────────────────────────────────

function ThankYou() {
  const [ref, inView] = useInView(0.2);
  const fade = (d = 0) => ({
    opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(14px)',
    transition: `all 0.9s var(--ease-out) ${d}s`
  });

  return (
    <section id="thanks" ref={ref} style={{
      padding: 'calc(var(--section-gap) + 40px) clamp(20px, 5vw, 60px)',
      background: 'var(--bg-deep)', textAlign: 'center', position: 'relative', overflow: 'hidden'
    }}>
      {/* Decorative glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '900px', height: '900px', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(78,168,222,0.09) 0%, transparent 60%)'
      }} />
      {/* Decorative grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.4,
        backgroundImage: 'linear-gradient(rgba(78,168,222,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(78,168,222,0.04) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      <div style={{ position: 'relative', maxWidth: '720px', margin: '0 auto' }}>
        <div style={{
          ...fade(0.1),
          display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '32px'
        }}>
          <div style={{ width: '36px', height: '1px', background: 'var(--accent)' }} />
          <span style={{ fontFamily: 'var(--font-number)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--accent)' }}>FIN</span>
          <div style={{ width: '36px', height: '1px', background: 'var(--accent)' }} />
        </div>
        <h2 style={{
          ...fade(0.22),
          fontFamily: 'var(--font-display)', fontSize: 'clamp(56px, 10vw, 120px)',
          fontWeight: 900, color: 'var(--fg-primary)', lineHeight: 1.05,
          letterSpacing: '-0.03em', marginBottom: '28px'
        }}>
          Thank<span style={{ color: 'var(--accent)' }}>&nbsp;you!</span>
        </h2>
        <p style={{
          ...fade(0.4),
          fontFamily: 'var(--font-body)', fontSize: '17px',
          color: 'var(--fg-secondary)', lineHeight: 1.9,
          maxWidth: '460px', margin: '0 auto'
        }}>
          最後までご覧いただきありがとうございました。
        </p>
      </div>
    </section>);

}

// ── FOOTER ───────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{
      padding: '28px clamp(20px, 5vw, 60px)',
      background: 'var(--bg-deep)', borderTop: '1px solid var(--border-subtle)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px'
    }}>
      <span style={{ fontFamily: 'var(--font-number)', fontSize: '14px', color: 'var(--fg-muted)' }}>
        © 2026 石島慎也 Shinya Ishijima
      </span>
      <div style={{ display: 'flex', gap: '20px' }}>
        {[
        { label: 'About', id: 'about' },
        { label: 'Career', id: 'career' },
        { label: 'Self', id: 'self-analysis' },
        { label: 'Skills', id: 'skills' },
        { label: 'Private', id: 'private' }].
        map((l) =>
        <a key={l.id} href={`#${l.id}`} style={{
          fontFamily: 'var(--font-number)', fontSize: '13px', color: 'var(--fg-muted)',
          textDecoration: 'none', letterSpacing: '0.05em'
        }}>{l.label}</a>
        )}
      </div>
    </footer>);

}

// ── SHARED ───────────────────────────────────────────────────

function SectionLabel({ children, inView }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px',
      opacity: inView ? 1 : 0, transition: 'opacity 0.6s var(--ease-out) 0.05s'
    }}>
      <div style={{ width: '24px', height: '1px', background: 'var(--accent)' }} />
      <span style={{ fontFamily: 'var(--font-number)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent)' }}>{children}</span>
    </div>);

}

function BtnPrimary({ href, children }) {
  const [hov, setHov] = React.useState(false);
  return (
    <a href={href}
    onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      padding: '12px 28px', borderRadius: 'var(--radius-md)',
      background: hov ? 'var(--accent-glow)' : 'var(--accent)',
      color: 'var(--bg-deep)', fontFamily: 'var(--font-number)', fontSize: '15px', fontWeight: 700,
      textDecoration: 'none', letterSpacing: '0.04em',
      transform: hov ? 'scale(1.02)' : 'none',
      boxShadow: hov ? 'var(--shadow-glow)' : 'none',
      transition: 'all 0.2s var(--ease-out)'
    }}>{children}</a>);

}

function BtnOutline({ href, children }) {
  const [hov, setHov] = React.useState(false);
  return (
    <a href={href}
    onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      padding: '12px 28px', borderRadius: 'var(--radius-md)',
      background: hov ? 'rgba(78,168,222,0.09)' : 'transparent',
      border: `1px solid ${hov ? 'var(--accent)' : 'var(--border-hover)'}`,
      color: 'var(--accent)', fontFamily: 'var(--font-number)', fontSize: '15px', fontWeight: 700,
      textDecoration: 'none', letterSpacing: '0.04em',
      transition: 'all 0.2s var(--ease-out)'
    }}>{children}</a>);

}

// ── APP ──────────────────────────────────────────────────────

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', t.accentColor);
    document.documentElement.style.setProperty('--accent-glow', t.accentColor);
  }, [t.accentColor]);

  return (
    <div style={{ background: 'var(--bg-base)', minHeight: '100vh' }}>
      <Nav />
      <SideNav />
      <Hero />
      <About />
      <Statement />
      <Career />
      <SelfAnalysis />
      <Skills />
      <Private />
      <ThankYou />
      <Footer />

      <TweaksPanel>
        <TweakSection label="アクセントカラー" />
        <TweakColor
          label="カラー"
          value={t.accentColor}
          options={['#4ea8de', '#38bdf8', '#a78bfa', '#f472b6', '#4ade80']}
          onChange={(v) => setTweak('accentColor', v)} />
        
        <TweakSection label="レイアウト" />
        <TweakRadio
          label="密度"
          value={t.density}
          options={['compact', 'normal']}
          onChange={(v) => setTweak('density', v)} />
        
      </TweaksPanel>
    </div>);

}

Object.assign(window, { App });