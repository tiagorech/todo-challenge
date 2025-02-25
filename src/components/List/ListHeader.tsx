import styles from './ListHeader.module.css';

interface Props {
    tasksCounter: number
    checkedTasksCounter: number
}

export function ListHeader ({ tasksCounter, checkedTasksCounter }: Props) {
    return (
        <header className={styles.container}>
            <aside>
                <p>Tarefas Criadas</p>
                <span>{tasksCounter}</span>
            </aside>
            
            <aside>
                <p>Concluídas</p>
                <span>
                    {tasksCounter === 0
                        ? tasksCounter
                        : `${checkedTasksCounter} de ${tasksCounter}`  }
                </span>
            </aside>
        </header>
    )
}