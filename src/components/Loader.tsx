type Props = {
  size?: number;
  borderTopColor?: string;
  borderRightColor?: string;
  borderBottomColor?: string;
  borderLeftColor?: string;
  borderStyle?: string;
  borderWidth?: number;
  title?: string;
};

export const Loader = ({
  size = 100,
  borderTopColor = "#f97315",
  borderRightColor = "#ff9144",
  borderBottomColor = "#ffaa6f",
  borderLeftColor = "#ffcdaa",
  borderStyle = "dashed",
  borderWidth = 4,
  title = "Loading...",
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
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid place-items-center">
      <div
        className="animate-spin duration-500 aspect-square rounded-full"
        style={{
          width: `${size}px`,
          ...borderColors,
        }}
      ></div>
      <span className="mt-1">{title}</span>
    </div>
  );
};
