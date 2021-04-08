export function VerticalFlexContainer({
  flex,
  children,
  height,
  width,
  align,
  justify,
  paddingHorizontal,
  paddingVertical,
  key,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: flex,
        margin: 0,
        padding: `${paddingVertical} ${paddingHorizontal}`,
        height: height,
        width: width,
        alignItems: align,
        justifyContent: justify,
      }}
      key={key}
    >
      {children}
    </div>
  );
}
VerticalFlexContainer.defaultProps = {
  paddingHorizontal: "0px",
  paddingVertical: "0px",
};
