import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    
    html {
        height:100vh
    }
    
    body { background-color: #fafcfd; -webkit-font-smoothing: antialiased; height:100vh}
    
    body, input, select, button {
        font: 15px 'Heebo', sans-serif;
    }

    button {
        cursor: pointer;
    }

    #root {
        height:100vh;
    }
`;
