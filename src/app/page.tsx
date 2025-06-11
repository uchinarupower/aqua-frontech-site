import Link from 'next/link';
// import Image from 'next/image'; // Next.jsの画像最適化コンポーネント

export default function HomePage() {
  return (
    <>
      {/* 1. ヒーローセクション (要素技術にフォーカス) */}
      <section className="bg-gradient-to-r from-blue-700 via-teal-500 to-cyan-600 text-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            最先端の水中要素技術で、未知なる水圏へ
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Aqua-frontechは、高性能スラスター、高精度センサー、堅牢な防水・耐圧技術を核に、
            海洋開発、環境調査、水中ロボティクス分野に革新的なソリューションを提供します。
          </p>
          <div className="space-x-4">
            <Link
              href="/technology" // 技術紹介ページへのリンクを想定
              className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors text-lg"
            >
              私たちの技術を見る
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-700 transition-colors text-lg"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      {/* 2. コア技術紹介セクション (旧: 団体紹介・強みセクション) */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Aqua-frontechのコアコンピタンス
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              私たちは以下の水中要素技術に強みを持ち、お客様の多様なニーズに応えるカスタマイズとシステムインテグレーションを実現します。
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* コア技術 1: 水中スラスター */}
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                {/* アイコンや画像のプレースホルダー */}
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  {/* <Image src="/icons/thruster-icon.svg" alt="スラスターアイコン" width={48} height={48} /> */}
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> {/* 仮のアイコン */}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">高性能 水中スラスター</h3>
              <p className="text-gray-600 text-center">
                高効率、高推力、優れた応答性を実現。小型ROVから大型AUVまで対応可能なラインナップと、精密な制御システムを提供します。
              </p>
            </div>
            {/* コア技術 2: 水中センサー */}
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
                  {/* <Image src="/icons/sensor-icon.svg" alt="センサーアイコン" width={48} height={48} /> */}
                  <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 19c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7 3.582 7 8 7z"></path></svg> {/* 仮のアイコン */}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">高精度 水中センサー群</h3>
              <p className="text-gray-600 text-center">
                音響、光学、環境（水温・塩分・圧力等）センサーを統合。リアルタイムデータ収集と高度な解析により、水中の詳細な情報を可視化します。
              </p>
            </div>
            {/* コア技術 3: 防水・耐圧技術 */}
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center">
                  {/* <Image src="/icons/waterproof-icon.svg" alt="防水アイコン" width={48} height={48} /> */}
                  <svg className="w-12 h-12 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"></path></svg> {/* 仮のアイコン */}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">堅牢な防水・耐圧ハウジング</h3>
              <p className="text-gray-600 text-center">
                深海から浅瀬まで、過酷な水中環境に対応するカスタム設計の防水ケース・耐圧容器。長期運用と信頼性を確保します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 要素技術ラインナップセクション (新設) */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              注目の要素技術
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              私たちの提供する代表的な水中要素技術と製品をご覧ください。
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 要素技術カードの例 */}
            {[
              { name: 'ブラシレススラスター T1000', category: 'スラスター', image: '/images/placeholder-thruster.webp', link: '/technology/thrusters/t1000' },
              { name: 'マルチビームソナー S200', category: '音響センサー', image: '/images/placeholder-sonar.webp', link: '/technology/sensors/s200' },
              { name: '耐圧カメラハウジング D500', category: '防水・耐圧', image: '/images/placeholder-housing.webp', link: '/technology/housings/d500' },
              { name: '水中GPSユニット G300', category: '測位システム', image: '/images/placeholder-gps.webp', link: '/technology/positioning/g300' },
            ].map(item => (
              <div key={item.name} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className="relative w-full h-48">
                  {/* <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} className="group-hover:scale-105 transition-transform duration-300" /> */}
                  <div className="absolute inset-0 bg-gray-300 flex items-center justify-center"> {/* 画像プレースホルダー */}
                    <span className="text-gray-500">画像: {item.name}</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-blue-600 font-semibold uppercase">{item.category}</span>
                  <h3 className="text-xl font-semibold text-gray-800 mt-1 mb-2 truncate group-hover:text-blue-700">{item.name}</h3>
                  <Link href={item.link} className="text-sm text-blue-600 hover:underline">
                    詳細を見る &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              href="/technology" // 技術紹介ページ全体へ
              className="bg-blue-600 text-white font-semibold py-3 px-10 rounded-lg shadow-md hover:bg-blue-700 transition-colors text-lg"
            >
              すべての要素技術を見る
            </Link>
          </div>
        </div>
      </section>


      {/* 4. 応用事例・活動実績セクション (旧: 最新活動セクションを調整) */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              要素技術が活きる最前線
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              私たちの水中要素技術が、様々な分野のプロジェクトでどのように活用されているかご紹介します。
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 活動例 1 (プレースホルダー) */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="relative w-full h-48">
                {/* <Image src="/images/placeholder-project-1.webp" alt="活動画像1" fill style={{ objectFit: 'cover' }} /> */}
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center"> {/* 画像プレースホルダー */}
                  <span className="text-gray-500">活動事例1 画像</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">深海資源探査ROVへの技術提供</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  高耐圧スラスターと高感度ソナーを搭載したROVが、水深2000mでの資源探査に成功。
                </p>
                <Link href="/projects/deep-sea-rov" className="text-blue-600 hover:text-blue-800 font-semibold mt-auto">
                  事例詳細 &rarr;
                </Link>
              </div>
            </div>
            {/* 活動例 2 (プレースホルダー) */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
               <div className="relative w-full h-48">
                {/* <Image src="/images/placeholder-project-2.webp" alt="活動画像2" fill style={{ objectFit: 'cover' }} /> */}
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center"> {/* 画像プレースホルダー */}
                  <span className="text-gray-500">活動事例2 画像</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">養殖場向け環境センサーネットワーク構築</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  水温・塩分・溶存酸素センサー群を無線ネットワーク化し、リアルタイム監視と自動給餌システム連携を実現。
                </p>
                <Link href="/projects/smart-aquaculture" className="text-blue-600 hover:text-blue-800 font-semibold mt-auto">
                  事例詳細 &rarr;
                </Link>
              </div>
            </div>
            {/* 活動例 3 (プレースホルダー) */}
             <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
               <div className="relative w-full h-48">
                {/* <Image src="/images/placeholder-project-3.webp" alt="活動画像3" fill style={{ objectFit: 'cover' }} /> */}
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center"> {/* 画像プレースホルダー */}
                  <span className="text-gray-500">活動事例3 画像</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">小型AUV用カスタム防水ケース開発</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  特殊形状・軽量化が求められるAUV向けに、CFRP製カスタム防水ケースと水中コネクタを開発・提供。
                </p>
                <Link href="/projects/custom-auv-housing" className="text-blue-600 hover:text-blue-800 font-semibold mt-auto">
                  事例詳細 &rarr;
                </Link>
              </div>
            </div>
          </div>
           <div className="text-center mt-16">
            <Link
              href="/projects"
              className="bg-teal-600 text-white font-semibold py-3 px-10 rounded-lg shadow-md hover:bg-teal-700 transition-colors text-lg"
            >
              全ての活動実績を見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}