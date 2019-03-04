import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import NoSsr from '@material-ui/core/NoSsr';
import Paper from '@material-ui/core/Paper';
import {  createStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CancelIcon from '@material-ui/icons/Cancel';
import classNames from 'classnames';
import  * as React from 'react';
import Select from 'react-select';

  const styles = createStyles({
    root: {
      flexGrow: 1,
      background: 'white',
    },      
    noOptionsMessage: {      
    },        
    groupBadgeStyles: {
      backgroundColor: '#EBECF0',
      borderRadius: '2em',
      color: '#37383d',
      display: 'none',
      fontSize: 12,
      fontWeight: 'normal',
      lineHeight: '1',
      minWidth: 1,
      padding: '0.16666666666667em 0.5em',
      textAlign: 'center',
    },
    groupStyles: {
      display: 'flex',
      color: '#37383d',
      alignItems: 'center',
      fontWeight: 'bold',
      justifyConten2t: 'space-between',
      opacity: 0.70,
    },
    input: {
      display: 'flex',
      padding: 5,
      color: 'white',
    },
  
    placeholder: {
      position: 'absolute',
      left: 5,
      fontSize: 16,
    },
  
    valueContainer: {
      display: 'flex',    
      flex: 1,
      alignItems: 'center',
      overflow: 'hidden',    
    },
  
    singleValue: {
      fontSize: 16,
    },
  
    paper: {
      position: 'absolute',
      zIndex: 1,    
      left: 0,
      right: 0,
    }
  });

  const input = {
    display: 'flex',
    padding: 0,
    color: 'white',
  };

  const placeholder = {
    position: 'absolute',
    left: 2,
    fontSize: 16,
  };

  const valueContainer = {
    display: 'flex',    
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',    
  };

  const singleValue = {
    fontSize: 16,
  }

  const paper = {
    position: 'absolute',
    zIndex: 1,    
    left: 0,
    right: 0,
  }

  function NoOptionsMessage(props) {
    return (
      <Typography
        color="textSecondary"        
        className={styles.noOptionsMessage}
        {...props.innerProps}
      >
        {props.children}
      </Typography>
    );
  }

  function inputComponent({ inputRef, ...props }) {    
    return <div style={styles.input} ref={inputRef} {...props} />;
  }
  
  function Control(props: any) {    
    return (      
      <TextField            
        fullWidth={true}   
        style={input}
        InputProps={{          
          inputComponent,
          disableUnderline: true,
          inputProps: {            
            inputRef: props.innerRef,
            children: props.children,
            ...props.innerProps,            
          },
        }}
        {...props.selectProps.textFieldProps}
      />
    )};
  
  
  function Option(props) {
    return (
      <MenuItem
        buttonRef={props.innerRef}
        selected={props.isFocused}
        component="div"
        style={{
          fontWeight: props.isSelected ? 500 : 400,
          paddingLeft: 20,
        }}
        {...props.innerProps}
      >
        {props.children}
      </MenuItem>
    );
  }  
  
  function Placeholder(props) {
    return (
      <Typography
        color="textSecondary"        
        style={placeholder}
        {...props.innerProps}
      >
        {props.children}
      </Typography>
    );
  }
  
  function SingleValue(props) {
    return (
      <Typography 
        style={singleValue} 
        {...props.innerProps}>
        {props.children}
      </Typography>
    );
  }
  
  function ValueContainer(props) {
    return <div 
        style={valueContainer}
      >
        {props.children}
      </div>;
  }
  
  function MultiValue(props) {
    return (
      <Chip
        tabIndex={-1}
        label={props.children}
        className={classNames(props.selectProps.classes.chip, {
          [props.selectProps.classes.chipFocused]: props.isFocused,
        })}
        onDelete={props.removeProps.onClick}
        deleteIcon={<CancelIcon {...props.removeProps} />}
      />
    );
  }

  const formatGroupLabel = (data) => (
    <div style={styles.groupStyles}>
      <span>{data.label}</span>
      <span style={styles.groupBadgeStyles}>{data.options.length}</span>
    </div>
  );
  
  function Menu(props) {
    return (
      <Paper 
        //className={styles.paper} 
        style={paper}
        {...props.innerProps}>
        {props.children}
      </Paper>
    );
  }
  
  const components = {
    Control,
    Menu,
    MultiValue,
    NoOptionsMessage,
    Option,
    Placeholder,
    SingleValue,
    ValueContainer,
  }; 
  
  interface IState {
    single?: boolean,
    multi?: boolean,
  }

  interface IProps {
    classes: any,
    theme: any,
    options: any[],
    placeholder?: string,
  }

  class SelectAutocomplete extends React.Component<IProps, IState> {
    public render() {
      const { classes, theme, options, placeholder } = this.props;
  
      const selectStyles = {
        input: (base: any) => ({
          ...base,
          color: theme.palette.text.primary,
          '& input': {
            font: 'inherit',
          },
        }),
      };
  
      return (        
        <div className={classes.root}>
          <NoSsr>
          <Select
              styles={selectStyles}              
              options={Array.from(options)}              
              components={components}              
              placeholder={placeholder}
              formatGroupLabel={formatGroupLabel}
              isClearable={true}
            />                       
          </NoSsr>
        </div>
      );
    }
  }
  
  export default withStyles(styles, { withTheme: true })(SelectAutocomplete);
  