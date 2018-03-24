import React from 'react';
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {},
};
class RawBody extends React.Component {
  render() {
    const { footerHeight, headerHeight, classes, children } = this.props;
    const ctrStyles = {
      height: `calc(100vh - ${footerHeight + headerHeight}px)`,
    };
    return (
      <div className={classes.root} style={ctrStyles}>
        {children}
      </div>
    );
  }
}

export default withStyles(styles)(RawBody);
