const Footer = () => {
  const currentYear = new Date().getFullYear(); // 現在の年を動的に取得

  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-auto"> {/* フッター全体: 背景濃いグレー、文字色薄いグレー、上下パディング、上に自動マージン */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"> {/* 中央寄せコンテナ、左右パディング、テキスト中央寄せ */}
        <p>&copy; {currentYear} Aqua-frontech. All Rights Reserved.</p>
        {/* 必要に応じて、ここに追加のフッターリンクや情報を加えることができます */}
        {/* 例:
          <div className="mt-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">プライバシーポリシー</Link>
            <span className="mx-2">|</span>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">利用規約</Link>
          </div>
        */}
      </div>
    </footer>
  );
};

export default Footer;