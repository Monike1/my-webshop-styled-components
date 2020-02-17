import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';
import { DirectoryMenuContainer } from './directory.styles';


const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {
      // this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
      //   <MenuItem key={id} title={title} imageUrl={imageUrl} size={sizelinkUrl={linkUrl}/>
      // )) 
      // using destructuring below:
      sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps}/>
      ))
    }
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);