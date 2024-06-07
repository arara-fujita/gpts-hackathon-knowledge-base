# ChatGPT

ChatGPTとは、OpenAIが開発・提供しているGPTを利用したチャットボットです。

このセミナーでは、ChatGPTを本格的に使いこなすための情報を提供します。

::: info ChatGPT Plus
ここではChatGPT Plus（およびそれ以上のプラン）の利用を前提としています。

ChatGPTのFreeプランでは利用できない機能も含まれているため、ご注意ください。
:::

::: warning
この内容は2024年5月時点のものです。

今後のアップデートによっては内容が変わる可能性があります。
:::

## 対象者

- 基本的なChatGPTの使い方はわかるが、より使いこなしたい人
- ChatGPTを使ってきたが、より高精度な回答を得たい人
- ChatGPT Plusを使ってみたい人

## Modelによる違い

ChatGPTを開くと、左上に以下のような選択肢があります。

ChatGPTで新しくチャットを始める場合、ここから任意のモデルを選択できます。

![Model一覧](/images/chatgpt-compare-models.png)

現在、ChatGPTでは3つのモデルが利用可能です。

それぞれの特徴をまとめると、以下のようになります。

| Model   | 速度 | 賢さ                         | マルチモーダル | トークン数               | 価格       | 用途                                           |
| ------- | ---- | ---------------------------- | -------------- | ------------------------ | ---------- | ---------------------------------------------- |
| GPT-4o  | 高速 | 賢い                         | 可能           | 長い<br>（日本語に強い） | 比較的安い | 複雑なタスク（おすすめ）                       |
| GPT-4   | 低速 | とても賢い                   | 可能           | 長い                     | 高い       | より複雑なタスク                               |
| GPT-3.5 | 高速 | 賢くない<br>（日本語に弱い） | 不可           | 短い                     | 安い       | 日常的なタスク<br>（基本使うことはあまりない） |

::: info 価格について
ここで記載している価格は、あくまでAPIで利用した場合の価格です。

ChatGPT上で利用する場合は月額20ドル固定なので、意識する必要はありません。
:::

::: details GPT-4 TurboとGPT-3.4 Turbo
GPTにはモデル名の末尾に「Turbo」とついたモデルがあります。

これは、より高速に動作するモデルです。

ChatGPT上で利用できるGPT-3.5/GPT-4は厳密にはGPT-3.5 Turbo/GPT-4 Turboですが、便宜上ここではGPT-3.5/GPT-4と表記します。
:::

### GPT-4o

現時点で最も最新のモデルです。

後述するGPT-4をより高速にしたもので、日本語の理解力や複雑なタスクにおいても高い性能を発揮します。

ChatGPTを利用する場合は、基本的にはこのモデルを利用することをおすすめします。

### GPT-4（GPT-4 Turbo）

現時点で最も高性能なモデルです。

前述したGPT-4oより低速ですが、出力されるテキストの性能では最も高い性能を誇ります。

より複雑なタスクを行いたい場合は、速度はGPT-4oに劣りますが、このモデルを利用することをおすすめします。

### GPT-3.5（GPT-3.5 Turbo）

速度ことGPT-4oに引けを取りませんが、正直使い物になりません。

やすいことだけが取り柄の時代遅れのモデルです。

## Custom Instructions

Custom InstructionsはChatGPTに「自分に対してどのように振る舞ってほしいか」を指示する機能です。

ここで指定できるのは以下の2つです。

まず1つ目は、「自分について知っておいてほしいこと」です。

例えばここで「私は東京に住んでいます」と指定しておけば、場所を指定せず天気を聞いたときに東京の天気を回答するようになります。

他にも、自分の性格や好みなどを指定しておくことで、より自分に合った回答を得ることができます。

![Custom Instructions](/images/chatgpt-custom-instructions-me.png)

2つ目は、「ChatGPTにどう振る舞ってほしいか」です。

ここでは例えば「常にフォーマルな回答をしてください」や「難しい表現を使わずに回答してください」などを指定できます。

![Custom Instructions](/images/chatgpt-custom-instructions-you.png)

::: info Custom Instructionsで毎回の共通した指示を省略する
Custom Instructionsを使わずとも、これらを毎回チャットの最初に書いておけば同じ効果が得られます。

ただ、これを毎回指定するのはかなり手間なのと、チャットが長くなるとトークン数の関係上最初のころに指定した内容は要約されてしまいます。

Custom Instructionsはチャットが長くなっても常に反映されるため、そういった問題も解決されます。
:::

## Browsing

ChatGPTにWeb検索機能を追加する機能です。

この機能を有効化すると、ChatGPTが必要に応じてWeb検索を自動で行い、検索結果を元に回答するようになります。

これによりナレッジカットオフや専門性の高い質問にも対応できるようになります。

![Browsing](/images/chatgpt-browsing.png)

これは、ChatGPTに来週の港区の天気を聞いたものです。通常LLMは事前学習データに含まれていない情報には対応できませんが、Browsingを有効化することでWeb検索を行い、正確な情報を提供できるようになります。

## DALL·E

画像生成AIであるDALL·EがChatGPT上で利用できます。

![DALL·E](/images/chatgpt-dalle.png)

また、生成した画像に対して追加の指示でを与えることもできます。

![生成した画像に対する追加指示](/images/chatgpt-dalle-edit.png)

## Code

ChatGPTがPythonを使って処理を行う機能です。

これは気象庁が[公開](https://www.data.jma.go.jp/gmd/risk/obsdl/)している過去の気象データ（CSV）からグラフを作成してもらった例です。

![Code](/images/chatpgt-code.png)

## Memory

Memoryとは、ChatGPTが過去の会話を覚えている機能です。

普通に以下のような質問をChatGPTにしても、知らないことについては回答してくれません。

![Memoryなし](/images/chatgpt-memory-no-memory.png)

ここで、以下のようにChatGPTに任意の情報を覚えておいてもらうよう指示します。

![Memoryに記録](/images/chatgpt-memory-record.png)

その後、新規チャットで最初同様の質問をすると、過去の別のチャットで覚えていた情報を元に回答してくれます。

![Memoryを使った回答](/images/chatgpt-memory-has-memory.png)

## 外部連携

ChatGPTにはローカルにあるファイルをアップロードできますが、以下3つのサービスであれば直接連携することができます。

- [Googleドライブ](https://www.google.com/intl/ja_jp/drive/)
- [Microsoft OneDrive Personal](https://www.microsoft.com/ja-jp/microsoft-365/onedrive/online-cloud-storage)
- [Microsoft OneDrive for Business](https://www.microsoft.com/ja-jp/microsoft-365/onedrive/onedrive-for-business)

![外部連携](/images/chatgpt-upload-from-external-services.png)

今までGoogleスプレッドシートなどをChatGPTに読み込ませたい場合、一度Excelファイルなどとしてダウンロードする必要がありましたが、これによってChatGPTが直接Googleスプレッドシートを読み込むことができるようになります。

ただし、現状は読み込み専用で編集はできません。

## 【コラム】ChatGPTを業務で利用するのは本当に危険なのか

よく「ChatGPTを業務で利用するのは危険だ」と業務利用を禁止しているという話を聞きますが、本当に危険なのでしょうか？

まず、この「危険」にはいくつかの意味がありますが、ここでは以下の点について考えてみましょう。

- 情報漏洩
- 権利問題
- 正確性

### 情報漏洩

OpenAIの利用規約を読むと、以下のように記載されています。

> Our use of content. We may use Content to provide, maintain, develop, and improve our Services, comply with applicable law, enforce our terms and policies, and keep our Services safe. 
>
> ---
> 
> 引用：[Terms of use | OpenAI](https://openai.com/policies/terms-of-use/#:~:text=Our%20use%20of%20content.%20We%20may%20use%20Content%20to%20provide%2C%20maintain%2C%20develop%2C%20and%20improve%20our%20Services%2C%20comply%20with%20applicable%20law%2C%20enforce%20our%20terms%20and%20policies%2C%20and%20keep%20our%20Services%20safe.%C2%A0)

そのため、ユーザーの入力したコンテンツは今後のモデルの学習やサービスの改善に利用される可能性があります。

また、以下のようにも書かれています。

> Similarity of content. Due to the nature of our Services and artificial intelligence generally, output may not be unique and other users may receive similar output from our Services. Our assignment above does not extend to other users’ output or any Third Party Output. 
>
> ---
>
> 引用：[Terms of use | OpenAI](https://openai.com/policies/terms-of-use/#:~:text=Similarity%20of%20content.%20Due%20to%20the%20nature%20of%20our%20Services%20and%20artificial%20intelligence%20generally%2C%20output%20may%20not%20be%20unique%20and%20other%20users%20may%20receive%20similar%20output%20from%20our%20Services.%20Our%20assignment%20above%20does%20not%20extend%20to%20other%20users%E2%80%99%20output%20or%20any%20Third%20Party%20Output.%C2%A0)

これは本当に確率の低いことではありますが、学習データと全く同じ出力をする場合があります。

これと入力したコンテンツの利用を考えると、情報漏洩のリスクは100%ゼロとはいい切れません。

もしOpenAIに入力したコンテンツの利用を拒否したい場合、[Data Controls FAQ \| OpenAI Help Center](https://help.openai.com/en/articles/7730893-data-controls-faq)に従ってオプトアウトすることができます。

::: warning オプトアウトの対象
オプトアウトが適用されるのは、あくまでオプトアウト後のみです。

すでに存在しているチャットについては適用されません。
:::

### 権利問題

ChatGPTが出力したコンテンツの著作権は誰に帰属するのでしょうか？

これについても利用規約に以下のように明記されています。

> Ownership of content. As between you and OpenAI, and to the extent permitted by applicable law, you (a) retain your ownership rights in Input and (b) own the Output. We hereby assign to you all our right, title, and interest, if any, in and to Output. 
>
> ---
>
> 引用：[Terms of use | OpenAI](https://openai.com/policies/terms-of-use/#:~:text=Ownership%20of%20content.%20As%20between%20you%20and%20OpenAI%2C%20and%20to%20the%20extent%20permitted%20by%20applicable%20law%2C%20you%20(a)%20retain%20your%20ownership%20rights%20in%20Input%20and%20(b)%20own%20the%20Output.%20We%20hereby%20assign%20to%20you%20all%20our%20right%2C%20title%2C%20and%20interest%2C%20if%20any%2C%20in%20and%20to%20Output.%C2%A0)

つまり、ChatGPTが出力したコンテンツはユーザーの所有物となります。

ただし、権利には責任が伴います。

> Your content. You may provide input to the Services (“Input”), and receive output from the Services based on the Input (“Output”). Input and Output are collectively “Content.” You are responsible for Content, including ensuring that it does not violate any applicable law or these Terms. You represent and warrant that you have all rights, licenses, and permissions needed to provide Input to our Services.
>
> ---
>
> 引用：[Terms of use | OpenAI](https://openai.com/policies/terms-of-use/#:~:text=Your%20content.,to%20our%20Services.)

ChatGPTが出力したコンテンツには、そのユーザー自身が責任を負います。もしそのコンテンツで問題（著作権違反など）が発生した場合も、その責任はユーザー自身にあります。

### 正確性

ChatGPTを含めた生成AIはその性質上、常に同じ出力をするわけでも正確な出力をするわけでもありません。

> Accuracy. Artificial intelligence and machine learning are rapidly evolving fields of study. We are constantly working to improve our Services to make them more accurate, reliable, safe, and beneficial. Given the probabilistic nature of machine learning, use of our Services may, in some situations, result in Output that does not accurately reflect real people, places, or facts. 
> 
> When you use our Services you understand and agree:
> 
> - Output may not always be accurate. You should not rely on Output from our Services as a sole source of truth or factual information, or as a substitute for professional advice.
> 
> - You must evaluate Output for accuracy and appropriateness for your use case, including using human review as appropriate, before using or sharing Output from the Services.
> 
> - You must not use any Output relating to a person for any purpose that could have a legal or material impact on that person, such as making credit, educational, employment, housing, insurance, legal, medical, or other important decisions about them. 
> 
> - Our Services may provide incomplete, incorrect, or offensive Output that does not represent OpenAI’s views. If Output references any third party products or services, it doesn’t mean the third party endorses or is affiliated with OpenAI.
>
> ---
>
> 引用：[Terms of use | OpenAI](https://openai.com/policies/terms-of-use/#:~:text=Accuracy.%20Artificial,affiliated%20with%20OpenAI.)

上述した通り、ChatGPTの出力したコンテンツはユーザー自身に権利と責任があります。

### 結局のところ、ChatGPTを業務利用するのは危険なのか

結論から言うと、「正しく使えば危険ではない」です。

確かに上述したような危険性はありますが、これはユーザーがChatGPT（及びその他の生成AI）を正しく理解したうえで利用すれば回避できる問題です。

そもそもこれらの問題は生成AIに限った話ではなく、何かしらのサービス・ツールを利用する上では当たり前に発生するものです。生成AIだからと考えるのではなく、何かしらのサービス・ツールを利用するのであれば、そのサービス・ツールを正しく利用することはユーザーとしての責務です。

## まとめ

ここまで説明してきた通り、ChatGPTはただのチャットボットではなく、様々な便利な機能が搭載されています（現在も拡張されています）。

こうした機能やプロンプトエンジニアリングを使いこなすことで、より高精度な回答を得たり様々なタスクをこなすことができます。

次回は自分でカスタマイズできるGPTsの作り方を説明します。
