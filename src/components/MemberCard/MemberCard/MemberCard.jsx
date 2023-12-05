import React from 'react';
import portrait from '../../../assets/portrait.png'
import fportrait from '../../../assets/fportrait.png'
import styles from './style.module.css'

const MemberCard = ({ nodeDatum }) => {
  const { name, birthdate, gender } = nodeDatum;

  return (
    <div className={styles.memberCard}>
      {/* <img src={photoUrl} alt={`Photo of ${name}`} />
      <div className="member-details">
        <h3>{name}</h3>
        <p>{relationship}</p>
        <p>Birthdate: {birthdate}</p> */}
        {/* Add more details or actions as needed */}
        <img src={gender==="male"?portrait:fportrait} alt={`Photo of Рикардо`} />
      <div className={styles.memberdetails}>
        <h4>{name}</h4>
        {birthdate?<p>{birthdate}</p>:null}
      </div>
    </div>
  );
};

export default MemberCard;
