"use client";

import { useState } from "react"
import Link  from 'next/link';
import Image from 'next/image';

import Input from '../../components/common/Input';



function RegisterPage() {

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");



    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }


  return (
    <section className="relative flex items-center justify-center h-screen">


        <div className="basis-1/2">
            <h1 className="text-center text-primary text-4xl mb-8 z-40">عضویت</h1>

            <Image src="/images/bubble.png" alt="medical" width={'70'} height={'70'} className="-z-50 absolute top-20 right-20" />

            <Image src="/images/bubble.png" alt="medical" width={'100'} height={'100'} className="-z-50 absolute bottom-30" />

            <form className="flex flex-col block max-w-xs mx-auto z-40" onSubmit={handleFormSubmit}>
                <Input
                    type={"email"}
                    label={"ایمیل"} 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    // disabled={creatingUser}
                    // error={!validateEmail(email)}
                />


                <Input
                    type={"password"}
                    label={"رمز عبور"} 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    // disabled={creatingUser}
                    // error={!validateEmail(email)}
                />

                {/* <input type="password"
                    label="رمز عبور"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    // disabled={creatingUser}
                    // error={!validatePassword(password)}
                    className=""
                /> */}


                <button type="submit" className="mt-4">ثبت نام</button>
                
                <div className="text-center my-4 text-gray-500">قبلا ثبت نام کرده اید؟
                    <Link href="/loginUsers" className="underline">ورود</Link>
                </div>
            </form>


        </div>

        <div className="basis-1/2">
            <Image src="/images/medical1.jpg" alt="medical" width={'900'} height={'1200'} className="" />
        </div>

        <Image src="/images/bubble.png" alt="medical" width={'100'} height={'100'} className="absolute bottom-30" />

    </section>
  )
}

export default RegisterPage
