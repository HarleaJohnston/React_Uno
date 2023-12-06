import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledComponentWrapper = styled.div`
  background-image: url('assets/winbg.png');
  background-size: cover;
  background-position: center;
`;

const Win = () => {
  return (
    <StyledComponentWrapper>
    <div className="winCenter">
        <div>
            <img src="/assets/winner.png" width={400} />
            <h1>[Username]</h1>
            <Link>
            <h2 className="btn btn-primary center-block">Play Again?</h2>
            </Link>

            <Link>
            <h2 className="btn btn-primary center-block">Quit</h2>
            </Link>
        </div>
    </div>
    </StyledComponentWrapper>
  )
}

export default Win