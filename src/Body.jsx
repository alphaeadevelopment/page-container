import React from 'react';
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    position: 'absolute',
    width: '100%',
  },
};
class RawBody extends React.Component {
  render() {
    // const { footerHeight, headerHeight, classes, children } = this.props;
    const { classes, headerHeight, footerHeight, children } = this.props;
    const ctrStyles = {
      marginTop: headerHeight,
      marginBottom: footerHeight,
      minHeight: `calc(100vh - ${headerHeight + footerHeight}px`,
    };
    return (
      <div className={classes.root} style={ctrStyles}>
        {children}
      </div>
    );
  }
}

export default withStyles(styles)(RawBody);
