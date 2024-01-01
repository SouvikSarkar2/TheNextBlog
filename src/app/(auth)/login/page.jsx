import { handleGithubLogin, login } from "@/lib/action";
import LoginForm from "@/components/loginForm/LoginForm";
import styles from "./login.module.css";
import { auth } from "@/lib/auth";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
