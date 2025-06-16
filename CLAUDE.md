# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリでコードを扱う際のガイダンスを提供します。

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

## アーキテクチャ

### パスエイリアス
`astro.config.mjs` で設定されたViteパスエイリアス：
- `@styles` → `src/styles`
- `@components` → `src/components` 
- `@assets` → `src/assets`
- `@layouts` → `src/layouts`
- `@data` → `src/data`
- `@utils` → `src/utils`

### コンポーネント構成
- コンポーネントはページタイプごとに整理（例：`toppage/`、`aboutpage/`、`culturepage/`）
- 共通コンポーネントは `/components/common/` に配置
- 命名規則：ページプレフィックス付きの `PascalCase`（例：`ToppageSectionAbout`）

### コンテンツ管理
- **ニュース記事**：`/src/content/news/` のAstro Content Collections で管理
- **静的データ**：`/src/data/` のTypeScriptファイル（スタッフ、求人、ナビゲーション）
- **コンテンツスキーマ**：`/src/content/config.ts` でZodバリデーション定義

### スタイリング
- **SCSS構成**：`/src/styles/` のモジュラーファイル
- **コンポーネントスタイル**：Astroコンポーネントのスコープ付き `<style>` ブロック
- **CSSリセット**：`destyle.css` を使用
- **モバイルファースト**：ブレークポイントミックスインを使ったレスポンシブデザイン

### データ構造
- 型定義は `/src/types/` に配置
- 静的データファイルはTypeScriptインターフェースをエクスポート
- Content Collectionsが型安全なコンテンツ管理を提供

## 主要技術
- **フレームワーク**：Astro（静的サイトジェネレーター）
- **スタイリング**：コンポーネントスコープ付きSCSS
- **JavaScript**：最小限のクライアントサイドJS（MicroModal、Swiper）
- **コンテンツ**：ニュース記事用のfrontmatter付きMarkdown
- **ビルド**：Vite（Astroに統合）