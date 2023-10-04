import React from 'react'

export default function ListLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
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
  )
}
