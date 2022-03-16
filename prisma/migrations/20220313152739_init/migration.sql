/*
  Warnings:

  - You are about to drop the column `parentId` on the `Campaign` table. All the data in the column will be lost.
  - Added the required column `isDone` to the `CampaignTask` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Campaign] DROP CONSTRAINT [Campaign_parentId_fkey];

-- DropIndex
ALTER TABLE [dbo].[Campaign] DROP CONSTRAINT [Campaign_parentId_key];

-- AlterTable
ALTER TABLE [dbo].[Campaign] DROP COLUMN [parentId];
ALTER TABLE [dbo].[Campaign] ADD [linkImg] NVARCHAR(1000);

-- AlterTable
ALTER TABLE [dbo].[CampaignTask] ADD [isDone] BIT NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[Product] ADD [linkImg] NVARCHAR(1000);

-- CreateTable
CREATE TABLE [dbo].[sysdiagrams] (
    [name] NVARCHAR(128) NOT NULL,
    [principal_id] INT NOT NULL,
    [diagram_id] INT NOT NULL IDENTITY(1,1),
    [version] INT,
    [definition] VARBINARY(max),
    CONSTRAINT [PK__sysdiagr__C2B05B61D082E769] PRIMARY KEY ([diagram_id]),
    CONSTRAINT [UK_principal_name] UNIQUE ([principal_id],[name])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
