// @flow weak

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { tagWeightChange } from '../../AppActions';
import TextField from 'material-ui/TextField';
import List, {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
} from 'material-ui/List';
import FavoriteIcon from 'material-ui-icons/Favorite';

//Styles
import { createStyleSheet, createStyleManager } from 'jss-theme-reactor';;
import { create as createJss } from 'jss';
import preset from 'jss-preset-default';


// Styles
const styleSheet = createStyleSheet('dialogTagsWeighte3witn', () => ({
 input: {
   width: 42,
   fontSize: "15px",
 },
}));


export class DialogTagsWeight extends Component {

constructor (props,context) {
    super(props);
    this.styleManager = createStyleManager({
        jss: createJss(preset()),
        theme: props.theme,
      });

    this.state = {
        id: props.id,
        label: props.label,
        value: props.value,
      };
}



  handleChange = (e) => {
    let newValue = e.target.value;
    let tagId = this.state.id;
    this.props.dispatch(tagWeightChange(tagId,newValue));
  }



  render() {
    const classes = this.styleManager.render(styleSheet);
      return (
        <ListItem>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary={this.state.label} />
          <ListItemSecondaryAction>
          <TextField
            id={this.state.id}
            type="number"
            defaultValue={this.state.value.toString()}
            className={classes.input}
            onChange={this.handleChange}
            inputProps = {{min:"0", max:"1", step:"0.1"}}
            />
          </ListItemSecondaryAction>
        </ListItem>
            )
    };

  }


DialogTagsWeight.propTypes = {
      dispatch: PropTypes.func.isRequired,
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
};


function mapStateToProps(store) {
  return {
    open: store.app.isAdvancedOpen,
  };
}

export default connect(mapStateToProps)(DialogTagsWeight);
