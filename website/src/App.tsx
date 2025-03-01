import React, { useContext } from 'react';
import { RegisterForm } from 'components/Authentication/Signup';
import { AccountPage } from 'components/AccountPage';
import { AuthForm } from 'components/Authentication/Signin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PostsPage } from 'components/PostsPage/PostsPage';
import Context, { myContext } from 'components/Context';
import { CreatePost } from 'components/createPost';
import { ThemeProvider, createTheme } from '@mui/material';

const colorTheme = createTheme({
  palette: {
    primary: {
      light: '#30006B',
      main: '#1C0049',
      dark: '#0D0026',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#97FBDC',
      main: '#67F3BF',
      dark: '#0A8541',
      contrastText: '#000000',
    },
    background: {
      paper: '#0A8541',
    },
  },
});

function App(): JSX.Element {
  const ctx = useContext(myContext);
  console.log('current context is ', ctx);
  return (
    <div className="App">
      <ThemeProvider theme={colorTheme}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                ctx.username == undefined ? <RegisterForm /> : <AccountPage />
              }
            />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/postspage" element={<PostsPage />} />
            <Route path="/register" element={<RegisterForm />}></Route>
            <Route path="/login" element={<AuthForm />}></Route>
            <Route path="/createpost" element={<CreatePost />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
