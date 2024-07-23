"use client";

import type { Aluno } from "./interfaces";
import { ValidateResult, useForm } from "react-hook-form";
import {
  AlunoContainer,
  AlunoForm,
  AlunoSection,
  FormInput,
  LogoIcon,
  LogoSection,
} from "./style";

const initalValues = {
  username: "Bruno",
  password: "12345",
};

export default function Aluno() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initalValues, mode: "onBlur" });
  const LOGO_TXT = "Let's Make it Happen Together!";
  const formatDate = (date: string): string => date.replace(/-/g, "/");

  const validatePasswordComplexity = (formField: string): ValidateResult => {
    if (formField.length < 10) {
      return "Essa senha não atende aos critérios";
    }
  };

  const onSubmit = (form: Record<string, string>) => {
    console.log(form);
    // TODO
  };

  return (
    <AlunoContainer>
      <AlunoSection>
        <LogoSection>
          <LogoIcon>{LOGO_TXT}</LogoIcon>
        </LogoSection>
        <AlunoForm onSubmit={handleSubmit(onSubmit)}>
          <FormInput {...register("username", { required: true })} />
          <FormInput
            {...register("password", {
              validate: {
                complexity: validatePasswordComplexity,
              },
            })}
          />
          <button type="submit">Enviar Formulário</button>
        </AlunoForm>
      </AlunoSection>
    </AlunoContainer>
  );
}
