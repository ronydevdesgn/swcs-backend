-- DropIndex
DROP INDEX `UsuarioPermissao_PermissaoID_fkey` ON `usuariopermissao`;

-- CreateIndex
CREATE INDEX `Curso_Nome_idx` ON `Curso`(`Nome`);

-- CreateIndex
CREATE INDEX `Efetividade_Data_ProfessorID_idx` ON `Efetividade`(`Data`, `ProfessorID`);

-- CreateIndex
CREATE INDEX `Funcionario_Cargo_idx` ON `Funcionario`(`Cargo`);

-- CreateIndex
CREATE INDEX `Funcionario_Nome_idx` ON `Funcionario`(`Nome`);

-- CreateIndex
CREATE INDEX `PasswordReset_ExpiresAt_idx` ON `PasswordReset`(`ExpiresAt`);

-- CreateIndex
CREATE INDEX `PasswordReset_Token_Used_idx` ON `PasswordReset`(`Token`, `Used`);

-- CreateIndex
CREATE INDEX `Permissao_Descricao_idx` ON `Permissao`(`Descricao`);

-- CreateIndex
CREATE INDEX `Presenca_Data_ProfessorID_idx` ON `Presenca`(`Data`, `ProfessorID`);

-- CreateIndex
CREATE INDEX `Presenca_Estado_idx` ON `Presenca`(`Estado`);

-- CreateIndex
CREATE INDEX `Professor_Departamento_idx` ON `Professor`(`Departamento`);

-- CreateIndex
CREATE INDEX `Professor_Nome_idx` ON `Professor`(`Nome`);

-- CreateIndex
CREATE INDEX `RefreshToken_ExpiresAt_idx` ON `RefreshToken`(`ExpiresAt`);

-- CreateIndex
CREATE INDEX `Sumario_Data_CursoID_idx` ON `Sumario`(`Data`, `CursoID`);

-- CreateIndex
CREATE INDEX `Usuario_Tipo_idx` ON `Usuario`(`Tipo`);

-- CreateIndex
CREATE INDEX `Usuario_Nome_idx` ON `Usuario`(`Nome`);

-- AddForeignKey
ALTER TABLE `RefreshToken` ADD CONSTRAINT `RefreshToken_UsuarioID_fkey` FOREIGN KEY (`UsuarioID`) REFERENCES `Usuario`(`UsuarioID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PasswordReset` ADD CONSTRAINT `PasswordReset_UsuarioID_fkey` FOREIGN KEY (`UsuarioID`) REFERENCES `Usuario`(`UsuarioID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Professor` ADD CONSTRAINT `Professor_UsuarioID_fkey` FOREIGN KEY (`UsuarioID`) REFERENCES `Usuario`(`UsuarioID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Funcionario` ADD CONSTRAINT `Funcionario_UsuarioID_fkey` FOREIGN KEY (`UsuarioID`) REFERENCES `Usuario`(`UsuarioID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sumario` ADD CONSTRAINT `Sumario_CursoID_fkey` FOREIGN KEY (`CursoID`) REFERENCES `Curso`(`CursoID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sumario` ADD CONSTRAINT `Sumario_ProfessorID_fkey` FOREIGN KEY (`ProfessorID`) REFERENCES `Professor`(`ProfessorID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProfessorCurso` ADD CONSTRAINT `ProfessorCurso_ProfessorID_fkey` FOREIGN KEY (`ProfessorID`) REFERENCES `Professor`(`ProfessorID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProfessorCurso` ADD CONSTRAINT `ProfessorCurso_CursoID_fkey` FOREIGN KEY (`CursoID`) REFERENCES `Curso`(`CursoID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Presenca` ADD CONSTRAINT `Presenca_ProfessorID_fkey` FOREIGN KEY (`ProfessorID`) REFERENCES `Professor`(`ProfessorID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Presenca` ADD CONSTRAINT `Presenca_CursoID_fkey` FOREIGN KEY (`CursoID`) REFERENCES `Curso`(`CursoID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Efetividade` ADD CONSTRAINT `Efetividade_ProfessorID_fkey` FOREIGN KEY (`ProfessorID`) REFERENCES `Professor`(`ProfessorID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Efetividade` ADD CONSTRAINT `Efetividade_CursoID_fkey` FOREIGN KEY (`CursoID`) REFERENCES `Curso`(`CursoID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsuarioPermissao` ADD CONSTRAINT `UsuarioPermissao_UsuarioID_fkey` FOREIGN KEY (`UsuarioID`) REFERENCES `Usuario`(`UsuarioID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsuarioPermissao` ADD CONSTRAINT `UsuarioPermissao_PermissaoID_fkey` FOREIGN KEY (`PermissaoID`) REFERENCES `Permissao`(`PermissaoID`) ON DELETE RESTRICT ON UPDATE CASCADE;
