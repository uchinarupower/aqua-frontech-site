// ダミーの活動実績データ
export const projectsData = [
  {
    id: 'titech-ifac-wc-2023-award',
    title: 'IFAC WC 2023 海洋ロボット夜の祭典 Best Performance Award 受賞',
    description: '東京工業大学ロボット技術研究会（アクア研）が、水中ロボット「Kurione2」と「Kurione3」によるパフォーマンスでBest Performance Awardを受賞。音楽、フルカラーLED、噴水機能を組み合わせ、観客を魅了しました。噴水機構の損失低減や2台同時操作のためのシミュレーション開発など、技術的課題を克服しての受賞です。',
    imageUrl: '/images/kurione-ifac-wc-2023.webp',
    tags: ['水中ロボット', 'パフォーマンス', '受賞', 'IFAC WC 2023', 'LED演出', '噴水機能', 'シミュレーション'],
    date: '2023年7月受賞',
    // 詳細ページ用に、より詳しい情報を追加できます
    longDescription: `
      <p>東京工業大学の公認サークル、ロボット技術研究会（口技研）の水中ロボットチーム、アクア研が2023年7月12日、横浜市みなとみらいのシーカヤックパークで行われた「海洋ロボット夜の祭典」でBest Performance Award（最優秀パフォーマンス賞）を受賞しました。</p>
      <p>このイベントは、国際会議IFAC WC 2023の市民向けフォーラムの一環として開催され、約1,000人の観客の前でパフォーマンスが行われました。</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">パフォーマンス内容</h3>
      <p>使用されたロボットは、2022年沖縄海洋ロボコンで敢闘賞を受賞した「Kurione2」と、それをベースに新たに開発された「Kurione3」の2台です。 音楽に合わせた演技と技術解説を組み合わせ、夜間イベントならではのフルカラーテープLEDによる華やかな演出や、技術的に困難だった噴水機能の搭載を実現しました。</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">技術的挑戦：噴水機構</h3>
      <p>噴水機能は、高さ3m程の噴水を出す遠心ポンプを流体力学に基づいて設計。モーターを海水から保護するため、マグネットカップリング機構が採用されました。 この機構は、モーター側とプロペラ側の回転軸に磁石を取り付け、磁力で回転を伝えることでモーターを海水から完全に隔離するものです。 モーターの回転を磁力で伝える際の損失（磁石同士の距離、加工精度、振動による接触など）を最小限に抑える設計が重要でした。</p>
      <figure class="my-4">
        <img src="/images/kurione-pump-structure.webp" alt="Kurioneで用いられた噴水機構の構造図" class="mx-auto max-w-md rounded-md shadow-md" />
        <figcaption class="text-center text-sm text-gray-600 mt-1">図1. Kurioneで用いられた噴水機構</figcaption>
      </figure>
      <h3 class="text-xl font-semibold mt-6 mb-2">技術的挑戦：2台同時操作とシミュレーション</h3>
      <p>2台のロボットを暗い海で同時に動かすため、操縦者同士の連携が重要でした。練習場所の制約から、仮想フィールドでロボットの動きを再現するシミュレーション環境を新たに構築し、操縦練習や演技修正、タイミング調整を入念に行いました。</p>
      <figure class="my-4">
        <img src="/images/kurione-simulation.webp" alt="開発した演技シミュレーションと操縦練習の様子" class="mx-auto max-w-md rounded-md shadow-md" />
        <figcaption class="text-center text-sm text-gray-600 mt-1">図2. 開発した演技シミュレーションと操縦練習</figcaption>
      </figure>
      <p>これらの技術的挑戦と演出の完成度が評価され、受賞に至りました。噴水が上がった瞬間には観客から歓声が上がる場面もありました。</p>
      <h3 class="text-xl font-semibold mt-6 mb-2">受賞者のコメント</h3>
      <p><strong>樋本耀さん（工学院システム制御系 学士課程4年・当時）：</strong>「演出およびシミュレーション制作を担当。ロボットを主役に観客を楽しませるため、演劇の経験を基にパフォーマンスを考え、シミュレーション環境を構築しました。観客から歓声が上がったときは嬉しかったです。」</p>
      <p><strong>内河慶輔さん（情報理工学院 情報工学系 修士課程1年・当時）：</strong>「ロボット制御を担当し、2台同期制御に挑戦。多くの方にロボットを見てもらえて感慨深かったです。」</p>
    `, // HTML形式で詳細情報を記述
    relatedImages: [ // 記事中の他の画像も追加できます
      { src: '/images/kurione-performance-night.webp', alt: 'Kurione2とKurione3による夜間パフォーマンス(噴水)' },
      { src: '/images/rogiken-members-award.webp', alt: '受賞に喜ぶ口技研のメンバー' },
      { src: '/images/award-certificate.webp', alt: 'Best Performance Award 賞状' },
    ]
  },
  // ... 他のプロジェクトデータも同様に longDescription や relatedImages を追加できます
  {
    id: 'project-alpha',
    title: '海洋環境モニタリングシステム開発',
    description: 'AIを活用したリアルタイム海洋環境監視システムのプロトタイプを開発し、実証実験に成功しました。水質、水温、プランクトン量の自動計測と予測を行います。',
    imageUrl: '/images/placeholder-project-1.webp',
    tags: ['AI', 'IoT', '海洋環境', 'モニタリング'],
    date: '2024年10月完了',
    longDescription: '<p>このプロジェクトでは、最新のAI技術と複数のセンサーを組み合わせることで、海洋環境の変化をリアルタイムで捉え、将来予測を行うシステムの開発を目指しました。詳細なデータ収集と分析により、環境保全策の立案や漁業資源管理への貢献が期待されます。</p>',
  },
  // ... (以下同様)
  {
    id: 'project-beta',
    title: '持続可能な養殖技術の研究',
    description: '環境負荷を低減する新しい養殖技術に関する基礎研究。閉鎖循環式養殖システム（RAS）の効率化とコスト削減に取り組みました。',
    imageUrl: '/images/placeholder-project-2.webp',
    tags: ['養殖技術', 'RAS', '環境負荷低減', '持続可能性'],
    date: '2025年3月完了',
    longDescription: '<p>持続可能な水産資源確保のため、環境への負荷が小さい閉鎖循環式養殖システム（RAS）の技術革新に取り組みました。特に、運用コストの削減とシステムの安定稼働を目指した研究開発を行っています。</p>',
  },
  {
    id: 'project-gamma',
    title: '沿岸域におけるマイクロプラスチック汚染調査',
    description: '国内主要河川の河口域におけるマイクロプラスチックの分布と種類を調査し、汚染状況のデータベースを構築。今後の対策立案に貢献します。',
    imageUrl: '/images/placeholder-project-3.webp',
    tags: ['マイクロプラスチック', '環境調査', 'データベース', '沿岸域'],
    date: '進行中',
    longDescription: '<p>マイクロプラスチックによる海洋汚染は地球規模の課題です。本プロジェクトでは、国内の沿岸域を対象に汚染実態を詳細に調査し、そのデータを公開することで、問題解決に向けた科学的知見の提供を目指しています。</p>',
  },
];