import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <main>
        <section>
          <h2>当テンプレートの使い方</h2>

          <h3>titleタグ、copyright、metaタグ、他の設定</h3>
          <p>
            <strong className="color-check">
              titleタグの設定はとても重要です。念入りにワードを選んで適切に入力しましょう。
            </strong>
            <br />
            まず、htmlソースが見れる状態にして、
            <br />
            <span className="look">
              &lt;title&gt;ペットショップ・ブリーダー向け無料ホームページテンプレート
              tp_petshop1&lt;/title&gt;
            </span>
            <br />
            を編集しましょう。
            <br />
            あなたのホームページ名が「SAMPLE PET SHOP」だとすれば、
            <br />
            <span className="look">
              &lt;title&gt;SAMPLE PET SHOP&lt;/title&gt;
            </span>
            <br />
            とすればＯＫです。SEO対策もするなら冒頭に重要なワードを入れておきましょう。
          </p>
          <p>
            <strong className="color-check">copyrightを変更しましょう。</strong>
            <br />
            続いてhtmlの下の方にある、
            <br />
            <span className="look">
              Copyright&copy; SAMPLE PET SHOP All Rights Reserved.
            </span>
            <br />
            の部分もあなたのサイト名に変更します。
          </p>
          <p>
            <strong className="color-check">metaタグを変更しましょう。</strong>
            <br />
            htmlソースが見える状態にしてmetaタグを変更しましょう。
          </p>
          <p>
            ソースの上の方に、
            <br />
            <span className="look">
              content=&quot;ここにサイト説明を入れます&quot;
            </span>
            <br />
            という部分がありますので、テキストをサイトの説明文に入れ替えます。検索結果の文面に使われる場合もありますので、見た人が来訪したくなるような説明文を簡潔に書きましょう。
          </p>
          <p>
            <strong className="color-check">
              h1ロゴのaltタグも変更しましょう。
            </strong>
            <br />
            html側に、
            <br />
            <span className="look">alt=&quot;SAMPLE PET SHOP&quot;</span>
            <br />
            となっている箇所があるので、この部分もあなたのサイト名に変更しましょう。
          </p>
        </section>

        <section>
          <h2>アイコン画像について（Font Awesomeの解説）</h2>
          <p>
            imagesフォルダに入っていない画像（アイコン）は全てFont
            Awesomeの素材です。
            <br />
            <a href="https://fontawesome.com/" target="_blank">
              Font Awesome 公式サイト
            </a>
            <br />
            <a
              href="https://fontawesome.com/v5.15/icons?d=gallery&p=2"
              target="_blank"
            >
              Font Awesome アイコン一覧
            </a>
          </p>
          <p>
            iタグを使ってhtmlに直接アイコンを読み込む場合と、cssの擬似要素を使って読み込む場合があります。
            <br />
            それぞれ他のアイコンに置き換えたい場合は、当サイトの
            <a href="https://template-party.com/tips/tips20211126_font_awesome.html">
              マニュアル
            </a>
            をお読み下さい。
          </p>
          <p>
            <strong className="color-check">
              Font Awesomeを使う為に必要なタグ、ファイル類。
            </strong>
            <br />
            cssフォルダのstyle.css冒頭で読み込んでいる「Font
            Awesomeの読み込み」のブロック。
          </p>
          <p>
            <strong className="color-check">
              何年も経過した場合、動作に問題が出てくる可能性があります。
            </strong>
            <br />
            テンプレートを編集していないのに突然動きがおかしくなった場合は、style.cssの冒頭でCDNから読み込んでいるFont
            Awesome関連のファイルのバージョンを変更して動作するか確認してみて下さい。
          </p>
        </section>

        <section>
          <h2>当テンプレートには、ロゴが２種類設定されています</h2>
          <p>
            トップページ用（logo_home.png）と、トップページ以外用（logo.png）です。
          </p>
        </section>

        <section>
          <h2>開閉メニューについて</h2>
          <p>
            ページ右上のハンバーガーメニューをクリックした際のメニューについては、htmlの下の方にある、
            <br />
            <span className="look">&lt;div id=&quot;menubar&quot;&gt;</span>
            <br />
            のブロックになります。必要に応じて編集して下さい。
          </p>
        </section>

        <section>
          <h2>トップページのスライドショー（CSSの背景画像タイプ）</h2>

          <h3>スライドショー用の画像について</h3>
          <p>
            AI出力されたものを梱包していますのでそのまま再利用頂いても構いませんが著作は当サイトにあります。
            <br />
            このテンプレートの公開時点では、AIサイトによると「著作は作り出した人のもの」（＝当サイト）という規約になっているようです。
          </p>
          <p>
            AI出力でないリアルな画像に入れ替えたい場合は
            <a
              href="https://www.photo-ac.com/#a_aid=60e590da89d1f&amp;a_bid=35660fdf"
              target="_blank"
            >
              写真ACさん（無料写真サイト）
            </a>
            がおすすめです。
          </p>

          <h3>CSSタイプのスライドショーについて</h3>
          <p>cssフォルダのslide.cssで設定されています。</p>
          <p>
            <strong className="color-check">
              5:3のアスペクト比率の背景画像をレスポンシブ化しています
            </strong>
            <br />
            サンプルテンプレートでは、5:3の画像がレスポンシブになるようcssで設定されています。
            <br />
            この比率以外でも問題なく表示されますが、部分的に切り抜かれるので、5:3以外の比率の画像を全部表示させたければ以下を調整して下さい。
          </p>
          <p>
            cssフォルダのslide.cssの、
            <br />
            <span className="look">.home header {}</span>
            <br />
            の中にある、
            <br />
            <span className="look">padding-top: 60%;</span>
            <br />
            を調整します。60というのは、3÷5=0.6の事です。
            <br />
            もし、2:1の画像を使いたければ、1÷2=0.5
            <br />
            <span className="look">padding-top: 50%;</span>
            <br />
            と書き直せばOKです。
          </p>
          <p>
            <strong className="color-check">画像を入れ替えたい場合</strong>
            <br />
            「1.jpg」「2.jpg」「3.jpg」の3枚の画像を用意してimagesフォルダに上書きして下さい。
            <br />
            大きさはバラバラでも構いませんが、適当に切り抜かれてもおかしくない画像を使って下さい。
            <br />
            また、拡張子が「jpeg」や「JPG」と少し違った場合にうまく表示できない可能性があるので梱包画像の拡張子と合わせて下さい。拡張子を変更したい場合はslide.css側を直接変更しても構いません。
            <br />
            画像は容量が軽くなるようにできるだけ圧縮して下さい。容量が大きいと初動がガタつきます。
          </p>
          <p>
            <strong className="color-check">固定画像にしたい場合</strong>
            <br />
            cssフォルダのslide.cssを開き、冒頭の
            <br />
            「/*スライドショーのキーフレーム設定」
            <br />
            のブロックを全て削除。
          </p>
          <p>
            次に、index.htmlから使う画像の行だけを残してあとは削除すればOKです。
          </p>
          <p>
            <strong className="color-check">速度や枚数などの調整</strong>
            <br />
            cssフォルダのslide.cssで行って下さい。解説も入っています。
            <br />
            <a href="https://template-party.com/tips/slide_css.html">
              スライドショーに関する詳しい使い方はこちら。
            </a>
            （「imgタグを使っていないタイプ」をご参照下さい）
          </p>
        </section>

        <section>
          <h2>
            フッターのマップ(iframe)、詳細ページのYouTube(iframe)動画読み込みについて
          </h2>
          <p>
            <strong className="color-check">
              iframeを16:9のアスペクト比率でレスポンシブ化しています。
            </strong>
            <br />
            YouTubeのアスペクト比の16:9に合わせているので、基本的にここは変更しないでご利用下さい。
          </p>
          <p>
            どうしても変更したい場合は、cssフォルダのstyle.cssの、
            <br />
            <span className="look">.iframe-box</span>
            <br />
            の中にある、
            <br />
            <span className="look">padding-top: 56.25%;</span>
            <br />
            を調整して下さい。内容としては、上のスライドショーと同じです。
          </p>
        </section>

        <section>
          <h2>トップページの「お知らせ」ブロックのアイコンについて</h2>
          <p>
            アイコン内のテキストはhtml側で直接入力されていますので必要に応じて編集して下さい。
          </p>
          <p>
            背景色は、cssフォルダのstyle.cssの、
            <br />
            <span className="look">.new dt span</span>
            <br />
            や、
            <br />
            <span className="look">.new dt span.icon-bg1</span>
            <br />
            や、
            <br />
            <span className="look">.new dt span.icon-bg2</span>
            <br />
            のbackgroundでそれぞれ変更できます。
          </p>
          <p>
            新しいアイコンを追加したい場合、上記の「.new dt
            span.icon-bg2」ブロックをコピペし、
            <span className="color-check">.icon-bg2</span>部分を
            <span className="color-check">.icon-bg3</span>
            などに変更し、backgroundに好きな色を設定します。
            <br />
            後はhtml側で、
            <br />
            <span className="look">
              &lt;span className=&quot;
              <span className="color-check">icon-bg3</span>
              &quot;&gt;〜〜〜&lt;/span&gt;
            </span>
            <br />
            などとすればOKです。
          </p>
          <p>
            尚、あまり文字数が増えるとレイアウトが崩れるので注意して下さい。
          </p>
        </section>

        <section>
          <h2>トップページのサムネイルスライドショーについて</h2>
          <p>
            slickを使ったスラドショーになっています。
            <a href="https://kenwheeler.github.io/slick/" target="_blank">
              slick 公式サイト
            </a>
            <br />
            テンプレート内の解説及び、当サイト上でのマニュアル以外のサポートは基本的には行なっておりませんので、使いこなしたい方はGoogle検索などかけてみて下さい。
          </p>

          <div className="thumbnail-slide mb30">
            <Image src="/images/1.jpg" alt="" width={247} height={148} />
            <Image src="/images/2.jpg" alt="" width={247} height={148} />
            <Image src="/images/3.jpg" alt="" width={247} height={148} />
            <Image src="/images/1.jpg" alt="" width={247} height={148} />
            <Image src="/images/2.jpg" alt="" width={247} height={148} />
            <Image src="/images/3.jpg" alt="" width={247} height={148} />
          </div>

          <p>
            <strong className="color-check">
              写真の縦横サイズを予め揃えておくと綺麗に並びます。
            </strong>
            <br />
            枚数は自由に変更できます。html側に既存の写真ブロックをコピペして新しい画像ファイル名に書き換えて下さい。
            <br />
            スライドショーの設定は、jsフォルダのslick-thumbnail.jsで調整できます。
          </p>
          <p>
            <strong className="color-check">
              slickを使う為に必要なタグ、ファイル類。
            </strong>
            <br />
            1.
            html下部にある、「jQueryファイルの読み込み」のタグ。※下のjsファイルより先に読み込んで下さい。
            <br />
            2. その下にある、「スライドショー（slick）」からの数行のタグ。
            <br />
            3. jsフォルダ内の「js/slick-thumbnail.js」。
          </p>
        </section>

        <section>
          <h2>
            <span>h2見出し（ここ）に補足文字（→）を加えたい場合</span>
            <span>※これが補足文字</span>
          </h2>
          <p>
            h2の中に２つのspanタグを作って下さい。後半のspanが右側の補足文字になります。
            <br />
            よくわからない場合は、上のh2見出しのhtml側を見て下さい。
          </p>
        </section>

        <section>
          <h2>汎用開閉ブロックのサンプル</h2>
          <p>
            以下は「よく頂く質問」を仮定してサンプルを用意していますが汎用的な開閉ブロックなので、基本的にはどこにでも使えます。
            <br />
            クリック対象としたいブロックに
            <span className="look">
              <span className="color-check">
                className=&quot;openclose&quot;
              </span>
            </span>
            とつければ、続く要素が自動的に開閉ブロックになります。
            <br />
            もしすでにclass指定がある場合は、半角スペースで区切って追加すればOKです。
            <br />
            <span className="look">
              例：className=&quot;sample{' '}
              <span className="color-check">openclose</span>&quot;
            </span>
          </p>

          <dl className="faq">
            <dt className="openclose">
              ここに質問を書きます。クリックで回答が開きます。
            </dt>
            <dd>
              ここに回答を書きます。サンプルテキスト。ここに回答を書きます。サンプルテキスト。ここに回答を書きます。サンプルテキスト。
            </dd>

            <dt className="openclose">
              ここに質問を書きます。クリックで回答が開きます。ここに質問を書きます。クリックで回答が開きます。ここに質問を書きます。クリックで回答が開きます。ここに質問を書きます。クリックで回答が開きます。
            </dt>
            <dd>
              ここに回答を書きます。サンプルテキスト。ここに回答を書きます。サンプルテキスト。ここに回答を書きます。サンプルテキスト。ここに回答を書きます。サンプルテキスト。ここに回答を書きます。サンプルテキスト。ここに回答を書きます。サンプルテキスト。ここに回答を書きます。サンプルテキスト。
              <br />
              ここに回答を書きます。サンプルテキスト。ここに回答を書きます。サンプルテキスト。ここに回答を書きます。サンプルテキスト。
            </dd>
          </dl>
        </section>
      </main>

      <main className="column">
        <div className="main">
          <section>
            <h2>2カラムで使う場合</h2>

            <p>
              &lt;main&gt;を、&lt;main{' '}
              <span className="color-check">className=&quot;column&quot;</span>
              &gt;
              <br />
              に変更。
            </p>
            <p>
              その中に、左右のブロック（
              <span className="color-check">mainとsub</span>）を追加します。
              <br />
              mainが２つありますが、それぞれ異なる要素になるので間違えないようにして下さい。
            </p>
            <p>全体としては、以下のような形になります。</p>

            <p>
              <span className="look">
                &lt;main{' '}
                <span className="color-check">className=&quot;column</span>
                &quot;&gt;
                <br />
                <br />
                &lt;div{' '}
                <span className="color-check">className=&quot;main</span>
                &quot;&gt;
                <br />
                ※ここにメインコンテンツの内容を入れます。
                <br />
                &lt;/div&gt;
                <br />
                <br />
                &lt;div <span className="color-check">className=&quot;sub</span>
                &quot;&gt;
                <br />
                ※ここにサブコンテンツの内容を入れます。
                <br />
                &lt;/div&gt;
                <br />
                <br />
                &lt;/main&gt;
              </span>
            </p>
          </section>
        </div>

        <div className="sub">
          <div className="box1">
            <h3>見出し</h3>

            <nav>
              <ul className="submenu">
                <li>
                  <Link href="#">サブメニュー</Link>
                </li>
                <li>
                  <Link href="#">サブメニュー</Link>
                </li>
                <li>
                  <Link href="#">サブメニュー</Link>
                </li>
                <li>
                  <Link href="#">サブメニュー</Link>
                </li>
                <li>
                  <Link href="#">サブメニュー</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </main>
    </>
  )
}
