# AI×大学受験

プロンプトエンジニアリングでAIを勉強に活かす、大学受験生向けの記事販売サイトです。

## 機能

- **ランディングページ**: サイトのコンセプトとおすすめ記事の紹介
- **記事一覧**: カテゴリ・価格付きの記事リスト（NOTE風）
- **記事詳細**: 記事プレビュー、購入ボタン、SNSシェア機能
- **SNS連携**: 
  - ヘッダー・フッター・CTAにX (Twitter)・Instagramリンク
  - 各記事ページにシェアボタン（X、Facebook、LINE、リンクコピー）
  - OGPメタタグでSNS投稿時のプレビュー最適化

## 開発

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) でアクセス

## カスタマイズ

### SNSリンクの設定
`src/config/sns.ts` でX・InstagramのURLを変更してください。

### 記事の追加
`src/data/articles.ts` に記事データを追加します。

### サイトURL（SNSシェア用）
`.env.local` に以下を設定してください：
```
NEXT_PUBLIC_SITE_URL=https://あなたのドメイン.com
```

## 今後の拡張案

- Stripe等を使った決済機能
- 会員認証・購入済み記事の閲覧
- 記事投稿管理画面（CMS連携）
- いいね・コメント機能
