export const ModalMessage={
    login:{
        icon:'mark',
        message:'로그인이 필요한\n서비스입니다.',
        button:'로그인 하러 가기',
        router:'/login'
    },
    agree:{
        icon:'mark',
        message:'약관 미동의시,\n서비스가 제한됩니다.',
        button:'약관 전체 동의하기'
    },
    proposal:{
        icon:'check',
        message:'투자 제안이 완료되었습니다.\n미팅 제안을 기다려주세요.',
        button:'확인'
    },
    pt:{
        icon:'check',
        message:'pt 영상이\n업로드 되었습니다',
        button:'확인'
    },
    delete:{
        icon:'mark',
        message:{
            member:'정말 회원 탈퇴를 진행하겠습니까?\n\n회원 탈퇴 시,\n모든 정보가 삭제됩니다.',
            pt:'등록된 PT 영상을\n삭제하시겠습니까?',
            comment:'등록된 댓글을\n삭제하시겠습니까?',
        },
        button:'yes_no'
    },
    signup:{
        icon:'check',
        message:'회원 정보가\n등록되었습니다.',
        button:'확인'
    }
}