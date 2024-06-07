<script setup>
  const clock = new Date('2024-06-29T08:00:00+09:00');
  const timetable = [
    {
      time: 90,
      content: '会場設営'
    },
    {
      time: 30,
      content: '登壇者受付'
    },
    {
      time: 15,
      content: '一般参加者受付'
    },
    {
      time: 15,
      content: '開会の挨拶'
    },
    {
      time: 30,
      content: '基調講演'
    },
    {
      time: 60 * 6,
      content: 'ハッカソン'
    },
    {
      time: 60,
      content: 'プレゼン'
    },
    {
      time: 30,
      content: '審査'
    },
    {
      time: 15,
      content: '表彰'
    },
    {
      time: 15,
      content: '閉会の挨拶'
    },
    {
      time: 60 * 2,
      content: '懇親会（任意参加）'
    }
  ];
  
  const events = timetable.map(event => {
    const start = clock.toLocaleString('ja-JP', {
        timeZone: 'Asia/Tokyo',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    clock.setMinutes(clock.getMinutes() + event.time);
    const end = clock.toLocaleString('ja-JP', {
        timeZone: 'Asia/Tokyo',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    const content = event.content;
    return {
      time: `${start} - ${end}`,
      content
    }
  })
</script>

# GPTsハッカソン

GPTsハッカソンとは、オリジナルのChatGPTが作成できる「GPTs」を使って、新しいアイデアを生み出すイベントです。

本ハッカソンでは1〜3人1組となり、1日で各チーム1つGPTsを作成していただきます。

## プレゼン

作成したGPTsは、各チームにLT（5分）でプレゼンを行ってもらいます。

## [WIP]審査

作成していただいたGPTsは審査員によって審査を行います。

審査基準は以下の通りです。

- オリジナリティ
- 実用性
- 発想力

## [WIP]表彰

審査を元に、以下の3つの賞を授与します。

- 1位: 5万円相当
- 2位: 3万円相当
- 3位: 2万円相当

## [WIP]タイムテーブル

当日は以下のタイムテーブルで進行いたします。

<table>
  <thead>
    <tr>
      <th style="text-align: center;">時間</th>
      <th style="text-align: center;">内容</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="event in events" :key="event.time">
      <td style="text-align: center;">{{ event.time }}</td>
      <td>{{ event.content }}</td>
    </tr>
  </tbody>
</table>

::: info 途中参加・途中退室について

終日イベントとはなりますが、途中参加・途中退室は可能です。

ただし、可能な限りチーム内で常に1人は会場にいるようにしてください。

:::

## 持参物

ハッカソンに参加される方は、当日以下のものをご持参ください。

- ノートパソコン
  - ハッカソンの作業で必須となります。
  - 電源とWi-Fiは会場にて提供いたします。
- ChatGPT Plusアカウント
  - 詳しくは[事前準備](/hackathon/prepare)をご確認ください。
- 昼食
  - 昼食の提供はございませんので、ご持参ください。

## 会場

会場は以下の通りです。

::: tip アクセス
〒107-0062 東京都港区南青山２丁目２４−１５ 青山タワービル 別館

東京メトロ 銀座線 外苑前駅 1b出口より徒歩1分
:::

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d810.3166366056506!2d139.7180263167594!3d35.67043830110799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d43a569ad5d%3A0xc0d6d49ac0fe908a!2z44Oa44Kk44Kv44Op44Km44OJ44Ob44O844Or44OH44Kj44Oz44Kw44K55qCq5byP5Lya56S-!5e0!3m2!1sja!2sjp!4v1716258481326!5m2!1sja!2sjp" width="100%" height="300" style="border:0; border-radius: 8px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
