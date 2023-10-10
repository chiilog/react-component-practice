'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import Logo from '@/components/atoms/Logo/Logo';
import HeaderNavigation from '@/components/molecules/HeaderNavigation/HeaderNavigation';

export default function Home() {
  return (
    <>
      <header className="bg-primary relative">
        <div className="absolute left-[5%] top-[10%] z-10">
          <Logo
            src="/images/logo_home.png"
            className="z-10 w-[350px] h-[111px] max-sm:w-[150px] max-sm:h-[47px]"
          />
        </div>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          speed={2500}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="relative aspect-video">
              <Image src="/images/1.jpg" alt="" fill />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative aspect-video">
              <Image src="/images/2.jpg" alt="" fill />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative aspect-video">
              <Image src="/images/3.jpg" alt="" fill />
            </div>
          </SwiperSlide>
        </Swiper>

        <HeaderNavigation
          nav={[
            {
              href: '/list/',
              type: 'dog',
              description: 'Find puppy dogs.',
            },
            {
              href: '/list/',
              type: 'cat',
              description: 'Find puppy cats.',
            },
            {
              href: '/list/',
              type: 'other',
              description: 'ハムスターや小鳥など',
            },
            {
              href: '/list/',
              type: 'fish',
              description: '熱帯魚など',
            },
          ]}
          className="absolute bottom-0 left-0 w-full z-10 max-lg:hidden"
        />
      </header>

      <div id="contents">
        <main>
          <section>
            <h2>テンプレートのご利用前に必ずお読み下さい</h2>

            <h3>利用規約のご案内</h3>
            <p>
              このテンプレートは、
              <a href="https://template-party.com/">Template Party</a>
              にて無料配布している『ペットショップ・ブリーダー向け無料ホームページテンプレート
              tp_petshop1』です。必ずダウンロード先のサイトの
              <a href="https://template-party.com/read.html">利用規約</a>
              をご一読の上でご利用下さい。
            </p>
            <p>
              <strong className="color-check">
                HP最下部の著作表示『Web
                Design:Template-Party』は無断で削除しないで下さい。
              </strong>
              <br />
              わざと見えなく加工する事も禁止です。
            </p>
            <p>
              <strong className="color-check">
                下部の著作を外したい場合は
              </strong>
              <br />
              <a href="https://template-party.com/">Template-Party</a>の
              <a href="https://template-party.com/member.html">
                ライセンス契約
              </a>
              を行う事でHP下部の著作を外す事ができます。
            </p>

            <h3>当テンプレートの詳しい使い方は</h3>
            <p>
              <Link href="/about/">こちらをご覧下さい。</Link>
            </p>
          </section>

          <section>
            <h2>お知らせ</h2>

            <dl className="new">
              <dt>
                2023/09/03<span>アイコン</span>
              </dt>
              <dd>
                list.htmlの.listのスタイルで、なくてもいいスタイル(grid-row)が数箇所あったので削除。既にご利用中のお客様はそのままでも問題はございません。
              </dd>
              <dt>
                2023/08/23<span>アイコン</span>
              </dt>
              <dd>
                ペットショップ・ブリーダー向け無料ホームページテンプレート
                tp_petshop1公開。
              </dd>
              <dt>
                20XX/00/00<span className="icon-bg1">アイコン１</span>
              </dt>
              <dd>サンプルテキスト。サンプルテキスト。サンプルテキスト。</dd>
              <dt>
                20XX/00/00<span className="icon-bg2">アイコン２</span>
              </dt>
              <dd>サンプルテキスト。サンプルテキスト。サンプルテキスト。</dd>
              <dt>20XX/00/00</dt>
              <dd>サンプルテキスト。サンプルテキスト。サンプルテキスト。</dd>
              <dt>20XX/00/00</dt>
              <dd>
                サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。
              </dd>
            </dl>
          </section>

          <section>
            <h2 className="dn">フォトギャラリー</h2>

            <div className="thumbnail-slide">
              <Image src="/images/1.jpg" alt="" width={247} height={148} />
              <Image src="/images/2.jpg" alt="" width={247} height={148} />
              <Image src="/images/3.jpg" alt="" width={247} height={148} />
              <Image src="/images/1.jpg" alt="" width={247} height={148} />
              <Image src="/images/2.jpg" alt="" width={247} height={148} />
              <Image src="/images/3.jpg" alt="" width={247} height={148} />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
