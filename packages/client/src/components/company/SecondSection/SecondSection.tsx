import React from 'react';
import { styled } from '@client/src/styles/stitches.config';
import useMedia from '@client/src/hooks/common/useMedia';
import { motion } from 'framer-motion';
import image from '../../../assets/images/company/company_owner.jpg';
import {
  containerVariants,
  onlyOpacity,
  opacityAppearBottom,
} from '../../common/transitions/transitions';

const containerTransition = containerVariants(0.3);

const opacityTransition = onlyOpacity(0.3);

const opacityAppearBottomProps = opacityAppearBottom(8, 0.3);

const SecondSection = () => {
  const curMedia = useMedia();
  return (
    <Container>
      {curMedia === 'mobile' && (
        <ContentBox
          initial="initial"
          whileInView="active"
          variants={containerTransition}
          viewport={{ once: true, amount: 0.4 }}
        >
          <OwnerWrapper>
            <TitleWrapper>
              <CEOMessage variants={opacityTransition}>CEO MESSAGE</CEOMessage>

              <Title variants={opacityAppearBottomProps}>
                스마트 해양의 패러다임을 위해
              </Title>
            </TitleWrapper>

            <ImageWrapper variants={opacityTransition}>
              <Image />
            </ImageWrapper>
          </OwnerWrapper>

          <DescriptionWrapper variants={opacityAppearBottomProps}>
            <Description>
              세계에서 손꼽히는 우리나라의 조선 · 해운 · 항만산업이 글로벌
              경쟁력을 갖추기 위해서는 블록체인과 인공지능 등 신기술을 활용한
              혁신적인 스마트 해양화가 필수적입니다.
            </Description>
            <br />
            <br />
            <Description>
              에스에스브이티에서는 해양산업과 구성원 모두를 아우르는 R&D
              프로젝트를 추진하고 있으며, 도막의 두께와 품질을 자동으로 측정하는
              “스마트 선박도막측정 솔루션”을 비롯하여 조선해양산업을 위한 다양한
              기술 개발에 매진하고 있습니다.
            </Description>
            <br />
            <br />
            <Description>
              아울러, 해양산업에 필요한 서비스를 IT 기술과의 융합을 통해 확장해
              나가고 산업 경쟁력과 종사자들의 만족도를 높일 수 있는 서비스
              개발에 힘쓰겠습니다.
            </Description>
          </DescriptionWrapper>

          <CompanyInfoWrapper variants={opacityAppearBottomProps}>
            <CompanyName>
              에스에스브이티
              <Owner> 대표</Owner>
            </CompanyName>

            <Name>박종현</Name>
          </CompanyInfoWrapper>
        </ContentBox>
      )}
      {curMedia === 'tabletSm' && (
        <ContentBox
          initial="initial"
          whileInView="active"
          variants={containerTransition}
          viewport={{ once: true, amount: 0.4 }}
        >
          <OwnerWrapper>
            <TitleWrapper>
              <CEOMessage variants={opacityTransition}>CEO MESSAGE</CEOMessage>

              <Title
                variants={opacityAppearBottomProps}
              >{`스마트 해양의\n패러다임을 위해`}</Title>
            </TitleWrapper>

            <ImageWrapper variants={opacityTransition}>
              <Image />
            </ImageWrapper>
          </OwnerWrapper>

          <DescriptionWrapper variants={opacityAppearBottomProps}>
            <Description>
              세계에서 손꼽히는 우리나라의 조선 · 해운 · 항만산업이 글로벌
              경쟁력을 갖추기 위해서는 블록체인과 인공지능 등 신기술을 활용한
              혁신적인 스마트 해양화가 필수적입니다.
            </Description>
            <br />
            <br />
            <Description>
              에스에스브이티에서는 해양산업과 구성원 모두를 아우르는 R&D
              프로젝트를 추진하고 있으며, 도막의 두께와 품질을 자동으로 측정하는
              “스마트 선박도막측정 솔루션”을 비롯하여 조선해양산업을 위한 다양한
              기술 개발에 매진하고 있습니다.
            </Description>
            <br />
            <br />
            <Description>
              아울러, 해양산업에 필요한 서비스를 IT 기술과의 융합을 통해 확장해
              나가고 산업 경쟁력과 종사자들의 만족도를 높일 수 있는 서비스
              개발에 힘쓰겠습니다.
            </Description>
          </DescriptionWrapper>

          <CompanyInfoWrapper variants={opacityAppearBottomProps}>
            <CompanyName>
              에스에스브이티
              <Owner> 대표</Owner>
            </CompanyName>

            <Name>박종현</Name>
          </CompanyInfoWrapper>
        </ContentBox>
      )}
      {curMedia === 'tabletLg' && (
        <ContentBox
          initial="initial"
          whileInView="active"
          variants={containerTransition}
          viewport={{ once: true, amount: 0.4 }}
        >
          <DescriptionWrapper>
            <TitleWrapper>
              <CEOMessage variants={opacityTransition}>CEO MESSAGE</CEOMessage>

              <Title
                variants={opacityAppearBottomProps}
              >{`스마트 해양의\n패러다임을 위해`}</Title>
            </TitleWrapper>
            <TransitionWrapper variants={opacityAppearBottomProps}>
              <Description>
                세계에서 손꼽히는 우리나라의 조선 · 해운 · 항만산업이 글로벌
                경쟁력을 갖추기 위해서는 블록체인과 인공지능 등 신기술을 활용한
                혁신적인 스마트 해양화가 필수적입니다.
              </Description>
              <br />
              <br />
              <Description>
                에스에스브이티에서는 해양산업과 구성원 모두를 아우르는 R&D
                프로젝트를 추진하고 있으며, 도막의 두께와 품질을 자동으로
                측정하는 “스마트 선박도막측정 솔루션”을 비롯하여 조선해양산업을
                위한 다양한 기술 개발에 매진하고 있습니다.
              </Description>
              <br />
              <br />
              <Description>
                아울러, 해양산업에 필요한 서비스를 IT 기술과의 융합을 통해
                확장해 나가고 산업 경쟁력과 종사자들의 만족도를 높일 수 있는
                서비스 개발에 힘쓰겠습니다.
              </Description>
            </TransitionWrapper>
          </DescriptionWrapper>

          <OwnerWrapper>
            <ImageWrapper variants={opacityTransition}>
              <Image />
            </ImageWrapper>

            <CompanyInfoWrapper variants={opacityTransition}>
              <CompanyName>
                에스에스브이티
                <Owner> 대표</Owner>
              </CompanyName>

              <Name>박종현</Name>
            </CompanyInfoWrapper>
          </OwnerWrapper>
        </ContentBox>
      )}
      {curMedia === 'desktop' && (
        <ContentBox
          initial="initial"
          whileInView="active"
          variants={containerTransition}
          viewport={{ once: true, amount: 0.4 }}
        >
          <DescriptionWrapper>
            <TitleWrapper>
              <CEOMessage variants={opacityTransition}>CEO MESSAGE</CEOMessage>

              <Title
                variants={opacityAppearBottomProps}
              >{`스마트 해양의\n패러다임을 위해`}</Title>
            </TitleWrapper>
            <TransitionWrapper variants={opacityAppearBottomProps}>
              <Description>
                세계에서 손꼽히는 우리나라의 조선 · 해운 · 항만산업이 글로벌
                경쟁력을 갖추기 위해서는 블록체인과 인공지능 등 신기술을 활용한
                혁신적인 스마트 해양화가 필수적입니다.
              </Description>
              <br />
              <br />
              <Description>
                에스에스브이티에서는 해양산업과 구성원 모두를 아우르는 R&D
                프로젝트를 추진하고 있으며, 도막의 두께와 품질을 자동으로
                측정하는 “스마트 선박도막측정 솔루션”을 비롯하여 조선해양산업을
                위한 다양한 기술 개발에 매진하고 있습니다.
              </Description>
              <br />
              <br />
              <Description>
                아울러, 해양산업에 필요한 서비스를 IT 기술과의 융합을 통해
                확장해 나가고 산업 경쟁력과 종사자들의 만족도를 높일 수 있는
                서비스 개발에 힘쓰겠습니다.
              </Description>
            </TransitionWrapper>
          </DescriptionWrapper>

          <OwnerWrapper>
            <ImageWrapper variants={opacityTransition}>
              <Image />
            </ImageWrapper>

            <CompanyInfoWrapper variants={opacityTransition}>
              <CompanyName>
                에스에스브이티
                <Owner> 대표</Owner>
              </CompanyName>

              <Name>박종현</Name>
            </CompanyInfoWrapper>
          </OwnerWrapper>
        </ContentBox>
      )}
    </Container>
  );
};

const TransitionWrapper = styled(motion.div, {});

const Name = styled('div', {
  color: '$textPrimary',

  '@mobile': {
    subtitle2: true,
  },
  '@tabletSm': {
    heading5: true,
  },
  '@tabletLg': {
    width: '100%',
    heading4: true,
    textAlign: 'right',
  },
  '@desktop': {
    heading7: true,
  },
});

const CompanyName = styled('div', {
  color: '$textPrimary2',

  '@mobile': {
    body1: true,
    display: 'inline',
    marginRight: '8px',
  },
  '@tabletSm': {
    subtitle1: true,
  },
  '@tabletLg': {
    width: '100%',
    heading5: true,
    marginRight: 0,
    textAlign: 'right',
  },
  '@desktop': {
    heading4: true,
  },
});

const Owner = styled('span', {
  color: '$textPrimary',

  '@mobile': {
    body1: true,
    display: 'inline',
  },
  '@tabletSm': {
    subtitle1: true,
  },
  '@tabletLg': {
    heading5: true,
  },
  '@desktop': {
    heading4: true,
  },
});

const CEOMessage = styled(motion.h1, {
  color: '$textPrimary2',
  '@mobile': {
    subtitle3: true,
    textAlign: 'center',
    marginBottom: '8px',
  },
  '@tabletSm': {
    subtitle2: true,
    textAlign: 'left',
    marginBottom: '18px',
  },
});

const OwnerWrapper = styled('div', {
  '@tabletSm': {
    height: '240px',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '80px',
  },
  '@tabletLg': {
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 0,
    height: '480px',
  },
});

const ImageWrapper = styled(motion.div, {
  '@mobile': {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '60px',
  },
  '@tabletSm': {
    marginBottom: 0,
  },
  '@tabletLg': {
    marginBottom: '32px',
  },
});

const Image = styled('div', {
  background: `url(${image})`,

  '@mobile': {
    width: '50vw',
    height: '50vw',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderRadius: '$component',
  },

  '@tabletSm': {
    width: '240px',
    height: '240px',
  },
});

const Container = styled('section', {
  overflow: 'hidden',

  '@mobile': {
    padding: '120px 16px 80px 16px',
  },
  '@tabletSm': {
    padding: '200px 32px 140px 32px',
  },
  '@tabletLg': {
    padding: '231px 0 294px 0',
  },
  '@desktop': {
    padding: '255px 80px 280px 80px',
  },
});

const ContentBox = styled(motion.div, {
  '@mobile': {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: '0 auto',
  },
  '@tabletSm': {
    maxWidth: '800px',
  },
  '@tabletLg': {
    maxWidth: 'none',
    flexDirection: 'row',
    gap: '60px',
    justifyContent: 'center',
  },
  '@desktop': {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 0,
  },
});

const TitleWrapper = styled('div', {
  position: 'relative',
  zIndex: 1,

  '@mobile': {
    marginBottom: '40px',
  },

  '@tabletSm': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    marginBottom: 0,
  },

  '@desktop': {},
});

const Title = styled(motion.h1, {
  whiteSpace: 'pre-wrap',
  color: '$textPrimary',

  '@mobile': {
    heading5: true,
    textAlign: 'center',
  },

  '@tabletSm': {
    heading7: true,
    textAlign: 'left',
  },

  '@tabletLg': {
    heading6: true,
    marginBottom: '32px',
  },

  '@desktop': {
    heading3: true,
  },
});

const DescriptionWrapper = styled(motion.div, {
  '@mobile': {
    marginBottom: '32px',
  },
  '@tabletLg': {
    width: '480px',
    height: '480px',
    marginBottom: 0,
  },
  '@desktop': {
    width: '60%',
  },
});

const Description = styled('p', {
  color: '$textSecondary',
  wordBreak: 'keep-all',
  '@mobile': {
    footer: true,
  },

  '@tabletSm': {
    body1: true,
  },

  '@tabletLg': {},

  '@desktop': {},
});

const CompanyInfoWrapper = styled(motion.div, {
  '@mobile': {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    maxWidth: '500px',
  },
  '@tabletSm': {
    marginBottom: 0,
    maxWidth: '800px',
  },
  '@tabletLg': {
    flexDirection: 'column',
  },
  '@desktop': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
});

export default SecondSection;
