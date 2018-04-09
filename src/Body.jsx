import React from 'react';
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    width: '100%',
  },
};
class RawBody extends React.Component {
  render() {
    const { classes, footerHeight, children } = this.props;
    const ctrStyles = {
      marginBottom: footerHeight,
    };
    return (
      <div className={classes.root} style={ctrStyles}>
        {children}
      </div>
    );
  }
}

export default withStyles(styles)(RawBody);
