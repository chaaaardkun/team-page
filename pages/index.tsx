import type { NextPage, GetServerSideProps } from 'next'
import * as cookie from 'cookie';
import jwtDecode from 'jwt-decode';
import Image from 'next/image'
import Button from 'components/ui/Button'
import Input from 'components/ui/Input'
import { useState } from 'react'
import router from 'next/router'
import axios from 'axios';

type GeneratedToken = { userId: string; source: string; iat: number; exp: number };

const { motion } = require("framer-motion");
const CLIENT_URL = process.env.APP_URL;

const SignIn: NextPage = () => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };


  const onSubmitClick = async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.post('/api/sign-in', { password });
      if (data?.message === 'success') {
        router.push('/team-page');
      }
    } catch (error: any) {
      const response = error?.response?.data?.message
      setIsLoading(false);
      setError(`${response}`)
    }
  };

  console.log(password);

  return (
    <motion.div
      className="flex m-auto justify-center flex-col h-full max-w-sm"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="position-relative mb-4 text-center" variants={item}>
        <Image
          src="/images/icon-fingerprint.png"
          alt="fingerprint"
          height={64}
          width={64}
          quality={100}
          placeholder="empty"
        />
      </motion.div>
      <motion.div variants={item}>
        <h4 className="text-center">Enter password to continue</h4>
      </motion.div>
      <motion.div variants={item}>
        <Input
          placeholder="Password"
          type="password"
          defaultValue={password}
          className="w-full mt-6"
          errorMessage={error}
          emitTextValue={setPassword}
        />
      </motion.div>
      <motion.div variants={item}>
      <Button 
        label="Submit" 
        className="w-full mt-4"           
        type="button" 
        loading={isLoading}
        onClick={onSubmitClick}/>
      </motion.div>
    </motion.div>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const props = {
    seo: {
      mainseo: { title: `${process.env.APP_NAME} | Sign In` },
    },
  };

  const cookies = cookie.parse(req.headers?.cookie || '');

  if (cookies.authToken && cookies.token) {
    const token = jwtDecode<GeneratedToken>(cookies.authToken);

    try {
      if (Date.now() >= token.exp * 1000) return { props };
      if (CLIENT_URL !== token.source) return { props };
      return {
        redirect: {
          destination: '/team-page',
          permanent: false,
        },
      };
    } catch (error) {
      return { props };
    }
  }

  return { props };
}

export default SignIn
