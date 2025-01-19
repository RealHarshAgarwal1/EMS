import React,{useState} from 'react';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('')
  const submitHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setpassword("");
  }











  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-10 rounded-xl'>
        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex flex-col items-center justify-center'>
          <input 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
          required 
          className='outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Email' />
          <input 
          value={password}
          onChange={(e)=>{
            setpassword(e.target.value);
          }}
          required 
          className='outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder="Password" />
          <button className='text-white outline-none  border-none bg-emerald-600 py-3 px-5 rounded-full mt-3'>Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
