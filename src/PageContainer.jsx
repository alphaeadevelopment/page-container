import React from 'react';
// import Errors from './Errors';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

class PageContainer extends React.Component {
  state = {
    footerHeight: 0,
    headerHeight: 0,
  }
  onSetFooterHeight = (h) => {
    this.setState({ footerHeight: h });
  }
  onSetHeaderHeight = (h) => {
    this.setState({ headerHeight: h });
  }
  render() {
    const { footerHeight, headerHeight } = this.state;
    const { header, footer, children } = this.props;
    return (
      <div>
        {header && <Header onSetHeaderHeight={this.onSetHeaderHeight}>{header}</Header>}
        <Body {...this.props} footerHeight={footerHeight} headerHeight={headerHeight}>
          {children}
        </Body>
        {footer && <Footer onSetFooterHeight={this.onSetFooterHeight}>{footer}</Footer>}
      </div>
    );
  }
}

export default PageContainer;
// <Errors />
