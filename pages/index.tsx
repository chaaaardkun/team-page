import type { NextPage } from 'next'
import Image from 'next/image'
import Button from 'components/ui/Button'
import Input from 'components/ui/Input'
import { useState } from 'react'
import router from 'next/router'

const { motion } = require("framer-motion");

const hiddenPassword = "cWpG9T/{HWK]^@J~"

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
      if (password !== hiddenPassword) {
        throw new Error('Password does not match on the system');
      }
      router.replace('/team-page');

    } catch (error) {
      setIsLoading(false);
      setError(`${error}`)
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
          placeholder="Current Password"
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

export default SignIn
