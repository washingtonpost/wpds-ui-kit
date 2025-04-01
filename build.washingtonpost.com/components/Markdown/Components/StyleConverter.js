import { Box, InputText, theme } from '@washingtonpost/wpds-ui-kit'; 
import React, { useState } from 'react';
import Pre from './Pre';
import tachyonsToStitches from './tachyonsToStitches.json';

const convertClassesToStyles = (classString) => {
  const classes = classString.trim().split(/\s+/);
  return classes.reduce((acc, cls) => {
    const style = tachyonsToStitches[cls];
    if (style) {
      return Object.assign(acc, style);
    }
    return acc;
  }, {});
};

const TachyonsConverter = () => {
  const [input, setInput] = useState('pa-sm mt-sm font-copy bold');
  const [output, setOutput] = useState(convertClassesToStyles('pa-sm mt-sm font-copy bold'));

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setOutput(convertClassesToStyles(value));
  };

  const tokens = input.trim().split(/\s+/);

  return (
    <Box css={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.colors.background,
      borderRadius: theme.radii[0o25],
      boxShadow: theme.shadows[1],
      margin: "$200 0",
    }}>
      <InputText
        value={input}
        onChange={handleChange}
        label="Tachyons Classes"
      />
      <Box
      css={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: theme.space['050'],
        marginTop: theme.space['050'],
        marginBottom: theme.space['050']
      }}
      >
        {tokens.map((token, idx) => (
          <Box
            as="span"
            key={token}
            css={{
              padding: "$025 $050",
              borderRadius: "$025",
              backgroundColor: tachyonsToStitches[token] ? theme.colors.success : theme.colors.error,
              color: tachyonsToStitches[token] ? theme.colors.successContainer : theme.colors.errorContainer,
              fontWeight: theme.fontWeights.bold,
              fontSize: theme.fontSizes['075'],
              display: 'inline-block'
            }}
          >
            {token}
          </Box>
        ))}
      </Box>
      <Pre css={{
        backgroundColor: theme.colors.background,
        padding: theme.space['200'],
        borderRadius: theme.radii[0o25],
        boxShadow: theme.shadows[1],
        margin: "$200",
      }}>
      <Box as="code" css={{ color: theme.colors.accessible }}>
        {JSON.stringify(output, null, 2)}
      </Box>
      </Pre>
    </Box>
  );
};

export default TachyonsConverter;
