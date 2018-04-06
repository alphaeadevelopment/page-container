/* globals window,document */
import React from 'react';
import { withStyles } from 'material-ui/styles';
// import Errors from './Errors';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

const styles = {
  root: {
  },
};

export class PageContainer extends React.Component {
  state = {
    footerHeight: 0,
    headerHeight: 0,
    scrollTop: 0,
  }
  componentDidMount = () => {
    this.scrollListener = window.addEventListener('scroll', this.onScroll);
  }
  componentWillUnmount = () => {
    window.removeEventListener(this.onScroll);
  }
  onSetFooterHeight = (h) => {
    this.setState({ footerHeight: h });
  }
  onSetHeaderHeight = (h) => {
    this.setState({ headerHeight: h });
  }
  onScroll = (e) => {
    this.setState({ scrollTop: e.target.documentElement.scrollTop });
  }
  render() {
    const { footerHeight, headerHeight, scrollTop } = this.state;
    const { classes, header, footer, children } = this.props;
    return (
      <div className={classes.root} style={{ width: document.body.clientWidth }}>
        {header && <Header onSetHeaderHeight={this.onSetHeaderHeight}>{header}</Header>}
        <Body {...this.props} scrollTop={scrollTop} footerHeight={footerHeight} headerHeight={headerHeight}>
          {children}
        </Body>
        {footer && <Footer scrollTop={scrollTop} onSetFooterHeight={this.onSetFooterHeight}>{footer}</Footer>}
      </div>
    );
  }
}

export default withStyles(styles)(PageContainer);
