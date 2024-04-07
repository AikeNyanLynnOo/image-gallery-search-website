import React, { useContext } from "react";
import { Clear } from "@mui/icons-material";
import { Icon, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { typoSystem } from "@/lib/theme/typoSystem";

import {
  neutralGrey,
  neutralWhite,
  primary,
  primaryDark,
  primaryTeal,
} from "../../../lib/theme/colors";
import ButtonWithIcon from "../atoms/ButtonWithIcon";
import { ModeContext } from "../ModeWrapper";
import { SourceDropDown } from "../dropdowns/SourceDropDown";

export const LandingSectionSearchInput = (props) => {
  const {
    source,
    changeSource,
    handleGo,
    type,
    placeholder,
    inputValue,
    textChange,
    handleClearInput,
    disabled,
    closeIconControl,
    multiline,
    minHeight,
    maxLength,
    dropDownTextVariant,
    customInputStyles,
    customStartAdornmentStyles,
  } = props;

  const { mode, changeMode } = useContext(ModeContext);

  return (
    <OutlinedInput
      onFocus={closeIconControl && closeIconControl.handleInputFocus}
      // onBlur={closeIconControl && closeIconControl.handleInputBlur}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleGo();
        }
      }}
      readOnly={disabled}
      placeholder={placeholder}
      type={type}
      value={inputValue}
      fullWidth
      multiline={multiline}
      maxRows={3}
      inputProps={{
        maxLength,
        style: {
          ...typoSystem.btnSRegular,
        },
      }}
      onChange={(e) => {
        const textValue = e.target.value;
        // Check if the input contains only spaces.
        if (/^\s+$/.test(textValue)) {
          textChange(textValue.trim()); // Trim spaces.
        } else {
          textChange(textValue); // Keep input as is.
        }
      }}
      sx={{
        height: 50,
        borderRadius: 15,
        "&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "& input::placeholder": {
          ...typoSystem.btnSRegular,
        },
        backgroundColor: neutralWhite,
        "&.MuiOutlinedInput-root .MuiOutlinedInput-input": {
          alignSelf: (!multiline && "center") || "initial",
          // border: "1px solid red",
          mx: 3,
        },
        "& .MuiInputAdornment-root": {
          height: "auto",
          alignSelf: (!multiline && "center") || "start",
          color: primary,
          mr: 1,
          mt: (multiline && 2) || 0,
        },

        "& .MuiInputAdornment-positionEnd": {
          mr: 1,
        },
        ...customInputStyles,
      }}
      style={{
        minHeight: multiline ? minHeight || "85px" : "auto",
        padding: 0,
      }}
      endAdornment={
        <InputAdornment position="end">
          {closeIconControl &&
            closeIconControl.showCloseIcon &&
            inputValue &&
            !disabled && (
              <IconButton onClick={() => !disabled && handleClearInput()}>
                <Icon style={{ fontSize: 16 }}>clear</Icon>
              </IconButton>
            )}
          <IconButton
            onClick={handleGo}
            sx={{
              ml: 3,
              "&.MuiIconButton-root:hover .MuiIcon-root": {
                color: primaryTeal,
              },
            }}
          >
            <Icon style={{ fontSize: 22 }}>search</Icon>
          </IconButton>
        </InputAdornment>
      }
      startAdornment={
        <InputAdornment position="start">
          <SourceDropDown
            source={source}
            changeSource={changeSource}
            dropDownTextVariant={dropDownTextVariant}
            customStyles={customStartAdornmentStyles}
          />
        </InputAdornment>
      }
    />
  );
};
