import styles from './style';
//First comment
//Second commene
//Third comment
//4
const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={'${styles.paddingX} ${styles.flexCenter}'}>
      <div className={'${styles.boxWidth}'}>
        navbar
      </div>
    </div>
    <div className={'bg-primary ${styles.flexStart}'}>
      <div className={'${styles.boxWidth}'}>
        hero
      </div>
    </div>
    <div className={'bg-primary ${styles.paddingX} ${styles.flexStart}'}>
      <div className={'${styles.boxWidth}'}>
        stats
        footer
      </div>
    </div>
  </div>
  
);

export default App