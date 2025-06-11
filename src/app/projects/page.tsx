import Link from 'next/link';
import Image from 'next/image'; // 画像を使用する場合
// この行を削除: const projectsData = [ ... ];
import { projectsData } from '@/data/projects'; // ★ この行を追加
// ... (他のimport文やコードはそのまま)

// 活動実績データ
const projectsData = [
  {
    id: 'titech-ifac-wc-2023-award',
    title: 'IFAC WC 2023 海洋ロボット夜の祭典 Best Performance Award 受賞',
    description: '東京工業大学ロボット技術研究会（アクア研）が、水中ロボット「Kurione2」と「Kurione3」によるパフォーマンスでBest Performance Awardを受賞。音楽、フルカラーLED、噴水機能を組み合わせ、観客を魅了しました。噴水機構の損失低減や2台同時操作のためのシミュレーション開発など、技術的課題を克服しての受賞です。', // [cite: 3, 6] (内容を要約)
    imageUrl: '/images/kurione-ifac-wc-2023.webp', // ★ public/images/に保存した画像パスを指定
    tags: ['水中ロボット', 'パフォーマンス', '受賞', 'IFAC WC 2023', 'LED演出', '噴水機能', 'シミュレーション'],
    date: '2023年7月受賞', // [cite: 3] (イベント開催日・受賞日)
  },
  // 以前のダミーデータはここから下に続きます
  {
    id: 'project-alpha',
    title: '海洋環境モニタリングシステム開発',
    description: 'AIを活用したリアルタイム海洋環境監視システムのプロトタイプを開発し、実証実験に成功しました。水質、水温、プランクトン量の自動計測と予測を行います。',
    imageUrl: '/images/placeholder-project-1.webp',
    tags: ['AI', 'IoT', '海洋環境', 'モニタリング'],
    date: '2024年10月完了',
  },
  {
    id: 'project-beta',
    title: '持続可能な養殖技術の研究',
    description: '環境負荷を低減する新しい養殖技術に関する基礎研究。閉鎖循環式養殖システム（RAS）の効率化とコスト削減に取り組みました。',
    imageUrl: '/images/placeholder-project-2.webp',
    tags: ['養殖技術', 'RAS', '環境負荷低減', '持続可能性'],
    date: '2025年3月完了',
  },
  {
    id: 'project-gamma',
    title: '沿岸域におけるマイクロプラスチック汚染調査',
    description: '国内主要河川の河口域におけるマイクロプラスチックの分布と種類を調査し、汚染状況のデータベースを構築。今後の対策立案に貢献します。',
    imageUrl: '/images/placeholder-project-3.webp',
    tags: ['マイクロプラスチック', '環境調査', 'データベース', '沿岸域'],
    date: '進行中',
  },
  // ... 必要に応じてさらにプロジェクトを追加
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          活動実績
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Aqua-frontechがこれまで取り組んできた主要なプロジェクトや研究成果をご紹介します。
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl"
          >
            {project.imageUrl && (
              <div className="relative w-full h-56">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {project.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {project.description}
              </p>
              <div className="mb-4">
                <span className="text-xs font-semibold text-gray-500 uppercase">
                  {project.date}
                </span>
              </div>
              <div className="mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-blue-100 text-blue-700 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${project.id}`}
                className="mt-auto inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 transition-colors text-center"
              >
                詳細を見る
              </Link>
            </div>
          </div>
        ))}
      </div>

      {projectsData.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">
            現在公開できる活動実績はありません。
          </p>
        </div>
      )}
    </div>
  );
}