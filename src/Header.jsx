import React from 'react';
import { withStyles } from 'material-ui/styles';

const styles = () => ({
  root: {
    'position': 'absolute',
    'width': '100%',
  },
});
class RawHeader extends React.Component {
  onSetRef = (r) => {
    if (r && this.props.onSetHeaderHeight) {
      this.props.onSetHeaderHeight(r.clientHeight);
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
export default withStyles(styles)(RawHeader);
