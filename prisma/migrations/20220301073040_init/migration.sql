/*
  Warnings:

  - You are about to drop the column `status` on the `CustomerContact` table. All the data in the column will be lost.
  - Added the required column `status` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Employee] DROP CONSTRAINT [Employee_departmentId_fkey];

-- AlterTable
ALTER TABLE [dbo].[Campaign] ALTER COLUMN [description] NVARCHAR(1000) NULL;

-- AlterTable
ALTER TABLE [dbo].[Customer] ADD [status] NVARCHAR(1000) NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[CustomerContact] DROP COLUMN [status];

-- AlterTable
ALTER TABLE [dbo].[Employee] ALTER COLUMN [status] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[Employee] ALTER COLUMN [departmentId] INT NULL;
ALTER TABLE [dbo].[Employee] ADD CONSTRAINT [Employee_status_df] DEFAULT 'active' FOR [status];

-- AddForeignKey
ALTER TABLE [dbo].[Employee] ADD CONSTRAINT [Employee_departmentId_fkey] FOREIGN KEY ([departmentId]) REFERENCES [dbo].[Department]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
