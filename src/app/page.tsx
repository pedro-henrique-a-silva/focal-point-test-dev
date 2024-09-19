import Header from "@/components/Header";
import TaskList from "@/components/TaskList";
import styles from "@/styles/page.module.scss";
import NewTaskButton from "@/components/ui/NewTaskButton";

export default function Home() {

  return (
    <div className={styles.page}>
      <Header/>
      <main className={styles.mainContent}>
        <TaskList />
      </main>
      <NewTaskButton/>
    </div>
  );
}
