# Portfolio2026/CLAUDE.md Session Handoff archive (2026-06-23 退避)

> 元の `/Users/issy/コーディング/02_Claude_Code/05_プライベート/キャリア/Portfolio2026/CLAUDE.md` の Session Handoff から退避した過去履歴。
> CLAUDE.md は40k char limit を超えてコンテキストを圧迫していたため、直近3本以外をこちらに移動。
> 必要時は明示 Read で参照可能。

---

### 2026-05-16 — UIブラッシュアップ・公開後の調整

公開後の使い心地を整える調整ラウンド。コンテンツ拡張前の土台固め。

**反映済み:**
- キャリアタブ切替時、`CareerDetail` の先頭までスムーススクロール（ワークス等を下まで読んだ後の文脈飛び対策）
- Skillsから「プラットフォーム」カテゴリ（LINE LIVE/YouTube/Facebook Live/Firework/17Live）を削除
- タイトル「石島慎也 ポートフォリオ2026」、favicon を 🎥（映画カメラ絵文字SVG）に変更
- 左フローティングナビ `SideNav` 追加
  - 縦並びドット + ラベル常時表示 + 「JUMP TO」見出し
  - 通常時は薄グレー、ホバー/アクティブ時のみ明るく強調
  - アクティブ判定を `scrollY + NAV_OFFSET` 方式に修正（旧 IntersectionObserver ratio 方式は短フッターで固着する）
  - 最初から常時表示（旧: スクロール40%超えてから表示）
- 上部Nav と 左ナビのラベル: About → Profile、左ナビから Thanks 除外
- 表紙CTAボタン（プロフィール / キャリアを見る）削除（左ナビと上部Navで導線確保済み）
- 個人メモ `content-draft.md`、`research-findings.md` の混入を `.gitignore` 強化で対策

**チェックポイント:** `ui-polish-before-quant`（SHA: 03e118d）
→ UI調整一段落、定量評価入れ込みは次回。

### 2026-05-16（夜） — 定量評価＋AIスキル可視化

採用ポートフォリオの「定量実績の薄さ」を解消する重要セッション。FY25 Annual Feedbackの「データドリブン裏付け」指摘への直接的な回答にもなる。

**反映済み:**
- **Firework IMPACTブロック新設**（Career詳細・緑系）
  - ×3.6 売上成長 (前年比 FY24→FY25)
  - +15% 粗利改善 (粗利額)
  - 33% NewBiz構成比 (Japan Team全体売上における比率)
- **Statsカード後ろ2枚をFirework系に差替** (16年目 / 6社 / ×3.6倍 / +15%)
  - useCountUpを小数対応に拡張
- **AI × WORK ブロック**（Skills・緑系）
  - 15h→2h 配信分析 / 30h→8h 大型提案資料 / DMM認定
  - 「大手企業・大型提案を主戦場に」スコープ明記
  - KEYWORDS 12個（強調デザイン）
  - DMM認定証PDFを独立配置（最大幅420px、ホバーで浮く）
  - 「コード書ける」→「バイブコーディングする」事業責任者に文言変更
- **AI for Self-Coaching ブロック**（Skills・紫系）
  - 3ステップフロー：稼働時間トラッキング → AI学習 → 自分専用AIコーチ
  - 「経営者のように自分を経営するパーソナルコーチ」
- **bio差替え**（卒業後・参画・牽引などの動詞精査）
- **各社表記揺れ修正**（Warner社名統一、Candee役職統一、Live前スペース等）
- **スキル順序整理**: 5カテゴリ → AI×WORK → Self-Coaching、「生成AIツール」を最後
- **個人ファイル除外**: worksheet.html / content-*.md / research-*.md / draft-*.md を .gitignore に集約

**重要な学び（memory化）:**
- 「-75%」のような%表記より「15h→2h」の実時間ペアの方が反証されにくく強い
- スコープ明記（「大手企業・大型提案」「年次報告レベル」）が必須
- ファクトチェックは別エージェントに独立検証させる（自己ループを避ける）
- 3カードIMPACTパターン＋統一カラー言語が視認性最強

**チェックポイント:** `quant-and-ai-skills-done`（SHA: 53f3d03）
→ 定量＋AI可視化が一段落、ブラウザ動作確認は次回。

### 2026-05-16（深夜2セッション目） — ワークシート対話3セクション完了＋大手応募先リサーチ＋EFセクション追加

worksheet.html を対話で埋め始め、S3/B2/A2 の3セクションを完了。さらにAnnual Feedbackメモを起点に新規セクション **EF（External Feedback）** を10個目として追加。買い物中の自走時間で4タスク並列実行。

**確定した内容:**
- **S3 By the Numbers**: TOP5 = ×3.6 / +15% / 9業界 / 16年6社 / 自作15+
  - 方針: Firework定量のみ具体、個別クライアントは社名列挙のみ、推測ベース数字なし
- **B2 Niche Identity**: 「クリエイティブと事業成長、二刀流で挑む**クリエイター**」（映像プロデューサーから変更）
- **A2 Career Arc**: 4章日本語統一
  - Ch.1 制作者 (2011-2018) / Ch.2 プロデューサー (2018-2023) / Ch.3 事業責任者 (2024-現在) / Ch.4 熱狂を作る人 (Next)
- **新EFセクション追加**: Annual Feedback（2025 mid year + FY25）のスコア・伸びしろを「カントリーマネージャー × 同僚Peer Review」と表記して掲載

**買い物中の自走4タスク（並列バックグラウンド完了）:**
1. `worksheet-portfolio-snapshot.md` — 公開JSXのDATA完全棚卸し（27作品、6社全データ、AI×WORK 12タグ）
2. `worksheet-pre-drafts.md` — 残り7セクションの推薦案（A/B/C即決粒度・約10KB）
3. `worksheet-target-companies.md` — 大手6社の最新事業課題＋Whyステートメント草案（約16KB）
4. `worksheet-deploy-check.md` — デプロイ動作確認（HTTPレベル不具合ゼロ）

**重要な発見:**
- **OPENRECは2023年からDONUTSグループ子会社運営**（旧前提「CyberZ運営」は誤り）
- **DMMが最マッチ度1位**（60事業並行 × 9業界並行の思想一致）
- **ABEMA 2026年Q1単体黒字達成・社長交代（藤田晋→山内隆裕）**で編成戦略人材を増強中
- **Netflix Japan 2026 WBC独占で日本史上最大視聴記録・登録者1,000万人突破**
- **tweaks-panel.jsxが本番でも配信されている**（要非表示判断）
- 未参照アセット6件（liveshop.webp等）

**.gitignore追加:** `worksheet-*.md` パターン（個人用採用戦略mdを公開リポから除外）

**S1で中断中:** TOP3〜5の選定途中。TOP2（D2/D1）確定、3〜5位の選択を再考中。`worksheet-pre-drafts.md` に5パターン用意済み。

**チェックポイント:** `worksheet-3sections-done-plus-research`（SHA: c68ec5d）

### 2026-05-16（夜3セッション目） — worksheet独立リポデプロイ＋S1候補ランク表埋め込み

worksheet.html を別リポで公開URL化し、S1セクションを視認性の高い候補ランクUIに刷新。

**実施したこと:**
1. **portfolio2026-worksheet 別リポ作成**
   - 場所: `/Users/issy_s/コーディング/02_Claude_Code/05_プライベート/キャリア/portfolio2026-worksheet/`
   - 公開URL: **https://riderkarubo.github.io/portfolio2026-worksheet/**
   - Public・GitHub Pages 配信（main / ルート）
   - 同期方式: 本体 `worksheet.html` を `index.html` にコピー→commit→push
   - 初版コミット: `02373e5`
2. **S1セクション全面改装**（HTML埋め込み・md廃止）
   - 候補ランクUI新設: ⭐⭐⭐高推薦5件 / ⭐⭐中推薦4件 / ⭐低推薦3件
   - 各候補に「採用基準・既出連動・公開リスク（低/中/高 色分け）・物語・一言コメント」をdl形式で構造化
   - 確定TOP2（D2/D1）をオレンジ枠で明示
   - オススメ組合せ4案（案①〜④）を Pros/Cons 付きで配置
   - 取捨選択時の問い4項目を `.hint` で添付
3. **CSSクラス追加**
   - `.rank-section` / `.rank-section-title.{high,mid,low}`
   - `.cand-card.{high,mid,low,confirmed}` / `.cand-id` / `.cand-meta` / `.cand-oneliner` / `.cand-warn`
   - `.combo-block` / `.combo-item` / `.combo-seq` / `.combo-pros` / `.combo-cons`
   - `.risk-low` / `.risk-mid` / `.risk-high`（公開リスク3段階）
4. **ステータス更新**
   - S1: `UNTOUCHED` → `IN PROGRESS`、進捗ドット `wip`（金色）に
   - TOC表記: 「未着手」→「TOP2確定 / 3-5位選定中」
5. **デプロイ完了**
   - worksheetリポ最新コミット: `381eb15`
   - 公開URL HTTP 200 確認済み

**重要な学び:**
- md形式で候補一覧を見ても視認性が悪く、HTML側に直接構造化UIで埋め込んだ方が判断速度が上がる
- 個人用センシティブ情報を含むコンテンツは「URL推測困難＋本体リポと分離」が現実的解（Free GitHubでもPublicでOK・SSO不要）
- 別リポ運用は同期コストが発生するが、本体の公開ポートフォリオが汚れない利点が大きい

**チェックポイント:** `worksheet-s1-rank-ui-deployed`（Portfolio2026: c68ec5d unchanged / portfolio2026-worksheet: 381eb15）

## 次セッションへの引き継ぎ（未完了タスク）

### ⭐ 最優先：worksheet.html を対話形式で埋めていく

`worksheet.html` をブラウザで開きながら、9セクションを順番に対話で固める。

**進行手順:**
1. ブラウザで **https://riderkarubo.github.io/portfolio2026-worksheet/** を開く（または `open worksheet.html` でローカル）
2. **次は S1 Decisions I Made の 3-5位選定（最終確定）** — TOP2（D2/D1）確定済み、候補ランク表をHTML埋め込み済み
3. 高推薦5件（D13/D7/D6/D14/D8）+ オススメ組合せ4案を見ながら即決
4. 対話で固まった内容を、Claude が `worksheet.html` の Answer ボックスに直接書き込む（Edit ツール使用）
5. ステータスバッジを `empty` → `wip` → `done` に進める
6. 更新後は `cp worksheet.html ../portfolio2026-worksheet/index.html && cd ../portfolio2026-worksheet && git add -A && git commit -m "..." && git push` で公開URLに反映

**順序（軽い→重い）/ 進捗 3/10 完了 + S1 wip:**
✅ S3 → ✅ B2 → ✅ A2 → **🟡 S1（3-5位選定UI構築完了・最終確定待ち）** → S2 → B1 → EF → A3 → B3 → A1

**進行管理のコツ:**
- 1セクション=1〜3問程度。集中力切れたら次回へ
- Answer 書き込み時、CSSクラスを `answer empty` → `answer done` に変更
- 進捗ドット（ヘッダー）も更新（CSSクラス `done` 追加）

**再開の合言葉:** 「**ワークシートの続き**」または「**素材洗い出しの続き**」

**関連ファイル:**
- `worksheet.html` — 対話ワークシート本体（10セクション・S3/B2/A2 完了）
- `worksheet-pre-drafts.md` — ⭐残り7セクションの推薦案A/B/C（即決粒度）
- `worksheet-target-companies.md` — ⭐大手6社の最新事業課題＋Whyステートメント草案
- `worksheet-portfolio-snapshot.md` — ⭐公開JSXの全DATA棚卸し（被り防止）
- `worksheet-deploy-check.md` — デプロイ動作確認（不具合ゼロ・要対応2件）
- `research-extracted-materials.md` — 抽出素材集（参照用・ローカルのみ）
- `research-findings.md` — 採用基準リサーチ（Netflix/DMM/AbemaTV TOP10）
- `content-draft.md` — 旧草案（参考）

---

### ✅ 完了済み（参考）

**定量評価の入れ込み** — 2026-05-16夜セッションで完了
- Firework IMPACT / AI×WORK / Self-Coaching の3ブロック実装済み
- 詳細は「直近の作業履歴」セクション参照

---

### 残課題：ブラウザ動作確認

公開URLを実際にブラウザで開き、以下をチェック：
- Hero / About(Profile) / Career / Skills の表示崩れ
- 全画像表示OK（WebP漏れ確認）
- モバイル(375px)/タブレット(768px)/PC(1440px)でレスポンシブ崩れ無し
- 左フローティングナビ（SideNav）のアクティブ判定が全セクションで正確
- Firework詳細のIMPACT 3カラム表示
- Skills の AI×WORK / Self-Coaching ブロックの表示
- DMM認定証PDFリンクが200で開く
- tweaks-panel.jsx が本番でも表示されるか（隠す必要があれば対応）

### コンテンツ拡張作業 — 中断中

`content-draft.md` の9セクション草案に質問を併記してある。
再開時は **S3 By the Numbers（数字の棚卸し）** から始めるのが推奨。
事実ベースで埋めやすく、後のS1/S2の素材になる。

推奨進行順:
1. S3 By the Numbers（数字10〜15個）
2. B2 Niche Identity（1行宣言）
3. A2 Career Arc（16年を3〜4章へ）
4. S1 Decisions I Made（最重要・意思決定3〜5件）
5. S2 Bets & Pivots（失敗・撤退）
6. B1 Leadership Philosophy
7. A3 References Wall（推薦コメント依頼 — 早めに動き出し）
8. B3 Now / Next
9. A1 Why This Company（応募先別）

再開の合言葉: 「**ポートフォリオの続き**」または「**コンテンツ拡張の続き**」

---

### 既存の未完了タスク

優先度順：

1. **ブラウザ動作確認**
   - 公開URL https://riderkarubo.github.io/portfolio2026/ を実際に開いて全セクション表示確認
   - Hero / Works / Clients / About / Contact が崩れていないか
   - 画像が全て表示されるか（WebP変換ミスの取りこぼし確認）
   - モバイル（375px）/タブレット（768px）/PC（1440px）でレスポンシブ崩れ無しか
   - tweaks-panel.jsx が本番でも表示されるか（隠す必要があれば対応）

2. **OGP表示確認**
   - Twitter Card Validator: https://cards-dev.twitter.com/validator
   - Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
   - 専用OGP画像（1200×630）を別途作成する選択肢あり

3. **コンテンツ調整**（必要に応じて）
   - 経歴・実績の最新化
   - 連絡先・SNSリンクの確認
   - 不要セクションの削除

4. **将来オプション**
   - カスタムドメイン設定
   - Babel-standaloneをビルド成果物に置き換え（初回ロード高速化）
   - パスワード保護（クライアント限定公開に切り替える場合）

## 関連コマンド

```bash
# ローカル確認
python3 -m http.server 8080
# → http://localhost:8080/

# デプロイ（commit & push で自動配信）
git add -A && git commit -m "..." && git push

# Pages ビルド状況
gh api repos/riderkarubo/portfolio2026/pages/builds/latest --jq .status

# 疎通確認
/usr/bin/curl -I https://riderkarubo.github.io/portfolio2026/
```

## 🔄 Session Handoff（2026-05-16 夜4セッション目）

### 今日やったこと
- worksheet全10セクションを「骨子（Final Copy）+ メモ（折り畳み）」構造へ全面リビルド（worksheet:983edc0）
- A2 Ch.4 と B3 Next にリアリティーショー領域を反映、ベンチマーク5作品で統一（SASUKE/白と黒のスプーン/あいの里/マネーの虎/愛の貧乏脱出大作戦）
- B1 Leadership 4原則目「AI時代こそ人間の非合理・ムダに価値がある」を確定、B3 10年「海外通用・後世に残るコンテンツ」野望を確定
- 「万人受けではなく」等の自己否定表現を全削除（採用文章の逆効果表現対策）
- チェックポイント3件作成：`worksheet-s1-rank-ui-deployed`(381eb15) → `worksheet-all-sections-kosshi-memo-deployed`(bbe70e1) → `worksheet-vision-memo-and-5-benchmarks-deployed`(5bbfcd1 最新)
- スキル2件抽出：`final-copy-plus-memo-fold-pattern.md` ／ `recruiting-portfolio-counter-productive-expressions.md`

### 未完了・次回やること
- 進捗：A2/B2/B3 = ✅骨子確定／S1/S3/B1/EF = 🟡骨子部分確定TBD残／S2/A3/A1 = ⚪骨子枠のみ
- 残りTBD：S3 5位AI数字 / S1 3-5位 / B1 5原則目 / EF 公開範囲 / S2 中身選定 / A3 中身選定 / A1 各社ステートメント
- 最優先候補：S1 3-5位の最終確定（候補ランク表+オススメ組合せ4案 が骨子内に既に用意済み）
- 公開ポートフォリオ（portfolio-components.jsx）への転写は最後にまとめて

### 注意点・申し送り
- worksheet編集後は必ず `cp worksheet.html ../portfolio2026-worksheet/index.html && git -C ../portfolio2026-worksheet add/commit/push` でミラー同期
- 新セクション編集時は「骨子+メモ」構造を厳守（詳細：`~/.claude/skills/learned/final-copy-plus-memo-fold-pattern.md`）
- 採用文章を書く前に `grep -ni "万人受け\|ニッチ\|マイノリティ\|型にはまらない\|完璧主義ではない\|失敗を恐れ\|縛られ" worksheet.html` で逆効果表現を自動チェック
- Bash操作で別リポを扱うときは `cd` 禁止、`git -C <絶対パス>` を使う
- 大量HTML置換は Python ヒアドキュメント一括で（日本語全角括弧の罠回避）
- 再開合言葉：「**ワークシートの続き**」または「**S1の続き**」

## 🔄 Session Handoff（2026-05-16 夜5セッション目）

### 今日やったこと
- **公開ポートフォリオ：Statementセクション新設**（Hero直後・bg-deep）
  - キャッチコピー「クリエイティブと事業成長、二刀流で挑む / **コンテンツビジネスプロデューサー**」
  - B2 Niche Identity の旧「クリエイター」→「コンテンツビジネスプロデューサー」に職能アップグレード
  - WHO I AM 小ラベル + 2行構成、職能名 accent色強調、fade-inアニメ
  - `portfolio-components.jsx` v=25 → v=26、Portfolio.html / index.html 同期済み
- **worksheet B1メモ：原体験エピソード追加**
  - Candee「監禁男子」配信中、不登校の女子学生がTwitterで「元気をもらえた。登校再開してみようかな」とつぶやいた事例
  - 「仕事で一番嬉しかった瞬間 → コンテンツの可能性を信じる原体験」として⭐material新設
  - B1骨子5原則目候補 / B3「Next」根拠 / A1（応募先別Why）の核 として再利用可能と明記
  - 既存の創作哲学ブロックの簡易記述は新ブロックへの参照リンクに整理
- **チェックポイント**: `statement-section-and-b1-origin-episode`
  - Portfolio2026: `424844b` / portfolio2026-worksheet: `80c6d6a`

### 未完了・次回やること
- **B1骨子5原則目の確定**：監禁男子エピソードを根拠に「人を動かすコンテンツへの信念」系の原則を5番目として昇格させる選択肢が新たに浮上
- **B3「Next」骨子**：監禁男子の体験を「同じ感情をもっと大きなスケールで届けたい」という Next の根拠として組み込む案
- **A1（応募先別Why）**：監禁男子エピソードを各社向けWhyの「なぜこの仕事をするのか」の核として転用
- worksheet 進捗：S1 3-5位最終確定 / S3 5位AI数字 / B1 5原則目 / EF 公開範囲 / S2/A3/A1 中身選定
- 公開ポートフォリオ（portfolio-components.jsx）への転写は最後にまとめて

### 注意点・申し送り
- **公開ポートフォリオの構成（最新・夜6セッション目で改訂）**：Hero(base) → About(deep) → **Statement(base)** → Career(base) → Skills(base) → ThankYou(deep) → Footer
  - Statement は当初Hero直後に配置したが、About後ろに移動して「自己紹介→宣言→実証」の物語性を優先（改訂コミット `4cddaff`）
  - 背景は bg-deep → bg-base に切替（Aboutの濃色から明色で浮き上がる演出）
- Statementセクションは `id="statement"`、SideNav には未追加（Top/Profile/Career/Skills の4点維持）
- B2 Niche Identity の職能名は「コンテンツビジネスプロデューサー」で確定（worksheetも同期推奨・次回反映）
- 監禁男子エピソードはB1メモに格納、骨子化するか否かは次セッションで判断
- 再開合言葉：「**ワークシートの続き**」「**B1の5原則目**」「**B3 Nextの続き**」

## 🔄 Session Handoff（2026-05-16 夜6セッション目・追加調整）

### 今日やったこと（追加分）
- **Statementセクションの配置改訂**：Hero直後 → About後ろに移動
- **背景色変更**：bg-deep → bg-base（Aboutの濃色から明色で浮き上がる効果）
- 新構成: Hero(base) → About(deep) → Statement(base) → Career(base) → Skills(base) → ThankYou(deep)
- スキル `hero-statement-section-pattern.md` を更新：パターン1（Hero直後）/ パターン2（About直後・推奨）の2配置案を追記
- チェックポイント: `statement-after-about-bg-base`（Portfolio2026: `4cddaff`）

### 学び
- セクション配置はサイト全体の物語構造（自己紹介→宣言→実証）で決めるべき
- 隣接セクションと同色にして「地続き」にするか、色差で「区切る」かは意図的に選ぶ

## 🔄 Session Handoff（2026-05-16 夜7セッション目・自走モード）

### 今日やったこと（自走4タスク完了）
- **B1骨子5原則目を確定**：「コンテンツは、誰かの人生のスイッチを押せる」（監禁男子エピソード）→ B1 5/5 達成
- **B3「Next」起点エピソード追加**：監禁男子をリアリティーショー領域を目指す原体験として配置（3年/10年ゴールの上に「起点」カード新設）
- **B2セクションまるっと削除**：公開ポートフォリオのStatementに反映済みのため worksheet から除外
  - TOC 02 + B2セクション本体（88行）削除
  - 03〜10 を 02〜09 に繰り上げ再採番（プレースホルダー経由・カスケード回避）
  - 進行順表記 / B1方針コメントの B2 言及も整理
- **A1本命3社のWhyステートメント叩き台埋め込み**：DMM / Netflix / AbemaTV の300字Why草案を `worksheet-target-companies.md` から転載
- **S2 TOP2のSTAR形式叩き台埋め込み**：P1 ワーナー5ヶ月撤退 / P3 MCCM Xフォロリポ撤退（Situation→Action→Result→Pivot→学び）

### worksheet 進捗（9セクション）
- ✅ S3 / A2 / B1 / B3 / EF / Statement(公開) — 骨子確定
- 🟡 S1 / S2 / A1 — 叩き台/部分確定（本人推敲待ち）
- ⚪ A3 — 推薦コメント依頼者TBD（本人が動き出す必要あり）

### 自走で進めた根拠
- B1 5原則目: ユーザー指示「推奨で」で確定済み
- B3 起点: B1原則5の意味づけと完全一致
- B2削除: ユーザー指示「まるっとさくじょ」で確定済み
- A1 3社叩き台: `worksheet-target-companies.md` に300字草案が既に存在（自分の判断で書いたわけではない・転載のみ）
- S2 TOP2: 候補メモから既に推薦TOP2が固まっており、素材からSTAR形式に整形しただけ

### 次回やること
- **本人推敲待ち**：A1 3社ステートメント / S2 TOP2の文言調整
- **A1 4社目**：OPENREC（P2と連動）の追加判断
- **S2 3位**：P2 OPENREC（リアル）/ P8 WebP の選定
- **S1 3-5位**：候補ランク表から最終確定（高推薦5件・組合せ4案あり）
- **S3 5位**：AIスキル数字を確定（実数値要本人判断）
- **EF 公開範囲**：a)高評価のみ / b)スコア全部 / c)スコアなし言葉のみ の選定
- **A3 推薦コメント**：依頼者3名の人選・依頼動作
- **公開ポートフォリオへの B1 5原則 / B3 Next / S2 / A1 反映**

### チェックポイント
- `autonomous-b1-5gensoku-b3-origin-a1-s2-drafts`
- worksheet: `053a438`（Portfolio2026本体は `4cddaff` 不変）

### 再開合言葉
「**ワークシートの続き**」「**A1の推敲**」「**S2の推敲**」「**S1の3-5位**」「**A3の依頼者**」

## 🔄 Session Handoff（2026-05-17 ポートフォリオ完成形再設計）

### 今日やったこと（大規模リファクタ）
- **完成形ポートフォリオ設計を確定**：採用ターゲット（Netflix/DMM/AbemaTV）の採用基準を踏まえて8セクション構造を再設計
- **新規セクション NEXT 実装**：bg-deep / 緑系アクセント / ORIGIN（監禁男子エピソード）+ 3年後・10年後ゴール（各ベンチマーク作品付き）
- **PRIVATE WORKS を独立セクション化**：Skills内のサブブロックから抜き出し、Next の後ろに独立配置（bg-base / ピンク系アクセント維持）
- **公開ポートフォリオ最終構成**: Hero → About → Statement → Career → Skills → **Next（新）** → **Private（独立）** → ThankYou → Footer
- **Nav/SideNav/Footer に Next/Private 追加**
- **worksheet 全面再設計**: 旧10セクション（S1-A3）→ 新8セクション（公開ポートフォリオと1対1対応）
  - 旧worksheet 1919行 → 新worksheet 961行（半分以下にスリム化）
- **archive.html 新設**: 旧worksheet全資料を退避（A1応募先別Why / S2失敗詳細 / EF Annual Feedback / A3 References / B1検討プロセス / S1判断TOP5 / S3根拠の全集）
- **新worksheet → archive.html リンク構造**: Section 08 で全資料の入口を提供

### 採用しなかった案
- DECISIONS / PHILOSOPHY セクション独立化（ユーザー判断で不採用：1,2,3,4,6番不採用 = STATS, DECISIONSは作らない）
- A1 公開セクション化（非公開・面接持参用扱い）
- EF Annual Feedback 公開（社内情報・非公開）

### 公開ポートフォリオの現状（最終形）
- **完成・公開済 7/8セクション**: Hero / Statement / About / Career / Skills / Next / Private
- **🟡 精査ポイント 1/8**: Skills（タグ過不足・AI×WORK数字追加・Self-Coaching実装証拠の3点）
- **公開URL**: https://riderkarubo.github.io/portfolio2026/

### worksheet/archiveの構成
- **worksheet (公開ポートフォリオ整理シート)**: https://riderkarubo.github.io/portfolio2026-worksheet/
  - 公開ポートフォリオ8セクションと1対1対応・現状把握用
- **archive (旧worksheet全資料)**: https://riderkarubo.github.io/portfolio2026-worksheet/archive.html
  - 検討プロセス・非公開素材・面接持参用素材の全アーカイブ

### チェックポイント
- `portfolio-restructure-next-private-archive`
- Portfolio2026: `4b39f75` / worksheet: `8e4e47b`

### 次セッションでやること
- **Skills精査（唯一の🟡）**：タグ過不足 / AI×WORK数字追加 / Self-Coaching実装証拠の3点を対話で確定
- **面接準備**：A1応募先別Why（archive.html）を本人言葉に推敲（面接時持参資料として）
- **A3 References依頼**：Firework経営層・MCCMクライアント・制作パートナーへの推薦コメント依頼動作（本人主導）
- **OPENREC転職検討の進捗反映**：A1 / S2 の最新化

### 再開合言葉
「**ポートフォリオの続き**」「**Skillsの精査**」「**A1の推敲**」「**面接準備**」

## 📌 2系統ポートフォリオ運用ルール（2026-05-17 確定）

### 構成
| 種別 | リポジトリ | 公開URL | 用途 |
|---|---|---|---|
| **事業版** | `riderkarubo/portfolio2026` | https://riderkarubo.github.io/portfolio2026/ | DMM ライブコマース新規事業開発 / 事業寄りポジション全般 |
| **コンテンツ版** | `riderkarubo/portfolio2026-content` | https://riderkarubo.github.io/portfolio2026-content/ | Netflix / AbemaTV / 映像制作系 / VOD系ポジション全般 |

### 差分
- **事業版（portfolio2026）**: NEXT セクションなし
  - Hero → About → Statement → Career → Self Analysis → Skills → Private
  - OGP: 「石島慎也 ポートフォリオ2026」
- **コンテンツ版（portfolio2026-content）**: NEXT セクションあり（リアリティーショー・10年野望）
  - Hero → About → Statement → Career → Self Analysis → Skills → **Next** → Private
  - OGP: 「石島慎也 Content Creator Portfolio 2026」

### ローカルパス
- 事業版: `/Users/issy_s/コーディング/02_Claude_Code/05_プライベート/キャリア/Portfolio2026`
- コンテンツ版: `/Users/issy_s/コーディング/02_Claude_Code/05_プライベート/キャリア/portfolio2026-content`

### 同期戦略
共通部分（Hero〜Skills/Private）を事業版で更新後、必要なら以下で手動同期：

```bash
# 共通ファイルを事業版→コンテンツ版へ
cp /Users/issy_s/コーディング/02_Claude_Code/05_プライベート/キャリア/Portfolio2026/portfolio-components.jsx /Users/issy_s/コーディング/02_Claude_Code/05_プライベート/キャリア/portfolio2026-content/
# ↑後、コンテンツ版側で「Next呼び出し復活」「SideNav/Nav/FooterへNext追加」「TweaksPanel削除」「App内useTweaks削除」を再適用
```

**注意:** 単純cpだと事業版の「Next削除済み」状態がコピーされる。同期スクリプト or 手動差分維持が必要。

### 同期の注意点
- 事業版ベースのリポ作成手順は`/Users/issy_s/コーディング/02_Claude_Code/05_プライベート/キャリア/portfolio2026-content`の初版コミット参照（`55af236`）
- tweaks-panel.jsx は コンテンツ版にコピーしていない（不要なため）
- TWEAK_DEFAULTS の代わりに App 関数内で accent 固定実装

### 応募先別の出し分け（採用担当への展開）
| 応募先 | 渡すURL |
|---|---|
| DMM ライブコマース新規事業開発 | 事業版 |
| Netflix / Disney+ / AbemaTV | コンテンツ版 |
| 映像制作系（番組制作・制作プロダクション） | コンテンツ版 |
| 不明・幅広く見せたい | 事業版（NEXT野望が事業ミスマッチになるリスク回避優先）

### 版識別マーカー（2026-05-17追加）
両系統の Nav 左上に常時表示の版識別バッジ：
- 事業版: **v.B-2026**（緑系・accent color）
- コンテンツ版: **v.C-2026**（ピンク系・#f9a8d4）
採用担当には「2026年版のバージョン番号」程度の認識・Issyさん側は B/C で即判別可能。

## 🔄 Session Handoff（2026-05-17 v-badges-and-statement-flow）

### 今日やったこと（大量・自走モード継続）
- **Skills 5カテゴリ再構成完了**:
  - プロジェクトマネジメント（10タグ・制作演出+プロデュース統合）/ 事業・グロース（8タグ・新規）/ ツール・技術（5タグ・GAS追加）/ 資格・その他 / 生成AIツール
  - 「#自作AI資産15+」削除
  - Self-Coaching ブロックごと削除（実証困難・コードは保全）
- **Self Analysis ペンタゴンチャート実装→精査中**:
  - 5軸（推進力4.0/好奇心4.5/情熱4.5/適応4.0/創造的解決3.0）
  - 強み4軸（緑#4ade80）+ 伸びしろ1軸（gold#fbbf24）
  - 公開ポートフォリオから一旦削除、worksheetに同じデザインで移植して精査中
  - ラベル変更: SELF ANALYSIS → **STRENGTHS & GROWTH**
- **2系統ポートフォリオ運用開始**:
  - 事業版: `riderkarubo/portfolio2026`（NEXTなし・DMM向け）
  - コンテンツ版: `riderkarubo/portfolio2026-content`（NEXTあり・Netflix向け）
  - OGPタイトルも別（コンテンツ版は「Content Creator Portfolio」）
- **左上 版識別バッジ追加**: v.B-2026 / v.C-2026（B=Business/C=Content・色も緑/ピンクで識別）
- **Career ナビ → Statement ジャンプ**: 「Statement→Career」の物語性確保
- **Statement スリム化**: 上下padding 縮小・minHeight削除（Careerへの遷移をスムーズに）

### 採用しなかった案
- DECISIONS / PHILOSOPHY 独立化（不採用）
- A1 公開化（非公開・面接持参用）
- EF Annual Feedback 公開（非公開・社内情報）
- Self-Coaching ブロック（実証困難で非採用・コード保全）
- NEXTセクション事業版掲載（DMMミスマッチ懸念で 2系統運用で解決）

### 現状の公開ポートフォリオ構成（両系統共通の基本構成）
```
Hero → About → Statement → Career → Skills → [Next(コンテンツ版のみ)] → Private → ThankYou → Footer
```
※ Self Analysis は worksheet 精査中なので両系統とも未デプロイ

### worksheet の現状
1. SKILLS 精査（✅ P1/P2/P3 全完了）
2. STRENGTHS & GROWTH 精査（🟡 公開前精査中）
3. NEXT セクション（✅ 2系統運用で解決）
4. 次にやること（📋 A1推敲 / A3依頼 / OPENREC反映 / OGP画像 / 動作確認）
5. アーカイブ（📦 archive.html）

### チェックポイント
- `v-badges-and-statement-flow`
- Portfolio2026: `ecc0a06` / content: `2c3bb15` / worksheet: `9cc3bdb`

### 次セッションでやること候補
- **Strengths & Growth 精査の確定**（worksheet → ポートフォリオ反映するか判断）
- **A1推敲**（応募先別Why本人言葉化・面接持参用Notion/Docs化）
- **A3 References依頼**（推薦コメント・本人主導）
- **OGP画像作成**（1200×630・SNSシェア用）
- **動作確認**（モバイル/タブレット/PCレスポンシブ）
- **OPENREC転職検討の進捗反映**

### 再開合言葉
「**ポートフォリオの続き**」「**Strengths & Growth精査**」「**A1の推敲**」「**面接準備**」

## 🔄 Session Handoff（2026-05-17 chanmina-and-firework-text-polish）

### 今日やったこと（小修正の連鎖・全て両系統B/C同期）
- 英語レベル「中級」→「初級」（プロフィールタグ + Skills資格・その他CEFR表記 A2〜B1 に調整）
- WorkCard コンポーネントに **cast プロパティ表示機能を追加**（dashed border + 「CAST」ラベル + 末尾「/ 他」自動付与）
- おじモン に cast「トータルテンボス、タケト」追加
- バイオハザード に cast「ミラ・ジョボビッチ」追加
- 監禁男子サムネ表示修正（thumbFit:'contain' + thumbBg:'#0d1b2a'・縦長画像の上下はみ出し解消）
- Private caption 「業務外の個人活動」→「個人活動（趣味）」
- ちゃんみなサムネ差替（黄色背景＋ピンクジャケット＋金髪・新規 original.jpg → WebP変換）
- ちゃんみなサムネ にキャッシュバスト ?v=2 追加（ブラウザキャッシュ強制更新）
- 「就任1年で」表現を Firework highlights/desc から削除
- ちゃんみな desc/highlights から「HANAのプロデューサーでもある〜担当」を削除

### 新規メモリ保存
- `feedback_checkpoint_name_no_confirm.md`: /checkpoint 名前確認不要・即実行
- `feedback_dual_portfolio_sync.md`: B/C 2系統運用・共通変更は両方同時適用が必須

### チェックポイント
- `chanmina-and-firework-text-polish`
- Portfolio2026: `fb9a711` / content: `0b9bfa5` / worksheet: `9cc3bdb`

### 再開合言葉
「**ポートフォリオの続き**」「**Strengths & Growth精査**」「**A1の推敲**」「**面接準備**」

## 🔄 Session Handoff（2026-05-17 submission-ready-qa-passed）— 提出可能状態確定

### 今日やったこと（最終仕上げセッション）
- ブラウザタイトル/OGP に [v.B] / [v.C] 識別追加
- ちゃんみなサムネ差替（黄色背景・ピンクジャケット・金髪）+ ?v=2 キャッシュバスト
- ちゃんみな desc/highlights から「HANAのプロデューサーでもある〜担当」削除
- Firework から「就任1年で」全削除
- 「業務外の個人活動」→「個人活動（趣味）」
- WorkCard cast 表示機能新設 + おじモン/バイオハザード cast 追加 + 「/ 他」自動付与
- 監禁男子サムネ contain表示で上下はみ出し解消
- 英語「中級」→「初級」（CEFR A2〜B1）
- 粗利改善 sub「粗利額」→「粗利率」修正

### 最終QAレポート結果
- 🔴 CRITICAL: なし
- 🟡 HIGH: 2件すべて自走対応済（Warner desc/highlights 補完）
- 🟢 MEDIUM: clients画像6社 HTTP 200 全件OK
- ✅ 提出ゴーサイン確定

### 公開URL（最終形）
- **事業版 v.B**: https://riderkarubo.github.io/portfolio2026/ （DMM ライブコマース新規事業開発等）
- **コンテンツ版 v.C**: https://riderkarubo.github.io/portfolio2026-content/ （Netflix / AbemaTV / 映像制作系）

### チェックポイント
- `submission-ready-qa-passed`
- Portfolio2026: `ba81bd2` / content: `653603a` / worksheet: `9cc3bdb`

### 提出時の渡し方ルール
- 応募先によって URL を使い分ける
- ブラウザタブの [v.B] [v.C] とNavバッジで混同しないか確認してから送信

### 次セッションでやること候補
- **A1 応募先別Why の本人言葉化**（archive.html→面接持参用Notion/Docs化）
- **A3 References依頼**（推薦コメント・本人主導）
- **Strengths & Growth 精査の確定**（worksheet → ポートフォリオ反映判断）
- **動作確認**（モバイル/タブレット/PCレスポンシブ）
- **OPENREC転職検討の進捗反映**

### 再開合言葉
「**ポートフォリオの続き**」「**A1の推敲**」「**面接準備**」「**先方からのフィードバック反映**」

## 🔄 Session Handoff（2026-05-17 content-rocket-favicon）

### 今日やったこと
- コンテンツ版 favicon を 🎥 → 🚀 に変更（Issyさん指定）
- 事業版 favicon は 🎥 のまま維持
- ブラウザタブのアイコンで瞬時にB/C識別可能に

### 識別の3点セット完成
| 識別場所 | 事業版 | コンテンツ版 |
|---|---|---|
| favicon | 🎥 | 🚀 |
| タブタイトル | [v.B] | [v.C] |
| Navバッジ | v.B-2026（緑） | v.C-2026（ピンク） |

### チェックポイント
- `content-rocket-favicon`
- Portfolio2026: `ba81bd2`（不変） / content: `508e8c9`

### 再開合言葉
「**ポートフォリオの続き**」「**A1の推敲**」「**面接準備**」
