/* globals window,document */
import React from 'react';
import { withStyles } from 'material-ui/styles';
// import Errors from './Errors';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

const styles = {
  root: {
    // position: 'relative',
  },
};

export class PageContainer extends React.Component {
  state = {
    footerHeight: 0,
    headerHeight: 0,
    scrollTop: 0,
    width: '100vw',
  }
  componentDidMount = () => {
    window.addEventListener('scroll', this.onScroll);
    window.addEventListener('resize', this.onResize);
    this.updateWidth();
  }
  componentWillUnmount = () => {
    window.removeEventListener(this.onScroll);
    window.removeEventListener(this.onResize);
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
  onResize = () => {
    this.updateWidth();
  }
  updateWidth = () => {
    this.setState({
      width: document.body.clientWidth,
    });
  }
  render() {
    const { footerHeight, headerHeight, scrollTop, width } = this.state;
    const { classes, header, footer, children } = this.props;
    return (
      <div className={classes.root} style={{ width }}>
        {header && <Header onSetHeaderHeight={this.onSetHeaderHeight}>{header}</Header>}
        <Body scrollTop={scrollTop} footerHeight={footerHeight} headerHeight={headerHeight}>
          {children}
        </Body>
        {footer && <Footer scrollTop={scrollTop} onSetFooterHeight={this.onSetFooterHeight}>{footer}</Footer>}
      </div>
    );
  }
}

export default withStyles(styles)(PageContainer);
