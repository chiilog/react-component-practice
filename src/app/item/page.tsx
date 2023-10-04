import Image from 'next/image'
import Link from 'next/link'

export default function Item() {
  return (
    <>
      <h2>詳細情報</h2>
      <p>
        ※固定画像ではなく、
        <Link href="../item/movie/">
          mp4などの動画やYouTube(iframe)で表示させたい場合のサンプルページ
        </Link>
        も用意しています。このページのようなサムネイル切り替えはありません。
      </p>

      <div className="photo c" />

      <div className="thumbnail">
        <Image src="/images/1.jpg" alt="" width={100} height={60} />
        <Image src="/images/2.jpg" alt="" width={100} height={60} />
        <Image src="/images/3.jpg" alt="" width={100} height={60} />
      </div>

      <p className="c">
        html側を参考に、表示させたい画像は全て「thumbnail」内に入れて下さい。
        <br />
        大きな画像も兼用するので、ある程度大きめにしておきます。
      </p>
      <p className="c color-check">
        ※必ずphotoブロックの直後にthumbnailブロックを配置して下さい。
        <br />
        間に他のタグがあると正常に動作しません。
      </p>

      <table className="ta1">
        <caption>大見出しが必要ならここを使います</caption>
        <tbody>
          <tr>
            <th>見出し</th>
            <td>ここに内容を入れます。サンプルテキスト。</td>
          </tr>
          <tr>
            <th>見出し</th>
            <td>ここに内容を入れます。サンプルテキスト。</td>
          </tr>
          <tr>
            <th>見出し</th>
            <td>ここに内容を入れます。サンプルテキスト。</td>
          </tr>
          <tr>
            <th>見出し</th>
            <td>ここに内容を入れます。サンプルテキスト。</td>
          </tr>
          <tr>
            <th>見出し</th>
            <td>ここに内容を入れます。サンプルテキスト。</td>
          </tr>
          <tr>
            <th>見出し</th>
            <td>
              ここに内容を入れます。サンプルテキスト。ここに内容を入れます。サンプルテキスト。ここに内容を入れます。サンプルテキスト。ここに内容を入れます。サンプルテキスト。ここに内容を入れます。サンプルテキスト。ここに内容を入れます。サンプルテキスト。ここに内容を入れます。サンプルテキスト。ここに内容を入れます。サンプルテキスト。
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
