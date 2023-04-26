import React, { FC, ReactElement } from "react";
import Image from "next/image";
import styled from "styled-components";

const SocialLinks: FC = (): ReactElement => {
  return (
    <LinkBox>
      <LinkedInContainer>
        <a
          href="https://www.linkedin.com/company/wrst/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            height="28"
            src="/socialLogos/linkedin.svg"
            width="28"
            alt=""
          />
        </a>
      </LinkedInContainer>
      <TwitterContainer>
        <a
          href="https://twitter.com/WRSTcollabs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image height="35" src="/socialLogos/twitter.svg" width="35" alt="" />
        </a>
      </TwitterContainer>
      <InstagramContainer>
        <a
          href="https://instagram.com/wrstcollabs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            height="35"
            src="/socialLogos/instagram.png"
            width="35"
            alt=""
          />
        </a>
      </InstagramContainer>
      <YouTubeContainer>
        <a
          href="https://www.youtube.com/channel/UCSqUR4XsniDy3q1GqqvWBMA/featured"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image height="35" src="/socialLogos/youtube.png" width="38" alt="" />
        </a>
      </YouTubeContainer>
    </LinkBox>
  );
};

export default SocialLinks;

const LinkBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  > * + * {
    margin-left: 0.6rem;
  }
`;

const LinkContainer = styled.div`
  align-items: center;
  display: flex;
  height: 35px;
  justify-content: center;
  position: relative;
  width: 35px;
`;

const LinkedInContainer = styled(LinkContainer)`
  height: 28px;
  width: 28px;
  margin: 0 3.5px;
  box-sizing: border-box;
`;

const InstagramContainer = styled(LinkContainer)`
  margin-top: 4px;
`;

const TwitterContainer = styled(LinkContainer)`
  margin-top: 3px;
`;

const YouTubeContainer = styled(LinkContainer)`
  margin-top: 2px;
  width: 38px;
`;
