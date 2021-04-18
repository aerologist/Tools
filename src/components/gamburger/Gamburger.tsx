import React from 'react';
import { Button, Menu } from './styles';
import DehazeIcon from '@material-ui/icons/Dehaze';

function Gamburger() {
  const[fond, setFond] = React.useState(false);

  const onPress = () => {
    if (document.documentElement.clientWidth >= 767)
      setFond(!fond);
  }

  return (
    <Button style={ fond ? {  background: "rgba(0, 163, 197, 0.12)" } : {  background: "none" }}>
      <Menu onClick={onPress}>
        <DehazeIcon style={document.documentElement.clientWidth >= 767 ? {margin: '-5px 0 0 -3px'} : {margin: '-5px 0 0 -3px', color: 'white'}}/>
      </Menu>
    </Button>
  );
}
  
export default Gamburger;