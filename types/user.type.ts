type UserFormRegister = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  repassword: string;
  check: boolean;
};

type UserFormLogin = Pick<UserFormRegister, "email" | "password">;
type UserFormRecoveryExtras = {
  oldpassword: string;
  newpassword: string;
};
type UserFormForgot = {
  newpassword: string;
  repeatpassword: string;
};

type UserFormRecovery = Pick<
  UserFormRegister,
  "firstname" | "lastname" | "email" | "repassword"
> &
  UserFormRecoveryExtras;
