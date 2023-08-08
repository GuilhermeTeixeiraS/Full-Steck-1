import { styled } from "../../styles/stitches.config";
import { Text } from "../../styles/Text";

export const RegisterPageWrapper = styled("section", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background:
    "linear-gradient(180deg,    #ad0b97,    #c93737,   #ee4343,   #ef4848,   #f04c4c)",
});

export const StyledTitle = styled(Text, {
  color: "$whiteFixed",
});
