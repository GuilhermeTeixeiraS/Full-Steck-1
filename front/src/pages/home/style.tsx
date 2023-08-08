import { styled } from "../../styles/stitches.config";
import { Container as BaseContainer } from "../../styles/Global";
import { Text } from "../../styles/Text";

export const HomeWrapper = styled("section", {
  background:
  "linear-gradient(180deg,    #ad0b97,    #c93737,   #ee4343,   #ef4848,   #f04c4c)",
});

export const HomeContainer = styled(BaseContainer, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  flexDirection: "column",
});

export const StyledTitle = styled(Text, {
  color: "$whiteFixed",
});
