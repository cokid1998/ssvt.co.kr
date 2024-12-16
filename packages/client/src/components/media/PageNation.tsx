import React from "react";
import { styled } from "@client/src/styles/stitches.config";
import { useStaticQuery, graphql, Link } from "gatsby";
import Icon from "../common/Icon";

const PageNation = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allStrapiPost {
  //       pageInfo {
  //         perPage
  //         currentPage
  //         hasNextPage
  //         hasPreviousPage
  //         itemCount
  //         pageCount
  //         totalCount
  //       }
  //     }
  //   }
  // `);

  // const { pageCount } = data.allStrapiPost.pageInfo;

  return (
    <Container>
      <IconWrapper>
        <Icon width="10px" height="10px" icon="PageArrow" />
      </IconWrapper>
      <Item to="/media">1</Item>
      <IconWrapper css={{ transform: "rotate(180deg)" }}>
        <Icon width="10px" height="10px" icon="PageArrow" />
      </IconWrapper>
    </Container>
  );
};

const IconWrapper = styled("div", {
  padding: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
  paddingBottom: "80px",
});

const Item = styled(Link, {
  width: "32px",
  height: "32px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "4px",
  textDecoration: "none",
  color: "$textPrimary",
  body2: true,

  "&:hover": {
    background: "$actionHover",
    cursor: "pointer",
  },
});

export default PageNation;
