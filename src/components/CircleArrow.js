import styled from 'styled-components';
import themeGet from '../utils/themeGet';

import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';

function CircleArrow({direction}){

    return(
        <>
            { direction === 'left' && (
                <Circle>
                    <Arrow_left />
                </Circle>
            )}
            { direction === 'right' && (
                <Circle>
                    <Arrow_right />
                </Circle>
            )}
        </>
    )
}

export default CircleArrow;

const Circle=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: ${themeGet('color.salmon')};

    &:hover{
        background-color: #FA8072;
        transition: all 0.3s;
    }

    &:active{
        background-color: #FA8072;
        transition: all 0.3s;
    }
`;

const Arrow_left=styled(BsChevronLeft)`
    margin: 0;

    width: 25px;
    height: 25px;
    color:${themeGet('color.white')};
`;

const Arrow_right=styled(BsChevronRight)`
    margin: 0;

    width: 25px;
    height: 25px;
    color:${themeGet('color.white')};
`;