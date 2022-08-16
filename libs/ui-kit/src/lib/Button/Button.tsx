import styles from './Button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({children}) =>  {
  return (
    <button className={styles['btn']}>{children}</button>
  );
}

export default Button;
