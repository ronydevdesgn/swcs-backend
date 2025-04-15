/*
  Warnings:

  - You are about to drop the column `ProfessorID` on the `usuario` table. All the data in the column will be lost.
  - The values [SUMARISTA] on the enum `Usuario_Tipo` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[UsuarioID]` on the table `Professor` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Usuario_ProfessorID_idx` ON `usuario`;

-- DropIndex
DROP INDEX `Usuario_ProfessorID_key` ON `usuario`;

-- DropIndex
DROP INDEX `UsuarioPermissao_PermissaoID_fkey` ON `usuariopermissao`;

-- AlterTable
ALTER TABLE `professor` ADD COLUMN `UsuarioID` INTEGER NULL;

-- AlterTable
ALTER TABLE `usuario` DROP COLUMN `ProfessorID`,
    MODIFY `Email` VARCHAR(255) NOT NULL,
    MODIFY `SenhaHash` VARCHAR(255) NOT NULL,
    MODIFY `Tipo` ENUM('FUNCIONARIO', 'PROFESSOR') NOT NULL;

-- CreateTable
CREATE TABLE `Funcionario` (
    `FuncionarioID` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(100) NOT NULL,
    `Email` VARCHAR(255) NOT NULL,
    `Cargo` VARCHAR(100) NOT NULL,
    `UsuarioID` INTEGER NULL,

    UNIQUE INDEX `Funcionario_Email_key`(`Email`),
    UNIQUE INDEX `Funcionario_UsuarioID_key`(`UsuarioID`),
    PRIMARY KEY (`FuncionarioID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Professor_UsuarioID_key` ON `Professor`(`UsuarioID`);

-- AddForeignKey
ALTER TABLE `Professor` ADD CONSTRAINT `Professor_UsuarioID_fkey` FOREIGN KEY (`UsuarioID`) REFERENCES `Usuario`(`UsuarioID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Funcionario` ADD CONSTRAINT `Funcionario_UsuarioID_fkey` FOREIGN KEY (`UsuarioID`) REFERENCES `Usuario`(`UsuarioID`) ON DELETE SET NULL ON UPDATE CASCADE;

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
