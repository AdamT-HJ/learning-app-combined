import React from 'react';
import styles from './Homepage.module.css';
import {useState} from 'react';

//components
import DisciplineCards from './components/DisciplineCards.jsx';

export default function Homepage() {
  //useStates
  //array of objects to hold data for 'disciplines' cards
  const [disciplines, setDisciplines] = useState([]);

  //fetch once on load - fetch top level subjects (those without a parent_subject_id)

  // function to map 'discipline cards'


  return (
    <>
      <header>
        <button>menu button</button>
        <div>Learning Library</div>
        <button>menu button</button>
      </header>
        
      <main>
        <div className={styles.appIntro}>
          <h1>Welcome to your learning library</h1>
          <p>
          This app is meant to be used as a library for everything you   would want to remember about something you're trying to learn. Any notes, flashcards or just key points. It's organised to create a 'hierarchy' of subjects for your learning. For example if you are learning about 'Greek Gods' you might create a subject called 'Greek Gods', then underneath that a 'sub-topic' of 'Titans', then a 'sub-topic' of 'Cronus', then a sub-topic of 'Zeus', and so on..At each level you can have multiple topics, so 'Hades' and 'Poseidon' could be sub-topics of 'Cronus' as well, sitting there as sibling topics right next to 'Zeus'.
          </p>
          
          <br />
          
          <p> 
          You can go on for as long as you like, and you can visualise your learning as well through your learning-web pages in the app. Your library can grow organically as you learn. It can also adapt, if you decided that you wanted to move on to 'Norse Gods' you could create a new subject of 'Mythology' and put 'Norse Gods' and 'Greek Gods' right there underneath it. By the end you might have something that visually looks a bit like this: insert image below
          </p>

          <br />

          <p>
          Inside each topic you can write up what you've learned in 'cards',l include links and references. Then quiz yourself on these flash cards of link them to other topics.
          </p>                      

        </div>  

        {/* i need to fetch the disciplines column
        pass the discipline names and description to disciplinecards */}
        {/* insert cards components here for 'top level subjects'*/}
        <div className={styles.disciplinesContainer}>
          {disciplines.length > 0 ? disciplines.map(<DisciplineCards/>):console.log('Error mapping disciplines array')}
          
          

        </div>


        </main>

        
        
    </>
  )
}
