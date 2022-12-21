import React, { Component, useState, startTransition, Suspense } from "react";

// class App extends Component {
//   state = {
//     SplitMe: null,
//   };
//   handleClick = () => {
//     import("./SplitMe").then(({ default: SplitMe }) => {
//       this.setState({
//         SplitMe,
//       });
//     });
//   };
//   render() {
//     const { SplitMe } = this.state;
//     return (
//       <div>
//         <button onClick={this.handleClick}>Click Me</button>
//         {SplitMe && <SplitMe />}
//       </div>
//     );
//   }
// }

// export default App;

// *****************************************
//함수형

// import React, { Component } from 'react';

// class App extends Component {
//   state = {
//     SplitMe: null
//   };
//   handleClick = () => {
//     import('./SplitMe').then(({ default: SplitMe }) => {
//       this.setState({
//         SplitMe
//       });
//     });
//   };
//   render() {
//     const { SplitMe } = this.state;
//     return (
//       <div>
//         <button onClick={this.handleClick}>Click Me</button>
//         {SplitMe && <SplitMe />}
//       </div>
//     );
//   }
// }

// export default App;

//  *******************************

//React.lazy 사용

// const SplitMe = React.lazy(() => import('./SplitMe'));

// const App = () => {
//     const [visible, setVisible] = useState(false);
//     const onClick = () => {
//         setVisible(true);
//     };

//     return (
//         <div className={"App"}>
//             <header className={"App-header"}>
//                 <img src={logo} className={"App-logo"} alt={"logo"}/>
//                 <p onClick={onClick}>code splitting</p>
//                 <Suspense fallback={<div>로딩중...</div>}>
//                     {visible && <SplitMe/>}
//                 </Suspense>
//             </header>
//         </div>
//     );
// }

// export default App;

import DelayedPage from "./DelayedPage";

const App = () => {
  const [page, setPage] = useState(0);

  // const DelayedPage = React.lazy(() => import("./DelayedPage"));

  const pages = [
    <DelayedPage id="0" delay={500}>
      500ms 지연된 페이지
    </DelayedPage>,
    <DelayedPage id="1" delay={1000}>
      1000ms 지연된 페이지
    </DelayedPage>,
    <DelayedPage id="2" delay={3000}>
      3000ms 지연된 페이지
    </DelayedPage>,
  ];

  return (
    <>
      <nav>
        <button onClick={() => startTransition(() => setPage(0))}>첫 번째 페이지</button>
        <button onClick={() => startTransition(() => setPage(1))}>두 번째 페이지</button>
        <button onClick={() => startTransition(() => setPage(2))}>세 번째 페이지</button>
      </nav>
      <Suspense fallback={"로딩 중..."}>{pages[page]}</Suspense>
    </>
  );
};

export default App;
