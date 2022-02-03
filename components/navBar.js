import styles from '../styles/NavBar.module.css'

// Props:
// 1. placeAtRight: to place the entire component at the right side, if true. Default: false.

const NavBarShell = (props) => {

const positioning = props.placeAtRight ? styles.navRight : styles.navLeft 

return(
    <nav className={`${styles.nav} ${positioning}`} >
     <p className={styles.underline}><span className={styles.internalLink}>Blog</span></p>
     <p className={styles.highlight}><a href="https://github.com/ragnar48h">GitHub</a></p>
     <p className={styles.highlight}><a href="mailto:hasir.mushtaq48@gmail.com">Email</a></p>
    </nav>
)}

export default NavBarShell