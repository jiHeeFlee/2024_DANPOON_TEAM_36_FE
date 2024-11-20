import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import themeGet from "../../utils/themeGet";

function SummitItem({thumbnail,service_info,name,router}){
    // 라우터 설정 추가로 필요함
    const navigate=useNavigate();
    const handle_click=()=>{
        if(router){
            navigate(router)
        }
    }

    return(
        <>
            <Container onClick={handle_click}>
                <Contents>
                    <Thumbnail thumbnail={thumbnail}/>
                    <ServiceInfo>{service_info}</ServiceInfo>
                </Contents>
                {name && <Name>{name} 대표님</Name>}
            </Container>
        </>
    )
}

export default SummitItem;

const Container=styled.div`
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    align-items: center;

    flex-wrap: wrap;
    gap: 16px;

    /* z-index: 1; */
    margin-right: 20px;
`;

const Contents=styled.div`
    width: 270px;

    color: ${themeGet('color.500')};
    font-size: ${themeGet('fonts.body1.size')};
    font-weight: ${themeGet('fonts.body1.weight')};

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    box-shadow: 5px 5px 20px 2px #00000040;
`;

const Thumbnail=styled.div`
    height: 200px;
    background-color: ${themeGet('color.200')};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    object-fit: contain;
    background-image: url(${props => props.thumbnail});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

const ServiceInfo=styled.div`
    display: flex;
    flex-direction: column;
    padding: 22px 62.5px;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: ${themeGet('color.400')};
    background-color: ${themeGet('color.white')};
    font-size: ${themeGet('fonts.body2.size')};

    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

const Name=styled.p`

    color: ${themeGet('color.500')};
    font-size: ${themeGet('fonts.body1.size')};
    font-weight: 700;
`;
