import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import axios from'axios';

function Login() {
  const [username, setUsername] = useState ("");
  const [password, setPassword] = useState ("");

  function usernameChange(e) {
    setUsername(e.target.value);
  }
  
  function passwordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  

  // 로그인 요청을 보내고 JMT 토큰을 받아옴 
  axios.post('/api/login', { username, password })
    .then(response => {
       localStorage.setItem('token', response.data.token);
       //JWT 토큰을 로컬 스토리지에 저장


       // 로그인 성공 후의 처리를 진행 (예 : 페이지 이동)
      
    })
    .catch(error => {
      // 로그인 실패 시의 처리 진핼 (에러 메세지 표시)
    })
  } 

  return(
    <div className ="Login-all">
      <div className = "Login-Logo">5oz</div>
        <Form className = "form" onSubmit = { handleSubmit }>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={username} onChange= {usernameChange} placeholder="xxxx@ozsoftware.com" />
            <Form.Text className="text-muted">
              고객님의 정보는 공유되지 않습니다.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange= {passwordChange} placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="아이디 저장" />
          </Form.Group>
          <Button variant="primary" type="submit" className ="btn-log">
            Login
          </Button>
        </Form>
    </div>
  );
}
export default Login

