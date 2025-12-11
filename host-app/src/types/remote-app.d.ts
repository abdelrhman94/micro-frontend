declare module 'remoteApp/Button' {
  const Button: React.FC<{
    text: string;
    onClick?: () => void;
  }>;
  export default Button;
}

declare module 'remoteApp/Header' {
  const Header: React.FC;
  export default Header;
}
