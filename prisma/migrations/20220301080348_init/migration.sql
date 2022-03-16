/*
  Warnings:

  - You are about to drop the column `leaderId` on the `Employee` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Employee] DROP CONSTRAINT [Employee_leaderId_fkey];

-- AlterTable
ALTER TABLE [dbo].[Employee] DROP COLUMN [leaderId];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
