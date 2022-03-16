BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Department] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Department_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Department_pkey] PRIMARY KEY ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Employee] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Employee_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [phoneNumber] NVARCHAR(1000) NOT NULL,
    [password] NVARCHAR(1000) NOT NULL,
    [status] NVARCHAR(1000) NOT NULL,
    [leaderId] INT,
    [departmentId] INT NOT NULL,
    CONSTRAINT [Employee_pkey] PRIMARY KEY ([id]),
    CONSTRAINT [Employee_email_key] UNIQUE ([email]),
    CONSTRAINT [Employee_phoneNumber_key] UNIQUE ([phoneNumber])
);

-- CreateTable
CREATE TABLE [dbo].[Role] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Role_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [role] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Role_pkey] PRIMARY KEY ([id])
);

-- CreateTable
CREATE TABLE [dbo].[EmployeeRole] (
    [employeeId] INT NOT NULL,
    [roleId] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [EmployeeRole_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [EmployeeRole_pkey] PRIMARY KEY ([roleId],[employeeId])
);

-- CreateTable
CREATE TABLE [dbo].[Campaign] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Campaign_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    [campaignStatusId] INT NOT NULL,
    [parentId] INT,
    CONSTRAINT [Campaign_pkey] PRIMARY KEY ([id]),
    CONSTRAINT [Campaign_parentId_key] UNIQUE ([parentId])
);

-- CreateTable
CREATE TABLE [dbo].[Task] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Task_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000),
    CONSTRAINT [Task_pkey] PRIMARY KEY ([id])
);

-- CreateTable
CREATE TABLE [dbo].[CampaignTask] (
    [campaignId] INT NOT NULL,
    [taskId] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [CampaignTask_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [CampaignTask_pkey] PRIMARY KEY ([campaignId],[taskId])
);

-- CreateTable
CREATE TABLE [dbo].[Product] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Product_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000),
    CONSTRAINT [Product_pkey] PRIMARY KEY ([id])
);

-- CreateTable
CREATE TABLE [dbo].[ProductTask] (
    [productId] INT NOT NULL,
    [taskId] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [ProductTask_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [ProductTask_pkey] PRIMARY KEY ([productId],[taskId])
);

-- CreateTable
CREATE TABLE [dbo].[CampaignStatus] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [CampaignStatus_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [status] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [CampaignStatus_pkey] PRIMARY KEY ([id])
);

-- CreateTable
CREATE TABLE [dbo].[CampaignRole] (
    [campaignId] INT NOT NULL,
    [roleId] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [CampaignRole_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [CampaignRole_pkey] PRIMARY KEY ([roleId],[campaignId])
);

-- CreateTable
CREATE TABLE [dbo].[Customer] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [phoneNumber] NVARCHAR(1000) NOT NULL,
    [dob] DATETIME2 NOT NULL,
    [gender] NVARCHAR(1000) NOT NULL,
    [address] NVARCHAR(1000),
    [customerContactId] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Customer_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Customer_pkey] PRIMARY KEY ([id]),
    CONSTRAINT [Customer_email_key] UNIQUE ([email]),
    CONSTRAINT [Customer_phoneNumber_key] UNIQUE ([phoneNumber])
);

-- CreateTable
CREATE TABLE [dbo].[CustomerCampaign] (
    [customerId] INT NOT NULL,
    [campaignId] INT NOT NULL,
    CONSTRAINT [CustomerCampaign_pkey] PRIMARY KEY ([customerId],[campaignId])
);

-- CreateTable
CREATE TABLE [dbo].[Problem] (
    [id] INT NOT NULL IDENTITY(1,1),
    [description] NVARCHAR(1000),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Problem_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [note] NVARCHAR(1000),
    [customerId] INT NOT NULL,
    [employeeId] INT NOT NULL,
    CONSTRAINT [Problem_pkey] PRIMARY KEY ([id])
);

-- CreateTable
CREATE TABLE [dbo].[CustomerContact] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [CustomerContact_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [status] NVARCHAR(1000) NOT NULL,
    [ref] NVARCHAR(1000),
    CONSTRAINT [CustomerContact_pkey] PRIMARY KEY ([id])
);

-- CreateTable
CREATE TABLE [dbo].[EmailSent] (
    [id] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [EmailSent_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [content] NVARCHAR(1000) NOT NULL,
    [customerId] INT NOT NULL,
    [employeeId] INT NOT NULL,
    CONSTRAINT [EmailSent_pkey] PRIMARY KEY ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Employee] ADD CONSTRAINT [Employee_departmentId_fkey] FOREIGN KEY ([departmentId]) REFERENCES [dbo].[Department]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Employee] ADD CONSTRAINT [Employee_leaderId_fkey] FOREIGN KEY ([leaderId]) REFERENCES [dbo].[Employee]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[EmployeeRole] ADD CONSTRAINT [EmployeeRole_employeeId_fkey] FOREIGN KEY ([employeeId]) REFERENCES [dbo].[Employee]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[EmployeeRole] ADD CONSTRAINT [EmployeeRole_roleId_fkey] FOREIGN KEY ([roleId]) REFERENCES [dbo].[Role]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Campaign] ADD CONSTRAINT [Campaign_parentId_fkey] FOREIGN KEY ([parentId]) REFERENCES [dbo].[Campaign]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Campaign] ADD CONSTRAINT [Campaign_campaignStatusId_fkey] FOREIGN KEY ([campaignStatusId]) REFERENCES [dbo].[CampaignStatus]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[CampaignTask] ADD CONSTRAINT [CampaignTask_campaignId_fkey] FOREIGN KEY ([campaignId]) REFERENCES [dbo].[Campaign]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[CampaignTask] ADD CONSTRAINT [CampaignTask_taskId_fkey] FOREIGN KEY ([taskId]) REFERENCES [dbo].[Task]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[ProductTask] ADD CONSTRAINT [ProductTask_taskId_fkey] FOREIGN KEY ([taskId]) REFERENCES [dbo].[Task]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[ProductTask] ADD CONSTRAINT [ProductTask_productId_fkey] FOREIGN KEY ([productId]) REFERENCES [dbo].[Product]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[CampaignRole] ADD CONSTRAINT [CampaignRole_roleId_fkey] FOREIGN KEY ([roleId]) REFERENCES [dbo].[Role]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[CampaignRole] ADD CONSTRAINT [CampaignRole_campaignId_fkey] FOREIGN KEY ([campaignId]) REFERENCES [dbo].[Campaign]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Customer] ADD CONSTRAINT [Customer_customerContactId_fkey] FOREIGN KEY ([customerContactId]) REFERENCES [dbo].[CustomerContact]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[CustomerCampaign] ADD CONSTRAINT [CustomerCampaign_campaignId_fkey] FOREIGN KEY ([campaignId]) REFERENCES [dbo].[Campaign]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[CustomerCampaign] ADD CONSTRAINT [CustomerCampaign_customerId_fkey] FOREIGN KEY ([customerId]) REFERENCES [dbo].[Customer]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Problem] ADD CONSTRAINT [Problem_employeeId_fkey] FOREIGN KEY ([employeeId]) REFERENCES [dbo].[Employee]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Problem] ADD CONSTRAINT [Problem_customerId_fkey] FOREIGN KEY ([customerId]) REFERENCES [dbo].[Customer]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[EmailSent] ADD CONSTRAINT [EmailSent_employeeId_fkey] FOREIGN KEY ([employeeId]) REFERENCES [dbo].[Employee]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[EmailSent] ADD CONSTRAINT [EmailSent_customerId_fkey] FOREIGN KEY ([customerId]) REFERENCES [dbo].[Customer]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
