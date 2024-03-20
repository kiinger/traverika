import "./index.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <small>© {currentYear} kiu Copyrights. All Rights Reserved</small>
    </footer>
  );
}
