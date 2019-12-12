/*
    Module: @mitchallen/react-email-input-field
    Author: Mitch Allen
*/

import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const EmailInputField = ({ floatingLabelText = 'email', hintText = 'you@example.com', fieldStyle = {}, ...props }) => (
  <TextField  {...props}
   type='email'
   autoCapitalize='off'
   autoComplete='off'
   hintStyle={ fieldStyle.hintStyle }
   hintText={ hintText }
   inputStyle={ fieldStyle.whiteStyle }
   floatingLabelStyle={ fieldStyle.hintStyle }
   floatingLabelFocusStyle={ fieldStyle.floatingLabelFocusStyle }
   floatingLabelText={ floatingLabelText }
   underlineStyle={ fieldStyle.underlineStyle }
 />
);

EmailInputField.propTypes = {
  floatingLabelText: PropTypes.string,
  hintText: PropTypes.string,
  showPasswordOption: PropTypes.bool,
  fieldStyle: PropTypes.object
};

export default EmailInputField;
