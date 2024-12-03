-- CreateTable
CREATE TABLE "Pdf" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "delete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Pdf_pkey" PRIMARY KEY ("id")
);
