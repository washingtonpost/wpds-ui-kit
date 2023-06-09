import React from "react";
import Image from "next/image";
import {
  css,
  Icon,
  Button,
  Box,
  styled,
  theme,
} from "@washingtonpost/wpds-ui-kit";
import Play from "@washingtonpost/wpds-assets/asset/play";

const styles = css({
  aspectRatio: "16 / 9",
  width: "100%",
  borderRadius: "$025",
  border: "$100 solid $subtle",
  background: "transparent",
});

const facadeStyles = css({
  cursor: "pointer",
  borderRadius: "$025",
  border: "$100 solid $subtle",
});

const Scrim = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  cursor: "pointer",
});

const YoutubeEmbed = ({ videoid }) => {
  const [play, setPlay] = React.useState(false);

  return play ? (
    <iframe
      className={`${styles()}`}
      src={`https://www.youtube-nocookie.com/embed/${videoid}?autoplay=1`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
    />
  ) : (
    <Box
      css={{
        position: "relative",
      }}
    >
      <Image
        className={facadeStyles()}
        src={`https://img.youtube.com/vi/${videoid}/maxresdefault.jpg`}
        alt=""
        width="748"
        height="421"
        layout="responsive"
        priority
      />

      <Scrim
        onClick={() => {
          setPlay(true);
        }}
      />
      <Button
        onClick={() => {
          setPlay(true);
        }}
        icon="right"
        variant="secondary"
        css={{
          position: "absolute",
          bottom: "5%",
          left: "5%",
          background: theme.colors["gray20-static"],
          color: theme.colors["gray600-static"],
          "@hover": {
            "&:hover": {
              background: theme.colors["gray60-static"],
            },
          },
        }}
      >
        Play video
        <Icon label="">
          <Play />
        </Icon>
      </Button>
    </Box>
  );
};

export default YoutubeEmbed;
