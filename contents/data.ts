export const contents = {
  index: {
    hero: {
      title: "様々な投票ルールを/体験しよう",
      text: "ErabeRuleは、/様々な/投票ルールを/実験的に/使うことが/できる/投票アプリ/です。"
    },
    features: [
      {
        title: "多様な決め方を手軽に",
        imgSrc: "/images/home_1.png",
        text: "多数決だけが決め方ではありません。ErabeRuleの目的は、様々な投票ルールを体験し、より身近なものにすることです。投票ルームを作成して参加を呼びかけましょう。"
      },
      {
        title: "アカウント作成の必要なし",
        imgSrc: "/images/home_2.png",
        text: "アカウント登録は必要ありません。投票に参加する際も、QRコードを読み取るだけ。参加者は一つの投票につき１回まで投票でき、票はすべて匿名で集計されます。"
      },
      {
        title: "「もし〇〇だったら」を検証",
        imgSrc: "/images/home_3.png",
        text: "いくつかの投票ルールでは、他の決め方を採用していたらどのような結果になっていたかシミュレーションできます。"
      },
      {
        title: "リアルタイムで集計",
        imgSrc: "/images/home_4.png",
        text: "投票の結果は自動で計算され、リアルタイムで画面に反映されます。"
      }
    ],
    info: {
      text: "まずは自分の投票ルームを作ってみましょう。"
    }
  },
  details: {
    title: "投票ルールの詳細",
    rules: [
      {
        name: "Majority Judgement",
        descriptions: [
          "Majority Judgement(マジョリティ・ジャッジメント)は、各候補に対して絶対評価で投票し、中央値をその候補の評価とする決め方です。",
          "< 評価を表す語彙について >\n投票の際、評価を表す語彙も判断に影響します。本アプリの場合、デフォルトは以下の６つですが、カスタマイズすることもできます。",
          "/images/details_1.jpg",
          "\n数・言葉ともに編集できるので、投票内容に応じて全員ができるだけ共通の基準で判断できるように設定することが可能です。",
          "例えば、「良い」「普通」「悪い」の３つに設定して中立な立場を選択可能にしたり、「6」~「1」の６段階にして肯定的か否定的かどちらかの立場を取るよう促したりすることもできます。",
          "また、絵文字を活用して以下のように言葉を使わない方法で投票を作成することもできます。",
          "/images/details_2.jpg",
          "\n< タイブレーキングについて >\n投票の結果、中央値に該当する評価が複数の候補で同一となった場合、本アプリでは自動的に、最終的な評価と同じかそれより良い評価をつけた票の数を比較し、それらの票が多い方を高い順位とします。",
          "< 中央値が存在しない場合 >\n投票者数が偶数の場合、中央値が存在しない(あるいは中央値が２つ存在する)場合があります。その場合、本アプリではその２つのうち低い方を最終的な評価とします。"
        ]
      },
      {
        name: "ボルダルール",
        descriptions: [
          "例えば３択の時、１番良いと思う候補に３点、２番目に２点、３番目に１点、というように点をつけていきます。勝者は満場一致に最も近いものになります。"
        ]
      },
      {
        name: "コンドルセ・ヤングの最尤法",
        descriptions: [
          "総当たり戦を元に確率の計算を行います。勝者は他の候補との一騎打ちで必ず勝利します。"
        ]
      },
      {
        name: "多数決",
        descriptions: [
          "一番良いと思う候補を一つ選びます。"
        ]
      }
    ]
  },
  tech: {
    title: "技術情報",
    description: "本アプリは主に以下のような技術を使っています。",
    techs: [
      "Firebase Authentication",
      "Cloud Firestore",
      "Next.js",
      "Recoil",
      "Emotion",
      "Framer Motion",
      "Vercel"
    ]
  },
  changelog: {
    title: "リリースノート",
    changes: [
      {
        date: "2022/02/09",
        text: "多数決の結果に、得票数と合わせて得票率を表示するようにしました。"
      },
      {
        date: "2022/02/09",
        text: "どの決め方を選んだら良いか提案する機能を実装しました。\n投票ルームを作成する際、投票の目的に応じて望ましい投票ルールを提案します。"
      },
      {
        date: "2022/02/06",
        text: "QRコードで参加できるようになりました。\n投票のタイトル名やアプリのURLを知らなくても、ルーム作成後に表示されるQRコードを読み取ることで投票に参加できます。"
      },
      {
        date: "2022/02/06",
        text: "Majority Judgementを使った投票の結果を表示する画面に、「詳細」ボタンを追加しました。\n票の内訳が表示され、Majority Judgementの仕組みを確認することができます。"
      },
      {
        date: "2022/02/06",
        text: "アプリ内部を刷新しました。\nサービスのURLを変更し、アプリの挙動やバグを改善したほか、UIを新しくしました。"
      },
      {
        date: "2021/04/12",
        text: "Majority Judgementを追加しました。\nMajority Judgementを使って投票ルームを作成する場合、評価を表す語彙(「非常に良い」「不十分」など)をカスタマイズすることもできます。"
      },
      {
        date: "2021/03/09",
        text: "「結果の検証を表示」ボタンを追加しました(現在は「もし〇〇だったら」ボタンに名称変更)。\n結果の画面で、他の投票ルールを採用していたらどのような結果になっていたか、シュミレーションできます。ボルダルールまたはコンドルセ・ヤングの最尤法で集計されたルームのみで表示されます。"
      },
      {
        date: "2021/03/07",
        text: "投票済みの人数が正しく表示されないことがあるバグを修正。"
      },
      {
        date: "2021/02/18",
        text: "本アプリをリリース。"
      }
    ]
  },
  footer: {
    sections: [
      {
        title: "サービス",
        pages: [
          {
            title: "ErabeRuleについて",
            url: "/"
          },
          {
            title: "投票ルールの詳細",
            url: "/details"
          },
          {
            title: "技術情報",
            url: "/tech"
          },
          {
            title: "リリースノート",
            url: "/changelog"
          }
        ]
      },
      {
        title: "サポート",
        pages: [
          {
            title: "利用規約",
            url: "/terms"
          },
          {
            title: "プライバシーポリシー",
            url: "/privacy"
          },
          {
            title: "フィードバック",
            url: "https://forms.gle/viQzz59d9HYoZgFF6"
          }
        ]
      },
      {
        title: "関連リンク",
        pages: [
          {
            title: "開発者のTwitter",
            url: "https://twitter.com/moyotsukai"
          }
        ]
      }
    ]
  }
}