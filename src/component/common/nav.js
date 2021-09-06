import React from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import PeopleIcon from "@material-ui/icons/People";
import PersonIcon from "@material-ui/icons/People";
import SettingsIcon from "@material-ui/icons/Settings";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Nav(props){
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => { 
      setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

 return(
<div>
<Grid>
<Grid>
  <AppBar style={{backgroundColor:"red"}}>
    <Toolbar>
          <div style={{paddingLeft:"85%"}}>
         
              <Button onClick={handleClick}
                        onMouseOver={ handleClick} 
                        startIcon={<SettingsIcon /> }  
                        endIcon={<ArrowDropDownIcon />} 
                        style={{color:'white'}}>Settings</Button>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    
                  >
                        <MenuItem onClick={handleClose}
                            component={Link} 
                            to="/"
                            ><PeopleIcon />
                              User</MenuItem>
                        <MenuItem onClick={handleClose}
                            component={Link}
                            to="/home"> <PersonIcon /> Home</MenuItem>
                            <MenuItem onClick={handleClose}
                            component={Link}
                            to="/about"> <PersonIcon /> About</MenuItem>
                  </Menu>   
          </div>
  </Toolbar>
  </AppBar>
      </Grid>
    </Grid>
    <Grid style={{paddingLeft:"88%",position:"absolut",paddingTop:"6%"}}>
     <Button style={{backgroundColor:"red", color:"white"}}>
       Create New
     </Button>
   </Grid>
</div>
    )
}
export default Nav;