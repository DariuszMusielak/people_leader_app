import React, {PropTypes} from 'react';
import { Input } from 'reactstrap';

const TextInput = ({type = 'text', ...restProps}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{name}</label>
      <div className="field">
        <Input
          className="form-control"
          type={type}
          {...restProps}
        />

      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default TextInput;
