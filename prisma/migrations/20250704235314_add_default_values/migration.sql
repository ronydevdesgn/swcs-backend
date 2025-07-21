/*
  Warnings:

  - You are about to drop the column `ProfessorID` on the `curso` table. All the data in the column will be lost.
  - You are about to alter the column `Cargo` on the `funcionario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `Enum(EnumId(1))`.
  - You are about to alter the column `Departamento` on the `professor` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `Enum(EnumId(0))`.
*/
-- DropIndex
DROP INDEX `Curso_ProfessorID_idx` ON `curso`;

-- DropIndex
DROP INDEX `UsuarioPermissao_PermissaoID_fkey` ON `usuariopermissao`;

-- AlterTable
ALTER TABLE `curso` DROP COLUMN `ProfessorID`,
    ADD COLUMN `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `UpdatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `efetividade` ADD COLUMN `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `CursoID` INTEGER NOT NULL DEFAULT 1,
    ADD COLUMN `UpdatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `funcionario` ADD COLUMN `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `UpdatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `Cargo` ENUM('SUMARISTA', 'SECRETARIO', 'ADMINISTRATIVO', 'OUTROS') NOT NULL;

-- AlterTable
ALTER TABLE `presenca` ADD COLUMN `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `CursoID` INTEGER NOT NULL DEFAULT 1,
    ADD COLUMN `UpdatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `professor` ADD COLUMN `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `UpdatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `Departamento` ENUM('INFORMATICA', 'OUTROS') NOT NULL;

-- AlterTable
ALTER TABLE `sumario` ADD COLUMN `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `UpdatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `usuario` ADD COLUMN `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `UpdatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `SenhaHash` VARCHAR(255) NOT NULL;

-- CreateTable
CREATE TABLE `ProfessorCurso` (
    `ProfessorID` INTEGER NOT NULL,
    `CursoID` INTEGER NOT NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `ProfessorCurso_ProfessorID_idx`(`ProfessorID`),
    INDEX `ProfessorCurso_CursoID_idx`(`CursoID`),
    PRIMARY KEY (`ProfessorID`, `CursoID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Efetividade_CursoID_idx` ON `Efetividade`(`CursoID`);

-- CreateIndex
CREATE INDEX `Efetividade_Data_idx` ON `Efetividade`(`Data`);

-- CreateIndex
CREATE INDEX `Presenca_CursoID_idx` ON `Presenca`(`CursoID`);

-- CreateIndex
CREATE INDEX `Presenca_Data_idx` ON `Presenca`(`Data`);

-- CreateIndex
CREATE INDEX `Sumario_Data_idx` ON `Sumario`(`Data`);

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
