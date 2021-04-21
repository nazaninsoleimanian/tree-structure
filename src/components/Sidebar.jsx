import React from 'react'
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import { MdExpandMore } from "react-icons/md";
import { MdChevronLeft } from "react-icons/md";
import Box from '@material-ui/core/Box';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { IconContext } from "react-icons";

import data from '../data/preLoadData'

const Sidebar = () => {

 const classes = useStyles();
 
 const renderTree = (nodes) => (
  <StyledTreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </StyledTreeItem>
  );
  
  const { rootCat: topLevel } = data.search;
  return (
   <Box className={classes.container}>
    <TreeView
      defaultCollapseIcon={
      <IconContext.Provider value={{ size: '3rem', color: 'var(--clr-grey-3)'}}>
       <div>
         <MdExpandMore  />
       </div>
      </IconContext.Provider>
}
      defaultExpandIcon={
      <IconContext.Provider value={{ size: '3rem', color: 'var(--clr-grey-3)'}}>
       <div>
         <MdChevronLeft  />
       </div>
      </IconContext.Provider>}
    >
     {renderTree(topLevel)}
    </TreeView>
    </Box>
  );
}

const StyledTreeItem = withStyles((theme) => ({

  root: {
    flexGrow: 1,
    padding: '2rem',
  },
  label: {
   fontSize: '2rem',
   color: 'var(--clr-grey-2)',
   marginRight: '1rem'
    
  },
}))((props) => <TreeItem {...props} />);

const useStyles = makeStyles({
  container: {
    dir:'rtl',
    minHeight: '120vh',
    background: 'var(--clr-primary-10)',
    maxWidth: '50rem',
  }
});
export default Sidebar
