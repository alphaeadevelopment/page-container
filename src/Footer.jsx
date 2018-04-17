import React from 'react';
import { withStyles } from 'material-ui/styles';

const styles = () => ({
  root: {
    'position': 'absolute',
    'width': '100%',
  },
});
class RawFooter extends React.Component {
  state = {
    height: 0,
  }
  onSetRef = (r) => {
    if (r) {
      if (this.props.onSetFooterHeight) {
        this.props.onSetFooterHeight(r.clientHeight);
      }
      this.setState({ height: r.clientHeight }, this.props.onUpdateHeight);
    }
  }
  render() {
    const { height } = this.state;
    const { classes, children, scrollTop } = this.props;
    const footerStyles = {
      top: `calc(100vh - ${height - scrollTop}px)`,
    };
    return (
      <div className={classes.root} ref={this.onSetRef} style={footerStyles}>
        {children}
      </div>
    );
  }
}
export default withStyles(styles)(RawFooter);
