import ProgressBar from 'react-bootstrap/ProgressBar';

function ProBar(props) {
  if (props.now === 100) {
    return (
      <ProgressBar striped variant='success' now={props.now} label={'Complete'} />
    );
  } else {
    return (
      <ProgressBar animated variant='warning' now={props.now} label={`${props.now}%`} />
    );
  }
  
};

export default ProBar;