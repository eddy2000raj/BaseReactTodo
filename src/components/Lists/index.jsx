import { useMemo } from 'react'

import { Item } from '../Item'
import { BoxAlert } from '../BoxAlert'

import styles from './index.module.css'

export function Lists({ list, searchTaskName, onRemoveTask }) {

  // const stateTasks = useMemo(() => {
  //   if(list.length === 0) {
  //     return 'empty'
  //   } else if (!list.some(task => isVisibleTask(task))) {
  //     return 'search-empty'
  //   }
      
  //   return 'default'
    
  // }, [list, searchTaskName])

  // if(stateTasks === 'empty') {
  //   return <BoxAlert type={stateTasks} />
  // }

  // if(stateTasks === 'search-empty') {
  //   return <BoxAlert type="warning" />
  // }
  debugger;
  return (
    <ul className={styles.tasks}>
      {list.map(item => (
        <Item
          {...item}
          key={list.id}
          onRemove={onRemoveTask}
        />
      ))}
    </ul>
  )
}