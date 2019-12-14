import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'FILA',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          size: 'large',
          linkUrl: 'hats'
        },
        {
          title: 'SHIRT & TROUSERS',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          size:'large',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'SUITS & BLAZERS',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          size:'large',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'AGBADA',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'BUBA & SOKOTO',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: ''
        },
        {
          title: 'KAFTAN',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 6,
          linkUrl: ''
        },
        {
          title: 'SENATOR',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 7,
          linkUrl: ''
        },
        {
          title: 'CASUAL',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 8,
          linkUrl: ''
        },
        {
          title: 'MATERIALS',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 9,
          linkUrl: ''
        }

  
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;