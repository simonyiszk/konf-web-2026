"use client";
import {FormEvent, useState} from "react";
import {SlArrowRight} from "react-icons/sl";


export function RegisterForm(){

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
      return;
    }

  }

  const inputClasses = "w-full bg-primary-300 border-[3px] border-primary-700 rounded-2xl px-3 py-2 focus:border-[5px] focus:border-secondary focus:bg-text text-xl text-primary-700 placeholder:text-[#ab7e54]"

  return (
    <form
      className="space-y-4 flex flex-col lg:min-w-[300px] max-lg:w-full"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="block text-lg">Vezetéknév</label>
        <input
          name="lastName"
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
          type="checkbox"
          className="w-5 h-5 text-primary-700 bg-primary-300 border-primary-700 rounded focus:ring-primary-500 focus:ring-2"
          checked={plays}
          onChange={(e) => setPlays(e?.target?.checked)}
        />
      </div>

      <div>
        <label className="block text-lg">Telefonszám</label>
        <input
          name="phone"
          type="tel"
          className={inputClasses}
          placeholder="06 20 123 4567"
          value={phone}
          onChange={(e) => setPhone(e?.target?.value)}
        />
      </div>

      <div className="w-full flex justify-center pb-3 pt-6">
        <button
          type="submit"
          className="inline-flex items-center justify-center bg-primary-300 text-primary-700 gap-3 mb-2 border-2 border-primary-700 rounded-lg px-2 py-1 hover:bg-secondary shadow-md w-48 text-lg"
          aria-label="Regisztráció"
        >
            Regisztráció
            <SlArrowRight
              size={18}
            />
        </button>
        {error && (
          <p className="text-red-600 absolute -bottom-2 translate-y-full w-full text-center">
            {error}
          </p>
        )}
      </div>
    </form>
  )
}
