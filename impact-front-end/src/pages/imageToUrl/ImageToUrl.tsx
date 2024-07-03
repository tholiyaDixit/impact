import React from "react";
import Box from "@mui/material/Box";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const ImageToUrl = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }} mt={2}>
      {/* <div> */}
        {/* <DrawerHeader /> */}
        <h1>ImageToUrl</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          eveniet deserunt dolorum, sed, non architecto quo cumque repudiandae
          obcaecati cupiditate ex voluptate voluptatibus voluptatem ipsam iure
          nulla labore voluptas reiciendis? Quos corporis asperiores reiciendis
          magni nemo modi mollitia, earum cumque pariatur officiis dolorem
          fugiat similique molestiae enim ullam at excepturi doloremque! Ea sit,
          fugit deserunt earum maiores quos, necessitatibus minima dolores
          perferendis maxime ipsam voluptatum asperiores ab! Perferendis,
          officia, minus similique asperiores sunt vero iure quasi facere
          nesciunt obcaecati quisquam itaque corporis! Expedita earum possimus,
          cupiditate odio minus rem commodi dolores maxime quidem deleniti
          eveniet quasi aspernatur magni eligendi quisquam pariatur, nam est
          dolore velit debitis inventore odit dignissimos non. Modi, quia!
          Adipisci sapiente dolor, itaque delectus, corporis rem commodi
          praesentium velit nihil quo facere inventore. Odio asperiores
          doloribus blanditiis, culpa corporis a ullam et omnis nemo aspernatur
          ex dolor. Cupiditate architecto aliquam ipsum fugiat. Laborum numquam
          eligendi laboriosam rerum blanditiis quas fugit at! Laboriosam
          deserunt nam voluptas nostrum doloremque eligendi nemo illum
          reprehenderit maiores possimus. Cum voluptatem ut, ex aspernatur ab
          sapiente, quod alias tempora doloremque atque, totam tenetur maxime.
          Dolores molestias aperiam accusamus rerum consectetur saepe corporis!
          Odit amet sit a modi obcaecati temporibus qui culpa ipsa expedita.
        </p>
      {/* </div> */}
    </Box>
  );
};

export default ImageToUrl;
