import Image from 'next/image'
import Link from 'next/link'

export default function List() {
  return (
    <div className="main">
      <section>
        <h2>
          <span>
            <i className="fas fa-paw" />
            子犬を探す
          </span>
          <span>Find puppy dogs</span>
        </h2>
        <p>
          ※代表して子犬ページだけ作っています。必要に応じて、各ページを作って下さい。
        </p>
        <p>
          600px未満では１カラム、600px以上で３カラムになります。３カラム以外にしたい場合は、cssフォルダのstyle.cssの
          <br />
          <span className="look">
            grid-template-columns: repeat(
            <span className="color-check">3</span>, 1fr);
          </span>
          <br />の<span className="color-check">3</span>
          の数字を変更して下さい。２カラムなら
          <span className="color-check">2</span>にするだけです。
        </p>

        <div className="list-grid">
          <div className="list">
            <figure>
              <Link href="../item/">
                <Image src="/images/1.jpg" alt="" fill />
              </Link>
            </figure>
            <div className="text">
              <h4>
                <Link href="../item/">ここに犬種を入れます</Link>
              </h4>
              <div>
                <span className="price">000,000円</span>
                <span className="icon gender male">男の子</span>
                <span className="icon gender female">女の子</span>
                <span className="icon movie">動画</span>
                <span className="icon">アイコン</span>
                <p>ここに説明を入れます。サンプルテキスト。</p>
              </div>
            </div>
            <p className="btn">
              <Link href="../item/">詳しくみる</Link>
            </p>
            <span className="icon-point">NEW</span>
          </div>

          <div className="list">
            <figure>
              <Link href="../item/">
                <Image src="/images/1.jpg" alt="" fill />
              </Link>
            </figure>
            <div className="text">
              <h4>
                <Link href="../item/">ここに犬種を入れます</Link>
              </h4>
              <div>
                <span className="price">000,000円</span>
                <span className="icon gender male">男の子</span>
                <span className="icon gender female">女の子</span>
                <span className="icon movie">動画</span>
                <span className="icon">アイコン</span>
                <p>ここに説明を入れます。サンプルテキスト。</p>
              </div>
            </div>
            <p className="btn">
              <Link href="../item/">詳しくみる</Link>
            </p>
          </div>

          <div className="list">
            <figure>
              <Link href="../item/">
                <Image src="/images/1.jpg" alt="" fill />
              </Link>
            </figure>
            <div className="text">
              <h4>
                <Link href="../item/">ここに犬種を入れます</Link>
              </h4>
              <div>
                <span className="price">000,000円</span>
                <span className="icon gender male">男の子</span>
                <span className="icon gender female">女の子</span>
                <span className="icon movie">動画</span>
                <span className="icon">アイコン</span>
                <p>ここに説明を入れます。サンプルテキスト。</p>
              </div>
            </div>
            <p className="btn">
              <Link href="../item/">詳しくみる</Link>
            </p>
          </div>

          <div className="list">
            <figure>
              <Link href="../item/">
                <Image src="/images/1.jpg" alt="" fill />
              </Link>
            </figure>
            <div className="text">
              <h4>
                <Link href="../item/">ここに犬種を入れます</Link>
              </h4>
              <div>
                <span className="price">000,000円</span>
                <span className="icon gender male">男の子</span>
                <span className="icon gender female">女の子</span>
                <span className="icon movie">動画</span>
                <span className="icon">アイコン</span>
                <p>ここに説明を入れます。サンプルテキスト。</p>
              </div>
            </div>
            <p className="btn">
              <Link href="../item/">詳しくみる</Link>
            </p>
          </div>

          <div className="list">
            <figure>
              <Link href="../item/">
                <Image src="/images/1.jpg" alt="" fill />
              </Link>
            </figure>
            <div className="text">
              <h4>
                <Link href="../item/">ここに犬種を入れます</Link>
              </h4>
              <div>
                <span className="price">000,000円</span>
                <span className="icon gender male">男の子</span>
                <span className="icon gender female">女の子</span>
                <span className="icon movie">動画</span>
                <span className="icon">アイコン</span>
                <p>ここに説明を入れます。サンプルテキスト。</p>
              </div>
            </div>
            <p className="btn">
              <Link href="../item/">詳しくみる</Link>
            </p>
          </div>

          <div className="list">
            <figure>
              <Link href="../item/">
                <Image src="/images/1.jpg" alt="" fill />
              </Link>
            </figure>
            <div className="text">
              <h4>
                <Link href="../item/">ここに犬種を入れます</Link>
              </h4>
              <div>
                <span className="price">000,000円</span>
                <span className="icon gender male">男の子</span>
                <span className="icon gender female">女の子</span>
                <span className="icon movie">動画</span>
                <span className="icon">アイコン</span>
                <p>ここに説明を入れます。サンプルテキスト。</p>
              </div>
            </div>
            <p className="btn">
              <Link href="../item/">詳しくみる</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
