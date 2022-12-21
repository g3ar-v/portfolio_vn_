import styles from '../../styles/Expertise.module.css';
import styled from 'styled-components';
import Link from 'next/link';
import Article from '../article';

const StyledLink = styled.a`
  color: #c69b7b;
  text-decoration: none;
  height: 20px;
  width: 90px;

  &:link {
  }
  &:hover {
    color: #e6e1cc;
    background: #3a3845;
    width: 100px;
  }
  &:active {
    color: #c69b7b;
    background: #3a3845;
    border-radius: 9px;
    margin: 3px;
    width: 100px;
  }
`;

const Expertise = () => {
  return (
    <div id="expertise" className={styles.container}>
      {/*
      <div className={styles.title_container}>
        <h1 className={styles.title}>What I use and What I do?</h1>
      </div>
      */}
      <div className={styles.brick_container}>
        <div className={styles.tools}>
          <>
            <h3>Terminal Config</h3>
            <p>
              <Link
                href="https://github.com/g3ar-v/dot-files/tree/master/.config/nvim"
                passHref
              >
                <StyledLink>neovim config</StyledLink>
              </Link>
            </p>
            <p>
              <Link
                href="https://github.com/g3ar-v/dot-files/tree/master/.config/zsh"
                passHref
              >
                <StyledLink>zsh config</StyledLink>
              </Link>
            </p>
            <p>
              <Link
                href="https://github.com/g3ar-v/dot-files/tree/master/.config/tmux"
                passHref
              >
                <StyledLink>tmux config</StyledLink>
              </Link>
            </p>

            <h3>Tools</h3>
            <p>vs code</p>
            <p>git</p>
            <p>hyper</p>
            <p>zsh</p>
            <p>neovim</p>
          </>
        </div>

        <div className={styles.brick}>
          <p className={styles.item}>Machine Learning</p>
          <p className={styles.item}>Computer Vision</p>
          <p className={styles.item}>Bash Scripting</p>
          <p className={styles.item}>Computer Vision</p>
          <p className={styles.item}>Embedded Programming</p>
          <p className={styles.item}>Internet of Things</p>
          <p className={styles.item}>Front-end development</p>
          <p className={styles.item}>Back-end development</p>
        </div>
        <div className={styles.horizontal_container}>
          <div className={styles.description}>
            <Article subheading="What I do?">
              A Machine Learning Engineer. I am a passionate scholar in the
              Computer Science field and I find myself not conforming to any
              particular computer field. I have seasons were I work in a field
              and when projects require certain areas (personally).
            </Article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
