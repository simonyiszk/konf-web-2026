import GoogleCaptchaWrapper from "@/app/register/google-captcha-wrapper";
import {RegisterForm} from "@/components/register/RegisterForm";
import RegisterGiveawayTile from "@/components/tiles/register-giveaway-tile";

export default function RegisterPage() {

  return (
    <div className="flex w-full flex-col lg:grid lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center bg-background text-text p-10">
        <h1 className="text-4xl mb-8">Regisztrálj!</h1>
        <GoogleCaptchaWrapper>
          <RegisterForm />
        </GoogleCaptchaWrapper>
      </div>
      <div className="flex flex-col items-center bg-text text-primary-700 p-6 md:p-10 w-full overflow-hidden">
        {/*<h2 className="text-3xl font-bold mb-4 mt-8 md:mt-0 text-center">Miért érdemes regisztrálni?</h2>*/}

        <RegisterGiveawayTile />
      </div>
    </div>
  )
}
