import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label, Text } from './styles';

export default function SimpleInput({ placeholder, labelText }) {
  return (
    <>
      <Label>
        <Text>{labelText}</Text>
      </Label>
      <Input autoCapitalize="none" placeholder={placeholder} />
    </>
  );
}

SimpleInput.propTypes = {
  placeholder: PropTypes.string,
  labelText: PropTypes.string,
};

SimpleInput.defaultProps = {
  placeholder: 'Placeholder',
  labelText: 'Label',
};
