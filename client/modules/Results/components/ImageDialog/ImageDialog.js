// @flow weak

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { toggleImageDialog } from '../../ResultsActions';
import demoPhoto from './demoPhoto.png';
import { createStyleSheet } from 'jss-theme-reactor';

// Styles
const styleSheet = createStyleSheet('demoImageAndDialog', () => ({
  demoImage: {
    width: '550px',
    height: '400px',
    
  },
}));



export class ImageDialog extends Component {

constructor (props,context) {
    super(props);
    this.styleManager = context.styleManager;
}



  handleRequestClose = () => this.props.dispatch(toggleImageDialog());

  render() {
    let classes = this.styleManager.render(styleSheet);

    return (
      <div>
        <Dialog
          open={this.props.open}
          onRequestClose={this.handleRequestClose}
          className={classes.dialog}
        >
          <DialogTitle>{'Photo Semsim tree'}</DialogTitle>
          <DialogContent>
            <DialogContentText>
            </DialogContentText>
            <img src={demoPhoto} className={classes.demoImage}/>
            
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} primary>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ImageDialog.propTypes = {
      dispatch: PropTypes.func.isRequired,
};

ImageDialog.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

function mapStateToProps(store) {
  return {
    open: store.results.isDialogOpen,
  };
}

export default connect(mapStateToProps)(ImageDialog);