import React from "react";
import { Link, graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import { GatsbyImage } from "gatsby-plugin-image";
import { styled } from "../styles/stitches.config";
import MainLayout from "../components/base/MainLayout";
import Button from "../components/common/Button";
import useMedia from "../hooks/common/useMedia";
import Icon from "../components/common/Icon";

const PostDetail = ({ data }: any) => {
  const { title } = data.strapiPost;
  const date = data.strapiPost.created;
  const curMedia = useMedia();
  const id = data.strapiPost.strapi_id;

  // const arr = data.allStrapiPost.nodes.filter((data: any) => {
  //   if (data.strapi_id + 1 === id || data.strapi_id - 1 === id) {
  //     return data;
  //   }
  //   return null;
  // });

  // const prev = arr[0];
  // const next = arr[1];

  return (
    <MainLayout>
      <Container>
        <InfoWrapper>
          <News>News</News>
          <Title>{title}</Title>
          <Date>{date}</Date>
        </InfoWrapper>

        <ImageWrapper>
          <GatsbyImage
            image={data.strapiMedia.localFile.childImageSharp.gatsbyImageData}
            alt="media_image"
          />
        </ImageWrapper>

        <MarkDownStyle>
          <ReactMarkdown
            // eslint-disable-next-line react/no-children-prop
            children={data.strapiPost.content.data.content}
            transformImageUri={(uri) =>
              uri.startsWith("http")
                ? uri
                : `${process.env.GATSBY_STRAPI_SERVER_HOST}${uri}`
            }
          />
        </MarkDownStyle>

        {/* {prev && (
          <OtherPost to={`/media/${prev.strapi_id}`}>
            <BlueText>이전글</BlueText> <OtherTitle>{prev.title}</OtherTitle>
            <IconWrapper css={{ transform: 'rotate(180deg)' }}>
              <Icon icon="PageArrow" />
            </IconWrapper>
          </OtherPost>
        )}

        {next && (
          <OtherPost to={`/media/${next.strapi_id}`}>
            <BlueText>다음글</BlueText> <OtherTitle>{next.title}</OtherTitle>
            <IconWrapper css={{ transform: 'rotate(180deg)' }}>
              <Icon icon="PageArrow" />
            </IconWrapper>
          </OtherPost>
        )} */}

        <ButtonWrapper>
          <Link to="/media">
            <Button size={curMedia === "mobile" ? "medium" : "large"}>
              목록
            </Button>
          </Link>
        </ButtonWrapper>
      </Container>
    </MainLayout>
  );
};

const ImageWrapper = styled("div", {
  "@mobile": {
    marginBottom: "24px",
  },
  "@tabletSm": {
    marginBottom: "40px",
  },
});

const IconWrapper = styled("div", {
  position: "absolute",
  top: "40%",

  "@mobile": {
    right: "8px",
  },
  "@tabletSm": {
    right: "16px",
  },
});

const ButtonWrapper = styled("div", {
  width: "fit-content",

  "@mobile": {
    marginTop: "40px",
  },
  "@tabletSm": {
    marginTop: "60px",
  },
});

const OtherPost = styled(Link, {
  position: "relative",

  borderBottom: "1px solid $divider",
  "@mobile": {
    padding: "16px 0",
  },

  "&:hover": {
    background: "$actionHover",
  },
});

const BlueText = styled("span", {
  color: "$textPrimary2",

  "@mobile": {
    footerMobile: true,
    marginRight: "16px",
  },
  "@tabletSm": {
    marginLeft: "8px",
    marginRight: "24px",
    subtitle1: true,
  },
});

const OtherTitle = styled("span", {
  color: "$textPrimary",

  "@mobile": {
    footer: true,
  },
  "@tabletSm": {
    body2: true,
  },
});

const MarkDownStyle = styled("div", {
  color: "$content",
  wordBreak: "keep-all",

  "@mobile": {
    content2: true,
    paddingBottom: "80px",
  },
  "@tabletSm": {
    paddingBottom: "120px",
  },

  p: {
    marginBottom: "30px",
  },

  img: {
    display: "none",
  },
});

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  "@mobile": {
    padding: "$mobileHeaderHeight 16px 80px",
  },
  "@tabletSm": {
    padding: "$mobileHeaderHeight 40px 80px",
  },
  "@desktop": {
    padding: "$desktopHeaderHeight 0 80px",
    maxWidth: "1000px",
  },
});

const InfoWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",

  "@mobile": {
    padding: "40px 0",
  },
  "@tabletSm": {
    padding: "80px 0",
  },
  "@desktop": {
    padding: "100px 0",
  },
});

const News = styled("h1", {
  color: "$textPrimary2",

  "@mobile": {
    subtitle3: true,
  },
  "@tabletSm": {
    subtitle2: true,
  },
});

const Title = styled("h1", {
  color: "$textPrimary",
  "@mobile": {
    subtitle2: true,
  },
  "@tabletSm": {
    heading6: true,
  },
});

const Date = styled("p", {
  color: "$textSecondary",

  "@mobile": {
    footerMobile: true,
  },
  "@tabletSm": {
    footer: true,
  },
  "@desktop": {
    body1: true,
  },
});

export default PostDetail;

// export const query = graphql`
//   query MyQuery($id: Int) {
//     strapiPost(strapi_id: { eq: $id }) {
//       title
//       created
//       content {
//         data {
//           content
//         }
//       }
//       strapi_id
//     }
//     allStrapiPost {
//       nodes {
//         title
//         strapi_id
//       }
//     }
//     strapiMedia {
//       localFile {
//         childImageSharp {
//           gatsbyImageData(layout: FULL_WIDTH)
//         }
//       }
//     }
//   }
// `;
