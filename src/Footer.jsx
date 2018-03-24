import React from 'react';
import { withStyles } from 'material-ui/styles';

const styles = () => ({
  root: {
  },
});
class RawFooter extends React.Component {
  onSetRef = (r) => {
    if (r && this.props.onSetFooterHeight) {
      this.props.onSetFooterHeight(r.clientHeight);
    }
  }
  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.root} ref={this.onSetRef}>
        {children}
      </div>
    );
  }
}
export default withStyles(styles)(RawFooter);
