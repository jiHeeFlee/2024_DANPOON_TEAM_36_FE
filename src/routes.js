import Main from './pages/Main';
import Signup from './pages/Signup';
import Login from './pages/Login';
import OngoingSummit from './pages/OngoingSummit';
import Summit from './pages/Summit';
import Upload from './pages/Upload';
import PT from './pages/PT';
import Mypage from './pages/Mypage';


const routes=[
    {
        path:"/",
        element:<Main />,
        name:"메인페이지"
    },
    {
        path:"/signup",
        element:<Signup/>,
        name:"회원가입 페이지"
    },
    {
        path:"/login",
        element:<Login />,
        name:"로그인 페이지"
    },
    {
        path:"/ongoingsummit",
        element:<OngoingSummit />,
        name:"진행중인 써밋 페이지"
    },
    {
        path:"/summit",
        element:<Summit />,
        name:"주제별 써밋 페이지"
    },
    {
        path:"/upload",
        element:<Upload />,
        name:"PT 업로드 페이지"
    },
    {
        path:"/pt",
        element:<PT />,
        name:"주제별 써밋 개인 PT 페이지"
    },
    {
        path:"/mypage",
        element:<Mypage />,
        name:"회원 마이 페이지"
    },
]

export default routes;