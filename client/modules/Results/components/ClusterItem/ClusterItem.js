import React, { Component } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { toggleImageDialog } from '../../ResultsActions';


// Import Style

export default function ClusterItem (props) {
   let photos = props.isExpanded ? props.photos : _.slice(props.photos,0,4);
   let response = photos.map((photo,i) => {
                return (
                   <div className={props.classes.inliner} key={String.prototype.concat(props.fatherKey,i.toString())}>
                     <Card className={props.classes.card} >
                       <CardMedia>
                         <img src={photo.meme} className={props.classes.photo}/>
                       </CardMedia>
                       <CardContent>
                          <Typography type="headline" component="h2">
                          </Typography>
                          <Typography component="p">
                            Rank: {photo.rank}#<br/>
                            Score: {photo.sim_score.toFixed(3)}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button color="primary" onClick={ () => props.dispatch(toggleImageDialog(parseInt(props.fatherKey),i))}>Learn More</Button>
                        </CardActions>
                        </Card>
                   </div>
                )});

  return (<div className={props.classes.wideCenter}>{response}</div>);
 }


ClusterItem.propTypes = {
  photos: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  fatherKey: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool.isRequired,
};
