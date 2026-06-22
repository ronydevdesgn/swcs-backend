-- CreateEnum
CREATE TYPE "Estado" AS ENUM ('PRESENTE', 'FALTA');

-- CreateEnum
CREATE TYPE "TipoUsuario" AS ENUM ('FUNCIONARIO', 'PROFESSOR', 'SUMARISTA');

-- CreateEnum
CREATE TYPE "Departamento" AS ENUM ('INFORMATICA', 'OUTROS');

-- CreateEnum
CREATE TYPE "Cargo" AS ENUM ('SUMARISTA', 'SECRETARIO', 'ADMINISTRATIVO', 'OUTROS');

-- CreateTable
CREATE TABLE "RefreshToken" (
    "TokenID" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "UsuarioID" INTEGER NOT NULL,
    "ExpiresAt" TIMESTAMP(3) NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RefreshToken_pkey" PRIMARY KEY ("TokenID")
);

-- CreateTable
CREATE TABLE "PasswordReset" (
    "PasswordResetID" SERIAL NOT NULL,
    "Token" TEXT NOT NULL,
    "UsuarioID" INTEGER NOT NULL,
    "ExpiresAt" TIMESTAMP(3) NOT NULL,
    "Used" BOOLEAN NOT NULL DEFAULT false,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PasswordReset_pkey" PRIMARY KEY ("PasswordResetID")
);

-- CreateTable
CREATE TABLE "Professor" (
    "ProfessorID" SERIAL NOT NULL,
    "Nome" VARCHAR(100) NOT NULL,
    "Departamento" "Departamento" NOT NULL,
    "CargaHoraria" INTEGER NOT NULL,
    "UsuarioID" INTEGER,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("ProfessorID")
);

-- CreateTable
CREATE TABLE "Funcionario" (
    "FuncionarioID" SERIAL NOT NULL,
    "Nome" VARCHAR(100) NOT NULL,
    "Email" VARCHAR(100) NOT NULL,
    "Cargo" "Cargo" NOT NULL,
    "UsuarioID" INTEGER,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Funcionario_pkey" PRIMARY KEY ("FuncionarioID")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "UsuarioID" SERIAL NOT NULL,
    "Nome" VARCHAR(100) NOT NULL,
    "Email" VARCHAR(100) NOT NULL,
    "SenhaHash" VARCHAR(255) NOT NULL,
    "Tipo" "TipoUsuario" NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("UsuarioID")
);

-- CreateTable
CREATE TABLE "Curso" (
    "CursoID" SERIAL NOT NULL,
    "Nome" VARCHAR(100) NOT NULL,
    "Descricao" TEXT NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Curso_pkey" PRIMARY KEY ("CursoID")
);

-- CreateTable
CREATE TABLE "Sumario" (
    "SumarioID" SERIAL NOT NULL,
    "Data" TIMESTAMP(3) NOT NULL,
    "Conteudo" TEXT NOT NULL,
    "CursoID" INTEGER NOT NULL,
    "ProfessorID" INTEGER NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sumario_pkey" PRIMARY KEY ("SumarioID")
);

-- CreateTable
CREATE TABLE "ProfessorCurso" (
    "ProfessorID" INTEGER NOT NULL,
    "CursoID" INTEGER NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProfessorCurso_pkey" PRIMARY KEY ("ProfessorID","CursoID")
);

-- CreateTable
CREATE TABLE "Presenca" (
    "PresencaID" SERIAL NOT NULL,
    "Data" TIMESTAMP(3) NOT NULL,
    "Estado" "Estado" NOT NULL,
    "ProfessorID" INTEGER NOT NULL,
    "CursoID" INTEGER NOT NULL DEFAULT 1,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Presenca_pkey" PRIMARY KEY ("PresencaID")
);

-- CreateTable
CREATE TABLE "Efetividade" (
    "EfetividadeID" SERIAL NOT NULL,
    "Data" TIMESTAMP(3) NOT NULL,
    "HorasTrabalhadas" INTEGER NOT NULL,
    "ProfessorID" INTEGER NOT NULL,
    "CursoID" INTEGER NOT NULL DEFAULT 1,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Efetividade_pkey" PRIMARY KEY ("EfetividadeID")
);

-- CreateTable
CREATE TABLE "Permissao" (
    "PermissaoID" SERIAL NOT NULL,
    "Descricao" VARCHAR(100) NOT NULL,

    CONSTRAINT "Permissao_pkey" PRIMARY KEY ("PermissaoID")
);

-- CreateTable
CREATE TABLE "UsuarioPermissao" (
    "UsuarioID" INTEGER NOT NULL,
    "PermissaoID" INTEGER NOT NULL,

    CONSTRAINT "UsuarioPermissao_pkey" PRIMARY KEY ("UsuarioID","PermissaoID")
);

-- CreateIndex
CREATE UNIQUE INDEX "RefreshToken_token_key" ON "RefreshToken"("token");

-- CreateIndex
CREATE INDEX "RefreshToken_UsuarioID_idx" ON "RefreshToken"("UsuarioID");

-- CreateIndex
CREATE INDEX "RefreshToken_ExpiresAt_idx" ON "RefreshToken"("ExpiresAt");

-- CreateIndex
CREATE UNIQUE INDEX "PasswordReset_Token_key" ON "PasswordReset"("Token");

-- CreateIndex
CREATE INDEX "PasswordReset_UsuarioID_idx" ON "PasswordReset"("UsuarioID");

-- CreateIndex
CREATE INDEX "PasswordReset_ExpiresAt_idx" ON "PasswordReset"("ExpiresAt");

-- CreateIndex
CREATE INDEX "PasswordReset_Token_Used_idx" ON "PasswordReset"("Token", "Used");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_UsuarioID_key" ON "Professor"("UsuarioID");

-- CreateIndex
CREATE INDEX "Professor_Departamento_idx" ON "Professor"("Departamento");

-- CreateIndex
CREATE INDEX "Professor_Nome_idx" ON "Professor"("Nome");

-- CreateIndex
CREATE UNIQUE INDEX "Funcionario_Email_key" ON "Funcionario"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Funcionario_UsuarioID_key" ON "Funcionario"("UsuarioID");

-- CreateIndex
CREATE INDEX "Funcionario_Cargo_idx" ON "Funcionario"("Cargo");

-- CreateIndex
CREATE INDEX "Funcionario_Nome_idx" ON "Funcionario"("Nome");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_Email_key" ON "Usuario"("Email");

-- CreateIndex
CREATE INDEX "Usuario_Tipo_idx" ON "Usuario"("Tipo");

-- CreateIndex
CREATE INDEX "Usuario_Nome_idx" ON "Usuario"("Nome");

-- CreateIndex
CREATE INDEX "Curso_Nome_idx" ON "Curso"("Nome");

-- CreateIndex
CREATE INDEX "Sumario_CursoID_idx" ON "Sumario"("CursoID");

-- CreateIndex
CREATE INDEX "Sumario_ProfessorID_idx" ON "Sumario"("ProfessorID");

-- CreateIndex
CREATE INDEX "Sumario_Data_idx" ON "Sumario"("Data");

-- CreateIndex
CREATE INDEX "Sumario_Data_CursoID_idx" ON "Sumario"("Data", "CursoID");

-- CreateIndex
CREATE INDEX "ProfessorCurso_ProfessorID_idx" ON "ProfessorCurso"("ProfessorID");

-- CreateIndex
CREATE INDEX "ProfessorCurso_CursoID_idx" ON "ProfessorCurso"("CursoID");

-- CreateIndex
CREATE INDEX "Presenca_ProfessorID_idx" ON "Presenca"("ProfessorID");

-- CreateIndex
CREATE INDEX "Presenca_CursoID_idx" ON "Presenca"("CursoID");

-- CreateIndex
CREATE INDEX "Presenca_Data_idx" ON "Presenca"("Data");

-- CreateIndex
CREATE INDEX "Presenca_Data_ProfessorID_idx" ON "Presenca"("Data", "ProfessorID");

-- CreateIndex
CREATE INDEX "Presenca_Estado_idx" ON "Presenca"("Estado");

-- CreateIndex
CREATE INDEX "Efetividade_ProfessorID_idx" ON "Efetividade"("ProfessorID");

-- CreateIndex
CREATE INDEX "Efetividade_CursoID_idx" ON "Efetividade"("CursoID");

-- CreateIndex
CREATE INDEX "Efetividade_Data_idx" ON "Efetividade"("Data");

-- CreateIndex
CREATE INDEX "Efetividade_Data_ProfessorID_idx" ON "Efetividade"("Data", "ProfessorID");

-- CreateIndex
CREATE INDEX "Permissao_Descricao_idx" ON "Permissao"("Descricao");

-- AddForeignKey
ALTER TABLE "RefreshToken" ADD CONSTRAINT "RefreshToken_UsuarioID_fkey" FOREIGN KEY ("UsuarioID") REFERENCES "Usuario"("UsuarioID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PasswordReset" ADD CONSTRAINT "PasswordReset_UsuarioID_fkey" FOREIGN KEY ("UsuarioID") REFERENCES "Usuario"("UsuarioID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professor" ADD CONSTRAINT "Professor_UsuarioID_fkey" FOREIGN KEY ("UsuarioID") REFERENCES "Usuario"("UsuarioID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Funcionario" ADD CONSTRAINT "Funcionario_UsuarioID_fkey" FOREIGN KEY ("UsuarioID") REFERENCES "Usuario"("UsuarioID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sumario" ADD CONSTRAINT "Sumario_CursoID_fkey" FOREIGN KEY ("CursoID") REFERENCES "Curso"("CursoID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sumario" ADD CONSTRAINT "Sumario_ProfessorID_fkey" FOREIGN KEY ("ProfessorID") REFERENCES "Professor"("ProfessorID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfessorCurso" ADD CONSTRAINT "ProfessorCurso_ProfessorID_fkey" FOREIGN KEY ("ProfessorID") REFERENCES "Professor"("ProfessorID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfessorCurso" ADD CONSTRAINT "ProfessorCurso_CursoID_fkey" FOREIGN KEY ("CursoID") REFERENCES "Curso"("CursoID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Presenca" ADD CONSTRAINT "Presenca_ProfessorID_fkey" FOREIGN KEY ("ProfessorID") REFERENCES "Professor"("ProfessorID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Presenca" ADD CONSTRAINT "Presenca_CursoID_fkey" FOREIGN KEY ("CursoID") REFERENCES "Curso"("CursoID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Efetividade" ADD CONSTRAINT "Efetividade_ProfessorID_fkey" FOREIGN KEY ("ProfessorID") REFERENCES "Professor"("ProfessorID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Efetividade" ADD CONSTRAINT "Efetividade_CursoID_fkey" FOREIGN KEY ("CursoID") REFERENCES "Curso"("CursoID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioPermissao" ADD CONSTRAINT "UsuarioPermissao_UsuarioID_fkey" FOREIGN KEY ("UsuarioID") REFERENCES "Usuario"("UsuarioID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioPermissao" ADD CONSTRAINT "UsuarioPermissao_PermissaoID_fkey" FOREIGN KEY ("PermissaoID") REFERENCES "Permissao"("PermissaoID") ON DELETE RESTRICT ON UPDATE CASCADE;
