import { ThemeProvider } from "styled-components";
// import { useState } from "react";
import { lightTheme, darkTheme, GlobalStyles } from "../styles/ThemeConfig";
// import { ML } from "./interests";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/layout";
// const router = createBrowserRouter(
//   createRoutersFromElements(
//     <Route path="/">
//     </Route>
//       <Route path="/expertise" element={<Expertise/>}>

//       <Route path="/machinelearning" element={<ML />} />
//         </Route>
//   )
// );

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/*<RouterProvider router={router}/>*/}
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* </RouterProvider>*/}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
