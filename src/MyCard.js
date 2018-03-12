import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import yellow from 'material-ui/colors/yellow'

const styles = theme => ({
  card: {
    maxWidth: 750,
    backgroundColor: yellow[300]
  },
  media: {
    height: 350,
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
});

class MyCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;
    return (
    <div id={this.props.id}>
        <Card className={classes.card} >
          <CardMedia
              className={classes.media}
              image={this.props.image}
              title={this.props.imageTitle}
            />
            <CardContent>
            <Typography component="p">
              {this.props.title}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                {this.props.about}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

MyCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyCard);
