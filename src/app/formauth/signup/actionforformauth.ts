'use server';
import { SignupFormSchema, FormState } from '../definition';
import bcrypt from 'bcrypt';
import { db } from '@/drizzle/db';

// 1.validate fields,
// 2.create user,
// 3.create session

export async function signupaction(state: FormState, formdata: FormData) {
  console.log(formdata);
  const validatedFields = SignupFormSchema.parse({
    name: formdata.get('name'),
    email: formdata.get('email'),
    password: formdata.get('password'),
  });
  //yete valid chi el animast call channeq, miangamic state tanq error mrassagnerov
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  //ancnum enq database-in
  const { name, email, password } = validatedFields.data;
  //haskanaq tvyal user@ arden ka grancvac te voch?
  const existingUser = await db.query.users.findFirst({
    where: eq(users.email, email),
  });
  if (existingUser) {
    return {
      message: 'Email already exists, please use a different email or login.',
    };
  }
  //yete chka dnenq database-um
  //naxqan password pahel@ cackagrenq
  const hashedPassword = await bcrypt.hash(password, 10);

  const data = await db
    .insert(users)
    .values({
      name,
      email,
      password: hashedPassword,
    })
    .returning({ id: users.id });

  const user = data[0];

  if (!user) {
    return {
      message: 'An error occurred while creating your account.',
    };
  }
}
