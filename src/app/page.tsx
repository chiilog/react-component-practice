'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import CautionText from '@/components/atoms/CautionText/CautionText';
import Heading from '@/components/atoms/Heading/Heading';
import Logo from '@/components/atoms/Logo/Logo';
import TextLink from '@/components/atoms/TextLink/TextLink';
import AnimalIconNavListItem from '@/components/molecules/AnimalIconNavListItem/AnimalIconNavListItem';
import NewsListItem from '@/components/molecules/NewsListItem/NewsListItem';
import AnimalIconNavList from '@/components/organisms/AnimalIconNavList/AnimalIconNavList';
import Container from '@/components/organisms/Container/Container';
import NewsList from '@/components/organisms/NewsList/NewsList';
import SectionDetail from '@/components/organisms/SectionDetail/SectionDetail';

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

        <AnimalIconNavList className="absolute bottom-0 left-0 w-full z-10 max-lg:hidden">
          <AnimalIconNavListItem
            href="/list/"
            type="dog"
            description="Find puppy dogs."
          />
          <AnimalIconNavListItem
            href="/list/"
            type="cat"
            description="Find puppy cats."
          />
          <AnimalIconNavListItem
            href="/list/"
            type="other"
            description="ハムスターや小鳥など"
          />
          <AnimalIconNavListItem
            href="/list/"
            type="fish"
            description="熱帯魚など"
          />
        </AnimalIconNavList>
      </header>

      <Container>
        <main>
          <section>
            <Heading level="h2" className="mb-8">
              テンプレートのご利用前に必ずお読み下さい
            </Heading>

            <Heading level="h3">利用規約のご案内</Heading>
            <SectionDetail>
              <p className="my-6">
                このテンプレートは、
                <TextLink href="https://template-party.com/" isExternal>
                  Template Party
                </TextLink>
                にて無料配布している『ペットショップ・ブリーダー向け無料ホームページテンプレート
                tp_petshop1』です。必ずダウンロード先のサイトの
                <TextLink
                  href="https://template-party.com/read.html"
                  isExternal
                >
                  利用規約
                </TextLink>
                をご一読の上でご利用下さい。
              </p>
              <p className="my-6">
                <CautionText>
                  HP最下部の著作表示『Web
                  Design:Template-Party』は無断で削除しないで下さい。
                </CautionText>
                <br />
                わざと見えなく加工する事も禁止です。
              </p>
              <p className="my-6">
                <CautionText>下部の著作を外したい場合は</CautionText>
                <br />
                <TextLink href="https://template-party.com/" isExternal>
                  Template-Party
                </TextLink>
                の
                <TextLink
                  href="https://template-party.com/member.html"
                  isExternal
                >
                  ライセンス契約
                </TextLink>
                を行う事でHP下部の著作を外す事ができます。
              </p>
            </SectionDetail>

            <Heading level="h3">当テンプレートの詳しい使い方は</Heading>
            <SectionDetail>
              <p className="my-6">
                <Link href="/about/">こちらをご覧下さい。</Link>
              </p>
            </SectionDetail>
          </section>

          <section>
            <Heading level="h2">お知らせ</Heading>

            <SectionDetail>
              <NewsList>
                <NewsListItem date="2023/09/03" icon="アイコン">
                  list.htmlの.listのスタイルで、なくてもいいスタイル(grid-row)が数箇所あったので削除。既にご利用中のお客様はそのままでも問題はございません。
                </NewsListItem>
                <NewsListItem date="2023/08/23" icon="アイコン">
                  ペットショップ・ブリーダー向け無料ホームページテンプレート
                  tp_petshop1公開。
                </NewsListItem>
                <NewsListItem date="20XX/00/00" icon="アイコン１">
                  サンプルテキスト。サンプルテキスト。サンプルテキスト。
                </NewsListItem>
                <NewsListItem date="20XX/00/00" icon="アイコン２">
                  サンプルテキスト。サンプルテキスト。サンプルテキスト。
                </NewsListItem>
                <NewsListItem date="20XX/00/00" icon="アイコン２">
                  サンプルテキスト。サンプルテキスト。サンプルテキスト。
                </NewsListItem>
                <NewsListItem date="20XX/00/00">
                  サンプルテキスト。サンプルテキスト。サンプルテキスト。
                </NewsListItem>
                <NewsListItem date="20XX/00/00">
                  サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。
                </NewsListItem>
              </NewsList>
            </SectionDetail>
          </section>

          <section>
            <Heading level="h2">フォトギャラリー</Heading>

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
      </Container>
    </>
  );
}
