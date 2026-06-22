-- DropForeignKey
ALTER TABLE "Efetividade" DROP CONSTRAINT "Efetividade_ProfessorID_fkey";

-- DropForeignKey
ALTER TABLE "Funcionario" DROP CONSTRAINT "Funcionario_UsuarioID_fkey";

-- DropForeignKey
ALTER TABLE "Presenca" DROP CONSTRAINT "Presenca_ProfessorID_fkey";

-- DropForeignKey
ALTER TABLE "Professor" DROP CONSTRAINT "Professor_UsuarioID_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioPermissao" DROP CONSTRAINT "UsuarioPermissao_PermissaoID_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioPermissao" DROP CONSTRAINT "UsuarioPermissao_UsuarioID_fkey";

-- AddForeignKey
ALTER TABLE "Professor" ADD CONSTRAINT "Professor_UsuarioID_fkey" FOREIGN KEY ("UsuarioID") REFERENCES "Usuario"("UsuarioID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Funcionario" ADD CONSTRAINT "Funcionario_UsuarioID_fkey" FOREIGN KEY ("UsuarioID") REFERENCES "Usuario"("UsuarioID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Presenca" ADD CONSTRAINT "Presenca_ProfessorID_fkey" FOREIGN KEY ("ProfessorID") REFERENCES "Professor"("ProfessorID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Efetividade" ADD CONSTRAINT "Efetividade_ProfessorID_fkey" FOREIGN KEY ("ProfessorID") REFERENCES "Professor"("ProfessorID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioPermissao" ADD CONSTRAINT "UsuarioPermissao_UsuarioID_fkey" FOREIGN KEY ("UsuarioID") REFERENCES "Usuario"("UsuarioID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioPermissao" ADD CONSTRAINT "UsuarioPermissao_PermissaoID_fkey" FOREIGN KEY ("PermissaoID") REFERENCES "Permissao"("PermissaoID") ON DELETE CASCADE ON UPDATE CASCADE;
