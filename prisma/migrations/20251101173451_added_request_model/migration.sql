-- CreateTable
CREATE TABLE "requests" (
    "id" SERIAL NOT NULL,
    "patient_name" TEXT NOT NULL,
    "contact_number" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "hospital" TEXT NOT NULL,
    "blood_group" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "requests_pkey" PRIMARY KEY ("id")
);
