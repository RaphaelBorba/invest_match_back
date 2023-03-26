CREATE TABLE companies (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	"image_url" TEXT NOT NULL,
	CONSTRAINT "companies_pk" PRIMARY KEY ("id")
);



CREATE TABLE investors (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	"image_url" TEXT NOT NULL,
	CONSTRAINT "investors_pk" PRIMARY KEY ("id")
);



CREATE TABLE projects (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	"image_url" TEXT NOT NULL,
	"amount" FLOAT NOT NULL,
	"type_id" integer NOT NULL,
	"company_id" integer NOT NULL,
	CONSTRAINT "projects_pk" PRIMARY KEY ("id")
);



CREATE TABLE type_projects (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	CONSTRAINT "type_projects_pk" PRIMARY KEY ("id")
);



CREATE TABLE investments (
	"id" serial NOT NULL,
	"investor_id" integer NOT NULL,
	"project_id" integer NOT NULL,
	"amount" FLOAT NOT NULL,
	CONSTRAINT "investments_pk" PRIMARY KEY ("id")
);





ALTER TABLE "projects" ADD CONSTRAINT "projects_fk0" FOREIGN KEY ("type_id") REFERENCES "type_projects"("id");
ALTER TABLE "projects" ADD CONSTRAINT "projects_fk1" FOREIGN KEY ("company_id") REFERENCES "companies"("id");


ALTER TABLE "investments" ADD CONSTRAINT "investments_fk0" FOREIGN KEY ("investor_id") REFERENCES "investors"("id");
ALTER TABLE "investments" ADD CONSTRAINT "investments_fk1" FOREIGN KEY ("project_id") REFERENCES "projects"("id");





