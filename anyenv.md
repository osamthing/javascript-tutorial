# anyenvのインストールと設定



## anyenvのインストール
homebrewからインストールできます。

```
$ brew install anyenv
$ cd ~
$ echo 'eval "$(anyenv init -)"' >> ~/.bash_profile
$ source ~/.bash_profile
(ターミナルの再起動した方がいいかも）
$ anyenv --version
anyenv 1.1.2
$ anyenv install -l
Renv
  crenv
  denv
  erlenv
  exenv
  goenv
  hsenv
  jenv
  jlenv
  luaenv
  nodenv
  phpenv
  plenv
  pyenv
  rbenv
  sbtenv
  scalaenv
  swiftenv
  tfenv
$ anyenv install --init
```

これで使えるようになります。anyenv自体は以下にいるようです。

```
$ which anyenv
/usr/local/bin/anyenv
```

またユーザーディレクトリ配下に、

```
$ ls -al ~/
$ drwxr-xr-x    3 user  staff     96  8 18 21:20 .anyenv
```


という具合に.anyenvが作成されていたらOKです。



## Pluginのインストール

アップデートに便利なプラグインだけ入れておきます。anyenv updateコマンドでanyenvで入れた**env系の全てをアップデートしてくれるプラグインです。

```
$ mkdir -p ~/.anyenv/plugins
$ git clone https://github.com/znz/anyenv-update.git ~/.anyenv/plugins/anyenv-update
```

試しに実行してみます。

```
$ anyenv update
Skipping 'anyenv'; not git repo
Updating 'anyenv/anyenv-update'...
Updating 'anyenv manifest directory'...
```

ここまでで準備はOK。
ここではnodeenvとpyenvあたりをインストールしてみます。

## nodeenvをインストール。

改めてanyenv install -lを実行します。その中にnodeenvがあると思うので、それをインストールします。

```
$ anyenv install nodenv
$  ls .anyenv/envs/
nodenv

```

これで入りました。
シェルの再起動が必要です。

```
$ exec $SHELL -l
$ anyenv versions
nodenv:
Warning: no Node detected on the system
```

しかし、これだけではまだ駄目で更にnode.js自体のインストールが必要です。インストールできるバージョンを確認します。

```
$ nodenv install -l
0.1.14
0.1.15
0.1.16
...省略
iojs-3.3.1
nightly
node-dev
rc
v8-canary
```


やまほど出てくるのですが、この中でインストールしたいバージョンを選択します。ここでは5系の最後と最新版をインストールしてみます。(5.12.0, 14.8.0)

```
$ nodenv install 5.12.0
$ ls ~/.anyenv/envs/nodenv/versions/
14.8.0  5.12.0
$ exec $SHELL -l
```


バージョンを確認します。

```
$ anyenv versions
nodenv:
  5.12.0
  14.8.0
```


これでOKです。

## インストールされている**env系のバージョンを変更

インストールされましたが、これで使えるようになっているわけではありません。どのスコープで何バージョンを利用するかを設定する必要があります。大きく分けてグローバル（デフォルト）で利用するバージョンとローカル各所で個別に設定する方法があります。通常はすべてのシステム（グローバル）で最新のものを使えるようにして、個別（ローカル）でバージョン選択できるようにしておけばいいと思います。
ではそのように設定してみましょう。

```
$ nodenv global 8.10.0
```

確認してみます。

```
$ anyenv versions
nodenv:
  5.12.0
* 14.8.0 (set by /Users/user/.anyenv/envs/nodenv/version)
```

米印がついて、最新版が選択されたことがわかります。nodeコマンドでバージョンを確認してみます。

```
$ node --version
v14.8.0
```

これでOKです。
さて個別の領域で違うnodeが使えるように設定してみます。任意のディレクトリを作成して移動しておきます。

```
$ cd /PATH/
$ nodenv local 5.12.0
$ ls -a
.       ..      .node-version
```


.node-versionというファイルが作成されて、このディレククトリのみで、指定のnode.jsが利用できます。nodeコマンドで確認します。

```
$ anyenv versions
nodenv:
* 5.12.0 (set by /Users/osamuyamakami/Documents/mywork/docker/javascript-tutorial/es5/.node-version)
  14.8.0
```

ここでは5系の古いバージョンに変更されていることがわかります。
他のやつもだいたいこれと同じ方法でできますが、phpenvは何かちょっと挙動がおかしい感じがする。

