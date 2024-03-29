
import {Helmet} from 'react-helmet';

function HelmetTitle({title}){
    return(
        <Helmet>
            <title> {title} </title>
        </Helmet>
    )
}

export default HelmetTitle;