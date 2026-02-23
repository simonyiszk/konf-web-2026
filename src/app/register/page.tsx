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
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">Regisztrálj!</h1>
        <RegisterForm />
      </div>
    </div>
  )


}
