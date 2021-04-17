import CurrentInfo from '../../components/CurrentInfo/CurrentInfo.components';
import FutureInfo from '../../components/FutureInfo/FutureInfo.components';

function CurrentDayPage({handleSubmit}) {
    return (
      <div className="">
        <CurrentInfo handleSubmit={handleSubmit}/>
        <FutureInfo />
      </div>
      
    )
  } 

  export default CurrentDayPage;