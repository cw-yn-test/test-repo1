# ベースイメージとして公式のNode.js（Alpineバージョン）を使用
FROM node:14-alpine

# アプリケーションディレクトリを作成
WORKDIR /usr/src/app

# アプリケーションの依存関係ファイルをコピー
# ワイルドカードを使用して、package.jsonとpackage-lock.jsonの両方またはどちらかがあればコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースをバンドルする
COPY . .

# アプリケーションがリッスンするポートを指定
EXPOSE 8080