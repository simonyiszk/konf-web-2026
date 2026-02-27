"use server";

export async function register({
                                 firstName,
                                 lastName,
                                 email,
                                 plays,
                                 phone,
                                 recaptchaToken
}: {
  firstName: string;
  lastName: string;
  email: string;
  plays: boolean;
  phone: string;
  recaptchaToken: string;
}) {
  const isRecaptchaValid = await validateRecaptcha(recaptchaToken);
  if (!isRecaptchaValid) {
    return "INVALID_VALUES";
  }
  if (!email || !firstName || !lastName) {
    return "INVALID_VALUES";
  }
  if (plays) {
    if (!phone) {
      return "INVALID_VALUES";
    }
    const phoneNum = Number(phone);
    if (isNaN(phoneNum) || phoneNum < 0) {
      return "INVALID_VALUES";
    }
  }
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/form/register",
    {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, email, plays, phone }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return (await res.json()) as string;
}

async function validateRecaptcha(token: string) {
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${process.env.RECAPTCHA_SECRET}&response=${token}`,
  });
  const data = await res.json();
  return data.success;
}
