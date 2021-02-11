
import Map from './components/map';

import styled from 'styled-components'

const FullHeightDiv = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
`

const CenteredDiv = styled.div`
width: 80vw;
height: 80vh;
border-radius: 5px;
overflow: hidden;
`

function App() {
  return (
    <FullHeightDiv>
      <CenteredDiv>
        <Map 
        lat={34.025}
        long={-118.40213}
        />
      </CenteredDiv>
      
    </FullHeightDiv>
  );
}

export default App;
