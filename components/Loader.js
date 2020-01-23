import '../public/loader.css';
import loading from '../resources/img/loading.gif';
function Loading() {
    return <div className='loader'>
        <img src={loading} />
    </div>
}

export default Loading;