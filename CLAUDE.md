# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

Astro v5.7.12で構築されたHAMAYOUリゾートの採用サイトです。メインのAstroプロジェクトは `/astro` ディレクトリにあります。

## 開発コマンド

すべてのコマンドは `/astro` ディレクトリから実行してください：

```bash
npm run dev      # 開発サーバーを localhost:4321 で起動
npm run build    # 本番用ビルド（出力先: ./dist/）
npm run preview  # 本番ビルドをローカルでプレビュー
npm run astro    # Astro CLIコマンドにアクセス
```

**注意**: このプロジェクトにはリント・フォーマット設定がありません（ESLint/Prettier未設定）。

## アーキテクチャ

### TypeScript設定
- `astro/tsconfigs/strict` を継承した厳格モード
- パスエイリアスは `astro.config.mjs` と `tsconfig.json` の両方で設定

### パスエイリアス
`astro.config.mjs` で設定されたViteパスエイリアス：
- `@styles` → `src/styles`
- `@components` → `src/components` 
- `@assets` → `src/assets`
- `@layouts` → `src/layouts`
- `@data` → `src/data`
- `@utils` → `src/utils`
- `@*` → `src/*` （TypeScript設定の汎用エイリアス）

### コンポーネント構成
- コンポーネントはページタイプごとに整理（例：`toppage/`、`aboutpage/`、`culturepage/`）
- 共通コンポーネントは `/components/common/` に配置
- 命名規則：`[PageName]Section[Feature].astro`（例：`ToppageSectionAbout`）

### コンテンツ管理
- **ニュース記事**：`/src/content/news/` のAstro Content Collections で管理
  - Zodスキーマ: title, date, category, featured, text
- **静的データ**：`/src/data/` のTypeScriptファイル（スタッフ、求人、ナビゲーション）
- **コンテンツスキーマ**：`/src/content/config.ts` でZodバリデーション定義

### スタイリング
- **SCSS構成**：`/src/styles/` のモジュラーファイル
- **コンポーネントスタイル**：Astroコンポーネントのスコープ付き `<style lang="scss">` ブロック
- **CSSリセット**：`destyle.css` を使用
- **レスポンシブデザイン関数**：
  - `spx()` - スマートフォン用のビューポート相対単位
  - `tpx()` - タブレット用のビューポート相対単位  
  - `ppx()` - PC用のビューポート相対単位
- **ブレークポイントミックスイン**：`tablet-up`、`desktop-up`（モバイルファースト）
- **フォントミックスイン**：一貫したタイポグラフィ用

### インタラクティブコンポーネント
- **Chart.js** - シフトチャート、休日データの可視化
- **MicroModal** - モーダル機能（TypeScript定義付き）
- **Swiper** - カルーセル/スライダー機能

### データ構造
- 型定義は `/src/types/` に配置
- 静的データファイルはTypeScriptインターフェースをエクスポート
- Content Collectionsが型安全なコンテンツ管理を提供

### ディレクトリ構造
- `/astro/src/assets/images/` - ページタイプ別に整理された画像
- `/astro/src/components/` - ページ固有および共通コンポーネント
- `/astro/src/content/news/` - ニュース記事のMarkdownファイル
- `/astro/src/data/` - TypeScriptモジュールとしての静的データ
- `/astro/src/layouts/` - ページレイアウトコンポーネント
- `/astro/src/pages/` - Astro規約に従ったルートベースのページ
- `/astro/src/styles/` - グローバルSCSSユーティリティと変数
- `/astro/src/types/` - TypeScript型定義
- `/astro/src/utils/` - ユーティリティ関数

## 主要技術
- **フレームワーク**：Astro（静的サイトジェネレーター）
- **スタイリング**：コンポーネントスコープ付きSCSS（CSSフレームワーク不使用）
- **JavaScript**：最小限のクライアントサイドJS（UI操作のみ）
- **コンテンツ**：ニュース記事用のfrontmatter付きMarkdown
- **ビルド**：Vite（Astroに統合）
- **Git管理**：`dev` ブランチで開発

## 開発時の注意点
- VS Codeのスペルチェック単語は `.vscode/settings.json` で設定
- ビルド出力は `./dist/` ディレクトリ（TypeScriptコンパイルから除外）
- 依存関係は最小限に保たれており、すべてのスタイリングはSCSSで実装