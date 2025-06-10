-- DropIndex
DROP INDEX `UsuarioPermissao_PermissaoID_fkey` ON `usuariopermissao`;

-- CreateTable
CREATE TABLE `RefreshToken` (
    `TokenID` INTEGER NOT NULL AUTO_INCREMENT,
    `token` VARCHAR(191) NOT NULL,
    `UsuarioID` INTEGER NOT NULL,
    `ExpiresAt` DATETIME(3) NOT NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `RefreshToken_token_key`(`token`),
    INDEX `RefreshToken_UsuarioID_idx`(`UsuarioID`),
    PRIMARY KEY (`TokenID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PasswordReset` (
    `PasswordResetID` INTEGER NOT NULL AUTO_INCREMENT,
    `Token` VARCHAR(191) NOT NULL,
    `UsuarioID` INTEGER NOT NULL,
    `ExpiresAt` DATETIME(3) NOT NULL,
    `Used` BOOLEAN NOT NULL DEFAULT false,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `PasswordReset_Token_key`(`Token`),
    INDEX `PasswordReset_UsuarioID_idx`(`UsuarioID`),
    PRIMARY KEY (`PasswordResetID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RefreshToken` ADD CONSTRAINT `RefreshToken_UsuarioID_fkey` FOREIGN KEY (`UsuarioID`) REFERENCES `Usuario`(`UsuarioID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PasswordReset` ADD CONSTRAINT `PasswordReset_UsuarioID_fkey` FOREIGN KEY (`UsuarioID`) REFERENCES `Usuario`(`UsuarioID`) ON DELETE CASCADE ON UPDATE CASCADE;

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
