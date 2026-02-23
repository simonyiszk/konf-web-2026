import {FormEvent, useState} from "react";


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

  return (
    <form
      className="space-y-6 flex flex-col gap-4 lg:min-w-[300px] max-lg:w-full"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="block text-lg font-bold">Vezetéknév</label>
        <input
          name="lastName"
          type="text"
          className="w-full bg-transparent border-b-2 border-black focus:outline-none text-xl"
          placeholder="Simonyi"
          value={lastName}
          onChange={(e) => setLastName(e?.target?.value)}
        />
      </div>

      <div>
        <label className="block text-lg font-bold">Keresztnév</label>
        <input
          name="firstName"
          type="text"
          className="w-full bg-transparent border-b-2 border-black focus:outline-none text-xl"
          placeholder="Károly"
          value={firstName}
          onChange={(e) => setFirstName(e?.target?.value)}
        />
      </div>

      <div>
        <label className="block text-lg font-bold">Email</label>
        <input
          name="email"
          type="email"
          className="w-full bg-transparent border-b-2 border-black focus:outline-none text-xl"
          placeholder="simonyi@simonyi.bme.hu"
          value={email}
          onChange={(e) => setEmail(e?.target?.value)}
        />
      </div>

      <div>
        <label className="block text-lg font-bold">Telefonszám</label>
        <input
          name="phone"
          type="tel"
          className="w-full bg-transparent border-b-2 border-black focus:outline-none text-xl"
          placeholder="06 20 123 4567"
          value={phone}
          onChange={(e) => setPhone(e?.target?.value)}
        />
      </div>

      <div className="relative">
        <button
          type="submit"
          className="w-full font-bold py-3 bg-primary transition-all hover:scale-[1.1]"
        >
          Regisztráció
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
