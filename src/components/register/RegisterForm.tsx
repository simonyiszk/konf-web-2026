"use client";
import {FormEvent, useState} from "react";
import {SlArrowRight} from "react-icons/sl";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import {register} from "@/app/actions";
import {useRouter} from "next/navigation";


function getErrorMessage(status: string) {
  switch (status) {
    case "FORM_NOT_AVAILABLE":
      return "A regisztráció jelenleg nem elérhető";
    case "INVALID_VALUES":
      return "Az email cím vagy a név nem megfelelő";
  }
  return "Hiba történt a regisztráció során";
}

export function RegisterForm(){
  const router = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [plays, setPlays] = useState(false);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setError("");
    e.preventDefault();
    if (!firstName || !lastName || !email) {
      setError("Kérem töltse ki a kötelező mezőket (vezetéknév, keresztnév, email).");
      return;
    }
    if (plays && !phone) {
      setError("Kérem adja meg a telefonszámát, ha részt szeretne venni a nyereményjátékban.");
      return;
    } else {
      setPhone("");
    }
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not available yet");
      return;
    }
    executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
      submitEnquiryForm(gReCaptchaToken);
    })
  }

  const submitEnquiryForm = (gReCaptchaToken: string) => {
    register({firstName, lastName, email, plays, phone, recaptchaToken: gReCaptchaToken}).then(
      (status) => {
        if (status === "OK") {
          router.push("/register/success");
        } else {
          setError(getErrorMessage(status));
        }
      }
    )
  }

  const inputClasses = "w-full cursor-not-allowed bg-primary-300 border-[3px] border-primary-700 rounded-2xl px-3 py-2 focus:border-[5px] focus:border-secondary focus:bg-text text-xl text-primary-700 placeholder:text-[#ab7e54] focus:outline-none focus-visible:outline-none focus:ring-0"

  return (
    <form
      className="space-y-4 flex flex-col lg:min-w-[300px] max-lg:w-full opacity-60"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="block text-lg">Vezetéknév</label>
        <input
          name="lastName"
          disabled
          type="text"
          className={inputClasses}
          placeholder="Simonyi"
          value={lastName}
          onChange={(e) => setLastName(e?.target?.value)}
        />
      </div>

      <div>
        <label className="block text-lg">Keresztnév</label>
        <input
          name="firstName"
          disabled
          type="text"
          className={inputClasses}
          placeholder="Károly"
          value={firstName}
          onChange={(e) => setFirstName(e?.target?.value)}
        />
      </div>

      <div>
        <label className="block text-lg">Email</label>
        <input
          name="email"
          disabled
          type="email"
          className={inputClasses}
          placeholder="simonyi@simonyi.bme.hu"
          value={email}
          onChange={(e) => setEmail(e?.target?.value)}
        />
      </div>

      <div>
        <label className="block text-lg">Szeretnék részt venni a nyereményjátékban</label>
        <input
          name="plays"
          disabled
          type="checkbox"
          className="w-5 h-5 text-primary-700 bg-primary-300 border-primary-700 rounded focus:ring-primary-500 focus:ring-2"
          checked={plays}
          onChange={(e) => setPlays(e?.target?.checked)}
        />
      </div>

      {plays && (<div>
        <label className="block text-lg">Telefonszám</label>
        <input
          name="phone"
          disabled
          type="tel"
          className={inputClasses}
          placeholder="06201234567"
          value={phone}
          onChange={(e) => setPhone(e?.target?.value)}
        />
      </div>)}

      <div className="w-full flex flex-col items-center pb-3 pt-6">
        <button
          type="submit"
          onClick={() => console.log("RegisterForm: submit button clicked")}
          className="inline-flex items-center justify-center bg-primary-300 text-primary-700 gap-3 mb-2 border-2 border-primary-700 rounded-lg px-2 py-1 hover:bg-secondary shadow-md w-48 text-lg"
          disabled
          aria-label="Regisztráció"
        >
            Regisztráció
            <SlArrowRight
              size={18}
            />
        </button>
        {error && (
          <p className="text-[red] mt-2 text-center max-w-[360px] px-2">
            {error}
          </p>
        )}
      </div>
    </form>
  )
}
