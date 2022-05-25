import React, { FC } from 'react';
import Animate from '../components/Animate';

export interface IAboutPageProps {}

const Wbox: FC <IAboutPageProps> = () => {

  return (
      <div>
          <p>This is wBox</p>

          <Animate/>
      </div>
  );
};

export default Wbox;