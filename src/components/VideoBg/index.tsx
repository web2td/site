import * as S from './styles'

import MediaMatch from 'components/MediaMatch'

const VideoBg = () => {
  const videoSource = 'videos/bg-video-large.mp4'

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.VideoSmall>
          <S.VideoSmallContainer>
            <video autoPlay loop muted poster="images/bg-video.jpg">
              <source src={videoSource} />
            </video>
          </S.VideoSmallContainer>
        </S.VideoSmall>
      </MediaMatch>
    </S.Wrapper>
  )
}

export default VideoBg