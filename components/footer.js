import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Victor Nyoyoko</p>
    </footer>
  );
};

export default Footer;
