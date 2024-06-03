export function ColorBox({ color }) {
  const styles = {
    width: "311px",
    height: "40px",
    backgroundColor: color,
    marginTop: "15px"
  };
  return (
    <div style={styles}></div>
  );
}
