import type { NextPage } from 'next'
import Image from 'next/image'
import Button from 'components/ui/Button'
import Input from 'components/ui/Input'
import { useState } from 'react'
import router from 'next/router'

const hiddenPassword = "cWpG9T/{HWK]^@J~"

const SignIn: NextPage = () => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

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
    <div className="flex m-auto mt-[12.5rem] flex-col h-full max-w-sm">
      <div className="position-relative mb-4 text-center">
        <Image
          src="/images/icon-fingerprint.png"
          alt="fingerprint"
          height={64}
          width={64}
          quality={100}
          placeholder="empty"
        />
      </div>
      <h4 className="text-center">Enter password to continue</h4>

        <Input
          placeholder="Current Password"
          type="password"
          defaultValue={password}
          className="w-full mt-6"
          errorMessage={error}
          emitTextValue={setPassword}
        />
      <Button 
        label="Submit" 
        className="w-full mt-4"           
        type="button" 
        loading={isLoading}
        onClick={onSubmitClick}/>
    </div>
  )
}

export default SignIn
