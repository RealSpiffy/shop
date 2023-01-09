import clsx from "clsx";
import styles from "./styles.module.scss";

interface ButtonProps {
  label: string;
  type: "button" | "submit" | "reset";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  cta?: boolean;
  disabled?: boolean;
  disabledLabel?: string;
}

export const Button = ({
  label,
  type,
  onClick,
  cta,
  disabled,
  disabledLabel,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(styles.outer, cta && styles.cta)}
    >
      {disabled ? disabledLabel ?? label : label}
    </button>
  );
};
