import Image from 'next/image'
import Link from 'next/link'

export default function ListLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header>
        <h1 id="logo">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="SAMPLE PET SHOP"
              width={300}
              height={30}
            />
          </Link>
        </h1>
        <nav className="category-menu">
          <ul>
            <li>
              <Link href="../list/">
                <span className="line1">
                  <span>子犬</span>を探す
                </span>
                <span className="line2">Find puppy dogs</span>
              </Link>
            </li>
            <li>
              <Link href="../list/">
                <span className="line1">
                  <span>子猫</span>を探す
                </span>
                <span className="line2">Find puppy cats</span>
              </Link>
            </li>
            <li>
              <Link href="../list/">
                <span className="line1">
                  <span>小動物</span>を探す
                </span>
                <span className="line2">ハムスターや小鳥など</span>
              </Link>
            </li>
            <li>
              <Link href="../list/">
                <span className="line1">
                  <span>お魚</span>を探す
                </span>
                <span className="line2">熱帯魚など</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div id="contents">
        <main className="column">
          {children}
          <div className="sub">
            <div className="box1">
              <h3>見出し</h3>

              <nav>
                <ul className="submenu">
                  <li>
                    <a href="">サブメニュー</a>
                  </li>
                  <li>
                    <a href="">サブメニュー</a>
                  </li>
                  <li>
                    <a href="">サブメニュー</a>
                  </li>
                  <li>
                    <a href="">サブメニュー</a>
                  </li>
                  <li>
                    <a href="">サブメニュー</a>
                  </li>
                </ul>
              </nav>
            </div>

            <h3>見出し</h3>

            <nav>
              <ul className="submenu">
                <li>
                  <a href="">サブメニュー</a>
                </li>
                <li>
                  <a href="">サブメニュー</a>
                </li>
                <li>
                  <a href="">サブメニュー</a>
                </li>
                <li>
                  <a href="">サブメニュー</a>
                </li>
                <li>
                  <a href="">サブメニュー</a>
                </li>
              </ul>
            </nav>
          </div>
        </main>
      </div>
    </>
  )
}
