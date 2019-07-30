import React from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/shadesOfPurple';
import { generate } from 'shortid';

const highlightStyle = {
  backgroundColor: '#4f424c',
};

const lineNumberStyle = {
  backgroundColor: 'black',
  minWidth: '20px',
  display: 'inline-block',
  textAlign: 'right',
  paddingRight: '4px',
  color: '#797979',
};

export const Code = ({ code, language, highlight }) => {
  const shouldHighlightLine = line => highlight.some(l => l === line);
  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={language}
      theme={theme}
    >
      {({
        className, style, tokens, getLineProps, getTokenProps,
      }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => {
            const lineProps = getLineProps({ line, key: i });

            if (shouldHighlightLine(i)) {
              lineProps.style = highlightStyle;
              lineProps.className = `${lineProps.className} highlight-line`;
            }
            return (
              <div key={generate()} {...lineProps}>
                <span style={lineNumberStyle}>
                  {i}
                </span>
                {line.map((token, key) => (
                  <span key={generate()} {...getTokenProps({ token, key })} />
                ))}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};

Code.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string,
  highlight: PropTypes.array,
};

Code.defaultProps = {
  language: 'javascript',
  highlight: [],
};

export default Code;
