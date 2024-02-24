"use client";

import {teamData }from '../constants/teamData';
import Image from 'next/image';

const SocialMediaLinks = ({ socials }) => (
    <div className="social-media-links">
      {socials.map((item, index) => (
        <div key={index} className="social-media-link">
          <a href={item.url} target="_blank" rel="noopener noreferrer">
           <img src={item.icon}/>
          </a>
        </div>
      ))}
    </div>
);


const Card = ({ image, name,title, socials }) => (
    <div className="card">
      <div className="card-content">
        <Image src={image} alt={name} className="avatar" />
         <div className="info">
          <h3 className="font-serif text-2xl">{name}</h3>
          <h4 style={{color:"#ffffffef",fontSize:"15px"}}>{title}</h4>
          <SocialMediaLinks socials={socials} />
        </div>
      </div>
    </div>
);

const CardContainer = ({ teamData }) => (
    <div className='floating'>
    <div className="card-container">
      {teamData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
    </div>
  );

  const TeamCard = () => (
    <div className="team">
      <h1 className='heading'>Our Team</h1>
      <CardContainer teamData={teamData} />
    </div>
  );
  
  export default TeamCard;
  