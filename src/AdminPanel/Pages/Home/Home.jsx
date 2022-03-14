import {HomeDiv} from './HomeElem';
import Chart from '../../Charts/Chart';
import Featured from '../../featuredinfo/Featured';
import {UserData} from '../../Admin/add';
/*import WidgetLg from '../../widgetsLg/WidgetLg';
import Widgetsm from '../../widgetsm/Widgetsm';*/
import UserList from '../User/UserList';


export default function Home() {
    return(
        <HomeDiv>
        <Featured/>
        <Chart data={UserData} title='Analytics' grid dataKey={['Active User','Sales','Price']}/>
        <UserList/>
        </HomeDiv>
    )
}