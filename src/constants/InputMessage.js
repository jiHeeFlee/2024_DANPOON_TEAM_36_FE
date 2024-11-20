import { BiLinkAlt } from 'react-icons/bi';

const InputMessage={
    title:{
        header:'피칭 제목',
        placeholder:'제목을 작성하세요',
        star:true,
        caption:'* 필수 입력 항목입니다.'
    },
    summary:{
        header:'피칭 요약',
        placeholder:'피칭 요약을 작성하세요',
        star:true,
        caption:'* 필수 입력 항목입니다.'
    },
    server_url:{
        header:'서비스 웹사이트 혹은 기타 링크 (선택)',
        info:'웹사이트 혹은 기타 링크를 등록해주세요.',
        placeholder:'URL을 작성하세요',
        star:false
    },
    pt_url:{
        header:'PT 영상 링크',
        info:'유튜브 혹은 구글 드라이브 링크를 등록해주세요.',
        placeholder:'URL을 작성하세요',
        star:true,
        caption:'* 필수 입력 항목입니다.'
    },
    signup_name:{
        header:'이름',
        placeholder:'이름을 입력하세요',
        star:true,
        caption:'* 필수 입력 항목입니다.'
    },
    alert:{
        header:'써밋 알림톡 수신',
        star:true,
        info:'새로운 써밋이 생성되면 카카오 알림톡을 받아보실 수 있습니다.',
        caption:'* 필수 입력 항목입니다.'
    },
    signup:{
        name:{
            header:'이름',
            placeholder:'이름을 입력하세요',
            star:true,
            caption:'* 필수 입력 항목입니다.'
        },
        contact:{
            header:'연락처',
            placeholder:'연락처를 입력하세요',
            star:true,
            caption:'* 필수 입력 항목입니다.'
        },
        email:{
            header:'이메일',
            placeholder:'이메일을 입력하세요',
            star:true,
            caption:'* 필수 입력 항목입니다.'
        },
        company:{
            header:'소속 회사',
            placeholder:'소속 회사를 입력하세요',
            star:true,
            caption:'* 필수 입력 항목입니다.'
        },
        position:{
            header:'사내 직책',
            placeholder:'사내 직책을 입력하세요',
            star:true,
            caption:'* 필수 입력 항목입니다.'
        },
        registration_number:{
            header:'사업자 등록 번호',
            placeholder:'사업자 등록 번호를 입력하세요',
            star:false,
        },
        idea_sector:{
            header:'투자 관심 분야',
            placeholder:'투자 관심 분야를 입력하세요',
            star:false,
        },
        participant_position:{
            header:'참여자 구분',
            star:true,
            caption:'* 필수 입력 항목입니다.',
            position:{
                youth:{
                    name:'청년 창업가',
                    value:'YOUTH'
                },
                investor:{
                    name:'예비 투자자(일반 참가자)',
                    value:'INVESTOR'
                }
            }
        }
    }
    
    
}

export default InputMessage