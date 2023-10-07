<<<<<<< HEAD
/* eslint-disable */
import * as S from './styles'
=======
import * as S from "./styles";
>>>>>>> 2d6f4030e4022b734b7e921b838abb27969d21e5

export type Props = {
  type: "button" | "link" | "submit";
  title: string;
  to?: string;
  onClick?: () => void;
  children: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
};
const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  disabled,
  variant = "primary",
}: Props) => {
  if (type === "button" || type === "submit") {
    return (
      <S.ButtonContainer
        variant={variant}
        type={type}
        title={title}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </S.ButtonContainer>
    );
  }

  return (
    <S.ButtonLink to={to as string} title={title}>
      {children}
    </S.ButtonLink>
  );
};

export default Button;
