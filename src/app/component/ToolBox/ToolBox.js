import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
  FormControl,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { Dayjs } from 'dayjs';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import moment from 'moment';
//bootstrap input mui
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
//paper mui
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Radio from '@mui/material/Radio';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useRef } from 'react';
import './ToolBox.css';
import { DataGrid } from '@mui/x-data-grid';
import { CheckCircle, Circle, Verified, VerifiedOutlined } from '@mui/icons-material';
import { TimePicker } from '@mui/x-date-pickers';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3)
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '',
    border: '1px solid #ced4da',
    // fontSize: "16px",
    width: '100',
    padding: '5px 5px',
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow'])
    // Use the system font instead of the default Roboto font.
    // fontFamily: [
    //   '-apple-system',
    //   'BlinkMacSystemFont',
    //   '"Segoe UI"',
    //   'Roboto',
    //   '"Helvetica Neue"',
    //   'Arial',
    //   'sans-serif',
    //   '"Apple Color Emoji"',
    //   '"Segoe UI Emoji"',
    //   '"Segoe UI Symbol"'
    // ].join(','),
    // '&:focus': {
    //   boxShadow: `unset`,
    //   borderColor: theme.palette.primary.main
    // }
  }
}));

export const CmpDatePicker = ({
  xLabelText,
  xValue,
  xOnChange,
  xName,
  xError = false,
  xErrorMessage = false,
  xTabIndex = '',
  xref = ''
}) => {
  const inputReference = useRef(null);
  return (
    <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
      <DatePicker
        className="inputfont"
        inputRef={xref ? xref : inputReference}
        inputProps={{ tabIndex: xTabIndex, className: 'inputfont' }}
        label={xLabelText}
        rifmFormatter={() => moment(xValue).format('DD/MM/YYYY')}
        inputFormat="DD/MM/YYYY"
        value={xValue}
        onChange={xOnChange}
        // className={'datePickerStyle'}
        renderInput={(params) => <TextField {...params} />}
        name={xName}

        // style={{ height: '2.3rem' }}
      />
    </LocalizationProvider>
  );
};

export const CmpTimePicker = ({
  xLabelText,
  xValue,
  xOnChange,
  xName,
  xError = false,
  xErrorMessage = false,
  xTabIndex = '',
  xref = ''
}) => {
  const inputReference = useRef(null);
  return (
    <LocalizationProvider fullWidth dateAdapter={AdapterDayjs} className="CmpTimePickerField">
      <TimePicker
        className="CmpTimePickerField inputfont"
        inputRef={xref ? xref : inputReference}
        inputProps={{ tabIndex: xTabIndex, className: 'inputfont' }}
        label={xLabelText}
        
        value={xValue}
        onChange={xOnChange}
        // className={'datePickerStyle'}
        renderInput={(params) => <TextField {...params} />}
        name={xName}

        // style={{ height: '2.3rem' }}
      />
    </LocalizationProvider>
  );
};
export const CmpTextField = ({
  xLabelText,
  xVariant,
  xValue,
  xOnChange,
  xReadOnly = false,
  xType,
  xName,
  xOnKeyUp,
  xError,
  xErrorMessage,
  xonFocus,
  xonBlur,
  xTabIndex = '',
  xref = ''
}) => {
  const fTextFieldDummy = () => {};
  const inputReference = useRef(null);
  return (
    <TextField
      inputProps={{ tabIndex: xTabIndex }}
      inputRef={xref ? xref : inputReference}
      id={xName}
      label={xLabelText}
      variant={xVariant} //"standard/outlined/filled"
      value={xValue}
      type={xType} // text/number/password
      name={xName}
      InputProps={{
        readOnly: xReadOnly
      }}
      onChange={(e) => {
        xOnChange(e);
      }}
      onKeyUp={!!xOnKeyUp ? xOnKeyUp : fTextFieldDummy}
      onFocus={!!xonFocus ? xonFocus : fTextFieldDummy}
      onBlur={!!xonBlur ? xonBlur : fTextFieldDummy}
      fullWidth
      error={xError}
      helperText={xErrorMessage}
    />
  );
};

export const CmpTextFieldEnter = ({
  xLabelText,
  xVariant,
  xValue,
  xOnChange,
  xReadOnly = false,
  xType,
  xName,
  xOnKeyUp,
  xError,
  xErrorMessage,
  xonFocus,
  xonBlur,
  xOnEnter,
  xSmShow,
  xTabIndex = '',
  xref = ''
}) => {
  const fTextFieldDummy = () => {};
  const inputReference = useRef(null);
  return (
    <div className="d-flex">
      <TextField
        inputRef={xref ? xref : inputReference}
        // id={xName}
        inputProps={{ tabIndex: xTabIndex }}
        label={xLabelText}
        variant={xVariant} //"standard/outlined/filled"
        value={xValue}
        type={xType} // text/number/password
        name={xName}
        InputProps={{
          readOnly: xReadOnly
        }}
        onChange={(e) => {
          xOnChange(e);
        }}
        onKeyUp={!!xOnKeyUp ? xOnKeyUp : fTextFieldDummy}
        onFocus={!!xonFocus ? xonFocus : fTextFieldDummy}
        onBlur={!!xonBlur ? xonBlur : fTextFieldDummy}
        fullWidth
        error={xError}
        helperText={xErrorMessage}
      />
      {xSmShow ? (
        <>
          <Button
            variant="contained"
            className={xError ? 'px-0 enter-btn  mb-4' : 'px-0 enter-btn '}
            onClick={!!xOnEnter ? xOnEnter : fTextFieldDummy}>
            <ArrowForwardOutlinedIcon />
          </Button>
        </>
      ) : (
        ''
      )}
    </div>
  );
};
export const CmpSelectBox = ({
  xLabelText,
  xValue,
  xOnChange,
  xName,
  xData,
  xValueMember,
  xDispalyMember,
  xError,
  xErrorMessage,
  xDisable,
  xTabIndex = '',
  xref
}) => {
  const inputReference = useRef(null);
  return (
    <FormControl fullWidth className="LocSelectionStyle" disabled={xDisable}>
      <InputLabel id="demo-simple-select-label">{xLabelText}</InputLabel>
      <Select
        inputRef={xref ? xref : inputReference}
        inputProps={{ tabIndex: xTabIndex }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={xValue}
        label={xLabelText}
        onChange={xOnChange}
        name={xName}
        fullWidth
        // style={{ height: '2.3rem' }}
        error={xError}
        // helperText={xErrorMessage}
      >
        {xData.length > 0 ? (
          xData.map((e, i) => {
            const keys = Object.keys(e);
            return (
              <MenuItem key={'Key' + i} value={e[keys[0]]}>
                {e[keys[1]]}
              </MenuItem>
            );
          })
        ) : (
          <MenuItem value={''}></MenuItem>
        )}
      </Select>
      {xError ? <FormHelperText className="text-danger">{xErrorMessage}</FormHelperText> : ''}
    </FormControl>
  );
};

//without label
export const CmpInputField = ({
  xValue,
  xOnChange,
  xReadOnly = false,
  xType,
  xName,
  xOnKeyUp,
  xError,
  xErrorMessage,
  xonFocus,
  xonBlur,
  xTextAlign = 'left',
  xTabIndex = '',
  xref = ''
}) => {
  const fTextFieldDummy = () => {};
  const inputReference = useRef(null);
  return (
    <>
      <BootstrapInput
        inputRef={xref ? xref : inputReference}
        className={xReadOnly ? 'disable-color inputfont' : 'inputfont'}
        value={xValue}
        type={xType} // text/number/password
        name={xName}
        readOnly={xReadOnly}
        onChange={(e) => {
          xOnChange(e);
        }}
        onKeyUp={!!xOnKeyUp ? xOnKeyUp : fTextFieldDummy}
        onFocus={!!xonFocus ? xonFocus : fTextFieldDummy}
        onBlur={!!xonBlur ? xonBlur : fTextFieldDummy}
        fullWidth
        inputProps={{ min: 0, style: { textAlign: xTextAlign }, tabIndex: xTabIndex }}
      />
      {xError ? <FormHelperText error={xError}>{xErrorMessage}</FormHelperText> : ''}
    </>
  );
};
export const CmpInputFieldGroup = ({
  xValue,
  xOnChange,
  xReadOnly = false,
  xType,
  xName,
  xOnKeyUp,
  xError,
  xErrorMessage,
  xonFocus,
  xonBlur,
  xTabIndex = '',
  xref = ''
}) => {
  const fTextFieldDummy = () => {};
  const inputReference = useRef(null);
  return (
    <>
      <div className="CmpInputFieldGroup">
        <BootstrapInput
          inputRef={xref ? xref : inputReference}
          inputProps={{ tabIndex: xTabIndex }}
          className={xReadOnly ? 'disable-color inputfont' : 'inputfont'}
          value={xValue}
          type={xType} // text/number/password
          name={xName}
          readOnly={xReadOnly}
          onChange={(e) => {
            xOnChange(e);
          }}
          onKeyUp={!!xOnKeyUp ? xOnKeyUp : fTextFieldDummy}
          onFocus={!!xonFocus ? xonFocus : fTextFieldDummy}
          onBlur={!!xonBlur ? xonBlur : fTextFieldDummy}
          fullWidth
          autoComplete="off"
        />
        <Button
          variant="outlined"
          className="CmpInputFieldGroup-icon inputfont"
          onClick={!!xOnKeyUp ? xOnKeyUp : fTextFieldDummy}
          onKeyUp={!!xOnKeyUp ? xOnKeyUp : fTextFieldDummy}>
          <MoreHorizIcon />
        </Button>
      </div>
      {xError ? <FormHelperText error={xError}>{xErrorMessage}</FormHelperText> : ''}
    </>
  );
};
// arr of obj [{},{}]
export const CmpSelectField = ({
  xLabelText,
  xValue,
  xOnChange,
  xName,
  xData = [],
  xValueMember = '',
  xDispalyMember = '',
  xError = false,
  xErrorMessage = false,
  xDisable = false,
  xOnkeyUp,
  xTabIndex = '',
  xref = ''
}) => {
  const fTextFieldDummy = (e) => {
    console.log(e);
  };
  const inputReference = useRef(null);
  return (
    <FormControl fullWidth className="LocSelectionStyle" disabled={xDisable}>
      {/* <InputLabel id="demo-simple-select-label">{xLabelText}</InputLabel> */}
      <Select
        inputRef={xref ? xref : inputReference}
        inputProps={{ tabIndex: xTabIndex }}
        className={xDisable ? 'disable-color inputfont' : 'inputfont'}
        value={!!xValue ? xValue : ''}
        label={xLabelText}
        onChange={!!xOnChange ? xOnChange : fTextFieldDummy}
        name={xName}
        fullWidth
        onKeyUp={!!xOnkeyUp ? xOnkeyUp : fTextFieldDummy}
        // style={{ height: '2.3rem' }}
        input={<BootstrapInput />}
        error={xError}
        // helperText={xErrorMessage}
      >
        {xData.length > 0 ? (
          xData.map((e, i) => {
            const keys = Object.keys(e);
            return (
              <MenuItem key={'Key' + i} value={e[keys[0]]}>
                {e[keys[1]]}
              </MenuItem>
            );
          })
        ) : (
          <MenuItem value={''}>none</MenuItem>
        )}
      </Select>
      {xError ? <FormHelperText className="text-danger">{xErrorMessage}</FormHelperText> : ''}
    </FormControl>
  );
};
//Arr Of value["",""]
export const CmpSelectArrField = ({
  xLabelText,
  xValue,
  xOnChange,
  xName,
  xData = [],
  xValueMember = '',
  xDispalyMember = '',
  xError = false,
  xErrorMessage = false,
  xDisable = false,
  xOnkeyUp,
  xTabIndex = '',
  xref = ''
}) => {
  const fTextFieldDummy = () => {};
  const inputReference = useRef(null);
  return (
    <FormControl fullWidth className="LocSelectionStyle" disabled={xDisable}>
      {/* <InputLabel id="demo-simple-select-label">{xLabelText}</InputLabel> */}
      <Select
        inputRef={xref ? xref : inputReference}
        // inputProps={{ tabIndex: xTabIndex }}
        inputProps={{ tabIndex: xTabIndex }}
        className={xDisable ? 'disable-color inputfont' : 'inputfont'}
        value={!!xValue ? xValue : ''}
        label={xLabelText}
        onChange={!!xOnChange ? xOnChange : fTextFieldDummy}
        name={xName}
        fullWidth
        onKeyUp={!!xOnkeyUp ? xOnkeyUp : fTextFieldDummy}
        // style={{ height: '2.3rem' }}
        input={<BootstrapInput />}
        error={xError}
        // helperText={xErrorMessage}
      >
        {xData.length > 0 ? (
          xData.map((e, i) => {
            return (
              <MenuItem key={'Key' + i} value={e}>
                {e}
              </MenuItem>
            );
          })
        ) : (
          <MenuItem value={''}>none</MenuItem>
        )}
      </Select>
      {xError ? <FormHelperText className="text-danger">{xErrorMessage}</FormHelperText> : ''}
    </FormControl>
  );
};
export const CmpDatePickerField = ({
  xValue,
  xOnChange,
  xName,
  xError = false,
  xErrorMessage = false,
  xOnKeyUp,
  xDisabled = false,
  xTabIndex = '',
  xref,
  xLabel = ''
}) => {
  const fTextFieldDummy = (e) => {};
  const inputReference = useRef(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} className="CmpDatePickerField">
      <DatePicker
        inputRef={xref ? xref : inputReference}
        inputProps={{ tabIndex: xTabIndex, className: 'inputfont', style: { aligItem: 'center' } }}
        label={xLabel}
        // rifmFormatter={() => moment(xValue).format("DD/MM/YYYY")}
        inputFormat="DD/MM/YYYY"
        value={xValue}
        onChange={!!xOnChange ? xOnChange : fTextFieldDummy}
        // onKeyUp={fTextFieldDummy}
        renderInput={(params) => (
          <TextField {...params} onKeyUp={!!xOnKeyUp ? xOnKeyUp : fTextFieldDummy} />
        )}
        name={xName}
        className="CmpDatePickerField inputfont"
        disabled={xDisabled}
        // input={<BootstrapInput />}
        // style={{ height: '2.3rem' }}
      />
    </LocalizationProvider>
  );
};
export const CmpTypographyField = ({ xcomponent, xText, xVariant = 'body1' }) => {
  return (
    <div className="txt-overflow-ellipse">
      <Typography variant={xVariant} component={xcomponent}>
        {xText}
      </Typography>
    </div>
  );
};
export const CmpTypographyFieldOld = ({ xcomponent, xText }) => {
  return (
    <Typography className="typograpgy-font txt-overflow-ellipse" component={xcomponent}>
      {xText}
    </Typography>
  );
};

export const CmpTypographyFieldColor = ({ xcomponent, xText, xVariant = 'body1' }) => {
  return (
    <div className="txt-overflow-ellipse">
      <Typography variant={xVariant} component={xcomponent} color={'primary'}>
        {xText}
      </Typography>
    </div>
  );
};
export const CmpCheckboxField = ({
  xChecked,
  xOnChange,
  xDisabled,
  xName,
  xNameField,
  xOnkeyUp,
  xTabIndex = '',
  xref = ''
}) => {
  const fTextFieldDummy = () => {};
  const inputReference = useRef(null);
  return (
    <>
      <FormGroup className="CmpCheckboxField inputfont">
        <FormControlLabel
          control={
            <Checkbox
              checked={xChecked}
              onChange={!!xOnChange ? xOnChange : fTextFieldDummy}
              onKeyUp={!!xOnkeyUp ? xOnkeyUp : fTextFieldDummy}
              inputProps={{ tabIndex: xTabIndex, className: 'inputfont' }}
              inputRef={xref ? xref : inputReference}
            />
          }
          name={xName}
          label={xNameField}
          disabled={xDisabled}
        />
      </FormGroup>
    </>
  );
};
export const CmpRadioField = ({
  xOnkeyUp,
  xChecked,
  xOnChange,
  xValue,
  xName,
  xNameField,
  xTabIndex = '',
  xref = ''
}) => {
  const fTextFieldDummy = () => {};
  const inputReference = useRef(null);
  return (
    <>
      <Radio
        className="inputfont"
        inputProps={{ tabIndex: xTabIndex, className: 'inputfont' }}
        onKeyUp={!!xOnkeyUp ? xOnkeyUp : fTextFieldDummy}
        checked={xChecked}
        onChange={!!xOnChange ? xOnChange : fTextFieldDummy}
        value={xValue}
        name={xName}
        inputRef={xref ? xref : inputReference}
      />

      {xNameField === '' ? '' : xNameField}
    </>
  );
};
export const CmpButtonOld = ({ xvariant, xsize, xonClick, xLabel, xDisable, xref = '' }) => {
  const fTextFieldDummy = () => {};
  const inputReference = useRef(null);
  return (
    <>
      <Button
        inputRef={xref ? xref : inputReference}
        variant={xvariant}
        disabled={xDisable}
        size={xsize}
        onClick={!!xonClick ? xonClick : fTextFieldDummy}
        className="btn-text-transform-none inputfont">
        {xLabel}
      </Button>
    </>
  );
};

export const CmpButton = ({ xvariant, xsize, xonClick, xLabel, xDisable, xref = '',xStartIcon }) => {
  const ColorButton = styled(Button)(({ theme }) => ({
    //color: theme.palette.getContrastText(purple[500]),
    backgroundColor: theme.palette.customColor.color1,
    '&:hover': {
      backgroundColor: theme.palette.customColor.color2.dark
    },
    fontSize: theme.typography.button.fontSize,
    textTransform: 'None'
  }));

  const fTextFieldDummy = () => {};
  const inputReference = useRef(null);
  return (
    <>
      <ColorButton
        variant={xvariant}
        disabled={xDisable}
        size={xsize}
        onClick={!!xonClick ? xonClick : fTextFieldDummy}
        startIcon ={xStartIcon}
        // className="btn-text-transform-none inputfont"
      >
        {xLabel}
      </ColorButton>
    </>
  );
};

export const CmpMultiSelect = ({
  xLabelText,
  xValue,
  xOnChange,
  xData,
  xError,
  xErrorMessage,
  xDisable,
  xTabIndex = '',
  xref
}) => {
  const inputReference = useRef(null);
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
        //width: 200
      }
    }
  };
  return (
    <FormControl fullWidth className="LocSelectionStyle MultiSelect" disabled={xDisable}>
      {/* <InputLabel id="demo-multiple-checkbox-label">{xLabelText}</InputLabel> */}
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={xValue}
        label={xLabelText}
        onChange={xOnChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          const index = selected.indexOf('All');
          if (index > -1) {
            selected.splice(index, 1);
          }
          let dataList = xData.filter((i) => selected.includes(i.id));
          return dataList.map((i) => i.name).join(', ');
        }}
        MenuProps={MenuProps}
        error={xError}
        inputRef={xref ? xref : inputReference}
        inputProps={{ tabIndex: xTabIndex }}>
        {xData.map((i) => (
          <MenuItem key={i.id} value={i.id}>
            <Checkbox
              checked={
                xValue.filter((j) => {
                  return j === i.id;
                }).length > 0
              }
            />
            <ListItemText primary={i.name} />
          </MenuItem>
        ))}
      </Select>
      {xError ? <FormHelperText className="text-danger">{xErrorMessage}</FormHelperText> : ''}
    </FormControl>
  );
};

export const CmpMultiSelectAll = ({
  xLabelText,
  xValue,
  xOnChange,
  xData,
  xError,
  xErrorMessage,
  xDisable,
  xTabIndex = '',
  xref
}) => {
  const inputReference = useRef(null);
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    if (value.includes('all')) {
      xOnChange(xValue.length === xData.length ? [] : xData.map((i) => i.id));
      return;
    }

    xOnChange(value);
  };

  const isAllSelected = xData.length > 0 && xValue.length === xData.length;
  return (
    <FormControl fullWidth className="LocSelectionStyle MultiSelect" disabled={xDisable}>
      {/* <InputLabel id="demo-multiple-checkbox-label">{xLabelText}</InputLabel> */}
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={xValue}
        label={xLabelText}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          let dataList = xData.filter((i) => selected.includes(i.id));
          return dataList.map((i) => i.name).join(', ');
        }}
        MenuProps={MenuProps}
        error={xError}
        inputRef={xref ? xref : inputReference}
        inputProps={{ tabIndex: xTabIndex }}>
        <MenuItem key="all" value="all">
          <ListItemIcon>
            <Checkbox
              checked={isAllSelected}
              indeterminate={xValue.length > 0 && xValue.length < xData.length}
            />
          </ListItemIcon>
          <ListItemText primary="Select All" />
        </MenuItem>
        {xData.map((i) => (
          <MenuItem key={i.id} value={i.id}>
            <Checkbox
              checked={
                xValue.filter((j) => {
                  return j === i.id;
                }).length > 0
              }
            />
            <ListItemText primary={i.name} />
          </MenuItem>
        ))}
      </Select>
      {xError ? <FormHelperText className="text-danger">{xErrorMessage}</FormHelperText> : ''}
    </FormControl>
  );
};

export const CmpMultiSelectFilter = ({
  xLabelText,
  xValue,
  xOnChange,
  xData,
  xError,
  xErrorMessage,
  xDisable,
  xTabIndex = '',
  xref,
  xShowLable = false
}) => {
  const inputReference = useRef(null);
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    if (value.includes('all')) {
      xOnChange(xValue.length === xData.length ? [] : xData.map((i) => i.id));
      return;
    }

    xOnChange(value);
  };

  const isAllSelected = xData.length > 0 && xValue.length === xData.length;
  return (
    <FormControl sx={{ m: 1, width: 300 }} disabled={xDisable}>
      {xShowLable && <InputLabel id="demo-multiple-checkbox-label">{xLabelText}</InputLabel>}
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={xValue}
        label={xLabelText}
        onChange={handleChange}
        input={<OutlinedInput label={xLabelText} />}
        renderValue={(selected) => {
          let dataList = xData.filter((i) => selected.includes(i.id));
          return dataList.map((i) => i.name).join(', ');
        }}
        MenuProps={MenuProps}
        error={xError}
        inputRef={xref ? xref : inputReference}
        inputProps={{ tabIndex: xTabIndex }}>
        <MenuItem key="all" value="all">
          <ListItemIcon>
            <Checkbox
              checked={isAllSelected}
              indeterminate={xValue.length > 0 && xValue.length < xData.length}
            />
          </ListItemIcon>
          <ListItemText primary="Select All" />
        </MenuItem>
        {xData.map((i) => (
          <MenuItem key={i.id} value={i.id}>
            <Checkbox
              checked={
                xValue.filter((j) => {
                  return j === i.id;
                }).length > 0
              }
            />
            <ListItemText primary={i.name} />
          </MenuItem>
        ))}
      </Select>
      {xError ? <FormHelperText className="text-danger">{xErrorMessage}</FormHelperText> : ''}
    </FormControl>
  );
};

export const MUIDataGrid = ({
  xRows,
  xColumns,
  xonRowClick,
  xRowHeight = 30,
  xHeaderHeight = 40
}) => {
  return (
    <DataGrid
      rows={xRows}
      columns={xColumns}
      rowHeight={xRowHeight}
      headerHeight={xHeaderHeight}
      sx={{
        border: 2,
        borderColor: 'primary.light'
      }}
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? 'mui-even-row' : 'mui-odd-row'
      }
      // pageSize={5}
      // rowsPerPageOptions={[5]}
      hideFooter
      onRowClick={(item) => xonRowClick(item)}
    />
  );
};

export const StatusIcon = ({ xStatus }) => {
  return (
    <>
      <Verified style={{ color: xStatus == 'Post' ? 'green' : 'gray' }} fontSize="small" />
      {/* <CheckCircle style={{ color: xStatus == 'Post' ? 'green' : '#e5de0f' }} fontSize="small" /> */}
      {/* <Circle style={{ color: xStatus == 'Post' ? 'green' : '#e5de0f' }} fontSize="small" /> */}
    </>
  );
};

export const CmpStatusDiv = ({ xStatus }) => {
  return (
    <>
      <Verified style={{ color: xStatus == 'Post' ? 'green' : 'gray', fontSize: '2.5rem' }} />

      {/* <CheckCircle style={{ color: xStatus == 'Post' ? 'green' : '#e5de0f' }} fontSize="large" /> */}
      {/* <Verified style={{ color: xStatus == 'Post' ? 'green' : '#e5de0f', fontSize: '3rem' }} /> */}
      {/* <VerifiedOutlined
        style={{ color: xStatus == 'Post' ? 'green' : '#e5de0f', fontSize: '3rem' }}
      /> */}
      {/* <div
        className="status_div"
        style={xStatus == 'Post' ? { color: 'green' } : { color: '#e5de0f' }}>
        <VerifiedOutlined
          style={{ color: xStatus == 'Post' ? 'green' : '#e5de0f', fontSize: '2rem' }}
        />
        <span>{xStatus}</span>
      </div> */}
      {/* <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
        <CheckCircle style={{ color: xStatus == 'Post' ? 'green' : '#e5de0f' }} fontSize="large" />

        <div
          className="status_div1"
          style={xStatus == 'Post' ? { color: 'green' } : { color: '#e5de0f' }}>
          <span>{xStatus}</span>
        </div>
      </div> */}
    </>
  );
};

export const CmpTotalMenu = ({ xTotal }) => {
  return (
    <div className="total-menu">
      <Typography component="span" color="white">
        Total
      </Typography>
      <Typography component="span" color="white">
        =
      </Typography>
      <Typography component="span" color="white">
        {isNaN(xTotal) ? 0.0 : Number(xTotal).toFixed(2)}
      </Typography>
    </div>
  );
};
