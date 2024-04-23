interface Props {
    primary?: boolean;
    backgroundColor?: string;
    size?: "small" | "large";
    label?: string;
    onClick?: () => void;
  }
   
  export const Button = ({
    primary = false,
    label = "Boop",
    size = "small",
    backgroundColor,
    ...props
  }: Props) => {
    return (
      <button
        style={{
          backgroundColor: primary ? "red" : "blue",
          fontSize: size === "large" ? "24px" : "14px",
        }}
      >
        {label}
      </button>
    );
  };