import Link from 'next/link'

import * as S from './styles'

import HeadingArea from 'components/HeadingArea'
import HeadingHero from 'components/HeadingHero'
import ButtonGeral from 'components/ButtonGeral'

type HeroHomeProps = {
  pretitle: string
  title: string
  text: string
}

const HeroHome = ({ pretitle, title, text }: HeroHomeProps) => (
  <S.Wrapper>
    <S.PreTitle>
      <HeadingArea>{pretitle}</HeadingArea>
    </S.PreTitle>

    <S.Title>
      <HeadingHero>
        <span dangerouslySetInnerHTML={{ __html: title }}></span>
      </HeadingHero>
    </S.Title>

    <S.Text>
      <span dangerouslySetInnerHTML={{ __html: text }}></span>
    </S.Text>

    <S.Button>
      <Link href="/sobre">
        <a>
          <ButtonGeral>Sobre</ButtonGeral>
        </a>
      </Link>
    </S.Button>
  </S.Wrapper>
)

export default HeroHome
