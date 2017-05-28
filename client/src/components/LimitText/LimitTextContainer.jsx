import React, { PropTypes } from 'react';
import LimitTextComponent from './LimitTextComponent';

class LimitTextContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);

    this.state = {
      expanded: false,
    };
  }

  onMouseLeave() {
    this.setState({ expanded: false });
  }

  onMouseEnter() {
    this.setState({ expanded: true });
  }

  render() {
    const { maxLength, text } = this.props;
    const { expanded } = this.state;

    return (
      <LimitTextComponent
        onMouseLeave={this.onMouseLeave}
        onMouseEnter={this.onMouseEnter}
        maxLength={maxLength}
        expanded={expanded}
        text={text}
      />
    );
  }
}

LimitTextContainer.propTypes = {
  maxLength: PropTypes.number,
  text: PropTypes.string,
};

export default LimitTextContainer;
