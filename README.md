# Portfolio 2026 — 石島慎也

映像プロデューサー / ライブコマースのポートフォリオサイト。

## 構成

- `index.html` — エントリポイント（GitHub Pages 用）
- `Portfolio.html` — `index.html` と同一（ローカル確認用）
- `portfolio-components.jsx` — React コンポーネント本体（Babel-standaloneで実行時コンパイル）
- `tweaks-panel.jsx` — 開発用の調整パネル
- `colors_and_type.css` — デザイントークン（色・タイポグラフィ）
- `assets/` — 画像（WebP最適化済み）

## ローカル確認

```sh
python3 -m http.server 8080
# → http://localhost:8080/
```

## デプロイ

GitHub Pages の `main` ブランチをそのまま配信。`index.html` がエントリ。

## 画像の追加・差し替え

新しい画像を `assets/works/` 等に置いたら、WebP変換も実施する：

```sh
bash scripts/convert-webp.sh
```

その後、JSX 側のパスを `.webp` に更新する。
