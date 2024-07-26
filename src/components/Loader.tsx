type Props = {
  size?: number;
  title?: string;
  fontSize?: number;
  borderTopColor?: string;
  borderRightColor?: string;
  borderBottomColor?: string;
  borderLeftColor?: string;
  borderStyle?: string;
  borderWidth?: number;
};

export const Loader = ({
  size = 100,
  title = "Loading...",
  fontSize,
  borderTopColor = "#f97315",
  borderRightColor = "#ff9144",
  borderBottomColor = "#ffaa6f",
  borderLeftColor = "#ffcdaa",
  borderStyle = "dashed",
  borderWidth = 4,
}: Props) => {
  const borderColors = {
    borderTopColor,
    borderRightColor,
    borderBottomColor,
    borderLeftColor,
    borderStyle,
    borderWidth: `${borderWidth}px`,
  };

  return (
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid place-items-center shadow-[0_0_4px_2000px_rgba(0,0,0,0.3)] p-2 rounded-lg aspect-square"
      style={{ minHeight: `${size + 40}px`, maxHeight: "250px" }}
    >
      <div
        className="animate-spin duration-500 aspect-square rounded-full"
        style={{
          width: `${size}px`,
          ...borderColors,
        }}
      ></div>
      <span className="mt-1 text-center" style={{ fontSize }}>
        {title}
      </span>
    </div>
  );
};
