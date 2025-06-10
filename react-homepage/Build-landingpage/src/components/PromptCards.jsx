import React from 'react';
import item1Icon from '../assets/item1-icon.svg';
import item2Icon from '../assets/item2-icon.svg';
import item3Icon from '../assets/item3-icon.svg';
import item4Icon from '../assets/item4-icon.svg';

const PromptCards = () => (
  <div className="card-items">
    <div className="item1">
      <p>Show all plugin trace logs for the account entity.</p>
      <img src={item1Icon} alt="Add" className='addicon' />
    </div>
    <div className="item2">
      <p>Filter trace logs generated in the last 1 hour.</p>
      <img src={item2Icon} alt="Add" className='addicon' />
    </div>
    <div className="item3">
      <p>Find plugin logs that contain a NullReferenceException.</p>
      <img src={item3Icon} alt="Add" className='addicon' />
    </div>
    <div className="item4">
      <p>List trace logs where execution time exceeded 60,00 ms.</p>
      <img src={item4Icon} alt="Add" className='addicon' />
    </div>
  </div>
);

export default PromptCards;
// This component displays a set of prompt cards with predefined queries.
// Each card contains a description of a query and an icon, allowing users to quickly select common prompts for their tasks.