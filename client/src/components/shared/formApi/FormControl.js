import Text from './control/Text';

const FormControl = ({ control, ...rest }) => {
  switch (control) {
    case 'text':
      return <Text {...rest} />;
    default:
      return;
  }
};

export default FormControl;
