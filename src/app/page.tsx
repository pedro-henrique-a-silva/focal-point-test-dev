import Header from "@/components/Header";
import TaskList from "@/components/TaskList";
import Button from "@/components/ui/Button";
import styles from "@/styles/page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <main className={styles.mainContent}>
        <TaskList />
      </main>
      <Button />
    </div>
  );
}
