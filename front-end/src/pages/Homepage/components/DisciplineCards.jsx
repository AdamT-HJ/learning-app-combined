import React from 'react'
import {useState} from 'react'
import styles from './DisciplineCards.module.css'

export default function DisciplineCards({name, description}) {

    


    return (
    <>
        <div className={styles.cardDiv}>
            <h1>{name || 'discipline Name'}</h1>
            <p>{description || 'description'}</p>
        </div>
    </>
  )
}
