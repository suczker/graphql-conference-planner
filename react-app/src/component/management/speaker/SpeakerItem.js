import React from 'react';
import {propType} from 'graphql-anywhere';
import SpeakerOverview from '../../speaker/SpeakerOverview';

const SpeakerItem = ({
  attending,
  speaker,
   onClick
}) => {
  return <a
    className="panel-block"
    onClick={() => onClick(speaker.id)}
  >
    <span className="panel-icon">
      {
        attending ? <i className="fa fa-check"></i> : <i className="fa fa-user"></i>
      }
    </span>
    {speaker.publicName}
  </a>;
};

SpeakerItem.propTypes = {
  speaker: propType(SpeakerOverview.fragments.speaker)
};

export default SpeakerItem;