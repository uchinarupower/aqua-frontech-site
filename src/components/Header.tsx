import Link from 'next/link'; // Next.jsのページ間リンク用コンポーネント

const Header = () => {
    // ナビゲーションリンクのデータ
    const navItems = [
        { href: '/', label: 'トップ' },
        { href: '/projects', label: '活動実績' },
        { href: '/technology', label: '技術紹介' },
        { href: '/about', label: '団体概要' },
        { href: '/contact', label: 'お問い合わせ' },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50"> {/* ヘッダー全体: 背景白、影、画面上部に固定 */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* 中央寄せコンテナ、左右パディング */}
                <div className="flex items-center justify-between h-16"> {/* Flexbox: 要素を縦中央揃え、横は両端揃え、高さ16 (64px) */}
                    {/* ロゴ */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
                            Aqua-Frontech
                        </Link>
                    </div>

                    {/* ナビゲーション (PC向け) */}
                    <nav className="hidden md:flex space-x-8"> {/* md (768px) 以上で表示、Flexboxアイテム間のスペース */}
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* ハンバーガーメニュー (モバイル向け) - 今回はまずPC向けナビゲーションのみ実装します。
              モバイル対応は後ほど追加することも可能です。 */}
                    <div className="md:hidden">
                        {/* ここにモバイル用のメニューボタンを後で追加できます */}
                        <button className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600">
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;