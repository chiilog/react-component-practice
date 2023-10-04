import './globals.css'
import 'sanitize.css'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

export const metadata: Metadata = {
  title:
    'ペットショップ・ブリーダー向け無料ホームページテンプレート tp_petshop1',
  description: 'ここにサイト説明を入れます',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <div id="container">
          {children}

          <div className="pagetop">
            <a href="#">
              <FontAwesomeIcon icon={faAngleDoubleUp} size="xs" />
            </a>
          </div>
          <div id="footer-contents">
            <div className="left">
              <h4 id="footer-logo">
                <Image
                  src="/images/logo.png"
                  alt="SAMPLE PET SHOP"
                  width={400}
                  height={40}
                />
              </h4>
              <p>
                〒000-0000 東京都千代田区XXXXXX1丁目1号
                <br />
                電話：000-0000-0000
                <br />
                営業時間：10:00〜20:00まで
                <br />
                定休日：毎週水曜日
              </p>

              <table className="week">
                <caption>トリミングサロンの受付（△…午前中のみ）</caption>
                <thead>
                  <tr>
                    <th>日</th>
                    <th>月</th>
                    <th>火</th>
                    <th>水</th>
                    <th>木</th>
                    <th>金</th>
                    <th>土</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>△</td>
                    <td>○</td>
                    <td>×</td>
                    <td>○</td>
                    <td>○</td>
                    <td>○</td>
                    <td>△</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="right">
              <h4>アクセス</h4>
              <p>
                <a href="https://template-party.com/file/pickup_googlemap.html">
                  GoogleMapの地図を変更する方法はマニュアルをご覧下さい。
                </a>
              </p>

              <div className="iframe-box">
                <iframe
                  title="GoogleMap"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0448418561778!2d139.74267721573196!3d35.675897837870934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b89b2e1c8b1%3A0x59a123e3d5ac5ab6!2z44CSMTAwLTAwMTQg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy65rC455Sw55S677yR5LiB55uu77yX4oiS77yR!5e0!3m2!1sja!2sjp!4v1545036128899"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          <div id="footermenu">
            <ul>
              <li className="title">メニュー見出し</li>
              <li>
                <a href="#">サンプルメニューサンプルメニュー</a>
              </li>
              <li>
                <a href="#">サンプルメニュー</a>
              </li>
              <li>
                <a href="#">サンプルメニュー</a>
              </li>
              <li>
                <a href="#">サンプルメニュー</a>
              </li>
            </ul>
            <ul>
              <li className="title">メニュー見出し</li>
              <li>
                <a href="#">サンプルメニューサンプルメニュー</a>
              </li>
              <li>
                <a href="#">サンプルメニュー</a>
              </li>
              <li>
                <a href="#">サンプルメニュー</a>
              </li>
              <li>
                <a href="#">サンプルメニュー</a>
              </li>
            </ul>
            <ul>
              <li className="title">メニュー見出し</li>
              <li>
                <a href="#">サンプルメニューサンプルメニュー</a>
              </li>
              <li>
                <a href="#">サンプルメニュー</a>
              </li>
              <li>
                <a href="#">サンプルメニュー</a>
              </li>
            </ul>
            <ul>
              <li className="title">メニュー見出し</li>
              <li>
                <a href="#">
                  サンプルメニューサンプルメニューサンプルメニューサンプルメニュー
                </a>
              </li>
              <li>
                <a href="#">サンプルメニュー</a>
              </li>
            </ul>
          </div>
          <footer>
            <small>
              Copyright&copy; <Link href="/">SAMPLE PET SHOP</Link> All Rights
              Reserved.
            </small>
            <span className="pr">
              <a href="https://template-party.com/" target="_blank">
                《Web Design:Template-Party》
              </a>
            </span>
          </footer>
        </div>
      </body>
    </html>
  )
}
