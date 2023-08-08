import { createTheme, globalCss, styled } from "@stitches/react";

interface GlobalStyleProps {
  children: React.ReactNode;
}

export const colors = {
  color: {
    brand1: {
      color: "$brand1",
    },

    grey1: {
      color: "$grey1",
    },

    grey2: {
      color: "$grey2",
    },

    grey3: {
      color: "$grey3",
    },

    grey4: {
      color: "$grey4",
    },

    grey5: {
      color: "$grey5",
    },
    grey6: {
      color: "$grey6",
    },
  },
};

export const Container = styled("div", {
  maxWidth: "$container",
  margin: "0 auto",
  padding: "0 1rem",
});

export const globalStyles = globalCss({
  body: {
    height: "100vh",
  },
  "*": {
    margin: 0,
    padding: 0,
    fontFamily: "Roboto, sans-serif",
    boxSizing: "border-box",
    border: 0,
    fontSize: "1.2rem",
  },
  html: {
    scrollBehavior: "smooth",
  },
  a: { textDecoration: "none" },
});

export const GlobalStyle: React.FC<GlobalStyleProps> = ({ children }) => {
  const theme = createTheme({
    colors: {
      color1: "#f72525",
      color2: "#b5172c",
      color3: "#7209B7",
      color4: "#ad0b0b",
      color5: "#a80c26",
      color6: "#a30c0c",
      color7: "#c93737",
      color8: "#ee4343",
      color9: "#ef4848",
      color10: "#f04c4c",
      whiteFixed: "#F1F3F5",
    },

    darkThemeColors: {
      color1: "#242424", // Cinza bem escuro
      color2: "#1A1919", // Quase preto
      color3: "#383838", // Cinza escuro
      color4: "#2B2B2B", // Cinza muito escuro
      color5: "#4A4A4A", // Cinza médio
      color6: "#555555", // Cinza médio claro
      color7: "#666666", // Cinza médio claro
      color8: "#777777", // Cinza claro
      color9: "#888888", // Cinza mais claro
      color10: "#999999", // Cinza quase claro
      whiteFixed: "#F1F3F5",
    },
    sizes: {
      container: "75rem",
    },
    space: {
      1: "0.5rem",
      2: "1rem",
      3: "2rem",
    },
    fontSize: {
      title1: "2.75rem",
      title2: "1.75rem",
      title3: "1.50rem",
      title4: "1.25rem",
      text1: "1rem",
      text2: "0.875rem",
      //Mobile
      title1Mobile: "$title2",
      title2Mobile: "$title3",
    },
    lineHeights: {
      title1: "3.8rem",
      title2: "2.75rem",
      title3: "2.5rem",
      title4: "1.25rem",
      text1: "1.75rem",
      text2: "1.75rem",
      // Mobile
      title1Mobile: "$title2",
      title2Mobile: "$title3",
    },
  });

  globalStyles();

  const App = styled("div", {});

  return <App className={theme}>{children}</App>;
};
