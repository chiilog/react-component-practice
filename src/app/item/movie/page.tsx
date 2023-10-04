export default function ItemMovie() {
  return (
    <>
      <h2>詳細情報</h2>
      <p>
        ※この映像は、デモ用にAIで出力したので、ちょっと怖いんですけどご了承下さい。
        <br />
        こちらはサムネイルでの切り替えには対応しておりません。
      </p>

      <h3>動画を直接配置したサンプル</h3>
      <p>
        mp4の動画ファイルを直接読み込んだサンプルです。詳しくはhtml側をご覧下さい。
        <br />
        簡単な解説は以下です。
      </p>
      <ul>
        <li>controls…動画の操作ボタンの表示。</li>
        <li>muted…デフォルトでは消音に。</li>
        <li>
          playsinline…自動的にフルスクリーンになる環境があるので、そうならない（このままで再生される）ように。
        </li>
      </ul>
      <div className="photo c">
        <video src="/images/movie.mp4" controls muted playsInline />
      </div>

      <h3>YouTubeからiframeで読み込んだサンプル</h3>
      <p>
        動画のアスペクト比は16:9で、一般的なYouTubeのサイズになっています。
        <br />
        アスペクト比は、cssの「iframe-box」部分で指定しています。これは、フッターのマップにも使われていますので、変更される際は両方適用されるため注意して下さい。
      </p>
      <div className="photo iframe-box">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PktLZHCLX5I?modestbranding=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </>
  )
}
