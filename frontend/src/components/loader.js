

import { Container, Stack } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
         <div 
            className="vstack gap-2 col-md-1 mx-auto"
            style={{
                marginTop : "15%"
            }}
        >
            <Spinner 
                animation="border" 
                variant="primary" 
                style={{
                    fontSize : "50px"
                }}
            />
        </div> 
  );
}

export default Loader;