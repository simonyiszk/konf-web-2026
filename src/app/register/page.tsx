import GoogleCaptchaWrapper from "@/app/register/google-captcha-wrapper";
import {RegisterForm} from "@/components/register/RegisterForm";

export default function RegisterPageWrapped() {
  return (
    <GoogleCaptchaWrapper>
      <RegisterPage/>
    </GoogleCaptchaWrapper>
  )
}



function RegisterPage() {


  return (
    <div className="flex w-full md:grid md:grid-cols-2">
      <div className="flex flex-col justify-center items-center bg-background text-text p-10">
        <h1 className="text-4xl mb-8">Regisztrálj!</h1>
        <RegisterForm />
      </div>
      <div className="flex flex-col justify-center items-center bg-text text-primary-700 p-10">
        <h2 className="text-3xl font-bold mb-4">Miért érdemes regisztrálni?</h2>
      </div>
    </div>
  )


}
