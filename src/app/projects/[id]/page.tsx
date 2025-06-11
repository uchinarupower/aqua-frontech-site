import { projectsData } from '@/data/projects'; // 共通化したプロジェクトデータ
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation'; // ページが見つからない場合に404を表示

// 動的にメタデータを生成する関数 (オプション)
export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === params.id);
  if (!project) {
    return {
      title: 'プロジェクトが見つかりません',
    };
  }
  return {
    title: `${project.title} | 活動実績`,
    description: project.description,
  };
}

// 静的パスを生成する関数 (ビルド時に各詳細ページを生成する場合に推奨)
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    notFound(); // プロジェクトが見つからなければ404ページを表示
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <article className="bg-white shadow-xl rounded-lg overflow-hidden">
        {project.imageUrl && (
          <div className="relative w-full h-72 md:h-96">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              style={{ objectFit: 'cover' }}
              priority // LCP要素になる可能性が高いためpriority属性を追加
            />
          </div>
        )}

        <div className="p-6 md:p-10">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
              {project.title}
            </h1>
            <div className="text-md text-gray-500 mb-4">
              <span>{project.date}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* 詳細説明 (HTMLを解釈して表示) */}
          {project.longDescription && (
            <div
              className="prose prose-lg max-w-none mb-8" // Tailwind Typography プラグインのクラス (後述)
              dangerouslySetInnerHTML={{ __html: project.longDescription }}
            />
          )}

          {/* 関連画像セクション */}
          {project.relatedImages && project.relatedImages.length > 0 && (
            <section className="my-10">
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">関連画像</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.relatedImages.map((image, index) => (
                  <div key={index} className="relative aspect-video rounded-md overflow-hidden shadow-md"> {/* aspect-video で16:9の比率 */}
                    <Image
                      src={image.src}
                      alt={image.alt || `${project.title} - 関連画像 ${index + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </section>
          )}


          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/projects"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-semibold"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
                <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
              </svg>
              活動実績一覧へ戻る
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}