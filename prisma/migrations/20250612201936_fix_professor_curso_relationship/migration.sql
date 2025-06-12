-- DropIndex
DROP INDEX `UsuarioPermissao_PermissaoID_fkey` ON `usuariopermissao`;

-- AddForeignKey
ALTER TABLE `RefreshToken` ADD CONSTRAINT `RefreshToken_UsuarioID_fkey` FOREIGN KEY (`UsuarioID`) REFERENCES `Usuario`(`UsuarioID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PasswordReset` ADD CONSTRAINT `PasswordReset_UsuarioID_fkey` FOREIGN KEY (`UsuarioID`) REFERENCES `Usuario`(`UsuarioID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Professor` ADD CONSTRAINT `Professor_UsuarioID_fkey` FOREIGN KEY (`UsuarioID`) REFERENCES `Usuario`(`UsuarioID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Funcionario` ADD CONSTRAINT `Funcionario_UsuarioID_fkey` FOREIGN KEY (`UsuarioID`) REFERENCES `Usuario`(`UsuarioID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Curso` ADD CONSTRAINT `Curso_ProfessorID_fkey` FOREIGN KEY (`ProfessorID`) REFERENCES `Professor`(`ProfessorID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sumario` ADD CONSTRAINT `Sumario_CursoID_fkey` FOREIGN KEY (`CursoID`) REFERENCES `Curso`(`CursoID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sumario` ADD CONSTRAINT `Sumario_ProfessorID_fkey` FOREIGN KEY (`ProfessorID`) REFERENCES `Professor`(`ProfessorID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Presenca` ADD CONSTRAINT `Presenca_ProfessorID_fkey` FOREIGN KEY (`ProfessorID`) REFERENCES `Professor`(`ProfessorID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Efetividade` ADD CONSTRAINT `Efetividade_ProfessorID_fkey` FOREIGN KEY (`ProfessorID`) REFERENCES `Professor`(`ProfessorID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsuarioPermissao` ADD CONSTRAINT `UsuarioPermissao_UsuarioID_fkey` FOREIGN KEY (`UsuarioID`) REFERENCES `Usuario`(`UsuarioID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsuarioPermissao` ADD CONSTRAINT `UsuarioPermissao_PermissaoID_fkey` FOREIGN KEY (`PermissaoID`) REFERENCES `Permissao`(`PermissaoID`) ON DELETE RESTRICT ON UPDATE CASCADE;
