import React, { PropTypes } from 'react';
import checkUrl from 'is-url';

const LimitTextComponent = ({ text = '', expanded = false, maxLength = 50, onMouseLeave, onMouseEnter }) => {
  let visibleText = '';
  if (text != null) {
    visibleText = expanded ? text : text.substring(0, Math.min(maxLength, text.length));
  }
  const isUrl = checkUrl(text);

  if (isUrl) {
    return (
      <div>
        <a href={text} target="_blank" rel="noopener noreferrer" className="farfetch-font">
          {visibleText}
          {text.length !== visibleText.length ? '...' : ''}
        </a>
      </div>);
  }

  if (text != null) {
    return (
      <div onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} className="farfetch-font">
        {visibleText}
        {text.length !== visibleText.length ? '...' : ''}
      </div>
    );
  }
  return (
    <div onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} className="farfetch-font">
      {visibleText}
      {''}
    </div>
  );
};

LimitTextComponent.propTypes = {
  maxLength: PropTypes.number,
  expanded: PropTypes.bool,
  text: PropTypes.string,
  onMouseLeave: PropTypes.func,
  onMouseEnter: PropTypes.func,
};

export default LimitTextComponent;
