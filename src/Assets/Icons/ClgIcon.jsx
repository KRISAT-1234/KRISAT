import clgIc from "../Images/logo/Krisat_png-format.png";

function ClgIcon({ width, height }) {
  return (
    <>
      <img
        src={clgIc}
        width={width ?? undefined}
        height={height ?? undefined}
        alt="#"
      />
    </>
  );
}

export default ClgIcon;
