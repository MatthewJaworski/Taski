import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return <SignIn afterSignUpUrl="/new-user" redirectUrl="/new-user" />;
}
