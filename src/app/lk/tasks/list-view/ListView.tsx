// ListView.tsx
'use client'

import { DragDropContext } from '@hello-pangea/dnd';
import { COLUMNS } from '../columns.data';
import { useTaskDnd } from '../hooks/useTaskDnd';
import { useTasks } from '../hooks/useTasks';
import { ListRowParent } from './ListRowParent';
import styles from './ListView.module.scss';
import { useCategories } from '../../categories/hooks/useCategories';

export function ListView() {
  const { items, setItems } = useTasks();
  const { onDragEnd } = useTaskDnd();
  const { data } = useCategories();
  console.log(data);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.table}>
        <div className={styles.header}>
          <div>Задача</div>
          <div>Дата окончания</div>
          <div>Приоритет</div>
          <div></div>
        </div>

        <div className={styles.parentsWrapper}>
          {COLUMNS.map(column => (
            <ListRowParent
              key={column.value}
              items={items}
              label={column.label}
              value={column.value}
              setItems={setItems}
            />
          ))}
        </div>
      </div>
    </DragDropContext>
  );
}
